/* ============================================================
   GP Paraphrase Trainer
   All scoring happens locally in the browser — no API key,
   no server, no network request. Safe to host as a static
   site on GitHub Pages.
   ============================================================ */

const STORAGE_KEY = "gp-paraphrase-stats-v1";

const state = {
  pool: [],          // words filtered by chosen difficulty
  usedIndices: [],    // indices already shown this cycle (avoids repeats)
  current: null,
  answered: false
};

const els = {
  difficultySelect: document.getElementById("difficulty-select"),
  skipBtn: document.getElementById("skip-btn"),
  difficultyTag: document.getElementById("difficulty-tag"),
  targetWord: document.getElementById("target-word"),
  contextBox: document.getElementById("context-box"),
  answerInput: document.getElementById("answer-input"),
  submitBtn: document.getElementById("submit-btn"),
  feedback: document.getElementById("feedback"),
  scoreNum: document.getElementById("score-num"),
  scoreBand: document.getElementById("score-band"),
  feedbackMsg: document.getElementById("feedback-msg"),
  modelList: document.getElementById("model-list"),
  modelTip: document.getElementById("model-tip"),
  nextBtn: document.getElementById("next-btn"),
  statAttempts: document.getElementById("stat-attempts"),
  statAvg: document.getElementById("stat-avg"),
  statStreak: document.getElementById("stat-streak"),
  resetStatsBtn: document.getElementById("reset-stats-btn")
};

/* ---------------- Levenshtein distance (for near-spelling matches) ---------------- */

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  if (m === 0) return n;
  if (n === 0) return m;
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) dp[i][0] = i;
  for (let j = 0; j <= n; j++) dp[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + cost
      );
    }
  }
  return dp[m][n];
}

function similarity(a, b) {
  const dist = levenshtein(a, b);
  const maxLen = Math.max(a.length, b.length) || 1;
  return 1 - dist / maxLen;
}

/* ---------------- Helpers ---------------- */

function normalize(str) {
  return str.toLowerCase().trim().replace(/[^a-z\s-]/g, "");
}

function tokenize(str) {
  return normalize(str).split(/\s+/).filter(Boolean);
}

// crude shared-root check: same first 4 letters (or 60% of shorter word)
// catches "widespread" vs "widespreadness" style reuse of the target word.
function sharesRoot(word, target) {
  const w = normalize(word);
  const t = normalize(target);
  if (!w || !t) return false;
  const len = Math.min(4, Math.min(w.length, t.length) - 1);
  if (len < 3) return w === t;
  return w.slice(0, len) === t.slice(0, len);
}

function inputReusesTargetWord(input, target) {
  const tokens = tokenize(input);
  return tokens.some(tok => sharesRoot(tok, target));
}

/* ---------------- Scoring engine ---------------- */
/*
  Returns { score: 0-100, band: 'excellent'|'good'|'fair'|'poor', reason }
  Strategy:
  1. If the answer reuses the target word's root -> capped low score.
  2. Compare against every accepted synonym/phrase:
     - exact match (case-insensitive)      -> 100
     - close spelling variant (Levenshtein) -> 90
     - multi-word accepted phrase: score by
       proportion of its significant words present in the input
  3. Take the best score across all accepted answers.
*/
function scoreAnswer(rawInput, entry) {
  const input = normalize(rawInput);
  if (!input) {
    return { score: 0, band: "poor", reason: "No answer given." };
  }

  if (inputReusesTargetWord(input, entry.word)) {
    return {
      score: 12,
      band: "poor",
      reason: "That's still the original word (or its root) — a paraphrase needs a genuinely different word."
    };
  }

  let best = 0;
  for (const syn of entry.synonyms) {
    const synNorm = normalize(syn);
    if (input === synNorm) {
      best = Math.max(best, 100);
      continue;
    }

    // single-word accepted answer: try fuzzy spelling match
    const synTokens = synNorm.split(/\s+/).filter(Boolean);
    if (synTokens.length === 1) {
      const sim = similarity(input.replace(/\s+/g, ""), synTokens[0]);
      if (sim >= 0.84) best = Math.max(best, 90);
      else if (sim >= 0.65) best = Math.max(best, 55);
      continue;
    }

    // multi-word accepted phrase: proportion of its words present in input
    const inputTokens = tokenize(rawInput);
    const matchedWords = synTokens.filter(sw =>
      inputTokens.some(iw => similarity(iw, sw) >= 0.84)
    );
    const proportion = matchedWords.length / synTokens.length;
    if (proportion === 1) best = Math.max(best, 95);
    else if (proportion >= 0.5) best = Math.max(best, 60 * proportion + 20);
  }

  let band, reason;
  if (best >= 85) {
    band = "excellent";
    reason = "Strong paraphrase — precise and natural.";
  } else if (best >= 65) {
    band = "good";
    reason = "Good — close in meaning, though not the closest fit.";
  } else if (best >= 40) {
    band = "fair";
    reason = "In the right area, but the meaning has drifted a bit.";
  } else {
    band = "poor";
    reason = "Not quite matching the meaning in this context. Check the model answers below.";
  }

  return { score: Math.round(best), band, reason };
}

