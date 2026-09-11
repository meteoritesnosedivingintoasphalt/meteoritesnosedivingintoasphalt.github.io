// WORD BANK
// Each entry: the target word, an A-level GP-style context sentence with the
// word in **bold** markers, a difficulty band, a list of accepted paraphrase
// answers (single words or short phrases), and a one-line usage tip shown
// after the student answers.
//
// Add your own entries anywhere in this array — the app picks them up
// automatically. Wrap the target word in the context sentence with ** **.

const WORD_BANK = [
  {
    word: "ubiquitous",
    context: "Smartphones have become **ubiquitous** in modern society, reshaping how people communicate and work.",
    difficulty: "medium",
    synonyms: ["omnipresent", "widespread", "pervasive", "everywhere", "all-pervading", "universal"],
    tip: "Describes something found everywhere, not just something common."
  },
  {
    word: "exacerbate",
    context: "Poor urban planning can **exacerbate** existing traffic congestion.",
    difficulty: "medium",
    synonyms: ["worsen", "aggravate", "intensify", "compound", "inflame", "heighten"],
    tip: "Only used for making a bad situation worse — not for improving something."
  },
  {
    word: "paradigm",
    context: "The rise of remote work represents a fundamental **paradigm** shift in employment.",
    difficulty: "hard",
    synonyms: ["model", "framework", "pattern", "template", "archetype", "worldview"],
    tip: "A paradigm is a whole way of thinking or a standard model, not a single idea."
  },
  {
    word: "dichotomy",
    context: "There is a stark **dichotomy** between the wealth of urban and rural regions.",
    difficulty: "hard",
    synonyms: ["divide", "division", "contrast", "split", "polarity", "gulf"],
    tip: "A dichotomy is a division into two sharply opposed groups or ideas."
  },
  {
    word: "ephemeral",
    context: "Viral internet trends are often **ephemeral**, forgotten within weeks.",
    difficulty: "medium",
    synonyms: ["fleeting", "transient", "short-lived", "momentary", "temporary", "passing"],
    tip: "Emphasises how briefly something lasts."
  },
  {
    word: "myriad",
    context: "Governments face a **myriad** of challenges when regulating artificial intelligence.",
    difficulty: "easy",
    synonyms: ["countless", "numerous", "multitude", "innumerable", "many", "host of"],
    tip: "Works as both a noun and adjective — 'a myriad of' or 'myriad challenges'."
  },
  {
    word: "pervasive",
    context: "Social media's influence on political discourse is now deeply **pervasive**.",
    difficulty: "medium",
    synonyms: ["widespread", "prevalent", "ubiquitous", "rife", "far-reaching", "endemic"],
    tip: "Suggests something spreading through every part of a system."
  },
  {
    word: "ostensibly",
    context: "The policy was **ostensibly** designed to protect consumers, though critics argue otherwise.",
    difficulty: "hard",
    synonyms: ["apparently", "seemingly", "supposedly", "on the surface", "outwardly", "purportedly"],
    tip: "Signals that appearances may not match reality — useful for GP argument nuance."
  },
  {
    word: "ameliorate",
    context: "Subsidies can **ameliorate** the financial burden on low-income families.",
    difficulty: "hard",
    synonyms: ["improve", "alleviate", "ease", "mitigate", "lessen", "remedy"],
    tip: "A more formal way of saying 'make a bad situation better'."
  },
  {
    word: "catalyst",
    context: "The 2008 financial crisis was a **catalyst** for sweeping banking reforms.",
    difficulty: "medium",
    synonyms: ["trigger", "spark", "impetus", "driver", "stimulus", "spur"],
    tip: "Something that causes a significant change or event to happen."
  },
  {
    word: "disparity",
    context: "The income **disparity** between top executives and average workers continues to widen.",
    difficulty: "medium",
    synonyms: ["gap", "inequality", "imbalance", "gulf", "discrepancy", "difference"],
    tip: "Usually used for an unfair or notable difference between two things."
  },
  {
    word: "inevitable",
    context: "As automation advances, job displacement in certain sectors seems **inevitable**.",
    difficulty: "easy",
    synonyms: ["unavoidable", "certain", "inescapable", "bound to happen", "unpreventable"],
    tip: "Something that cannot be prevented, regardless of effort."
  },
  {
    word: "corroborate",
    context: "Independent studies have **corroborated** the initial findings on climate change.",
    difficulty: "hard",
    synonyms: ["confirm", "support", "back up", "substantiate", "validate", "verify"],
    tip: "Formal word for backing up a claim with additional evidence."
  },
  {
    word: "discern",
    context: "It can be difficult to **discern** fact from misinformation online.",
    difficulty: "medium",
    synonyms: ["distinguish", "differentiate", "identify", "perceive", "make out", "recognise"],
    tip: "Implies careful judgement to tell two things apart."
  },
  {
    word: "empirical",
    context: "Policymakers should rely on **empirical** evidence rather than assumptions.",
    difficulty: "hard",
    synonyms: ["observed", "evidence-based", "experimental", "data-driven", "verifiable", "factual"],
    tip: "Based on observation or experiment, not theory alone."
  },
  {
    word: "facilitate",
    context: "Technology can **facilitate** collaboration between remote teams.",
    difficulty: "easy",
    synonyms: ["enable", "assist", "ease", "help", "support", "simplify"],
    tip: "To make a process easier, not to cause it directly."
  },
  {
    word: "hegemony",
    context: "Some scholars argue that Western media enjoys cultural **hegemony** globally.",
    difficulty: "hard",
    synonyms: ["dominance", "supremacy", "control", "predominance", "ascendancy"],
    tip: "Dominance of one group or nation over others, often unofficial."
  },
  {
    word: "imperative",
    context: "It is **imperative** that nations cooperate to tackle climate change.",
    difficulty: "medium",
    synonyms: ["essential", "crucial", "vital", "necessary", "critical", "pressing"],
    tip: "Something absolutely necessary — stronger than 'important'."
  },
  {
    word: "inherent",
    context: "There is an **inherent** risk in relying solely on renewable energy sources.",
    difficulty: "medium",
    synonyms: ["intrinsic", "built-in", "innate", "fundamental", "underlying", "natural"],
    tip: "A quality that is a permanent, natural part of something."
  },
  {
    word: "mitigate",
    context: "Governments have introduced carbon taxes to **mitigate** environmental damage.",
    difficulty: "medium",
    synonyms: ["reduce", "lessen", "alleviate", "ease", "curb", "soften"],
    tip: "To make something less severe, not to eliminate it entirely."
  },
  {
    word: "notion",
    context: "The **notion** that wealth guarantees happiness is widely disputed.",
    difficulty: "easy",
    synonyms: ["idea", "belief", "concept", "assumption", "view"],
    tip: "A neutral word for a belief or idea, often one open to debate."
  },
  {
    word: "paradoxically",
    context: "**Paradoxically**, stricter laws sometimes lead to more, not less, crime.",
    difficulty: "hard",
    synonyms: ["ironically", "contradictorily", "surprisingly", "counterintuitively"],
    tip: "Signals an outcome that seems to contradict expectation."
  },
  {
    word: "plausible",
    context: "It is **plausible** that automation will create new jobs even as it displaces others.",
    difficulty: "medium",
    synonyms: ["credible", "believable", "reasonable", "conceivable", "feasible"],
    tip: "Reasonable to believe, though not proven."
  },
  {
    word: "prevalent",
    context: "Cyberbullying has become increasingly **prevalent** among teenagers.",
    difficulty: "medium",
    synonyms: ["widespread", "common", "rampant", "pervasive", "rife"],
    tip: "Describes how common or frequent something is within a group."
  },
  {
    word: "reciprocal",
    context: "Effective diplomacy depends on **reciprocal** trust between nations.",
    difficulty: "hard",
    synonyms: ["mutual", "two-way", "shared", "corresponding"],
    tip: "Given and received in equal measure by both sides."
  },
  {
    word: "stagnant",
    context: "Wages in the sector have remained **stagnant** for over a decade.",
    difficulty: "medium",
    synonyms: ["unchanging", "static", "flat", "stalled", "motionless", "at a standstill"],
    tip: "Implies a lack of growth or movement over time."
  },
  {
    word: "tenuous",
    context: "The link between the two events is **tenuous** at best.",
    difficulty: "hard",
    synonyms: ["weak", "flimsy", "shaky", "unconvincing", "fragile", "thin"],
    tip: "A connection or argument that is weak and easily challenged."
  },
  {
    word: "undermine",
    context: "Corruption scandals can **undermine** public trust in institutions.",
    difficulty: "medium",
    synonyms: ["weaken", "erode", "damage", "compromise", "sabotage"],
    tip: "To gradually weaken something, often covertly."
  },
  {
    word: "volatile",
    context: "Cryptocurrency markets are notoriously **volatile**.",
    difficulty: "medium",
    synonyms: ["unstable", "unpredictable", "erratic", "fluctuating", "turbulent"],
    tip: "Prone to sudden, unpredictable change."
  },
  {
    word: "advocate",
    context: "Many economists **advocate** for a universal basic income.",
    difficulty: "easy",
    synonyms: ["support", "champion", "promote", "back", "endorse", "push for"],
    tip: "As a verb, means to publicly support a cause or policy."
  },
  {
    word: "coerce",
    context: "Authoritarian regimes often **coerce** citizens into silence through fear.",
    difficulty: "hard",
    synonyms: ["force", "compel", "pressure", "intimidate", "strong-arm"],
    tip: "Implies force or threat, not gentle persuasion."
  },
  {
    word: "deteriorate",
    context: "Without intervention, the patient's condition began to **deteriorate**.",
    difficulty: "easy",
    synonyms: ["worsen", "decline", "degrade", "regress", "decay"],
    tip: "To become progressively worse over time."
  },
  {
    word: "exemplify",
    context: "The rapid rise of TikTok **exemplifies** how quickly digital trends can spread.",
    difficulty: "medium",
    synonyms: ["illustrate", "demonstrate", "epitomise", "typify", "show"],
    tip: "To serve as a clear, typical example of something."
  },
  {
    word: "feasible",
    context: "Colonising Mars remains scientifically **feasible** but economically challenging.",
    difficulty: "easy",
    synonyms: ["viable", "achievable", "practicable", "possible", "workable"],
    tip: "Capable of being done, given current resources or knowledge."
  },
  {
    word: "fluctuate",
    context: "Oil prices **fluctuate** in response to geopolitical instability.",
    difficulty: "medium",
    synonyms: ["vary", "change", "waver", "oscillate", "swing"],
    tip: "To rise and fall irregularly, often repeatedly."
  },
  {
    word: "impede",
    context: "Bureaucratic red tape can **impede** the delivery of humanitarian aid.",
    difficulty: "medium",
    synonyms: ["hinder", "obstruct", "hamper", "block", "delay", "slow down"],
    tip: "To slow or block progress, not necessarily stop it entirely."
  },
  {
    word: "resilient",
    context: "Communities that rebuild quickly after disasters are often described as **resilient**.",
    difficulty: "easy",
    synonyms: ["tough", "adaptable", "hardy", "robust", "durable"],
    tip: "The ability to recover quickly from difficulty."
  },
  {
    word: "scrutinize",
    context: "Journalists should **scrutinize** government spending closely.",
    difficulty: "medium",
    synonyms: ["examine", "inspect", "investigate", "analyse", "probe"],
    tip: "To examine something closely and critically."
  },
  {
    word: "transparent",
    context: "Voters expect their governments to be **transparent** about policy decisions.",
    difficulty: "easy",
    synonyms: ["open", "candid", "clear", "accountable", "forthcoming"],
    tip: "Here used figuratively — open and honest, not literally see-through."
  },
  {
    word: "unprecedented",
    context: "The pandemic caused an **unprecedented** disruption to global supply chains.",
    difficulty: "medium",
    synonyms: ["unparalleled", "unmatched", "unheard-of", "novel", "record-breaking"],
    tip: "Something that has never happened or been seen before."
  },
  {
    word: "viable",
    context: "Solar power is becoming a more **viable** alternative to fossil fuels.",
    difficulty: "easy",
    synonyms: ["feasible", "workable", "practical", "sustainable", "realistic"],
    tip: "Capable of working successfully in practice."
  }
];
