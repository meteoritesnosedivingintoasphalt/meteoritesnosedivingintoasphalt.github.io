# Paraphrase Trainer — A-Level GP Vocabulary

A small, static web app for practicing paraphrasing skills for the A-Level
General Paper (or any advanced-vocabulary essay subject). Shows a word in
context, takes a typed paraphrase, and scores it instantly — all in the
browser, no server or API key required.

## How it works

- `words.js` — the word bank: each entry has the target word, a context
  sentence, a difficulty level, a list of accepted paraphrases, and a short
  usage tip.
- `script.js` — picks a random word, scores the typed answer against the
  accepted list (exact match, near-spelling match via Levenshtein distance,
  and partial credit for multi-word phrases), saves running stats (attempts,
  average score, streak) and the list of missed words in the browser's
  `localStorage`, and handles retry mode.
- `style.css` — the chalkboard-styled interface.
- `index.html` — page structure.

No external API calls are made. Nothing is sent anywhere, so there's nothing
to keep secret and nothing that can hit a rate limit.

## Retry missed words

Any answer that scores below **Good** (i.e. "Fair" or "Try again") adds that
word to a missed list, saved in the browser. The **Retry missed (n)** button
switches to retry mode, which only serves words from that list:

- A word leaves the list as soon as it scores Good or better — in retry mode
  or in normal practice.
- A word answered badly again stays on the list.
- The difficulty filter is disabled while retrying; **Exit retry mode** goes
  back to the full word bank.
- When the last missed word is cleared, the app returns to normal practice.
- **Reset progress** clears both the stats and the missed list.

Missed words are matched by word + context sentence, so if you edit a word's
context sentence in `words.js`, any earlier "missed" record for that entry is
dropped.

## Run it locally

Just open `index.html` in a browser — it works as plain static files.

## Deploy to GitHub Pages

1. Create a new GitHub repo and push these files to it (e.g. to the `main`
   branch, at the repo root).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch",
   pick `main` and `/ (root)`, then save.
4. GitHub will give you a URL like
   `https://<your-username>.github.io/<repo-name>/` within a minute or two.

## Adding more words

Open `words.js` and add an object to the `WORD_BANK` array:

```js
{
  word: "candid",
  context: "The interview was praised for its **candid** answers.",
  difficulty: "easy", // "easy" | "medium" | "hard"
  synonyms: ["honest", "frank", "forthright", "open"],
  tip: "Implies openness even about uncomfortable truths."
}
```

Wrap the target word in the context sentence with `**double asterisks**` —
the app turns that into the highlighted word shown to the student. List every
paraphrase you're willing to accept in `synonyms` (single words or short
phrases both work); the scoring engine also tolerates minor spelling
variants automatically, so you don't need to list every misspelling.

Anything in `synonyms` is always accepted, even if it starts with the same
letters as the target word (for example `required` for `requisite`). Only the
target word itself, and near-copies of it that aren't in `synonyms`, are
treated as "reusing the original word".

## About the Merriam-Webster API

This build intentionally does **not** call the Merriam-Webster (or any
dictionary) API, because this is a static site meant for GitHub Pages: any
API key placed in client-side JavaScript is visible to anyone who views the
page source or the browser's network tab, and could be copied and abused,
burning through your quota or getting the key revoked.

If you want live dictionary lookups later (e.g. to check unusual student
answers against a real thesaurus, or to auto-generate new word bank entries),
the key needs to sit behind a small server that the browser talks to instead
of the dictionary API directly — for example a free serverless function
(Netlify Functions, Vercel, or Cloudflare Workers) that holds the key and
proxies requests. That's a separate, optional piece of infrastructure beyond
what GitHub Pages alone can host, so it's not included here — happy to add
it if you want to go that route.

## Ideas for extending this

- Add more words/contexts (there's no limit).
- Let students paraphrase a full sentence instead of a single word.
- Export/import stats as a file so progress can move between devices.
- Add a "explain your answer" field for teacher review.