/* ---------------- Stats persistence ---------------- */

function loadStats() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { attempts: 0, totalScore: 0, streak: 0, bestStreak: 0 };
    return JSON.parse(raw);
  } catch {
    return { attempts: 0, totalScore: 0, streak: 0, bestStreak: 0 };
  }
}

function saveStats(stats) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
  } catch {
    /* localStorage unavailable — stats just won't persist */
  }
}

function renderStats() {
  const s = loadStats();
  const avg = s.attempts ? Math.round(s.totalScore / s.attempts) : 0;
  els.statAttempts.textContent = s.attempts;
  els.statAvg.textContent = avg;
  els.statStreak.textContent = s.streak;
}

function recordAttempt(score, band) {
  const s = loadStats();
  s.attempts += 1;
  s.totalScore += score;
  if (band === "excellent" || band === "good") {
    s.streak += 1;
    s.bestStreak = Math.max(s.bestStreak, s.streak);
  } else {
    s.streak = 0;
  }
  saveStats(s);
  renderStats();
}

/* ---------------- Word cycling ---------------- */

function buildPool() {
  const chosen = els.difficultySelect.value;
  state.pool = WORD_BANK
    .map((entry, i) => ({ entry, i }))
    .filter(({ entry }) => chosen === "all" || entry.difficulty === chosen);
  state.usedIndices = [];
}

function pickNextWord() {
  if (state.pool.length === 0) buildPool();
  if (state.usedIndices.length >= state.pool.length) state.usedIndices = [];

  let choice;
  do {
    choice = state.pool[Math.floor(Math.random() * state.pool.length)];
  } while (state.usedIndices.includes(choice.i) && state.pool.length > 1);

  state.usedIndices.push(choice.i);
  state.current = choice.entry;
  renderWord();
}

function renderWord() {
  const entry = state.current;
  state.answered = false;

  els.difficultyTag.textContent = entry.difficulty;
  els.difficultyTag.className = "difficulty-tag " + entry.difficulty;
  els.targetWord.textContent = entry.word;

  const html = entry.context.replace(
    /\*\*(.+?)\*\*/,
    (_, w) => `<mark>${w}</mark>`
  );
  els.contextBox.innerHTML = html;

  els.answerInput.value = "";
  els.answerInput.disabled = false;
  els.submitBtn.disabled = false;
  els.feedback.classList.remove("show");
  els.answerInput.focus();
}

/* ---------------- Submit / feedback ---------------- */

function submitAnswer() {
  if (state.answered) return;
  const entry = state.current;
  const raw = els.answerInput.value;
  if (!raw.trim()) {
    els.answerInput.focus();
    return;
  }

  const result = scoreAnswer(raw, entry);
  state.answered = true;
  els.answerInput.disabled = true;
  els.submitBtn.disabled = true;

  els.scoreNum.textContent = result.score;
  els.scoreNum.className = "score-num " + result.band;
  els.scoreBand.textContent = bandLabel(result.band);
  els.feedbackMsg.textContent = result.reason;

  els.modelList.innerHTML = entry.synonyms
    .map(s => `<span class="pill">${s}</span>`)
    .join("");
  els.modelTip.textContent = entry.tip || "";

  els.feedback.classList.add("show");
  recordAttempt(result.score, result.band);
}

function bandLabel(band) {
  return { excellent: "Excellent", good: "Good", fair: "Fair", poor: "Try again" }[band] || "";
}

/* ---------------- Wiring ---------------- */

els.submitBtn.addEventListener("click", submitAnswer);
els.answerInput.addEventListener("keydown", e => {
  if (e.key === "Enter") submitAnswer();
});
els.nextBtn.addEventListener("click", pickNextWord);
els.skipBtn.addEventListener("click", pickNextWord);
els.difficultySelect.addEventListener("change", () => {
  buildPool();
  pickNextWord();
});
els.resetStatsBtn.addEventListener("click", () => {
  if (confirm("Reset your saved progress on this device?")) {
    saveStats({ attempts: 0, totalScore: 0, streak: 0, bestStreak: 0 });
    renderStats();
  }
});

buildPool();
pickNextWord();
renderStats();
