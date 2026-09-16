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
  },
  {
    word: "dreary",
    context: "Critics dismissed the film's cinematography as **dreary**, arguing it failed to capture the vibrancy of the setting.",
    difficulty: "easy",
    synonyms: ["gloomy", "dismal", "bleak", "drab", "cheerless"],
    tip: "Describes something that lacks brightness or excitement, often used for mood or weather."
  },
  {
    word: "pragmatic",
    context: "Faced with a shrinking budget, the ministry adopted a more **pragmatic** approach to public housing.",
    difficulty: "medium",
    synonyms: ["practical", "realistic", "sensible", "down-to-earth", "matter-of-fact"],
    tip: "Emphasises practical results over ideals — useful for essays weighing policy trade-offs."
  },
  {
    word: "wondrous",
    context: "Visitors often describe their first glimpse of the aurora as a **wondrous** experience.",
    difficulty: "easy",
    synonyms: ["marvellous", "magnificent", "awe-inspiring", "spectacular", "astonishing"],
    tip: "A literary word for something that inspires wonder — less common in formal argumentative writing."
  },
  {
    word: "essentially",
    context: "Although marketed differently, the two policies are **essentially** the same in their economic effect.",
    difficulty: "easy",
    synonyms: ["fundamentally", "basically", "in essence", "at its core", "in substance"],
    tip: "Signals that you're stripping away surface differences to state the underlying truth."
  },
  {
    word: "develop",
    context: "Many coastal towns have **developed** into major tourist hubs over the past two decades.",
    difficulty: "easy",
    synonyms: ["grow", "evolve", "expand", "progress", "advance"],
    tip: "Can describe both physical growth and gradual change in ideas or systems."
  },
  {
    word: "window",
    context: "Analysts warn that the **window** for meaningful climate action is closing rapidly.",
    difficulty: "easy",
    synonyms: ["opportunity", "opening", "timeframe", "chance", "period"],
    tip: "Used figuratively here to mean a limited period during which something is possible."
  },
  {
    word: "opportunity",
    context: "Globalisation has created new **opportunities** for small businesses to reach international markets.",
    difficulty: "easy",
    synonyms: ["chance", "prospect", "opening", "possibility", "avenue"],
    tip: "A neutral, versatile word — pairs well with 'create', 'seize', or 'provide'."
  },
  {
    word: "exceptional",
    context: "The nation's **exceptional** economic growth over the past decade has drawn global attention.",
    difficulty: "medium",
    synonyms: ["outstanding", "remarkable", "extraordinary", "exemplary", "unparalleled"],
    tip: "Stronger than 'good' — reserve it for genuinely standout cases in your essays."
  },
  {
    word: "precursor",
    context: "Some historians view the printing press as a **precursor** to the information revolution of today.",
    difficulty: "hard",
    synonyms: ["forerunner", "predecessor", "harbinger", "antecedent", "herald"],
    tip: "Something that comes before and paves the way for a later development."
  },
  {
    word: "achievement",
    context: "Universal vaccination remains one of public health's most significant **achievements**.",
    difficulty: "easy",
    synonyms: ["accomplishment", "feat", "triumph", "milestone", "success"],
    tip: "Best used for a result gained through effort, not simply an event."
  },
  {
    word: "various",
    context: "Governments have adopted **various** strategies to curb the spread of misinformation online.",
    difficulty: "easy",
    synonyms: ["diverse", "assorted", "numerous", "a range of", "multiple"],
    tip: "A simple way to avoid repeating 'many' or 'different' in an essay."
  },
  {
    word: "children",
    context: "Prolonged screen exposure among **children** has raised concerns among educators and parents alike.",
    difficulty: "easy",
    synonyms: ["kids", "youngsters", "minors", "young ones", "juveniles"],
    tip: "In formal writing, 'minors' or 'young people' often sound more precise than 'kids'."
  },
  {
    word: "academic",
    context: "Beyond **academic** performance, schools are increasingly expected to nurture emotional resilience.",
    difficulty: "medium",
    synonyms: ["scholarly", "educational", "intellectual", "school-related", "scholastic"],
    tip: "Can describe school-related achievement or, separately, a purely theoretical debate ('an academic argument')."
  },
  {
    word: "entertaining",
    context: "Streaming platforms compete to produce content that is both **entertaining** and thought-provoking.",
    difficulty: "easy",
    synonyms: ["amusing", "enjoyable", "engaging", "diverting", "captivating"],
    tip: "Neutral word for enjoyment — pair with 'purely' or 'merely' to suggest a lack of substance."
  },
  {
    word: "humble",
    context: "Despite leading a multinational corporation, she remained **humble** about her contribution to its success.",
    difficulty: "medium",
    synonyms: ["modest", "unassuming", "unpretentious", "down-to-earth", "self-effacing"],
    tip: "Describes a lack of arrogance, often used approvingly of public figures."
  },
  {
    word: "made to",
    context: "Employees who felt **made to** work unpaid overtime were reluctant to voice their concerns.",
    difficulty: "medium",
    synonyms: ["compelled to", "forced to", "obligated to", "pressured to", "required to"],
    tip: "A conversational phrase — 'compelled to' or 'forced to' is more appropriate in formal essays."
  },
  {
    word: "influence",
    context: "Social media influencers now wield considerable **influence** over consumer behaviour.",
    difficulty: "easy",
    synonyms: ["sway", "impact", "power", "effect", "leverage"],
    tip: "Works as both a noun (influence over someone) and a verb (to influence a decision)."
  },
  {
    word: "copious",
    context: "The report drew on **copious** amounts of survey data collected over five years.",
    difficulty: "hard",
    synonyms: ["abundant", "plentiful", "ample", "extensive", "voluminous"],
    tip: "Usually describes quantity — 'copious notes', 'copious evidence' — not quality."
  },
  {
    word: "bridge",
    context: "Community programmes aim to **bridge** the gap between wealthy and disadvantaged neighbourhoods.",
    difficulty: "easy",
    synonyms: ["connect", "link", "span", "close the gap between", "unite"],
    tip: "Frequently used figuratively as 'bridge the gap' or 'bridge a divide'."
  },
  {
    word: "reveal",
    context: "Leaked documents **revealed** the extent of the corporation's environmental violations.",
    difficulty: "easy",
    synonyms: ["expose", "disclose", "unveil", "uncover", "divulge"],
    tip: "Suggests something previously hidden is now made known."
  },
  {
    word: "infer",
    context: "From the tone of the press release, analysts **inferred** that the merger talks had collapsed.",
    difficulty: "medium",
    synonyms: ["deduce", "conclude", "gather", "surmise", "extrapolate"],
    tip: "To infer is to draw a conclusion from evidence — don't confuse with 'imply', which is what the speaker does."
  },
  {
    word: "implicit",
    context: "There is an **implicit** assumption in the policy that all citizens have equal access to technology.",
    difficulty: "hard",
    synonyms: ["implied", "unspoken", "inherent", "unstated", "tacit"],
    tip: "The opposite of 'explicit' — something suggested rather than directly stated."
  },
  {
    word: "transport",
    context: "Investment in public **transport** has been central to reducing urban congestion.",
    difficulty: "easy",
    synonyms: ["transit", "conveyance", "carriage", "mobility"],
    tip: "As a noun, 'transport' (UK) and 'transportation' (US) are largely interchangeable."
  },
  {
    word: "transportation",
    context: "Electric vehicles are reshaping the future of urban **transportation**.",
    difficulty: "easy",
    synonyms: ["transit", "transport", "conveyance", "mobility"],
    tip: "The American English equivalent of 'transport' — both appear in essays depending on context."
  },
  {
    word: "housing",
    context: "Rising **housing** prices have pushed home ownership out of reach for many young adults.",
    difficulty: "easy",
    synonyms: ["accommodation", "residences", "homes", "shelter", "living quarters"],
    tip: "Often paired with 'affordable', 'public', or 'social' in policy discussions."
  },
  {
    word: "greenery",
    context: "Urban planners are incorporating more **greenery** into city designs to combat rising temperatures.",
    difficulty: "medium",
    synonyms: ["vegetation", "foliage", "plant life", "greenspace", "flora"],
    tip: "A softer, more evocative alternative to 'plants' or 'vegetation' in descriptive writing."
  },
  {
    word: "weaken",
    context: "Prolonged political instability has **weakened** investor confidence in the region.",
    difficulty: "easy",
    synonyms: ["diminish", "undermine", "erode", "sap", "compromise"],
    tip: "Pairs naturally with abstract nouns like 'trust', 'confidence', or 'authority'."
  },
  {
    word: "nuance",
    context: "Reducing the debate to a simple 'for or against' ignores the **nuance** of the issue.",
    difficulty: "hard",
    synonyms: ["subtlety", "shade of meaning", "complexity", "fine distinction", "refinement"],
    tip: "Useful for essays that argue a topic is 'not black and white'."
  },
  {
    word: "deprive",
    context: "Censorship laws risk **depriving** citizens of access to independent journalism.",
    difficulty: "medium",
    synonyms: ["deny", "withhold from", "strip of", "rob of", "dispossess"],
    tip: "Always takes an object plus 'of' — 'deprive someone of something'."
  },
  {
    word: "creative",
    context: "Schools are under pressure to nurture **creative** thinking alongside academic rigour.",
    difficulty: "easy",
    synonyms: ["imaginative", "inventive", "original", "innovative", "inspired"],
    tip: "Distinguishes ideas that are novel from those that are merely correct or efficient."
  },
  {
    word: "knowledge",
    context: "The rapid spread of **knowledge** through the internet has transformed how societies learn.",
    difficulty: "easy",
    synonyms: ["understanding", "awareness", "expertise", "information", "learning"],
    tip: "Broader than 'information' — implies understanding, not just raw data."
  },
  {
    word: "interpret",
    context: "Courts must **interpret** ambiguous legislation in light of its original intent.",
    difficulty: "medium",
    synonyms: ["explain", "construe", "understand", "read", "make sense of"],
    tip: "Suggests assigning meaning to something that could be understood in more than one way."
  },
  {
    word: "stifle",
    context: "Overly rigid curricula risk **stifling** students' curiosity and independent thought.",
    difficulty: "hard",
    synonyms: ["suppress", "smother", "restrain", "curb", "quash"],
    tip: "Strongly negative — implies preventing something from developing naturally."
  },
  {
    word: "opposing",
    context: "The debate exposed sharply **opposing** views on the role of government in the economy.",
    difficulty: "medium",
    synonyms: ["conflicting", "contrary", "rival", "contrasting", "divergent"],
    tip: "Useful for signalling two sides of an argument in a discursive essay."
  },
  {
    word: "real",
    context: "The threat posed by rising sea levels is **real**, not a distant hypothetical.",
    difficulty: "easy",
    synonyms: ["genuine", "actual", "tangible", "concrete", "authentic"],
    tip: "In argumentative writing, 'real' often contrasts with 'perceived' or 'hypothetical'."
  },
  {
    word: "conscious",
    context: "Consumers are becoming increasingly **conscious** of the environmental cost of fast fashion.",
    difficulty: "medium",
    synonyms: ["aware", "mindful", "alert", "cognisant", "sensitive to"],
    tip: "Pairs well with 'increasingly' or 'acutely' to show a growing awareness."
  },
  {
    word: "fearful",
    context: "Small business owners grew **fearful** as new regulations threatened their already thin margins.",
    difficulty: "medium",
    synonyms: ["afraid", "anxious", "apprehensive", "worried", "uneasy"],
    tip: "A more literary alternative to 'scared' — fits reflective or narrative passages."
  },
  {
    word: "independent",
    context: "An **independent** judiciary is essential to holding governments accountable.",
    difficulty: "easy",
    synonyms: ["autonomous", "self-governing", "free", "unaffiliated", "self-sufficient"],
    tip: "In institutional contexts, implies freedom from outside control or influence."
  },
  {
    word: "dependent",
    context: "Many developing economies remain heavily **dependent** on a single export commodity.",
    difficulty: "easy",
    synonyms: ["reliant", "contingent on", "reliant upon", "subordinate to", "hinging on"],
    tip: "Often followed by 'on' — 'dependent on foreign aid', 'dependent on exports'."
  },
  {
    word: "guilty",
    context: "The tribunal found the corporation **guilty** of systematically underreporting emissions.",
    difficulty: "easy",
    synonyms: ["culpable", "blameworthy", "at fault", "liable", "responsible"],
    tip: "In legal or ethical contexts, 'culpable' is a more formal alternative."
  },
  {
    word: "crime",
    context: "Economic inequality is often cited as a contributing factor to rising **crime** rates.",
    difficulty: "easy",
    synonyms: ["offence", "wrongdoing", "felony", "illegal act", "misconduct"],
    tip: "'Offence' is the more formal, British-English equivalent used in academic writing."
  },
  {
    word: "cult",
    context: "The group's absolute obedience to its leader led outsiders to label it a **cult**.",
    difficulty: "medium",
    synonyms: ["sect", "faction", "fringe movement", "cabal"],
    tip: "Carries a negative connotation of extreme, often manipulative devotion."
  },
  {
    word: "religious",
    context: "**Religious** freedom is enshrined in the constitutions of most democratic states.",
    difficulty: "easy",
    synonyms: ["spiritual", "devout", "faith-based", "theological", "sectarian"],
    tip: "Can describe a person's devotion or, more broadly, anything related to faith and institutions."
  },
  {
    word: "insidious",
    context: "Disinformation spreads in an **insidious** manner, often unnoticed until public opinion has shifted.",
    difficulty: "hard",
    synonyms: ["deceptive", "treacherous", "stealthy", "underhand", "creeping"],
    tip: "Implies gradual, hidden harm — stronger and more sinister than 'subtle'."
  },
  {
    word: "fake",
    context: "The proliferation of **fake** news has eroded public trust in traditional media.",
    difficulty: "easy",
    synonyms: ["false", "counterfeit", "fabricated", "bogus", "spurious"],
    tip: "'Fabricated' or 'spurious' sound more formal than 'fake' in an essay."
  },
  {
    word: "government",
    context: "Critics argue that excessive **government** intervention stifles market efficiency.",
    difficulty: "easy",
    synonyms: ["administration", "regime", "authorities", "state", "ruling body"],
    tip: "'Regime' carries a more negative, often authoritarian connotation than 'government'."
  },
  {
    word: "critical thinking",
    context: "Education systems are being redesigned to prioritise **critical thinking** over rote memorisation.",
    difficulty: "medium",
    synonyms: ["analytical thinking", "reasoned analysis", "logical reasoning", "independent judgement"],
    tip: "The ability to evaluate evidence and arguments rather than accept them at face value."
  },
  {
    word: "hurdle",
    context: "Securing international funding remains a major **hurdle** for renewable energy projects in developing nations.",
    difficulty: "medium",
    synonyms: ["obstacle", "barrier", "impediment", "stumbling block", "challenge"],
    tip: "Implies a difficulty that can, with effort, be overcome — not a permanent block."
  },
  {
    word: "torture",
    context: "Human rights organisations have condemned the use of **torture** during interrogations.",
    difficulty: "medium",
    synonyms: ["cruel treatment", "brutality", "persecution", "abuse", "maltreatment"],
    tip: "A strong term reserved for severe physical or psychological suffering deliberately inflicted."
  },
  {
    word: "intellectual",
    context: "The university prides itself on fostering rigorous **intellectual** debate among students.",
    difficulty: "medium",
    synonyms: ["scholarly", "academic", "cerebral", "analytical", "learned"],
    tip: "Can describe a person, a debate, or a quality of thought — context determines the nuance."
  },
  {
    word: "dystopian",
    context: "The novel imagines a **dystopian** future in which surveillance is total and dissent is impossible.",
    difficulty: "hard",
    synonyms: ["nightmarish", "oppressive", "totalitarian", "bleak", "apocalyptic"],
    tip: "The opposite of 'utopian' — describes an imagined society defined by suffering and control."
  },
  {
    word: "society",
    context: "Rapid urbanisation has fundamentally reshaped the structure of modern **society**.",
    difficulty: "easy",
    synonyms: ["community", "civilisation", "the public", "population", "social order"],
    tip: "A broad term — pair with adjectives like 'modern', 'civil', or 'global' for precision."
  },
  {
    word: "eliminate",
    context: "Automation has the potential to **eliminate** many routine administrative jobs.",
    difficulty: "medium",
    synonyms: ["remove", "eradicate", "abolish", "do away with", "wipe out"],
    tip: "A strong verb implying total removal, not merely a reduction."
  },
  {
    word: "controlling",
    context: "Employees described their manager's **controlling** style as demoralising and counterproductive.",
    difficulty: "medium",
    synonyms: ["domineering", "manipulative", "restrictive", "authoritarian", "overbearing"],
    tip: "Almost always negative — describes excessive, often unwelcome, control over others."
  },
  {
    word: "horror",
    context: "The public reacted with **horror** to images of the disaster's aftermath.",
    difficulty: "easy",
    synonyms: ["dread", "terror", "shock", "revulsion", "dismay"],
    tip: "A strong emotional reaction — reserve for genuinely shocking or disturbing events."
  },
  {
    word: "advice",
    context: "Financial **advice** from unqualified sources on social media has led many young investors astray.",
    difficulty: "easy",
    synonyms: ["guidance", "counsel", "recommendation", "suggestions", "input"],
    tip: "Uncountable in English — never write 'an advice' or 'advices'."
  },
  {
    word: "safe",
    context: "Regulators must balance innovation with ensuring new drugs are **safe** for public use.",
    difficulty: "easy",
    synonyms: ["secure", "harmless", "risk-free", "protected", "unthreatening"],
    tip: "Pairs naturally with 'ensure' or 'deem' in policy-related essays."
  },
  {
    word: "protect",
    context: "Stricter legislation was introduced to **protect** whistleblowers from retaliation.",
    difficulty: "easy",
    synonyms: ["safeguard", "shield", "defend", "guard", "preserve"],
    tip: "'Safeguard' is a slightly more formal synonym often used in policy writing."
  },
  {
    word: "benefit",
    context: "Proponents argue that free trade agreements ultimately **benefit** consumers through lower prices.",
    difficulty: "easy",
    synonyms: ["advantage", "gain", "profit from", "help", "serve the interests of"],
    tip: "Works as both a noun ('a clear benefit') and a verb ('to benefit from')."
  },
  {
    word: "detrimental",
    context: "Excessive reliance on standardised testing can be **detrimental** to genuine learning.",
    difficulty: "hard",
    synonyms: ["harmful", "damaging", "injurious", "counterproductive", "deleterious"],
    tip: "A formal, essay-appropriate alternative to 'bad' or 'harmful'."
  },
  {
    word: "vocabulary",
    context: "Extensive reading is one of the most effective ways to build a sophisticated **vocabulary**.",
    difficulty: "easy",
    synonyms: ["lexicon", "word bank", "terminology", "word choice", "diction"],
    tip: "'Diction' refers specifically to word choice in writing or speech."
  },
  {
    word: "inundate",
    context: "Emergency services were **inundated** with calls in the hours following the earthquake.",
    difficulty: "hard",
    synonyms: ["flood", "overwhelm", "swamp", "deluge", "besiege"],
    tip: "Originally meant to flood with water — now used figuratively for being overwhelmed by demand."
  },
  {
    word: "gratification",
    context: "Social media platforms are designed to offer users instant **gratification** through likes and notifications.",
    difficulty: "hard",
    synonyms: ["satisfaction", "pleasure", "fulfilment", "reward", "indulgence"],
    tip: "Often contrasted with 'delayed gratification' — the ability to forgo immediate reward for long-term benefit."
  },
  {
    word: "abandon",
    context: "Many refugees are forced to **abandon** their homes with little warning.",
    difficulty: "easy",
    synonyms: ["desert", "forsake", "give up", "leave behind", "relinquish"],
    tip: "As a verb it means to leave completely; 'to abandon a plan' also works figuratively."
  },
  {
    word: "accompanied",
    context: "The proposal was **accompanied** by a detailed cost-benefit analysis.",
    difficulty: "easy",
    synonyms: ["escorted", "supplemented", "attended", "went with", "coupled with"],
    tip: "Often used passively — 'X was accompanied by Y' — to show two things occurring together."
  },
  {
    word: "accumulation",
    context: "The **accumulation** of plastic waste in the oceans poses a long-term ecological threat.",
    difficulty: "medium",
    synonyms: ["build-up", "amassing", "gathering", "stockpile", "aggregation"],
    tip: "A noun describing a gradual increase over time, often of something undesirable."
  },
  {
    word: "ambiguous",
    context: "The wording of the treaty was deliberately **ambiguous** to satisfy both parties.",
    difficulty: "medium",
    synonyms: ["unclear", "vague", "equivocal", "open to interpretation", "imprecise"],
    tip: "Implies more than one possible meaning, not simply a lack of detail."
  },
  {
    word: "appendix",
    context: "Supporting data was placed in the **appendix** rather than the main body of the report.",
    difficulty: "easy",
    synonyms: ["supplement", "addendum", "annex", "attachment"],
    tip: "A section at the end of a document containing supplementary material."
  },
  {
    word: "appreciation",
    context: "A growing **appreciation** of cultural diversity has shaped modern curricula.",
    difficulty: "easy",
    synonyms: ["recognition", "understanding", "regard", "awareness", "esteem"],
    tip: "Can mean either gratitude or an increase in value — context determines which."
  },
  {
    word: "arbitrary",
    context: "Critics claimed the sentencing guidelines were applied in an **arbitrary** manner.",
    difficulty: "medium",
    synonyms: ["random", "capricious", "unsystematic", "subjective", "unreasoned"],
    tip: "Suggests a decision made without a clear rule or justification, not simply 'random'."
  },
  {
    word: "automatically",
    context: "Sensors **automatically** adjust the lighting according to natural daylight levels.",
    difficulty: "easy",
    synonyms: ["mechanically", "involuntarily", "spontaneously", "without prompting"],
    tip: "Describes an action performed without direct human control."
  },
  {
    word: "bias",
    context: "Algorithmic **bias** in hiring software has drawn scrutiny from regulators.",
    difficulty: "medium",
    synonyms: ["prejudice", "partiality", "slant", "skew", "favouritism"],
    tip: "Can be a noun (a bias) or a verb (to bias a result) — both are common in GP essays."
  },
  {
    word: "chart",
    context: "The report used a **chart** to illustrate the decline in manufacturing output.",
    difficulty: "easy",
    synonyms: ["graph", "diagram", "table", "plot"],
    tip: "Refers to a visual representation of data, distinct from 'chart' meaning a map."
  },
  {
    word: "clarity",
    context: "The judge praised the **clarity** of the closing argument.",
    difficulty: "easy",
    synonyms: ["lucidity", "precision", "coherence", "transparency", "simplicity"],
    tip: "Describes how easy something is to understand, especially writing or speech."
  },
  {
    word: "conformity",
    context: "Strict dress codes are sometimes criticised for enforcing unnecessary **conformity**.",
    difficulty: "medium",
    synonyms: ["compliance", "adherence", "obedience", "uniformity"],
    tip: "Usually implies following rules or norms, sometimes at the expense of individuality."
  },
  {
    word: "commodity",
    context: "Water is increasingly treated as a tradeable **commodity** rather than a public good.",
    difficulty: "medium",
    synonyms: ["product", "goods", "resource", "merchandise"],
    tip: "A raw material or primary product that can be bought and sold."
  },
  {
    word: "complement",
    context: "Renewable subsidies are designed to **complement**, not replace, existing energy policy.",
    difficulty: "medium",
    synonyms: ["supplement", "enhance", "round out", "add to"],
    tip: "Do not confuse with 'compliment' (praise) — this means to complete or improve."
  },
  {
    word: "contemporary",
    context: "**Contemporary** debates on free speech often echo arguments from decades earlier.",
    difficulty: "easy",
    synonyms: ["modern", "current", "present-day", "up-to-date"],
    tip: "Can also mean 'belonging to the same period as' something else, not just 'modern'."
  },
  {
    word: "contradiction",
    context: "There is an evident **contradiction** between the government's climate rhetoric and its energy policy.",
    difficulty: "medium",
    synonyms: ["inconsistency", "conflict", "discrepancy", "paradox"],
    tip: "Two statements or facts that cannot both be true at once."
  },
  {
    word: "crucial",
    context: "Access to clean water is **crucial** for public health in developing regions.",
    difficulty: "easy",
    synonyms: ["essential", "critical", "vital", "pivotal", "indispensable"],
    tip: "A strong intensifier for 'important' — reserve it for genuinely decisive factors."
  },
  {
    word: "currency",
    context: "The idea of a universal basic income has gained **currency** among policymakers.",
    difficulty: "medium",
    synonyms: ["acceptance", "prevalence", "traction", "circulation"],
    tip: "Besides money, 'currency' can mean the general acceptance of an idea."
  },
  {
    word: "denote",
    context: "In economics, the term 'inflation' is used to **denote** a general rise in prices.",
    difficulty: "medium",
    synonyms: ["signify", "indicate", "represent", "designate", "mean"],
    tip: "A formal verb for 'to mean' or 'to stand for', common in academic definitions."
  },
  {
    word: "detected",
    context: "Traces of the chemical were **detected** in the local water supply.",
    difficulty: "easy",
    synonyms: ["identified", "discovered", "found", "spotted", "uncovered"],
    tip: "Implies careful observation or testing revealed something not obvious."
  },
  {
    word: "deviation",
    context: "Any **deviation** from the standard procedure must be reported to a supervisor.",
    difficulty: "medium",
    synonyms: ["divergence", "departure", "variation", "anomaly"],
    tip: "A movement away from an established course, standard, or norm."
  },
  {
    word: "displacement",
    context: "War has caused the mass **displacement** of civilian populations across the region.",
    difficulty: "medium",
    synonyms: ["dislocation", "relocation", "uprooting", "forced movement"],
    tip: "Often used for people forced to leave their homes, e.g. 'displaced persons'."
  },
  {
    word: "dramatic",
    context: "There has been a **dramatic** rise in youth unemployment since the recession.",
    difficulty: "easy",
    synonyms: ["striking", "significant", "sharp", "marked", "sudden"],
    tip: "Emphasises the scale or suddenness of a change, not necessarily anything theatrical."
  },
  {
    word: "eventually",
    context: "**Eventually**, public pressure forced the company to reverse its decision.",
    difficulty: "easy",
    synonyms: ["ultimately", "in the end", "finally", "after some time"],
    tip: "A useful discourse marker to signal an outcome after a process or delay."
  },
  {
    word: "exhibit",
    context: "The patient began to **exhibit** early signs of the illness within days.",
    difficulty: "medium",
    synonyms: ["display", "show", "demonstrate", "manifest"],
    tip: "In GP essays it usually means 'to display a quality or symptom', not a museum show."
  },
  {
    word: "exploitation",
    context: "The **exploitation** of migrant labour remains a persistent human rights concern.",
    difficulty: "medium",
    synonyms: ["abuse", "misuse", "manipulation", "taking advantage"],
    tip: "Carries a negative connotation of unfairly using someone or something for gain."
  },
  {
    word: "fluctuations",
    context: "**Fluctuations** in oil prices have direct consequences for global inflation.",
    difficulty: "medium",
    synonyms: ["variations", "swings", "oscillations", "changes", "volatility"],
    tip: "Describes irregular rises and falls, often used with 'currency' or 'price'."
  },
  {
    word: "guidelines",
    context: "The ministry issued new **guidelines** on data protection for private firms.",
    difficulty: "easy",
    synonyms: ["recommendations", "rules", "protocols", "standards", "instructions"],
    tip: "Softer than 'rules' or 'laws' — implies advisory rather than strictly binding standards."
  },
  {
    word: "highlighted",
    context: "The report **highlighted** significant gaps in rural healthcare provision.",
    difficulty: "easy",
    synonyms: ["emphasised", "underscored", "drew attention to", "spotlighted"],
    tip: "A common way to introduce a key finding without directly quoting a source."
  },
  {
    word: "induced",
    context: "Economic hardship has **induced** many young people to delay starting families.",
    difficulty: "hard",
    synonyms: ["caused", "prompted", "triggered", "brought about", "provoked"],
    tip: "Formal verb for causing a state or reaction, often used in medical or scientific writing."
  },
  {
    word: "inevitably",
    context: "Automating routine tasks will **inevitably** displace some low-skilled workers.",
    difficulty: "medium",
    synonyms: ["unavoidably", "necessarily", "certainly", "as a matter of course"],
    tip: "Adverb form of 'inevitable' — signals an outcome that cannot realistically be prevented."
  },
  {
    word: "infrastructure",
    context: "Investment in digital **infrastructure** is essential for a competitive economy.",
    difficulty: "medium",
    synonyms: ["framework", "facilities", "foundation", "systems", "network"],
    tip: "Refers to the basic physical or organisational structures needed to run a society."
  },
  {
    word: "inspection",
    context: "Regular **inspection** of factory conditions has reduced workplace accidents.",
    difficulty: "easy",
    synonyms: ["examination", "review", "audit", "check", "survey"],
    tip: "Implies a formal, often scheduled, check for compliance or safety."
  },
  {
    word: "intensity",
    context: "The **intensity** of the debate reflected how divisive the issue had become.",
    difficulty: "medium",
    synonyms: ["strength", "severity", "force", "vigour", "magnitude"],
    tip: "Describes the degree of strength or force of an emotion, effort, or phenomenon."
  },
  {
    word: "manipulation",
    context: "The scandal raised concerns over the **manipulation** of financial data by executives.",
    difficulty: "medium",
    synonyms: ["distortion", "falsification", "tampering", "exploitation", "rigging"],
    tip: "Almost always negative when applied to data, markets, or people."
  },
  {
    word: "minimised",
    context: "Risk can be **minimised**, though never entirely eliminated, through careful planning.",
    difficulty: "medium",
    synonyms: ["reduced", "lessened", "diminished", "curtailed", "played down"],
    tip: "Note the British spelling with 's' — contrasts with 'eliminated', which implies total removal."
  },
  {
    word: "nuclear",
    context: "Several nations are reconsidering **nuclear** power as a low-carbon energy source.",
    difficulty: "easy",
    synonyms: ["atomic"],
    tip: "Mostly used with 'power', 'energy', 'weapon', or 'family' — meaning varies with the noun it modifies."
  },
  {
    word: "offset",
    context: "Companies can **offset** their carbon emissions by investing in reforestation projects.",
    difficulty: "medium",
    synonyms: ["counterbalance", "compensate for", "neutralise", "cancel out"],
    tip: "Common in environmental writing — 'carbon offset' is a key GP collocation."
  },
  {
    word: "paragraph",
    context: "Each **paragraph** should focus on a single supporting argument.",
    difficulty: "easy",
    synonyms: ["section", "passage", "segment"],
    tip: "A structural unit of writing — useful vocabulary when discussing essay technique itself."
  },
  {
    word: "plus",
    context: "The policy offers tax relief, **plus** additional grants for small businesses.",
    difficulty: "easy",
    synonyms: ["in addition to", "as well as", "along with", "furthermore"],
    tip: "A more informal connector than 'furthermore' or 'moreover' — used sparingly in formal essays."
  },
  {
    word: "practitioners",
    context: "Medical **practitioners** have called for clearer guidelines on assisted dying.",
    difficulty: "medium",
    synonyms: ["professionals", "specialists", "practicing experts"],
    tip: "Refers to people actively working in a profession, especially medicine or law."
  },
  {
    word: "predominantly",
    context: "The workforce in this sector is **predominantly** female.",
    difficulty: "medium",
    synonyms: ["mainly", "chiefly", "primarily", "largely", "for the most part"],
    tip: "A precise way to describe a majority without claiming totality."
  },
  {
    word: "prospect",
    context: "The **prospect** of automation replacing jobs worries many workers.",
    difficulty: "medium",
    synonyms: ["possibility", "likelihood", "outlook", "expectation"],
    tip: "Refers to something anticipated in the future, whether promising or threatening."
  },
  {
    word: "radical",
    context: "The reforms represented a **radical** departure from previous policy.",
    difficulty: "medium",
    synonyms: ["fundamental", "drastic", "extreme", "revolutionary", "sweeping"],
    tip: "Describes change that is thorough and far-reaching, not merely 'different'."
  },
  {
    word: "random",
    context: "The study used a **random** sample to avoid selection bias.",
    difficulty: "easy",
    synonyms: ["arbitrary", "unsystematic", "haphazard", "unplanned"],
    tip: "In research contexts, means chosen without predictable pattern to ensure fairness."
  },
  {
    word: "reinforced",
    context: "Public scepticism was **reinforced** by repeated instances of corporate misconduct.",
    difficulty: "medium",
    synonyms: ["strengthened", "bolstered", "consolidated", "confirmed"],
    tip: "Suggests an existing belief or structure being made stronger, not created anew."
  },
  {
    word: "restore",
    context: "Efforts are underway to **restore** public trust in the electoral process.",
    difficulty: "easy",
    synonyms: ["reinstate", "revive", "re-establish", "rebuild"],
    tip: "Implies returning something to a former, usually better, state."
  },
  {
    word: "revision",
    context: "The **revision** of the curriculum reflects changing workplace demands.",
    difficulty: "medium",
    synonyms: ["amendment", "update", "modification", "overhaul"],
    tip: "Can refer to changing a document or, informally, to studying for an exam."
  },
  {
    word: "schedule",
    context: "Delays in the construction **schedule** have increased project costs significantly.",
    difficulty: "easy",
    synonyms: ["timetable", "plan", "agenda", "programme"],
    tip: "Refers to a planned sequence of events or tasks with set times."
  },
  {
    word: "tension",
    context: "Rising **tension** between neighbouring states threatens regional stability.",
    difficulty: "medium",
    synonyms: ["strain", "friction", "hostility", "unease", "conflict"],
    tip: "Can describe interpersonal, political, or even physical strain, depending on context."
  },
  {
    word: "termination",
    context: "The contract allows for **termination** without cause after a notice period.",
    difficulty: "medium",
    synonyms: ["ending", "cessation", "cancellation", "conclusion"],
    tip: "A formal word for ending something, common in legal and employment contexts."
  },
  {
    word: "theme",
    context: "Inequality is a recurring **theme** in the author's later novels.",
    difficulty: "easy",
    synonyms: ["motif", "subject", "topic", "thread"],
    tip: "An underlying idea that runs through a piece of writing, art, or discussion."
  },
  {
    word: "thereby",
    context: "The policy removed import tariffs, **thereby** lowering consumer prices.",
    difficulty: "hard",
    synonyms: ["as a result", "consequently", "in this way", "thus"],
    tip: "A formal connector linking an action to its direct consequence."
  },
  {
    word: "uniform",
    context: "Critics argue that standardised testing imposes a **uniform** standard on diverse learners.",
    difficulty: "medium",
    synonyms: ["consistent", "unvarying", "identical", "homogeneous"],
    tip: "Describes something the same throughout, without variation."
  },
  {
    word: "vehicle",
    context: "Social media has become a powerful **vehicle** for political mobilisation.",
    difficulty: "medium",
    synonyms: ["medium", "channel", "means", "conduit"],
    tip: "Figuratively means a means of expressing or achieving something, beyond literal transport."
  },
  {
    word: "via",
    context: "Applications must be submitted **via** the official online portal.",
    difficulty: "easy",
    synonyms: ["through", "by means of", "by way of"],
    tip: "A concise preposition for describing a method or route, often used with technology."
  },
  {
    word: "virtually",
    context: "The two proposals are **virtually** identical in their economic assumptions.",
    difficulty: "medium",
    synonyms: ["almost", "practically", "nearly", "essentially"],
    tip: "Means 'almost entirely', distinct from its tech-related sense of 'online' or 'simulated'."
  },
  {
    word: "widespread",
    context: "**Widespread** concern over data privacy has prompted new legislation.",
    difficulty: "easy",
    synonyms: ["extensive", "prevalent", "far-reaching", "universal", "general"],
    tip: "Describes something occurring or believed across a large area or population."
  },
  {
    word: "visual",
    context: "The campaign relied heavily on **visual** imagery to convey its message.",
    difficulty: "easy",
    synonyms: ["pictorial", "graphic", "image-based"],
    tip: "Relating to sight — often paired with 'aid', 'cue', or 'representation'."
  },
  {
    word: "adaptation",
    context: "The novel's film **adaptation** altered several key plot points.",
    difficulty: "medium",
    synonyms: ["adjustment", "modification", "reworking", "conversion"],
    tip: "Can mean adjusting to new conditions, or reworking a text into another medium."
  },
  {
    word: "adults",
    context: "Financial literacy programmes are increasingly targeted at young **adults**.",
    difficulty: "easy",
    synonyms: ["grown-ups", "mature individuals"],
    tip: "Distinguishes those legally or developmentally mature from children or adolescents."
  },
  {
    word: "aid",
    context: "International **aid** has helped rebuild infrastructure after the disaster.",
    difficulty: "easy",
    synonyms: ["assistance", "support", "relief", "help"],
    tip: "Can be a noun (foreign aid) or verb (to aid recovery)."
  },
  {
    word: "channel",
    context: "Diplomatic **channels** remain open despite the escalating dispute.",
    difficulty: "medium",
    synonyms: ["route", "avenue", "conduit", "medium"],
    tip: "Refers to a means of communication or transmission, literal or figurative."
  },
  {
    word: "chemical",
    context: "Farmers are being encouraged to reduce **chemical** fertiliser use.",
    difficulty: "easy",
    synonyms: ["synthetic", "artificial substance"],
    tip: "Usually modifies a noun (chemical waste, chemical reaction) in scientific writing."
  },
  {
    word: "classical",
    context: "**Classical** economic theory assumes markets are largely self-correcting.",
    difficulty: "medium",
    synonyms: ["traditional", "conventional", "established", "orthodox"],
    tip: "In academic contexts, refers to foundational or historically established theory, not just music or art."
  },
  {
    word: "comprehensive",
    context: "The government introduced a **comprehensive** review of welfare spending.",
    difficulty: "medium",
    synonyms: ["thorough", "extensive", "exhaustive", "all-encompassing"],
    tip: "Suggests something covers all relevant aspects, leaving little out."
  },
  {
    word: "comprise",
    context: "The committee **comprises** representatives from twelve member states.",
    difficulty: "hard",
    synonyms: ["consist of", "be made up of", "include", "encompass"],
    tip: "Note: 'comprise' takes the whole as its subject — avoid 'is comprised of' in formal writing."
  },
  {
    word: "confirmed",
    context: "Laboratory tests **confirmed** the presence of the contaminant in the water supply.",
    difficulty: "easy",
    synonyms: ["verified", "validated", "corroborated", "substantiated"],
    tip: "Implies evidence has removed prior doubt about a claim."
  },
  {
    word: "contrary",
    context: "**Contrary** to popular belief, most refugees do not wish to remain permanently.",
    difficulty: "medium",
    synonyms: ["opposite", "conflicting", "at odds with"],
    tip: "Often used in the phrase 'contrary to', introducing a correction of a common assumption."
  },
  {
    word: "converted",
    context: "The old factory was **converted** into affordable housing units.",
    difficulty: "easy",
    synonyms: ["transformed", "changed", "adapted", "repurposed"],
    tip: "Implies a change of form, function, or purpose."
  },
  {
    word: "couple",
    context: "A **couple** of key reforms could substantially improve voter turnout.",
    difficulty: "easy",
    synonyms: ["pair", "few", "handful"],
    tip: "Informally means 'a small number of', not strictly two, in casual register."
  },
  {
    word: "decades",
    context: "Income inequality has widened steadily over the past three **decades**.",
    difficulty: "easy",
    synonyms: ["ten-year periods"],
    tip: "Useful for describing long-term trends in essays discussing historical change."
  },
  {
    word: "definite",
    context: "There is, as yet, no **definite** consensus on the causes of the decline.",
    difficulty: "easy",
    synonyms: ["clear", "certain", "conclusive", "unambiguous"],
    tip: "Emphasises certainty or precision — pairs naturally with 'answer' or 'conclusion'."
  },
  {
    word: "deny",
    context: "The company continues to **deny** any wrongdoing despite mounting evidence.",
    difficulty: "easy",
    synonyms: ["refute", "reject", "dispute", "contest"],
    tip: "To assert that something is not true, often in the face of accusation."
  },
  {
    word: "differentiation",
    context: "Product **differentiation** allows firms to compete on more than price alone.",
    difficulty: "hard",
    synonyms: ["distinction", "distinguishing", "diversification"],
    tip: "A business and academic term for making something distinct from competitors or categories."
  },
  {
    word: "disposal",
    context: "Improper **disposal** of electronic waste harms both health and the environment.",
    difficulty: "medium",
    synonyms: ["discarding", "removal", "dumping", "getting rid of"],
    tip: "Refers to the act of throwing away or dealing with unwanted material."
  },
  {
    word: "dynamic",
    context: "The labour market has become far more **dynamic** due to remote work options.",
    difficulty: "medium",
    synonyms: ["fluid", "changeable", "evolving", "active"],
    tip: "Describes constant change or energy, contrasted with 'static'."
  },
  {
    word: "equipment",
    context: "Hospitals reported shortages of essential medical **equipment** during the crisis.",
    difficulty: "easy",
    synonyms: ["apparatus", "gear", "machinery", "tools"],
    tip: "An uncountable noun — never 'equipments' in standard English."
  },
  {
    word: "extract",
    context: "Researchers were able to **extract** valuable insights from the survey data.",
    difficulty: "medium",
    synonyms: ["derive", "draw out", "obtain", "distil"],
    tip: "Can be literal (extract a resource) or figurative (extract information)."
  },
  {
    word: "file",
    context: "Whistleblowers can **file** a formal complaint without revealing their identity.",
    difficulty: "easy",
    synonyms: ["submit", "lodge", "register", "record"],
    tip: "As a verb, means to formally submit a document or complaint."
  },
  {
    word: "finite",
    context: "Fossil fuels are a **finite** resource that cannot sustain long-term growth.",
    difficulty: "medium",
    synonyms: ["limited", "restricted", "bounded"],
    tip: "The opposite of 'infinite' — stresses that a quantity has a definite end."
  },
  {
    word: "foundation",
    context: "Strong literacy skills form the **foundation** for later academic success.",
    difficulty: "easy",
    synonyms: ["basis", "groundwork", "cornerstone", "footing"],
    tip: "Figuratively refers to the base upon which something else is built."
  },
  {
    word: "global",
    context: "Climate change is fundamentally a **global**, not merely national, challenge.",
    difficulty: "easy",
    synonyms: ["worldwide", "international", "universal", "planetary"],
    tip: "Emphasises scope across the entire world rather than one region."
  },
  {
    word: "grade",
    context: "Students are assessed and given a **grade** based on continuous coursework.",
    difficulty: "easy",
    synonyms: ["mark", "rating", "score", "rank"],
    tip: "Also used as a verb — 'to grade an assignment'."
  },
  {
    word: "guarantee",
    context: "No policy can **guarantee** full employment in a volatile global economy.",
    difficulty: "medium",
    synonyms: ["assure", "ensure", "promise", "warrant"],
    tip: "Implies an absolute certainty of outcome, stronger than 'ensure'."
  },
  {
    word: "hierarchical",
    context: "Flatter, less **hierarchical** management structures are increasingly common in tech firms.",
    difficulty: "hard",
    synonyms: ["ranked", "tiered", "stratified", "layered"],
    tip: "Describes systems organised by levels of authority or status."
  },
  {
    word: "identical",
    context: "The two policies were **identical** in substance, differing only in name.",
    difficulty: "easy",
    synonyms: ["indistinguishable", "the same", "matching", "equivalent"],
    tip: "Stronger than 'similar' — implies no meaningful difference at all."
  },
  {
    word: "ideology",
    context: "The reforms were driven more by **ideology** than by empirical evidence.",
    difficulty: "medium",
    synonyms: ["doctrine", "belief system", "philosophy", "creed"],
    tip: "A coherent set of beliefs, especially political or economic, guiding action."
  },
  {
    word: "inferred",
    context: "From the trends observed, researchers **inferred** a causal relationship.",
    difficulty: "hard",
    synonyms: ["deduced", "concluded", "gathered", "surmised"],
    tip: "Means to reach a conclusion based on evidence rather than direct statement."
  },
  {
    word: "innovation",
    context: "Continuous **innovation** is essential for firms to remain competitive.",
    difficulty: "easy",
    synonyms: ["invention", "advancement", "breakthrough", "novelty"],
    tip: "Refers to the introduction of new ideas, methods, or products."
  },
  {
    word: "insert",
    context: "The clause was quietly **inserted** into the final draft of the bill.",
    difficulty: "easy",
    synonyms: ["add", "introduce", "incorporate", "embed"],
    tip: "To place something within an existing structure or document."
  },
  {
    word: "intervention",
    context: "Early government **intervention** helped stabilise the banking sector.",
    difficulty: "medium",
    synonyms: ["involvement", "interference", "action", "mediation"],
    tip: "Can carry a neutral or negative tone depending on whether the action is welcomed."
  },
  {
    word: "isolated",
    context: "The village remained **isolated** from modern infrastructure for decades.",
    difficulty: "easy",
    synonyms: ["cut off", "remote", "secluded", "detached"],
    tip: "Can describe physical remoteness or, figuratively, a single unconnected event ('an isolated incident')."
  },
  {
    word: "media",
    context: "Traditional **media** outlets are struggling to compete with online platforms.",
    difficulty: "easy",
    synonyms: ["press", "news outlets", "broadcasters"],
    tip: "Technically the plural of 'medium', though often used as a collective singular in modern usage."
  },
  {
    word: "mode",
    context: "Remote work has become the preferred **mode** of operation for many firms.",
    difficulty: "medium",
    synonyms: ["method", "manner", "approach", "way"],
    tip: "A formal word for the way in which something is done or occurs."
  },
  {
    word: "phenomenon",
    context: "Urban migration is a global **phenomenon** driven by economic opportunity.",
    difficulty: "hard",
    synonyms: ["occurrence", "event", "development", "happening"],
    tip: "Note the irregular plural 'phenomena' — a common error in academic writing."
  },
  {
    word: "priority",
    context: "Reducing carbon emissions has become a top **priority** for many governments.",
    difficulty: "easy",
    synonyms: ["precedence", "primary concern", "focus"],
    tip: "Refers to what is treated as most important and addressed first."
  },
  {
    word: "prohibited",
    context: "Smoking in enclosed public spaces is now **prohibited** in most countries.",
    difficulty: "medium",
    synonyms: ["banned", "forbidden", "outlawed", "disallowed"],
    tip: "A formal term for something made illegal or not permitted by rule."
  },
  {
    word: "publication",
    context: "The controversial study prompted debate even before formal **publication**.",
    difficulty: "easy",
    synonyms: ["release", "issuing", "dissemination"],
    tip: "Refers to the act of making written material publicly available."
  },
  {
    word: "quotation",
    context: "The essay opens with a **quotation** from a leading economist.",
    difficulty: "easy",
    synonyms: ["citation", "extract", "excerpt"],
    tip: "A word-for-word repetition of someone else's statement, properly attributed."
  },
  {
    word: "release",
    context: "The central bank's **release** of new interest rate data affected markets instantly.",
    difficulty: "easy",
    synonyms: ["announcement", "publication", "disclosure", "issuing"],
    tip: "Can also function as a verb — 'to release information'."
  },
  {
    word: "reverse",
    context: "Efforts to **reverse** biodiversity loss require coordinated global action.",
    difficulty: "medium",
    synonyms: ["undo", "overturn", "invert", "counteract"],
    tip: "To return something to its opposite or original state."
  },
  {
    word: "simulation",
    context: "Flight **simulations** allow pilots to train for emergencies without real risk.",
    difficulty: "medium",
    synonyms: ["model", "reconstruction", "imitation", "replication"],
    tip: "An artificial representation of a real process, often computer-generated."
  },
  {
    word: "solely",
    context: "The decision rests **solely** with the board of directors.",
    difficulty: "medium",
    synonyms: ["only", "exclusively", "purely", "entirely"],
    tip: "Emphasises that no other party or factor is involved."
  },
  {
    word: "somewhat",
    context: "Public opinion has shifted **somewhat** since the policy was first introduced.",
    difficulty: "easy",
    synonyms: ["slightly", "to some extent", "moderately", "rather"],
    tip: "A useful hedge for GP essays, avoiding overly absolute claims."
  },
  {
    word: "submitted",
    context: "The final report was **submitted** to parliament ahead of schedule.",
    difficulty: "easy",
    synonyms: ["presented", "handed in", "delivered", "filed"],
    tip: "Usually used passively to describe formal delivery of documents or work."
  },
  {
    word: "successive",
    context: "The party has won three **successive** elections despite falling approval ratings.",
    difficulty: "medium",
    synonyms: ["consecutive", "sequential", "back-to-back"],
    tip: "Describes events occurring one after another without interruption."
  },
  {
    word: "survive",
    context: "Small businesses have struggled to **survive** amid rising operating costs.",
    difficulty: "easy",
    synonyms: ["endure", "persist", "hold on", "outlast"],
    tip: "To continue existing despite difficulty or threat."
  },
  {
    word: "thesis",
    context: "The author's central **thesis** is that inequality undermines democratic stability.",
    difficulty: "hard",
    synonyms: ["argument", "proposition", "claim", "premise"],
    tip: "The main claim or argument put forward in an essay, book, or academic work."
  },
  {
    word: "topic",
    context: "Climate migration is an increasingly pressing **topic** in policy discussions.",
    difficulty: "easy",
    synonyms: ["subject", "issue", "theme", "matter"],
    tip: "A general word for the subject being discussed or written about."
  },
  {
    word: "transmission",
    context: "The **transmission** of misinformation online often outpaces fact-checking efforts.",
    difficulty: "medium",
    synonyms: ["spreading", "propagation", "dissemination", "conveyance"],
    tip: "Can refer to spreading disease, information, or signals."
  },
  {
    word: "ultimately",
    context: "**Ultimately**, the success of the policy depends on public compliance.",
    difficulty: "medium",
    synonyms: ["in the end", "eventually", "fundamentally", "at bottom"],
    tip: "Signals the final or most important point after considering other factors."
  },
  {
    word: "unique",
    context: "Each region faces a **unique** combination of economic and social challenges.",
    difficulty: "easy",
    synonyms: ["distinctive", "unparalleled", "singular", "one-of-a-kind"],
    tip: "Technically absolute — avoid 'very unique' or 'more unique' in formal writing."
  },
  {
    word: "visible",
    context: "The effects of the policy became **visible** within just a few months.",
    difficulty: "easy",
    synonyms: ["apparent", "evident", "noticeable", "observable"],
    tip: "Can be literal (seen with the eye) or figurative (clearly evident)."
  },
  {
    word: "voluntary",
    context: "The scheme relies on **voluntary** contributions rather than mandatory taxation.",
    difficulty: "medium",
    synonyms: ["optional", "unforced", "willing", "discretionary"],
    tip: "The opposite of 'compulsory' or 'mandatory' — done by choice."
  },
  {
    word: "abstract",
    context: "The theory remains largely **abstract**, with little practical application so far.",
    difficulty: "medium",
    synonyms: ["theoretical", "conceptual", "intangible", "notional"],
    tip: "The opposite of 'concrete' — describes ideas not tied to specific physical instances."
  },
  {
    word: "accurate",
    context: "**Accurate** forecasting is essential for effective disaster preparedness.",
    difficulty: "easy",
    synonyms: ["precise", "exact", "correct", "reliable"],
    tip: "Emphasises correctness and freedom from error, especially in data or measurement."
  },
  {
    word: "acknowledged",
    context: "The minister **acknowledged** that the policy had unintended consequences.",
    difficulty: "easy",
    synonyms: ["admitted", "recognised", "conceded", "accepted"],
    tip: "Implies a formal or reluctant admission of a fact, fault, or contribution."
  },
  {
    word: "aggregate",
    context: "The **aggregate** demand for housing has risen faster than supply.",
    difficulty: "hard",
    synonyms: ["total", "combined", "cumulative", "overall"],
    tip: "A formal economics term for a whole formed by combining several elements."
  },
  {
    word: "allocation",
    context: "The **allocation** of healthcare resources during the pandemic sparked ethical debate.",
    difficulty: "medium",
    synonyms: ["distribution", "apportionment", "assignment", "sharing out"],
    tip: "Refers to how limited resources are divided among competing needs."
  },
  {
    word: "assigned",
    context: "Each committee member was **assigned** a specific area of responsibility.",
    difficulty: "easy",
    synonyms: ["allocated", "designated", "appointed", "delegated"],
    tip: "To give someone a specific task, role, or resource."
  },
  {
    word: "attached",
    context: "Strict conditions were **attached** to the emergency loan agreement.",
    difficulty: "easy",
    synonyms: ["appended", "linked", "connected", "tied"],
    tip: "Often used figuratively to describe conditions or terms accompanying something."
  },
  {
    word: "author",
    context: "The **author** of the report drew on decades of field research.",
    difficulty: "easy",
    synonyms: ["writer", "creator", "originator"],
    tip: "Can also be a verb — 'to author a policy paper'."
  },
  {
    word: "bond",
    context: "A shared sense of crisis strengthened the **bond** between the two nations.",
    difficulty: "medium",
    synonyms: ["tie", "link", "connection", "attachment"],
    tip: "In finance, 'bond' has a distinct meaning as a debt security — context matters."
  },
  {
    word: "brief",
    context: "The lawyer prepared a **brief** summarising the key points of the case.",
    difficulty: "medium",
    synonyms: ["concise", "short", "summary", "instructions"],
    tip: "Can be an adjective (short), noun (a summary document), or verb (to inform someone quickly)."
  },
  {
    word: "capable",
    context: "The new system is **capable** of processing thousands of applications per hour.",
    difficulty: "easy",
    synonyms: ["able", "competent", "equipped", "qualified"],
    tip: "Describes having the ability or resources to do something."
  },
  {
    word: "cited",
    context: "The judge **cited** precedent from a similar case decided a decade earlier.",
    difficulty: "medium",
    synonyms: ["referenced", "quoted", "referred to", "invoked"],
    tip: "To mention a source or example in support of an argument."
  },
  {
    word: "cooperative",
    context: "A **cooperative** approach between agencies improved disaster response times.",
    difficulty: "medium",
    synonyms: ["collaborative", "joint", "mutual", "cooperating"],
    tip: "Can also be a noun referring to a jointly owned business or organisation."
  },
  {
    word: "discrimination",
    context: "Legislation now explicitly bans **discrimination** based on age or disability.",
    difficulty: "medium",
    synonyms: ["prejudice", "bias", "unfair treatment", "inequity"],
    tip: "Refers to unjust treatment of individuals based on a protected characteristic."
  },
  {
    word: "display",
    context: "The exhibition's centrepiece **display** attracted record numbers of visitors.",
    difficulty: "easy",
    synonyms: ["exhibition", "showing", "presentation", "showcase"],
    tip: "Can be a noun (an exhibit) or verb (to show something openly)."
  },
  {
    word: "diversity",
    context: "**Diversity** in the workplace has been shown to improve innovation.",
    difficulty: "easy",
    synonyms: ["variety", "range", "heterogeneity", "plurality"],
    tip: "Refers to the presence of a range of different types, backgrounds, or perspectives."
  },
  {
    word: "domain",
    context: "Artificial intelligence is transforming the **domain** of medical diagnostics.",
    difficulty: "medium",
    synonyms: ["field", "sphere", "area", "realm"],
    tip: "A specific area of knowledge, activity, or authority."
  },
  {
    word: "edition",
    context: "The revised **edition** of the textbook includes updated case studies.",
    difficulty: "easy",
    synonyms: ["version", "release", "issue"],
    tip: "Refers to a particular version of a published work."
  },
  {
    word: "enhanced",
    context: "**Enhanced** security measures were introduced following the breach.",
    difficulty: "medium",
    synonyms: ["improved", "strengthened", "boosted", "upgraded"],
    tip: "Implies an existing quality has been made better, not created from scratch."
  },
  {
    word: "estate",
    context: "Rising property prices have made the housing **estate** unaffordable for first-time buyers.",
    difficulty: "medium",
    synonyms: ["property", "land", "development"],
    tip: "Also used in law to mean a person's total assets after death."
  },
  {
    word: "exceed",
    context: "Actual demand often **exceeds** government projections for public services.",
    difficulty: "medium",
    synonyms: ["surpass", "outstrip", "go beyond", "overtake"],
    tip: "To be greater than an expected amount, limit, or standard."
  },
  {
    word: "expert",
    context: "Independent **experts** were consulted before the policy was finalised.",
    difficulty: "easy",
    synonyms: ["specialist", "authority", "professional"],
    tip: "Someone with extensive knowledge or skill in a particular field."
  },
  {
    word: "explicit",
    context: "The contract contains an **explicit** clause prohibiting subcontracting.",
    difficulty: "medium",
    synonyms: ["clear", "unambiguous", "direct", "specific"],
    tip: "The opposite of 'implicit' — stated plainly rather than merely implied."
  },
  {
    word: "federal",
    context: "**Federal** funding was allocated to states hit hardest by the disaster.",
    difficulty: "medium",
    synonyms: ["national", "central government"],
    tip: "Refers to a system where power is shared between a central authority and regional states."
  },
  {
    word: "fees",
    context: "Rising tuition **fees** have deterred some students from pursuing higher education.",
    difficulty: "easy",
    synonyms: ["charges", "costs", "payments", "dues"],
    tip: "Payments required for a service, membership, or professional undertaking."
  },
  {
    word: "flexibility",
    context: "Remote work has given employees far greater **flexibility** over their schedules.",
    difficulty: "easy",
    synonyms: ["adaptability", "versatility", "freedom", "adjustability"],
    tip: "The capacity to adapt or be modified in response to changing conditions."
  },
  {
    word: "furthermore",
    context: "**Furthermore**, the policy fails to address the root causes of the problem.",
    difficulty: "medium",
    synonyms: ["moreover", "additionally", "in addition", "besides"],
    tip: "A formal connector used to introduce an additional supporting point."
  },
  {
    word: "gender",
    context: "**Gender** pay gaps persist across most industries despite decades of reform.",
    difficulty: "easy",
    synonyms: ["sex", "gender identity"],
    tip: "In academic contexts, often distinguished from biological sex as a social or identity category."
  },
  {
    word: "ignored",
    context: "Early warnings about the risks were largely **ignored** by regulators.",
    difficulty: "easy",
    synonyms: ["disregarded", "overlooked", "dismissed", "neglected"],
    tip: "To fail to take notice of, whether deliberately or through negligence."
  },
  {
    word: "incentive",
    context: "Tax breaks act as a powerful **incentive** for renewable energy investment.",
    difficulty: "medium",
    synonyms: ["motivation", "inducement", "encouragement", "spur"],
    tip: "Something that encourages a particular course of action."
  },
  {
    word: "incidence",
    context: "The **incidence** of chronic disease rises sharply with age.",
    difficulty: "hard",
    synonyms: ["rate", "frequency", "occurrence", "prevalence"],
    tip: "A statistical term for how often something occurs within a given population."
  },
  {
    word: "incorporated",
    context: "Sustainability targets have been **incorporated** into the firm's core strategy.",
    difficulty: "medium",
    synonyms: ["integrated", "included", "embedded", "built in"],
    tip: "To include something as part of a larger whole."
  },
  {
    word: "index",
    context: "The consumer price **index** tracks changes in the cost of everyday goods.",
    difficulty: "medium",
    synonyms: ["indicator", "measure", "gauge", "benchmark"],
    tip: "A statistical measure used to track changes over time."
  },
  {
    word: "inhibition",
    context: "Social **inhibition** can prevent employees from voicing concerns to management.",
    difficulty: "hard",
    synonyms: ["restraint", "hesitancy", "reluctance", "suppression"],
    tip: "A psychological or social restraint that prevents an action or expression."
  },
  {
    word: "initiatives",
    context: "Several community **initiatives** aim to reduce youth unemployment.",
    difficulty: "easy",
    synonyms: ["schemes", "programmes", "projects", "efforts"],
    tip: "New plans or actions intended to address a specific problem."
  },
  {
    word: "input",
    context: "Public **input** was sought before the policy was finalised.",
    difficulty: "easy",
    synonyms: ["contribution", "feedback", "opinion", "suggestions"],
    tip: "Information, resources, or opinions contributed to a process or decision."
  },
  {
    word: "instructions",
    context: "Employees received clear **instructions** on handling sensitive customer data.",
    difficulty: "easy",
    synonyms: ["directions", "guidance", "orders", "directives"],
    tip: "Statements telling someone how to do something or how something works."
  },
  {
    word: "intelligence",
    context: "Artificial **intelligence** is reshaping industries from healthcare to finance.",
    difficulty: "easy",
    synonyms: ["cognition", "reasoning ability", "acumen"],
    tip: "Can refer to mental capability or, separately, to gathered information (military intelligence)."
  },
  {
    word: "interval",
    context: "Data was collected at regular **intervals** throughout the study period.",
    difficulty: "medium",
    synonyms: ["gap", "period", "space", "break"],
    tip: "A period of time between two events or points."
  },
  {
    word: "lecture",
    context: "The professor's **lecture** on inequality drew a packed auditorium.",
    difficulty: "easy",
    synonyms: ["talk", "presentation", "address", "seminar"],
    tip: "A formal educational talk, or informally, a stern reprimand."
  },
  {
    word: "migration",
    context: "Climate-induced **migration** is expected to accelerate over the coming decades.",
    difficulty: "medium",
    synonyms: ["movement", "relocation", "displacement", "resettlement"],
    tip: "The movement of people (or animals) from one place to another, often long-term."
  },
  {
    word: "minimum",
    context: "The proposed **minimum** wage increase has divided business owners and workers.",
    difficulty: "easy",
    synonyms: ["lowest", "least", "smallest amount", "floor"],
    tip: "The smallest permissible or possible amount, the opposite of 'maximum'."
  },
  {
    word: "ministry",
    context: "The **ministry** of health issued new guidance on hospital capacity.",
    difficulty: "easy",
    synonyms: ["department", "government agency"],
    tip: "A government department responsible for a particular area of public policy."
  },
  {
    word: "motivation",
    context: "Financial incentives alone rarely sustain long-term employee **motivation**.",
    difficulty: "easy",
    synonyms: ["drive", "incentive", "impetus", "inspiration"],
    tip: "The underlying reason or drive behind a person's actions."
  },
  {
    word: "neutral",
    context: "The mediator remained strictly **neutral** throughout the negotiations.",
    difficulty: "medium",
    synonyms: ["impartial", "unbiased", "objective", "even-handed"],
    tip: "Not favouring either side in a dispute or comparison."
  },
  {
    word: "nevertheless",
    context: "The reforms were unpopular; **nevertheless**, the government pressed ahead.",
    difficulty: "medium",
    synonyms: ["nonetheless", "even so", "regardless", "still"],
    tip: "A formal connector introducing a contrast despite what was just stated."
  },
  {
    word: "overseas",
    context: "Many graduates seek **overseas** employment due to limited local opportunities.",
    difficulty: "easy",
    synonyms: ["foreign", "abroad", "international"],
    tip: "Refers to a location across the sea, typically meaning 'in another country'."
  },
  {
    word: "preceding",
    context: "The **preceding** decade saw unprecedented growth in the technology sector.",
    difficulty: "hard",
    synonyms: ["previous", "prior", "earlier", "foregoing"],
    tip: "Refers to something that comes immediately before in time or sequence."
  },
  {
    word: "presumption",
    context: "There is a legal **presumption** of innocence until guilt is proven.",
    difficulty: "hard",
    synonyms: ["assumption", "supposition", "inference"],
    tip: "A belief or acceptance taken as true without direct proof."
  },
  {
    word: "rational",
    context: "Voters do not always make **rational** decisions based purely on self-interest.",
    difficulty: "medium",
    synonyms: ["logical", "reasoned", "sensible", "sound"],
    tip: "Based on clear reasoning, contrasted with 'emotional' or 'impulsive'."
  },
  {
    word: "recovery",
    context: "Economic **recovery** following the pandemic has been slower than expected.",
    difficulty: "easy",
    synonyms: ["rebound", "revival", "resurgence", "turnaround"],
    tip: "A return to a normal or improved state after a period of difficulty."
  },
  {
    word: "revealed",
    context: "Internal documents **revealed** that the risks had been known for years.",
    difficulty: "easy",
    synonyms: ["disclosed", "exposed", "uncovered", "showed"],
    tip: "To make known previously hidden or secret information."
  },
  {
    word: "scope",
    context: "The inquiry's **scope** was later expanded to include private contractors.",
    difficulty: "medium",
    synonyms: ["extent", "range", "reach", "breadth"],
    tip: "The area or range that something covers or deals with."
  },
  {
    word: "subsidiary",
    context: "The parent company sold off its loss-making **subsidiary** last year.",
    difficulty: "hard",
    synonyms: ["affiliate", "branch", "offshoot"],
    tip: "A company controlled by another, larger company."
  },
  {
    word: "tapes",
    context: "Investigators reviewed hours of surveillance **tapes** before making an arrest.",
    difficulty: "easy",
    synonyms: ["recordings", "footage"],
    tip: "Traditionally recorded video or audio material, now used loosely for any recording."
  },
  {
    word: "trace",
    context: "Scientists could not **trace** the outbreak to a single source.",
    difficulty: "medium",
    synonyms: ["track", "follow", "identify the origin of"],
    tip: "To follow evidence back to its origin, or a very small detectable amount."
  },
  {
    word: "transformation",
    context: "Digitalisation has driven a rapid **transformation** of the retail sector.",
    difficulty: "medium",
    synonyms: ["change", "conversion", "overhaul", "metamorphosis"],
    tip: "A thorough or dramatic change in form, appearance, or character."
  },
  {
    word: "underlying",
    context: "Policymakers must address the **underlying** causes of homelessness, not just its symptoms.",
    difficulty: "medium",
    synonyms: ["root", "fundamental", "basic", "core"],
    tip: "Refers to something forming the base or origin of a more visible problem."
  },
  {
    word: "utility",
    context: "The **utility** of the new app depends on widespread public adoption.",
    difficulty: "hard",
    synonyms: ["usefulness", "practicality", "value", "functionality"],
    tip: "Can also refer specifically to a public service such as electricity or water."
  },
  {
    word: "adjustment",
    context: "Firms had to make significant **adjustments** to comply with new regulations.",
    difficulty: "easy",
    synonyms: ["modification", "alteration", "adaptation", "change"],
    tip: "A small to moderate change made to improve or correct something."
  },
  {
    word: "alter",
    context: "Climate change is expected to **alter** rainfall patterns across the region.",
    difficulty: "medium",
    synonyms: ["change", "modify", "transform", "adjust"],
    tip: "A more formal alternative to 'change', often used for gradual shifts."
  },
  {
    word: "amendment",
    context: "The proposed **amendment** would extend voting rights to younger citizens.",
    difficulty: "medium",
    synonyms: ["revision", "modification", "alteration", "reform"],
    tip: "A formal change made to a law, contract, or constitution."
  },
  {
    word: "aware",
    context: "Consumers are becoming increasingly **aware** of the environmental cost of fast fashion.",
    difficulty: "easy",
    synonyms: ["conscious", "cognizant", "mindful", "informed"],
    tip: "Having knowledge or perception of a fact or situation."
  },
  {
    word: "capacity",
    context: "Hospitals were operating well beyond their normal **capacity** during the outbreak.",
    difficulty: "medium",
    synonyms: ["ability", "capability", "limit", "volume"],
    tip: "Can mean the maximum amount something can hold, or a person's ability to do something."
  },
  {
    word: "challenge",
    context: "Ageing populations present a significant **challenge** to pension systems.",
    difficulty: "easy",
    synonyms: ["difficulty", "problem", "obstacle", "test"],
    tip: "Something demanding effort or skill to overcome, not merely a minor issue."
  },
  {
    word: "clause",
    context: "A confidentiality **clause** was included in every employee contract.",
    difficulty: "medium",
    synonyms: ["provision", "condition", "stipulation", "term"],
    tip: "A specific section of a legal or formal document."
  },
  {
    word: "compounds",
    context: "Certain chemical **compounds** in the pesticide were later found to be toxic.",
    difficulty: "hard",
    synonyms: ["substances", "mixtures"],
    tip: "A substance formed by combining two or more elements, common in chemistry."
  },
  {
    word: "conflict",
    context: "Resource scarcity has historically been a major driver of armed **conflict**.",
    difficulty: "easy",
    synonyms: ["dispute", "clash", "confrontation", "strife"],
    tip: "A serious disagreement or struggle, ranging from interpersonal to international."
  },
  {
    word: "consultation",
    context: "The reforms followed months of public **consultation** with affected communities.",
    difficulty: "medium",
    synonyms: ["discussion", "deliberation", "dialogue", "conference"],
    tip: "A formal process of seeking opinions before making a decision."
  },
  {
    word: "contact",
    context: "Reduced physical **contact** during lockdowns affected children's social development.",
    difficulty: "easy",
    synonyms: ["interaction", "connection", "communication"],
    tip: "Can be a noun (contact) or verb (to contact someone)."
  },
  {
    word: "decline",
    context: "The industry has experienced a steady **decline** in profitability since 2015.",
    difficulty: "easy",
    synonyms: ["downturn", "drop", "fall", "deterioration"],
    tip: "A gradual and sustained decrease, whether in quantity, quality, or strength."
  },
  {
    word: "discretion",
    context: "Judges are given considerable **discretion** in sentencing minor offences.",
    difficulty: "hard",
    synonyms: ["freedom of judgement", "latitude", "leeway", "autonomy"],
    tip: "The freedom to decide something based on personal judgement rather than fixed rules."
  },
  {
    word: "draft",
    context: "The first **draft** of the bill was heavily criticised by opposition MPs.",
    difficulty: "easy",
    synonyms: ["version", "outline", "manuscript"],
    tip: "A preliminary version of a document, subject to revision."
  },
  {
    word: "enable",
    context: "Faster broadband access can **enable** rural businesses to compete online.",
    difficulty: "easy",
    synonyms: ["allow", "permit", "facilitate", "empower"],
    tip: "To make something possible, often by providing the means to do so."
  },
  {
    word: "energy",
    context: "Investment in renewable **energy** has surged over the past decade.",
    difficulty: "easy",
    synonyms: ["power", "fuel source"],
    tip: "Can refer to physical power sources or, figuratively, to vigour and enthusiasm."
  },
  {
    word: "enforcement",
    context: "Weak **enforcement** of environmental laws undermines their intended impact.",
    difficulty: "medium",
    synonyms: ["implementation", "application", "compliance monitoring"],
    tip: "The process of ensuring that laws or rules are obeyed."
  },
  {
    word: "entities",
    context: "Several private **entities** were involved in managing the public contract.",
    difficulty: "hard",
    synonyms: ["organisations", "bodies", "institutions", "companies"],
    tip: "A general, formal term for any organisation or body with distinct existence."
  },
  {
    word: "equivalent",
    context: "The subsidy is roughly **equivalent** to a month's average wage.",
    difficulty: "medium",
    synonyms: ["comparable", "equal", "corresponding", "parallel"],
    tip: "Having the same value, function, or meaning as something else."
  },
  {
    word: "evolution",
    context: "The **evolution** of consumer habits has forced retailers to adapt quickly.",
    difficulty: "medium",
    synonyms: ["development", "progression", "transformation", "growth"],
    tip: "Gradual change over time, whether biological or figurative."
  },
  {
    word: "expansion",
    context: "The company's rapid **expansion** overseas strained its management capacity.",
    difficulty: "medium",
    synonyms: ["growth", "extension", "enlargement", "spread"],
    tip: "An increase in size, scope, or reach."
  },
  {
    word: "exposure",
    context: "Prolonged **exposure** to social media has been linked to rising anxiety levels.",
    difficulty: "medium",
    synonyms: ["contact with", "subjection to", "vulnerability to"],
    tip: "Being subjected to an influence, condition, or risk over time."
  },
  {
    word: "external",
    context: "The firm sought **external** advice before restructuring its board.",
    difficulty: "easy",
    synonyms: ["outside", "extraneous", "third-party"],
    tip: "Coming from outside a particular system, organisation, or body."
  },
  {
    word: "fundamental",
    context: "Access to education is a **fundamental** right recognised internationally.",
    difficulty: "medium",
    synonyms: ["essential", "basic", "core", "primary"],
    tip: "Forming a necessary base or core part of something, not merely important."
  },
  {
    word: "generated",
    context: "Renewable sources now account for over a third of electricity **generated** nationally.",
    difficulty: "easy",
    synonyms: ["produced", "created", "yielded"],
    tip: "To bring something into existence, often used for energy, revenue, or ideas."
  },
  {
    word: "generation",
    context: "The current **generation** faces unprecedented levels of student debt.",
    difficulty: "easy",
    synonyms: ["age group", "cohort"],
    tip: "Can refer to a group born around the same time, or the process of creating something."
  },
  {
    word: "image",
    context: "The company invested heavily in rebuilding its public **image**.",
    difficulty: "easy",
    synonyms: ["reputation", "perception", "impression"],
    tip: "Can be literal (a picture) or figurative (how something is perceived)."
  },
  {
    word: "liberal",
    context: "A more **liberal** immigration policy has been proposed by opposition parties.",
    difficulty: "medium",
    synonyms: ["permissive", "open", "tolerant", "progressive"],
    tip: "Politically, associated with individual freedom; generally, means open-minded or generous."
  },
  {
    word: "licence",
    context: "Operators must obtain a **licence** before broadcasting on public airwaves.",
    difficulty: "medium",
    synonyms: ["permit", "authorisation", "certification"],
    tip: "Note the British noun spelling 'licence' versus the verb 'license'."
  },
  {
    word: "logic",
    context: "The **logic** behind the policy rests on questionable economic assumptions.",
    difficulty: "medium",
    synonyms: ["reasoning", "rationale", "argument"],
    tip: "The underlying reasoning or principles behind a decision or argument."
  },
  {
    word: "marginal",
    context: "The policy change is likely to have only a **marginal** effect on unemployment.",
    difficulty: "hard",
    synonyms: ["minor", "slight", "negligible", "small"],
    tip: "Refers to a small, often barely noticeable, effect or difference."
  },
  {
    word: "medical",
    context: "Access to affordable **medical** care remains uneven across regions.",
    difficulty: "easy",
    synonyms: ["clinical", "healthcare-related"],
    tip: "Relating to the treatment of illness and the maintenance of health."
  },
  {
    word: "mental",
    context: "**Mental** health awareness has grown significantly among younger generations.",
    difficulty: "easy",
    synonyms: ["psychological", "cognitive", "emotional"],
    tip: "Relating to the mind, as opposed to the body."
  },
  {
    word: "modified",
    context: "The vaccine formula was **modified** to target newer strains of the virus.",
    difficulty: "medium",
    synonyms: ["altered", "adapted", "adjusted", "changed"],
    tip: "To make partial changes to something without transforming it entirely."
  },
  {
    word: "monitoring",
    context: "Continuous **monitoring** of air quality has informed new emissions targets.",
    difficulty: "easy",
    synonyms: ["observation", "surveillance", "tracking", "oversight"],
    tip: "The ongoing observation of a process or system to check for changes."
  },
  {
    word: "network",
    context: "A robust support **network** is crucial for recovering addicts.",
    difficulty: "easy",
    synonyms: ["system", "web", "circle", "grid"],
    tip: "An interconnected system of people, organisations, or infrastructure."
  },
  {
    word: "objective",
    context: "The report's central **objective** was to identify barriers to female employment.",
    difficulty: "medium",
    synonyms: ["goal", "aim", "purpose", "target"],
    tip: "Can also mean 'unbiased' as an adjective, distinct from its noun sense of 'goal'."
  },
  {
    word: "orientation",
    context: "New employee **orientation** now includes mandatory diversity training.",
    difficulty: "medium",
    synonyms: ["induction", "introduction", "briefing"],
    tip: "An introductory process, or figuratively, a general direction or attitude."
  },
  {
    word: "perspective",
    context: "Historians offer a valuable long-term **perspective** on current events.",
    difficulty: "easy",
    synonyms: ["viewpoint", "outlook", "standpoint", "angle"],
    tip: "A particular way of viewing or evaluating something."
  },
  {
    word: "precise",
    context: "**Precise** figures on informal-sector employment are notoriously difficult to obtain.",
    difficulty: "medium",
    synonyms: ["exact", "accurate", "specific", "definite"],
    tip: "Emphasises exactness, especially in figures, language, or instructions."
  },
  {
    word: "prime",
    context: "Reducing bureaucracy was a **prime** objective of the reform agenda.",
    difficulty: "medium",
    synonyms: ["main", "principal", "chief", "foremost"],
    tip: "The most important or significant, especially among several factors."
  },
  {
    word: "psychology",
    context: "Understanding consumer **psychology** helps firms design more effective advertising.",
    difficulty: "medium",
    synonyms: ["mindset", "mentality", "mental processes"],
    tip: "The study of, or the workings of, the human mind and behaviour."
  },
  {
    word: "pursue",
    context: "The government continues to **pursue** a policy of trade liberalisation.",
    difficulty: "medium",
    synonyms: ["follow", "carry out", "pursue further", "chase"],
    tip: "To continue with or follow a course of action, goal, or interest."
  },
  {
    word: "ratio",
    context: "The teacher-to-student **ratio** directly affects the quality of instruction.",
    difficulty: "medium",
    synonyms: ["proportion", "rate", "balance"],
    tip: "A quantitative relationship between two amounts, showing how many times one contains the other."
  },
  {
    word: "rejected",
    context: "The proposal was **rejected** by a narrow margin in parliament.",
    difficulty: "easy",
    synonyms: ["dismissed", "turned down", "declined", "refused"],
    tip: "To refuse to accept, believe, or agree with something."
  },
  {
    word: "revenue",
    context: "Falling tax **revenue** has forced local councils to cut services.",
    difficulty: "easy",
    synonyms: ["income", "earnings", "receipts", "proceeds"],
    tip: "Income generated from business activity or, more broadly, government taxation."
  },
  {
    word: "stability",
    context: "Political **stability** is often a prerequisite for sustained economic growth.",
    difficulty: "medium",
    synonyms: ["steadiness", "constancy", "equilibrium", "security"],
    tip: "A state of being firmly established and unlikely to change suddenly."
  },
  {
    word: "styles",
    context: "Leadership **styles** vary considerably between cultures and generations.",
    difficulty: "easy",
    synonyms: ["approaches", "methods", "manners"],
    tip: "Distinctive ways in which something is done or expressed."
  },
  {
    word: "substitution",
    context: "The rising cost of meat has driven consumer **substitution** toward plant-based proteins.",
    difficulty: "hard",
    synonyms: ["replacement", "swapping", "exchange"],
    tip: "The act of replacing one thing with another."
  },
  {
    word: "sustainable",
    context: "The report questions whether current growth rates are environmentally **sustainable**.",
    difficulty: "medium",
    synonyms: ["viable", "renewable", "maintainable", "durable"],
    tip: "Capable of being maintained over the long term without depleting resources."
  },
  {
    word: "symbolic",
    context: "The treaty's significance was largely **symbolic** rather than practical.",
    difficulty: "medium",
    synonyms: ["representative", "emblematic", "token", "figurative"],
    tip: "Representing something else, often more important than its literal effect."
  },
  {
    word: "target",
    context: "The scheme fell well short of its **target** for reducing carbon emissions.",
    difficulty: "easy",
    synonyms: ["goal", "objective", "aim", "benchmark"],
    tip: "A specific result or level that an effort is designed to achieve."
  },
  {
    word: "transition",
    context: "The **transition** to a low-carbon economy will require substantial investment.",
    difficulty: "medium",
    synonyms: ["shift", "changeover", "conversion", "passage"],
    tip: "The process of changing from one state or condition to another."
  },
  {
    word: "trend",
    context: "The **trend** toward remote work is likely to persist beyond the pandemic.",
    difficulty: "easy",
    synonyms: ["tendency", "pattern", "direction", "movement"],
    tip: "A general direction in which something is developing or changing."
  },
  {
    word: "version",
    context: "An updated **version** of the app addresses several security flaws.",
    difficulty: "easy",
    synonyms: ["edition", "variant", "iteration", "form"],
    tip: "A particular form of something that differs from other forms of the same type."
  },
  {
    word: "welfare",
    context: "Cuts to **welfare** spending disproportionately affect low-income families.",
    difficulty: "medium",
    synonyms: ["well-being", "social security", "benefits"],
    tip: "Refers to the health, happiness, and security of a person or group, or state support for these."
  },
  {
    word: "whereas",
    context: "Urban areas enjoy reliable broadband access, **whereas** rural regions often lack basic connectivity.",
    difficulty: "medium",
    synonyms: ["while", "in contrast", "on the other hand"],
    tip: "A formal connector used to introduce a contrast between two clauses."
  },
  {
    word: "nullify",
    context: "A single clerical error can **nullify** an otherwise valid contract.",
    difficulty: "hard",
    synonyms: ["invalidate", "void", "annul", "cancel", "override"],
    tip: "A formal legal/logical term for making something legally void, not merely weakening it."
  },
  {
    word: "delete",
    context: "Users can request platforms to permanently **delete** their personal data.",
    difficulty: "easy",
    synonyms: ["remove", "erase", "expunge", "eliminate"],
    tip: "Commonly used for digital information, distinct from physical removal."
  },
  {
    word: "sensible",
    context: "A **sensible** compromise was reached after weeks of negotiation.",
    difficulty: "easy",
    synonyms: ["reasonable", "practical", "prudent", "wise"],
    tip: "Do not confuse with 'sensitive' — 'sensible' means showing good judgement."
  },
  {
    word: "awareness",
    context: "Public **awareness** campaigns have helped reduce smoking rates significantly.",
    difficulty: "easy",
    synonyms: ["consciousness", "knowledge", "recognition", "understanding"],
    tip: "Refers to knowing or perceiving a situation, often the goal of educational campaigns."
  },
  {
    word: "information",
    context: "Access to accurate **information** is essential during a public health crisis.",
    difficulty: "easy",
    synonyms: ["data", "facts", "knowledge", "details"],
    tip: "An uncountable noun — never 'informations' in standard English."
  },
  {
    word: "law",
    context: "The new **law** requires firms to disclose data breaches within 72 hours.",
    difficulty: "easy",
    synonyms: ["legislation", "statute", "regulation", "act"],
    tip: "Can refer to a specific rule or, more broadly, the entire legal system."
  },
  {
    word: "propose",
    context: "The committee will **propose** amendments to the current tax code next month.",
    difficulty: "easy",
    synonyms: ["suggest", "put forward", "recommend", "submit"],
    tip: "To formally suggest a plan or idea for consideration."
  },
  {
    word: "assert",
    context: "The report **asserts** that current climate targets are unrealistic without reform.",
    difficulty: "medium",
    synonyms: ["claim", "maintain", "contend", "declare"],
    tip: "Implies confident, forceful statement of a claim, often without full proof."
  },
  {
    word: "rationale",
    context: "The government has yet to provide a clear **rationale** for the policy shift.",
    difficulty: "hard",
    synonyms: ["reasoning", "justification", "basis", "logic"],
    tip: "The underlying set of reasons for a decision or course of action."
  },
  {
    word: "consensus",
    context: "Scientific **consensus** on the issue has strengthened considerably in recent years.",
    difficulty: "medium",
    synonyms: ["agreement", "unanimity", "accord", "common view"],
    tip: "General agreement among a group, especially experts, rather than a formal vote."
  },
  {
    word: "qualified",
    context: "Only **qualified** professionals are permitted to administer the treatment.",
    difficulty: "medium",
    synonyms: ["certified", "licensed", "accredited", "competent"],
    tip: "Can also mean 'limited' or 'conditional', as in 'qualified support'."
  },
  {
    word: "nuanced",
    context: "The debate demands a more **nuanced** understanding than simple for-or-against positions allow.",
    difficulty: "hard",
    synonyms: ["balanced", "sophisticated", "refined", "layered", "subtle"],
    tip: "Describes fine, often overlooked distinctions within a complex issue."
  },
  {
    word: "tentative",
    context: "Negotiators reached a **tentative** agreement pending final approval from both governments.",
    difficulty: "hard",
    synonyms: ["provisional", "preliminary", "uncertain", "conditional"],
    tip: "Signals something not yet fixed or confirmed, open to change."
  }
];
