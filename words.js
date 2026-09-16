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
    synonyms: ["illustrates", "demonstrates", "epitomises", "typifies", "shows"],
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
    word: "achievemnet",
    context: "Little Jim's greatest **achievement** is getting full marks on his spelling test.",
    difficulty: "easy",
    synonyms: ["accomplishment", "accolade", "success", "milestone", "attainment"],
    tip: "think harder"
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
    synonyms: ["transit", "commute", "conveyance", "carriage", "mobility"],
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
    synonyms: ["denying", "withhold from", "stripping", "robbing", "dispossessing"],
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
    synonyms: ["suppressing", "smothering", "restraining", "curbing", "quashing"],
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
    context: "Rising sea levels poses a real threat against humanity, not a distant hypothetical.",
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
    difficulty: "hard",
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
    synonyms: ["scholarly", "scholastic", "academic", "analytical", "learned"],
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
    word: "income",
    context: "Little Jim brings home a monthly **income** of 5 bananas.",
    difficulty: "easy",
    synonyms: ["salary", "wage", "pay", "earning", "compensation"],
    tip: "money earned from a job every month"
  }
];
