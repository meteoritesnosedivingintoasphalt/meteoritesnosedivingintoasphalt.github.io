
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
    synonyms: ["chances", "prospects", "openings", "possibilities", "avenues"],
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
    synonyms: ["exposed", "disclosed", "unveiled", "uncovered", "divulged"],
    tip: "Suggests something previously hidden is now made known."
  },
  {
    word: "infer",
    context: "From the tone of the press release, analysts **inferred** that the merger talks had collapsed.",
    difficulty: "medium",
    synonyms: ["deduced", "concluded", "gathered", "surmised", "extrapolated"],
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
    synonyms: ["denying", "withholding", "stripping", "robbing", "dispossessing"],
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
    context: "Faced with mounting losses, the company decided to **abandon** the project altogether.",
    difficulty: "easy",
    synonyms: ["give up", "forsake", "desert", "relinquish", "discontinue"],
    tip: "Can describe leaving a place, a plan, or a person — always implies a deliberate, often permanent, departure."
  },
  {
    word: "accompanied",
    context: "The proposal was **accompanied** by a detailed cost-benefit analysis.",
    difficulty: "easy",
    synonyms: ["escorted", "coupled with", "attended by", "joined by", "supplemented by"],
    tip: "Often used passively — 'X was accompanied by Y' — to show two things occurring together."
  },
  {
    word: "accumulation",
    context: "Years of **accumulation** of plastic waste have turned parts of the ocean into floating landfills.",
    difficulty: "medium",
    synonyms: ["build-up", "amassing", "gathering", "stockpile", "aggregation"],
    tip: "The noun form of 'accumulate' — describes the gradual gathering of something over time."
  },
  {
    word: "ambiguous",
    context: "The wording of the contract was **ambiguous**, allowing both parties to interpret it differently.",
    difficulty: "medium",
    synonyms: ["unclear", "vague", "equivocal", "open to interpretation", "imprecise"],
    tip: "Describes language or a situation that can reasonably be understood in more than one way."
  },
  {
    word: "appendix",
    context: "Detailed statistical tables were placed in the **appendix** rather than the main body of the report.",
    difficulty: "easy",
    synonyms: ["addendum", "supplement", "annex", "attachment"],
    tip: "A section at the end of a document containing supporting material, not central argument."
  },
  {
    word: "appreciation",
    context: "Studying abroad gave her a deeper **appreciation** of cultural diversity.",
    difficulty: "easy",
    synonyms: ["understanding", "recognition", "awareness", "gratitude", "regard"],
    tip: "Can mean gratitude, or — as here — a deeper understanding and valuing of something."
  },
  {
    word: "arbitrary",
    context: "Critics argued that the fines were **arbitrary**, applied without any consistent standard.",
    difficulty: "hard",
    synonyms: ["random", "capricious", "unsystematic", "subjective", "unjustified"],
    tip: "Implies a decision made without reason or fair system — often a criticism in essays about policy fairness."
  },
  {
    word: "automatically",
    context: "Under the new system, refunds are processed **automatically** without requiring a customer request.",
    difficulty: "easy",
    synonyms: ["mechanically", "without prompting", "spontaneously", "instantly"],
    tip: "Describes something happening by itself, without deliberate human action each time."
  },
  {
    word: "bias",
    context: "Algorithms trained on skewed data can inherit and amplify human **bias**.",
    difficulty: "medium",
    synonyms: ["prejudice", "partiality", "slant", "favouritism", "one-sidedness"],
    tip: "Can be a noun (a bias) or verb (to bias) — central to essays on media and AI fairness."
  },
  {
    word: "chart",
    context: "The report includes a **chart** comparing energy consumption across ten countries.",
    difficulty: "easy",
    synonyms: ["graph", "diagram", "table", "plot"],
    tip: "A visual way of presenting data — distinguish from 'chart' as a verb meaning 'to track' (e.g. 'chart progress')."
  },
  {
    word: "clarity",
    context: "Policymakers called for greater **clarity** in the government's messaging on vaccination.",
    difficulty: "easy",
    synonyms: ["clearness", "transparency", "lucidity", "precision", "coherence"],
    tip: "The noun form of 'clear' — often paired with 'lack of' when criticising communication."
  },
  {
    word: "conformity",
    context: "Schools have been criticised for prioritising **conformity** over individual creativity.",
    difficulty: "medium",
    synonyms: ["compliance", "obedience", "adherence", "uniformity", "conventionality"],
    tip: "Usually implies matching a group norm, sometimes at the expense of independent thought."
  },
  {
    word: "commodity",
    context: "Water is increasingly treated as a **commodity** to be bought and sold rather than a basic right.",
    difficulty: "medium",
    synonyms: ["product", "goods", "resource", "asset", "merchandise"],
    tip: "An economic term for something that can be traded — often used critically when applied to essentials like water or healthcare."
  },
  {
    word: "complement",
    context: "Renewable energy sources can **complement** rather than replace traditional power grids.",
    difficulty: "medium",
    synonyms: ["supplement", "enhance", "complete", "round out", "add to"],
    tip: "Don't confuse with 'compliment' (praise) — 'complement' means to make something more complete."
  },
  {
    word: "contemporary",
    context: "**Contemporary** art often challenges traditional notions of beauty and form.",
    difficulty: "easy",
    synonyms: ["modern", "current", "present-day", "up-to-date", "recent"],
    tip: "Can also mean 'existing at the same time as' something else, not just 'modern'."
  },
  {
    word: "contradiction",
    context: "There is an apparent **contradiction** between the government's climate pledges and its continued approval of new coal mines.",
    difficulty: "medium",
    synonyms: ["inconsistency", "conflict", "discrepancy", "paradox", "incongruity"],
    tip: "Useful for pointing out when a policy or argument doesn't align with itself."
  },
  {
    word: "crucial",
    context: "Access to clean water is **crucial** to reducing child mortality in developing countries.",
    difficulty: "easy",
    synonyms: ["essential", "vital", "critical", "pivotal", "indispensable"],
    tip: "A strong, common way to emphasise importance in an argumentative essay."
  },
  {
    word: "currency",
    context: "Social media has given **currency** to conspiracy theories that would once have gone unnoticed.",
    difficulty: "medium",
    synonyms: ["acceptance", "circulation", "credibility", "traction", "prevalence"],
    tip: "Beyond money, 'currency' can mean the degree to which an idea is accepted or widespread."
  },
  {
    word: "denote",
    context: "In economics, a rising GDP does not necessarily **denote** improved living standards for all citizens.",
    difficulty: "hard",
    synonyms: ["signify", "indicate", "represent", "signal", "mean"],
    tip: "Formal word for 'to be a sign of' — common in analytical or academic writing."
  },
  {
    word: "detected",
    context: "Traces of the chemical were **detected** in water supplies across the region.",
    difficulty: "easy",
    synonyms: ["identified", "discovered", "found", "spotted", "uncovered"],
    tip: "Implies careful observation or testing revealed something not obvious at first."
  },
  {
    word: "deviation",
    context: "Any **deviation** from the standard safety protocol must be reported immediately.",
    difficulty: "hard",
    synonyms: ["departure", "divergence", "variation", "digression", "anomaly"],
    tip: "A move away from what is expected, normal, or standard."
  },
  {
    word: "displacement",
    context: "Rising sea levels have caused the **displacement** of entire coastal communities.",
    difficulty: "hard",
    synonyms: ["relocation", "dislocation", "eviction", "uprooting", "forced movement"],
    tip: "Frequently used in discussions of refugees, climate change, and war."
  },
  {
    word: "dramatic",
    context: "The city saw a **dramatic** rise in housing prices over just two years.",
    difficulty: "easy",
    synonyms: ["striking", "significant", "sharp", "marked", "sudden"],
    tip: "In data-driven essays, 'dramatic' emphasises the size or speed of a change."
  },
  {
    word: "eventually",
    context: "The negotiations dragged on for months but **eventually** produced a compromise.",
    difficulty: "easy",
    synonyms: ["ultimately", "in the end", "finally", "at length"],
    tip: "Signals an outcome after delay — useful for sequencing an argument over time."
  },
  {
    word: "exhibit",
    context: "Patients who **exhibit** early symptoms are prioritised for testing.",
    difficulty: "medium",
    synonyms: ["display", "show", "demonstrate", "manifest", "reveal"],
    tip: "Formal alternative to 'show' — also used as a noun for a museum display."
  },
  {
    word: "exploitation",
    context: "Labour rights groups have condemned the **exploitation** of migrant workers in the construction industry.",
    difficulty: "medium",
    synonyms: ["mistreatment", "abuse", "manipulation", "misuse"],
    tip: "Strongly negative — implies unfairly taking advantage of someone or something for gain."
  },
  {
    word: "fluctuations",
    context: "Currency **fluctuations** can significantly affect the profitability of international trade.",
    difficulty: "medium",
    synonyms: ["variations", "swings", "changes", "oscillations", "instability"],
    tip: "The noun form of 'fluctuate' — typically describes repeated rises and falls, often in prices or markets."
  },
  {
    word: "guidelines",
    context: "The health ministry issued new **guidelines** on acceptable sugar content in children's food.",
    difficulty: "easy",
    synonyms: ["rules", "regulations", "standards", "recommendations", "protocols"],
    tip: "Softer than 'rules' or 'laws' — implies recommended, though not always mandatory, practice."
  },
  {
    word: "highlighted",
    context: "The report **highlighted** the growing gap between urban and rural healthcare access.",
    difficulty: "easy",
    synonyms: ["emphasised", "underscored", "spotlighted", "drew attention to", "stressed"],
    tip: "Useful verb for introducing evidence that supports your essay's main point."
  },
  {
    word: "induced",
    context: "The recession was largely **induced** by a sudden collapse in consumer confidence.",
    difficulty: "hard",
    synonyms: ["caused", "triggered", "brought about", "provoked", "generated"],
    tip: "Formal word for 'caused' — often used in scientific or economic writing about cause and effect."
  },
  {
    word: "inevitably",
    context: "As populations age, healthcare costs will **inevitably** rise.",
    difficulty: "medium",
    synonyms: ["unavoidably", "certainly", "necessarily", "inescapably"],
    tip: "Signals a conclusion the writer sees as unavoidable, given the premises stated."
  },
  {
    word: "infrastructure",
    context: "Investment in digital **infrastructure** has become essential for economic competitiveness.",
    difficulty: "easy",
    synonyms: ["framework", "facilities", "foundation systems", "amenities", "network"],
    tip: "Covers the physical and organisational structures a society needs to function — roads, power grids, networks."
  },
  {
    word: "inspection",
    context: "Routine **inspection** of factory conditions helps prevent workplace accidents.",
    difficulty: "easy",
    synonyms: ["examination", "review", "check", "audit", "survey"],
    tip: "Implies a formal, often official, checking process."
  },
  {
    word: "intensity",
    context: "The **intensity** of the debate reflected how divisive the issue had become.",
    difficulty: "medium",
    synonyms: ["severity", "strength", "force", "vigour", "fervour"],
    tip: "Describes the degree or strength of something — emotion, effort, or a physical force."
  },
  {
    word: "manipulation",
    context: "The scandal exposed the **manipulation** of data to support a predetermined conclusion.",
    difficulty: "medium",
    synonyms: ["distortion", "falsification", "tampering", "engineering", "rigging"],
    tip: "Almost always implies dishonest or unfair influence over facts, people, or outcomes."
  },
  {
    word: "minimised",
    context: "Risks to public health were **minimised** through early and widespread vaccination campaigns.",
    difficulty: "easy",
    synonyms: ["reduced", "lessened", "diminished", "curbed", "played down"],
    tip: "Note the double meaning: to genuinely reduce something, or — more critically — to downplay its importance."
  },
  {
    word: "nuclear",
    context: "Several countries are reconsidering **nuclear** energy as part of their strategy to cut carbon emissions.",
    difficulty: "easy",
    synonyms: ["atomic"],
    tip: "A technical term with limited direct synonyms — usage largely depends on context (energy, weapons, family)."
  },
  {
    word: "offset",
    context: "Companies are encouraged to **offset** their carbon emissions by investing in reforestation projects.",
    difficulty: "medium",
    synonyms: ["counterbalance", "compensate for", "cancel out", "neutralise", "balance"],
    tip: "Implies balancing a negative effect with an equivalent positive one, not eliminating it directly."
  },
  {
    word: "paragraph",
    context: "The opening **paragraph** should clearly state the essay's central argument.",
    difficulty: "easy",
    synonyms: ["passage", "section", "segment"],
    tip: "A structural term — limited synonyms, since it refers specifically to a unit of writing."
  },
  {
    word: "plus",
    context: "The new policy offers, as a **plus**, reduced administrative costs for small businesses.",
    difficulty: "easy",
    synonyms: ["advantage", "benefit", "bonus", "upside"],
    tip: "As a noun, 'a plus' means an advantage — distinct from its use as a conjunction ('salary plus benefits')."
  },
  {
    word: "practitioners",
    context: "Medical **practitioners** have called for stricter regulation of unproven wellness supplements.",
    difficulty: "medium",
    synonyms: ["professionals", "specialists", "experts in the field"],
    tip: "Refers to people who actively work in a profession, especially medicine or law."
  },
  {
    word: "predominantly",
    context: "The workforce in the tech sector remains **predominantly** male in senior roles.",
    difficulty: "hard",
    synonyms: ["mainly", "primarily", "chiefly", "largely", "mostly"],
    tip: "Signals what applies to the majority, while acknowledging some exceptions exist."
  },
  {
    word: "prospect",
    context: "The **prospect** of automation replacing millions of jobs has alarmed labour unions.",
    difficulty: "medium",
    synonyms: ["possibility", "likelihood", "outlook", "chance", "expectation"],
    tip: "Often used for a future possibility that is anticipated, whether hoped for or feared."
  },
  {
    word: "radical",
    context: "The government proposed **radical** reforms to the healthcare funding model.",
    difficulty: "medium",
    synonyms: ["drastic", "fundamental", "extreme", "sweeping", "far-reaching"],
    tip: "Describes change that goes to the root of a system, not a minor adjustment."
  },
  {
    word: "random",
    context: "Participants were selected at **random** to ensure the survey results were unbiased.",
    difficulty: "easy",
    synonyms: ["arbitrary", "unsystematic", "haphazard", "chance-based"],
    tip: "In research contexts, 'random' selection is a deliberate method to avoid bias — not the same as 'careless'."
  },
  {
    word: "reinforced",
    context: "Media coverage of the incident **reinforced** existing public distrust of the institution.",
    difficulty: "medium",
    synonyms: ["strengthened", "bolstered", "confirmed", "solidified", "consolidated"],
    tip: "Suggests making an existing belief, structure, or feeling stronger, not creating a new one."
  },
  {
    word: "restore",
    context: "Conservation efforts aim to **restore** the wetland to its original ecological state.",
    difficulty: "easy",
    synonyms: ["reinstate", "renew", "revive", "repair", "rehabilitate"],
    tip: "Implies bringing something back to a previous, often better, condition."
  },
  {
    word: "revision",
    context: "The textbook underwent extensive **revision** to reflect recent scientific discoveries.",
    difficulty: "easy",
    synonyms: ["amendment", "update", "correction", "rewrite", "modification"],
    tip: "Also commonly used in British English to mean 'studying for an exam' — context determines meaning."
  },
  {
    word: "schedule",
    context: "Construction delays forced the developer to revise the project **schedule**.",
    difficulty: "easy",
    synonyms: ["timetable", "timeline", "programme", "plan"],
    tip: "Can be a noun (a plan of timing) or verb (to schedule an event)."
  },
  {
    word: "tension",
    context: "Rising **tension** between neighbouring states threatened to escalate into open conflict.",
    difficulty: "medium",
    synonyms: ["strain", "friction", "hostility", "unease", "discord"],
    tip: "Can describe relations between people or states, or a stylistic device in literature ('narrative tension')."
  },
  {
    word: "termination",
    context: "The employee challenged the abrupt **termination** of her contract.",
    difficulty: "hard",
    synonyms: ["ending", "cessation", "dismissal", "cancellation", "conclusion"],
    tip: "A formal word for 'ending' — common in legal and employment contexts."
  },
  {
    word: "theme",
    context: "Inequality emerges as a recurring **theme** throughout the author's later novels.",
    difficulty: "easy",
    synonyms: ["topic", "motif", "subject", "thread", "idea"],
    tip: "A central idea that recurs across a text, discussion, or body of work."
  },
  {
    word: "thereby",
    context: "The reform simplified the tax code, **thereby** reducing compliance costs for small firms.",
    difficulty: "hard",
    synonyms: ["as a result", "consequently", "in this way", "by this means"],
    tip: "A formal connective linking an action to its consequence — useful for essay cohesion."
  },
  {
    word: "uniform",
    context: "Critics argue that standardised testing assumes a **uniform** level of preparation among all students.",
    difficulty: "medium",
    synonyms: ["consistent", "unvarying", "identical", "standard", "homogeneous"],
    tip: "As an adjective, means 'the same throughout' — distinct from its everyday meaning as a set of clothing."
  },
  {
    word: "vehicle",
    context: "Public broadcasting can serve as a **vehicle** for promoting civic education.",
    difficulty: "easy",
    synonyms: ["means", "medium", "channel", "instrument", "conduit"],
    tip: "Beyond literal transport, 'vehicle' figuratively means a means of achieving or conveying something."
  },
  {
    word: "via",
    context: "Applications must be submitted **via** the online portal by the end of the month.",
    difficulty: "easy",
    synonyms: ["through", "by means of", "by way of"],
    tip: "A concise, formal way to indicate the method or route by which something happens."
  },
  {
    word: "virtually",
    context: "With most services now available online, bank branches have become **virtually** obsolete in some regions.",
    difficulty: "medium",
    synonyms: ["almost", "nearly", "practically", "essentially"],
    tip: "Means 'almost entirely' — don't confuse with its digital-technology sense (as in 'virtual reality')."
  },
  {
    word: "widespread",
    context: "**Widespread** access to smartphones has transformed how information spreads during emergencies.",
    difficulty: "easy",
    synonyms: ["pervasive", "extensive", "far-reaching", "universal", "common"],
    tip: "Describes something occurring or existing across a broad area or population."
  },
  {
    word: "visual",
    context: "The campaign relied heavily on **visual** imagery to convey the scale of the crisis.",
    difficulty: "easy",
    synonyms: ["pictorial", "graphic", "visible"],
    tip: "Relates to sight — pairs well with nouns like 'aid', 'evidence', or 'representation'."
  },
  {
    word: "adaptation",
    context: "The novel's screen **adaptation** took significant liberties with the original plot.",
    difficulty: "easy",
    synonyms: ["adjustment", "modification", "version", "reworking"],
    tip: "Can mean adjusting to new conditions (biological/social) or reworking a creative text into another form."
  },
  {
    word: "adults",
    context: "The programme was designed for **adults** returning to education after a long break.",
    difficulty: "easy",
    synonyms: ["grown-ups", "mature individuals"],
    tip: "The opposite of 'minors' or 'children' — a neutral, formal term."
  },
  {
    word: "aid",
    context: "International **aid** has helped rebuild infrastructure destroyed by the earthquake.",
    difficulty: "easy",
    synonyms: ["assistance", "support", "relief", "help", "backing"],
    tip: "Also works as a verb ('to aid recovery') — common in essays on development and humanitarian policy."
  },
  {
    word: "channel",
    context: "Social media has become the primary **channel** through which young people receive news.",
    difficulty: "easy",
    synonyms: ["medium", "outlet", "route", "avenue", "conduit"],
    tip: "As a verb, 'to channel' means to direct something toward a particular use or outcome."
  },
  {
    word: "chemical",
    context: "Farmers are being encouraged to reduce their reliance on **chemical** fertilisers.",
    difficulty: "easy",
    synonyms: ["synthetic", "man-made"],
    tip: "As an adjective describes substances produced through chemistry; as a noun, refers to those substances themselves."
  },
  {
    word: "classical",
    context: "**Classical** economic theory assumes that markets naturally move toward equilibrium.",
    difficulty: "medium",
    synonyms: ["traditional", "conventional", "orthodox", "established"],
    tip: "In academic writing, often signals an older or foundational school of thought, later challenged by newer theories."
  },
  {
    word: "comprehensive",
    context: "The report offers a **comprehensive** overview of global migration trends over the last century.",
    difficulty: "medium",
    synonyms: ["thorough", "extensive", "all-encompassing", "exhaustive", "complete"],
    tip: "Suggests nothing important has been left out — a strong word for describing thorough research."
  },
  {
    word: "comprise",
    context: "Women **comprise** less than a third of senior leadership positions in most industries.",
    difficulty: "hard",
    synonyms: ["make up", "constitute", "consist of", "form"],
    tip: "Note: 'X comprises Y' (whole comprises parts), not 'X is comprised of Y' — though the latter is common in informal use."
  },
  {
    word: "confirmed",
    context: "Laboratory tests **confirmed** the presence of the contaminant in the water supply.",
    difficulty: "easy",
    synonyms: ["verified", "validated", "corroborated", "substantiated"],
    tip: "Implies evidence has removed earlier doubt about a claim."
  },
  {
    word: "contrary",
    context: "**Contrary** to popular belief, most refugees do not wish to permanently resettle abroad.",
    difficulty: "medium",
    synonyms: ["opposite", "conflicting", "opposed", "contradictory"],
    tip: "The phrase 'contrary to' is a strong essay opener for challenging a common assumption."
  },
  {
    word: "converted",
    context: "The old textile mill was **converted** into affordable housing units.",
    difficulty: "easy",
    synonyms: ["transformed", "changed", "adapted", "repurposed", "modified"],
    tip: "Implies a change in form or function while some underlying structure remains."
  },
  {
    word: "couple",
    context: "A **couple** of policy adjustments could substantially reduce the deficit.",
    difficulty: "easy",
    synonyms: ["a few", "a small number of", "two or three"],
    tip: "Informally means 'a small, imprecise number' — avoid in very formal writing in favour of 'a few' or 'several'."
  },
  {
    word: "decades",
    context: "It has taken **decades** of research to develop an effective malaria vaccine.",
    difficulty: "easy",
    synonyms: ["tens of years", "a long period"],
    tip: "Useful for emphasising the scale of time involved in slow-moving change."
  },
  {
    word: "definite",
    context: "There is no **definite** answer to whether automation will create more jobs than it destroys.",
    difficulty: "easy",
    synonyms: ["certain", "clear-cut", "conclusive", "fixed", "unambiguous"],
    tip: "Implies certainty or clarity — often used in the negative to signal genuine uncertainty in an issue."
  },
  {
    word: "deny",
    context: "The company continues to **deny** any responsibility for the environmental damage.",
    difficulty: "easy",
    synonyms: ["reject", "refute", "dispute", "repudiate", "disclaim"],
    tip: "Implies rejecting a claim or accusation as false, whether or not it actually is."
  },
  {
    word: "differentiation",
    context: "Product **differentiation** allows companies to compete on more than just price.",
    difficulty: "hard",
    synonyms: ["distinction", "diversification", "distinguishing", "separation"],
    tip: "Common in business and marketing writing to describe how one thing is set apart from similar things."
  },
  {
    word: "disposal",
    context: "Improper **disposal** of electronic waste poses a growing environmental hazard.",
    difficulty: "medium",
    synonyms: ["discarding", "removal", "dumping", "elimination"],
    tip: "The phrase 'at someone's disposal' means available for their use — a different sense worth knowing."
  },
  {
    word: "dynamic",
    context: "The relationship between the two nations remains a **dynamic** and ever-shifting one.",
    difficulty: "medium",
    synonyms: ["evolving", "fluid", "changeable", "active", "energetic"],
    tip: "The opposite of 'static' — implies constant change or energy."
  },
  {
    word: "equipment",
    context: "Hospitals in rural areas often lack the **equipment** needed for advanced diagnostics.",
    difficulty: "easy",
    synonyms: ["apparatus", "machinery", "gear", "tools", "instruments"],
    tip: "An uncountable noun — never 'equipments' or 'an equipment'."
  },
  {
    word: "extract",
    context: "Researchers were able to **extract** valuable insights from years of anonymised health data.",
    difficulty: "medium",
    synonyms: ["derive", "draw out", "obtain", "distil", "glean"],
    tip: "Also a noun ('a book extract') meaning a short excerpt taken from a larger work."
  },
  {
    word: "file",
    context: "Investigative journalists compiled a detailed **file** on the company's offshore accounts.",
    difficulty: "easy",
    synonyms: ["record", "dossier", "document"],
    tip: "As a verb, 'to file' means to submit officially — 'to file a complaint' or 'to file a report'."
  },
  {
    word: "finite",
    context: "Fossil fuels are a **finite** resource, unlike solar or wind energy.",
    difficulty: "medium",
    synonyms: ["limited", "restricted", "exhaustible", "bounded"],
    tip: "The opposite of 'infinite' — central to essays on sustainability and resource management."
  },
  {
    word: "foundation",
    context: "Early childhood education lays the **foundation** for lifelong learning.",
    difficulty: "easy",
    synonyms: ["basis", "groundwork", "bedrock", "footing", "cornerstone"],
    tip: "Figuratively describes the essential base on which something else is built."
  },
  {
    word: "global",
    context: "Climate change is fundamentally a **global** problem requiring coordinated international action.",
    difficulty: "easy",
    synonyms: ["worldwide", "international", "universal", "planetary"],
    tip: "The opposite of 'local' or 'national' — signals a scale beyond any single country."
  },
  {
    word: "grade",
    context: "Students are assigned a numerical **grade** based on their performance across the semester.",
    difficulty: "easy",
    synonyms: ["mark", "score", "rating", "rank"],
    tip: "Can also mean a level of quality ('a high-grade material'), not just an academic score."
  },
  {
    word: "guarantee",
    context: "No policy can **guarantee** complete protection against future economic downturns.",
    difficulty: "easy",
    synonyms: ["assure", "promise", "ensure", "warrant", "pledge"],
    tip: "Implies a firm, certain commitment — useful for essays questioning whether such certainty is realistic."
  },
  {
    word: "hierarchical",
    context: "Traditional **hierarchical** management structures are increasingly being replaced by flatter, team-based ones.",
    difficulty: "hard",
    synonyms: ["ranked", "layered", "graded", "tiered", "stratified"],
    tip: "Describes a system organised by rank or level of authority."
  },
  {
    word: "identical",
    context: "Even genetically **identical** twins can develop different personalities due to environment.",
    difficulty: "easy",
    synonyms: ["indistinguishable", "the same", "matching", "alike"],
    tip: "Stronger than 'similar' — implies no difference at all."
  },
  {
    word: "ideology",
    context: "Political parties often disagree less on facts than on underlying **ideology**.",
    difficulty: "hard",
    synonyms: ["belief system", "doctrine", "philosophy", "worldview", "creed"],
    tip: "A coherent set of beliefs, especially political or economic, that shapes how someone interprets events."
  },
  {
    word: "inferred",
    context: "From the declining sales figures, analysts **inferred** that consumer confidence was weakening.",
    difficulty: "medium",
    synonyms: ["deduced", "concluded", "gathered", "surmised"],
    tip: "The past tense of 'infer' — to draw a conclusion from indirect evidence."
  },
  {
    word: "innovation",
    context: "Continuous **innovation** has allowed the company to stay ahead of its competitors.",
    difficulty: "easy",
    synonyms: ["invention", "advancement", "breakthrough", "novelty", "creativity"],
    tip: "Refers to the introduction of new ideas or methods, not just new products."
  },
  {
    word: "insert",
    context: "Editors may **insert** footnotes to clarify technical terms for a general audience.",
    difficulty: "easy",
    synonyms: ["add", "introduce", "incorporate", "embed", "include"],
    tip: "Implies placing something within an existing structure, rather than appending it at the end."
  },
  {
    word: "intervention",
    context: "Early **intervention** significantly improves outcomes for children with developmental delays.",
    difficulty: "medium",
    synonyms: ["involvement", "interference", "action", "mediation"],
    tip: "Can be positive (medical, educational) or contested (political or military intervention) depending on context."
  },
  {
    word: "isolated",
    context: "Remote and **isolated** communities often face greater barriers to accessing healthcare.",
    difficulty: "easy",
    synonyms: ["remote", "secluded", "cut off", "detached", "solitary"],
    tip: "Can describe physical remoteness or, figuratively, social or emotional disconnection."
  },
  {
    word: "media",
    context: "The **media** plays a powerful role in shaping public perception of political events.",
    difficulty: "easy",
    synonyms: ["press", "news outlets", "broadcasters"],
    tip: "Technically the plural of 'medium', but commonly treated as singular in modern usage ('the media is...')."
  },
  {
    word: "mode",
    context: "Remote work has become a common **mode** of employment since the pandemic.",
    difficulty: "medium",
    synonyms: ["method", "manner", "form", "style", "way"],
    tip: "A formal, versatile word for 'way of doing something' — 'mode of transport', 'mode of communication'."
  },
  {
    word: "phenomenon",
    context: "Viral misinformation is not a new **phenomenon**, but social media has accelerated its spread.",
    difficulty: "hard",
    synonyms: ["occurrence", "event", "development", "happening"],
    tip: "Plural is 'phenomena' — a common error is treating 'phenomena' as singular."
  },
  {
    word: "priority",
    context: "Governments must decide whether economic growth or environmental protection takes **priority**.",
    difficulty: "easy",
    synonyms: ["precedence", "primary concern", "main focus"],
    tip: "The phrase 'take priority over' is useful for essays weighing competing goals."
  },
  {
    word: "prohibited",
    context: "Smoking in enclosed public spaces is now **prohibited** in most countries.",
    difficulty: "easy",
    synonyms: ["banned", "forbidden", "outlawed", "barred", "disallowed"],
    tip: "A formal, legal-sounding alternative to 'not allowed'."
  },
  {
    word: "publication",
    context: "The **publication** of the leaked report triggered widespread public outrage.",
    difficulty: "easy",
    synonyms: ["release", "issuing", "printing", "dissemination"],
    tip: "Can refer to the act of publishing, or to the published item itself (a newspaper, a journal)."
  },
  {
    word: "quotation",
    context: "The essay opens with a **quotation** from a leading economist on the dangers of protectionism.",
    difficulty: "easy",
    synonyms: ["citation", "extract", "excerpt"],
    tip: "Also means a price estimate for a job or service — context determines which sense applies."
  },
  {
    word: "release",
    context: "The central bank's **release** of new interest rate data caused markets to fluctuate.",
    difficulty: "easy",
    synonyms: ["publication", "issuance", "announcement", "disclosure"],
    tip: "Works as both noun and verb — 'the release of information' or 'to release information'."
  },
  {
    word: "reverse",
    context: "Some economists argue the tax cuts had the **reverse** effect of what was intended.",
    difficulty: "easy",
    synonyms: ["opposite", "contrary", "inverse", "converse"],
    tip: "As a verb, 'to reverse' means to undo or turn back a decision or trend."
  },
  {
    word: "simulation",
    context: "Pilots train extensively using flight **simulations** before ever operating a real aircraft.",
    difficulty: "medium",
    synonyms: ["model", "reconstruction", "emulation", "reproduction"],
    tip: "A representation of a real situation used for training or testing, without real-world consequences."
  },
  {
    word: "solely",
    context: "The proposal should not be judged **solely** on its short-term cost.",
    difficulty: "medium",
    synonyms: ["exclusively", "only", "purely", "entirely"],
    tip: "Signals that a single factor is being considered to the exclusion of all others — often used to critique a narrow view."
  },
  {
    word: "somewhat",
    context: "Public opinion on the policy has shifted **somewhat** since it was first introduced.",
    difficulty: "easy",
    synonyms: ["slightly", "to some extent", "moderately", "rather"],
    tip: "A hedging word useful for qualifying claims without overstating them."
  },
  {
    word: "submitted",
    context: "The revised budget was **submitted** to parliament for approval last week.",
    difficulty: "easy",
    synonyms: ["presented", "put forward", "handed in", "tendered"],
    tip: "Formal word for handing something over for consideration or approval."
  },
  {
    word: "successive",
    context: "The region has suffered **successive** years of drought, straining its water reserves.",
    difficulty: "medium",
    synonyms: ["consecutive", "sequential", "back-to-back", "uninterrupted"],
    tip: "Emphasises that events occurred one after another without a break, unlike 'successful'."
  },
  {
    word: "survive",
    context: "Small businesses struggled to **survive** the prolonged economic downturn.",
    difficulty: "easy",
    synonyms: ["endure", "persist", "withstand", "outlast", "weather"],
    tip: "Can apply literally (life) or figuratively (an organisation, a tradition, a relationship)."
  },
  {
    word: "thesis",
    context: "The author's central **thesis** is that inequality, not poverty, drives social unrest.",
    difficulty: "hard",
    synonyms: ["argument", "proposition", "claim", "central idea"],
    tip: "In academic writing, refers to the main argument a piece of writing seeks to prove."
  },
  {
    word: "topic",
    context: "Immigration remains one of the most divisive **topics** in contemporary politics.",
    difficulty: "easy",
    synonyms: ["subject", "issue", "theme", "matter"],
    tip: "A neutral, general word for what a discussion or piece of writing is about."
  },
  {
    word: "transmission",
    context: "Improved sanitation has drastically reduced the **transmission** of waterborne diseases.",
    difficulty: "medium",
    synonyms: ["spread", "transfer", "propagation", "conveyance"],
    tip: "Common in both public health ('disease transmission') and technology ('data transmission') contexts."
  },
  {
    word: "ultimately",
    context: "**Ultimately**, the success of the policy will depend on how consistently it is enforced.",
    difficulty: "medium",
    synonyms: ["finally", "in the end", "eventually", "fundamentally"],
    tip: "Useful for signalling the final, most important point in an argument's conclusion."
  },
  {
    word: "unique",
    context: "Each ecosystem faces a **unique** combination of environmental pressures.",
    difficulty: "easy",
    synonyms: ["distinctive", "singular", "one-of-a-kind", "unparalleled"],
    tip: "Technically absolute — avoid 'very unique' or 'more unique', since something either is or isn't one of a kind."
  },
  {
    word: "visible",
    context: "The effects of coastal erosion are already **visible** along much of the shoreline.",
    difficulty: "easy",
    synonyms: ["apparent", "evident", "noticeable", "observable", "perceptible"],
    tip: "Can describe something literally seen, or figuratively 'evident' from evidence."
  },
  {
    word: "voluntary",
    context: "Participation in the wellness programme remains entirely **voluntary**.",
    difficulty: "easy",
    synonyms: ["optional", "discretionary", "unforced", "elective"],
    tip: "The opposite of 'mandatory' or 'compulsory' — a key contrast in essays on policy design."
  },
  {
    word: "abstract",
    context: "The theory remains largely **abstract**, with little practical application demonstrated so far.",
    difficulty: "medium",
    synonyms: ["theoretical", "conceptual", "intangible", "hypothetical"],
    tip: "The opposite of 'concrete' — also a noun meaning a short summary of a research paper."
  },
  {
    word: "accurate",
    context: "Reliable policymaking depends on **accurate** and up-to-date data.",
    difficulty: "easy",
    synonyms: ["precise", "exact", "correct", "reliable", "faithful"],
    tip: "Emphasises correctness and freedom from error, especially in measurement or reporting."
  },
  {
    word: "acknowledged",
    context: "The report **acknowledged** the limitations of its own sample size.",
    difficulty: "medium",
    synonyms: ["admitted", "recognised", "conceded", "accepted"],
    tip: "Useful in essays for showing balanced argument — 'while it is acknowledged that...'"
  },
  {
    word: "aggregate",
    context: "The **aggregate** demand for housing has outpaced supply in most major cities.",
    difficulty: "hard",
    synonyms: ["total", "combined", "cumulative", "overall", "sum"],
    tip: "Refers to a whole formed by combining several elements — common in economics."
  },
  {
    word: "allocation",
    context: "The government faced criticism over its **allocation** of pandemic relief funds.",
    difficulty: "medium",
    synonyms: ["distribution", "apportionment", "assignment", "allotment"],
    tip: "Refers to how a limited resource is divided among different uses or groups."
  },
  {
    word: "assigned",
    context: "Each student was **assigned** a mentor for the duration of the programme.",
    difficulty: "easy",
    synonyms: ["allocated", "designated", "appointed", "given"],
    tip: "Implies a deliberate, often official, act of allotting a task, role, or resource."
  },
  {
    word: "attached",
    context: "There is often a stigma **attached** to seeking help for mental health issues.",
    difficulty: "easy",
    synonyms: ["associated", "linked", "connected", "tied"],
    tip: "Figuratively means 'connected to' — separate from its literal sense of physically joined."
  },
  {
    word: "author",
    context: "The policy's original **author** later admitted the reform had unintended consequences.",
    difficulty: "easy",
    synonyms: ["writer", "creator", "originator", "architect"],
    tip: "Can refer to a book's writer, or more broadly, the person responsible for creating a plan or idea."
  },
  {
    word: "bond",
    context: "Shared hardship during the crisis strengthened the **bond** between the two communities.",
    difficulty: "easy",
    synonyms: ["connection", "tie", "link", "relationship"],
    tip: "Also a financial term for a type of debt investment — context clarifies which meaning applies."
  },
  {
    word: "brief",
    context: "Lawyers were given only a **brief** window to review the new evidence.",
    difficulty: "easy",
    synonyms: ["short", "concise", "fleeting", "momentary"],
    tip: "As a noun, 'a brief' means a set of instructions — as an adjective, it means short in duration."
  },
  {
    word: "capable",
    context: "Modern AI systems are increasingly **capable** of tasks once thought to require human judgement.",
    difficulty: "easy",
    synonyms: ["able", "competent", "skilled", "proficient", "qualified"],
    tip: "Usually followed by 'of' — 'capable of achieving', 'capable of handling'."
  },
  {
    word: "cited",
    context: "The report **cited** several independent studies to support its conclusions.",
    difficulty: "medium",
    synonyms: ["referenced", "quoted", "referred to", "mentioned"],
    tip: "Implies referring to a source as evidence, distinct from simply 'mentioning' something in passing."
  },
  {
    word: "cooperative",
    context: "Tackling climate change requires a **cooperative** effort between nations, not unilateral action.",
    difficulty: "easy",
    synonyms: ["collaborative", "joint", "unified", "mutual"],
    tip: "The opposite of 'unilateral' or 'individualistic' — implies working together toward a shared goal."
  },
  {
    word: "discrimination",
    context: "Anti-discrimination laws aim to protect employees from unfair treatment based on gender or race.",
    difficulty: "medium",
    synonyms: ["prejudice", "bias", "unfair treatment", "inequity"],
    tip: "Almost always negative in modern usage — implies unjust treatment based on group identity."
  },
  {
    word: "display",
    context: "The museum's new **display** features artefacts recovered from the shipwreck.",
    difficulty: "easy",
    synonyms: ["exhibition", "showcase", "presentation", "exhibit"],
    tip: "As a verb, 'to display' means to show — as a noun, an arrangement meant to be seen."
  },
  {
    word: "diversity",
    context: "Companies increasingly recognise that **diversity** in hiring leads to more innovative teams.",
    difficulty: "easy",
    synonyms: ["variety", "heterogeneity", "range", "multiplicity"],
    tip: "Refers to a range of different types — people, ideas, or species — within a group."
  },
  {
    word: "domain",
    context: "Artificial intelligence is expanding rapidly into the **domain** of creative work.",
    difficulty: "medium",
    synonyms: ["field", "sphere", "area", "realm", "territory"],
    tip: "A formal word for a particular area of activity, knowledge, or authority."
  },
  {
    word: "edition",
    context: "The tenth **edition** of the textbook includes an updated chapter on digital ethics.",
    difficulty: "easy",
    synonyms: ["version", "issue", "release"],
    tip: "Specifically refers to a particular version of a published work, distinct from 'copy' (a single instance of it)."
  },
  {
    word: "enhanced",
    context: "**Enhanced** border security measures were introduced following the incident.",
    difficulty: "easy",
    synonyms: ["improved", "strengthened", "upgraded", "boosted", "augmented"],
    tip: "Implies making something already functional better, not creating it from scratch."
  },
  {
    word: "estate",
    context: "Rising property taxes have made it harder for families to pass down their **estate**.",
    difficulty: "medium",
    synonyms: ["property", "assets", "holdings", "land"],
    tip: "Can refer to a person's total property and possessions, or a large area of land or housing."
  },
  {
    word: "exceed",
    context: "Global temperatures are on track to **exceed** the 1.5-degree threshold within decades.",
    difficulty: "easy",
    synonyms: ["surpass", "go beyond", "outstrip", "overtake"],
    tip: "Implies going past a limit, target, or expectation."
  },
  {
    word: "expert",
    context: "Public health **experts** urged caution before lifting pandemic restrictions.",
    difficulty: "easy",
    synonyms: ["specialist", "authority", "professional", "connoisseur"],
    tip: "Useful for citing credible sources in argumentative writing — 'experts argue that...'"
  },
  {
    word: "explicit",
    context: "The contract contains an **explicit** clause prohibiting the resale of the product.",
    difficulty: "medium",
    synonyms: ["clear", "direct", "unambiguous", "specific", "stated outright"],
    tip: "The opposite of 'implicit' — something stated directly rather than merely suggested."
  },
  {
    word: "federal",
    context: "**Federal** funding for public transport has lagged behind urban population growth.",
    difficulty: "medium",
    synonyms: ["national", "central government"],
    tip: "Refers to the central, national level of government in a federal system, as opposed to state or local."
  },
  {
    word: "fees",
    context: "Rising university **fees** have prompted debate over the affordability of higher education.",
    difficulty: "easy",
    synonyms: ["charges", "costs", "tuition", "payments"],
    tip: "Typically refers to payments required for a service, such as education or membership."
  },
  {
    word: "flexibility",
    context: "Remote work has given employees greater **flexibility** over their daily schedules.",
    difficulty: "easy",
    synonyms: ["adaptability", "versatility", "adjustability", "freedom"],
    tip: "The opposite of 'rigidity' — implies the ability to adapt to changing circumstances."
  },
  {
    word: "furthermore",
    context: "The policy has proven costly to implement; **furthermore**, early results suggest it has had little effect.",
    difficulty: "easy",
    synonyms: ["moreover", "in addition", "besides", "additionally"],
    tip: "A formal connective for adding a further supporting point to an argument."
  },
  {
    word: "gender",
    context: "The report examines the **gender** pay gap across different industries.",
    difficulty: "easy",
    synonyms: ["sex (in some contexts)"],
    tip: "In academic and social contexts, distinguished from biological sex as a social and cultural construct."
  },
  {
    word: "ignored",
    context: "Warnings about the levee's structural weaknesses were repeatedly **ignored** by officials.",
    difficulty: "easy",
    synonyms: ["disregarded", "overlooked", "dismissed", "neglected"],
    tip: "Implies a conscious failure to pay attention to something that should have been addressed."
  },
  {
    word: "incentive",
    context: "Tax breaks act as an **incentive** for companies to invest in renewable energy.",
    difficulty: "medium",
    synonyms: ["motivation", "inducement", "encouragement", "stimulus", "reward"],
    tip: "Something that encourages a particular behaviour — central to essays on policy design."
  },
  {
    word: "incidence",
    context: "The **incidence** of childhood obesity has risen sharply over the past two decades.",
    difficulty: "hard",
    synonyms: ["occurrence", "rate", "frequency", "prevalence"],
    tip: "Don't confuse with 'incident' (a single event) — 'incidence' refers to the rate at which something occurs."
  },
  {
    word: "incorporated",
    context: "Feedback from residents was **incorporated** into the final version of the urban plan.",
    difficulty: "medium",
    synonyms: ["included", "integrated", "absorbed", "embedded"],
    tip: "Implies something has been combined into a larger, existing whole."
  },
  {
    word: "index",
    context: "The consumer price **index** is used to track inflation over time.",
    difficulty: "medium",
    synonyms: ["indicator", "measure", "gauge", "benchmark"],
    tip: "A standardised measure used to track change — also refers to an alphabetical list at the back of a book."
  },
  {
    word: "inhibition",
    context: "Social media can lower people's **inhibition** about sharing personal opinions publicly.",
    difficulty: "hard",
    synonyms: ["restraint", "reluctance", "hesitation", "self-consciousness"],
    tip: "Refers to a psychological or social barrier that holds someone back from acting freely."
  },
  {
    word: "initiatives",
    context: "The city launched several green **initiatives** aimed at reducing carbon emissions.",
    difficulty: "medium",
    synonyms: ["programmes", "schemes", "measures", "projects", "campaigns"],
    tip: "Refers to new plans or actions intended to achieve a specific goal."
  },
  {
    word: "input",
    context: "Public **input** was sought before the new zoning laws were finalised.",
    difficulty: "easy",
    synonyms: ["contribution", "feedback", "opinion", "involvement"],
    tip: "Can refer to information contributed to a decision, or resources fed into a process (economic 'inputs')."
  },
  {
    word: "instructions",
    context: "The manual's **instructions** were unclear, leading to widespread installation errors.",
    difficulty: "easy",
    synonyms: ["directions", "guidelines", "directives", "orders"],
    tip: "Implies a set of steps to be followed, often given some authority or expertise."
  },
  {
    word: "intelligence",
    context: "Emotional **intelligence** is increasingly valued alongside technical skill in the workplace.",
    difficulty: "medium",
    synonyms: ["intellect", "cognitive ability", "acumen", "aptitude"],
    tip: "Can refer to mental capability broadly, or, in security contexts, to gathered information."
  },
  {
    word: "interval",
    context: "Data was collected at regular **intervals** throughout the six-month study.",
    difficulty: "medium",
    synonyms: ["period", "gap", "span", "break"],
    tip: "Refers to the space of time between two points or events."
  },
  {
    word: "lecture",
    context: "The professor's opening **lecture** outlined the key debates in development economics.",
    difficulty: "easy",
    synonyms: ["talk", "presentation", "address", "seminar"],
    tip: "As a verb, 'to lecture someone' can also mean to scold them at length — a more critical sense."
  },
  {
    word: "migration",
    context: "Climate-driven **migration** is expected to displace millions in the coming decades.",
    difficulty: "medium",
    synonyms: ["relocation", "movement", "resettlement", "exodus"],
    tip: "Refers to large-scale movement of people (or animals) from one place to another."
  },
  {
    word: "minimum",
    context: "The proposed law would raise the **minimum** wage for all full-time workers.",
    difficulty: "easy",
    synonyms: ["lowest", "least", "smallest", "bare minimum"],
    tip: "The opposite of 'maximum' — often paired with 'wage', 'requirement', or 'standard'."
  },
  {
    word: "ministry",
    context: "The **ministry** of health issued new guidelines on vaccine distribution.",
    difficulty: "easy",
    synonyms: ["department", "government agency"],
    tip: "Refers to a specific branch of government responsible for a policy area."
  },
  {
    word: "motivation",
    context: "Financial incentives alone are often insufficient to sustain long-term employee **motivation**.",
    difficulty: "easy",
    synonyms: ["drive", "incentive", "impetus", "inspiration", "determination"],
    tip: "Refers to the underlying reason or drive behind a person's actions."
  },
  {
    word: "neutral",
    context: "International mediators are expected to remain **neutral** throughout the peace negotiations.",
    difficulty: "easy",
    synonyms: ["impartial", "unbiased", "objective", "non-partisan"],
    tip: "Implies not favouring either side — important for essays discussing fairness or objectivity."
  },
  {
    word: "nevertheless",
    context: "The trial was expensive and time-consuming; **nevertheless**, researchers deemed it worthwhile.",
    difficulty: "medium",
    synonyms: ["nonetheless", "even so", "however", "still"],
    tip: "A formal connective used to introduce a point that contrasts with what came before."
  },
  {
    word: "overseas",
    context: "Many students choose to pursue postgraduate studies **overseas** for broader career opportunities.",
    difficulty: "easy",
    synonyms: ["abroad", "foreign", "international"],
    tip: "Specifically implies travel across the sea — used more in British English than American English."
  },
  {
    word: "preceding",
    context: "The **preceding** chapter outlined the historical context for the policy shift discussed here.",
    difficulty: "hard",
    synonyms: ["previous", "prior", "foregoing", "earlier"],
    tip: "Refers to what came immediately before, often within a text or sequence of events."
  },
  {
    word: "presumption",
    context: "The court operates on the **presumption** of innocence until guilt is proven.",
    difficulty: "hard",
    synonyms: ["assumption", "supposition", "premise", "expectation"],
    tip: "Refers to something accepted as true without direct proof, often as a starting point for reasoning."
  },
  {
    word: "rational",
    context: "Behavioural economists have shown that people do not always act in a **rational** manner.",
    difficulty: "medium",
    synonyms: ["logical", "reasonable", "sensible", "sound"],
    tip: "The opposite of 'irrational' or 'emotional' — implies decisions based on reason rather than feeling."
  },
  {
    word: "recovery",
    context: "Economic **recovery** following the pandemic has been uneven across different sectors.",
    difficulty: "easy",
    synonyms: ["rebound", "revival", "resurgence", "comeback"],
    tip: "Refers to a return to a previous, healthier state after a decline."
  },
  {
    word: "revealed",
    context: "Internal documents **revealed** that executives were aware of the safety risks for years.",
    difficulty: "easy",
    synonyms: ["exposed", "disclosed", "uncovered", "divulged"],
    tip: "Implies something previously hidden or unknown has now been made public."
  },
  {
    word: "scope",
    context: "The investigation's **scope** was later widened to include the company's overseas operations.",
    difficulty: "medium",
    synonyms: ["extent", "range", "breadth", "reach", "ambit"],
    tip: "Refers to the range of matters a plan, study, or inquiry covers."
  },
  {
    word: "subsidiary",
    context: "The parent company transferred its riskiest assets to an offshore **subsidiary**.",
    difficulty: "hard",
    synonyms: ["branch", "affiliate", "division", "offshoot"],
    tip: "A company controlled by another, larger company — also used as an adjective meaning 'secondary in importance'."
  },
  {
    word: "tapes",
    context: "Investigators reviewed hours of security **tapes** to reconstruct the sequence of events.",
    difficulty: "easy",
    synonyms: ["recordings", "footage"],
    tip: "Now used loosely for any recorded footage, even when no physical tape is involved."
  },
  {
    word: "trace",
    context: "Investigators could not **trace** the source of the leaked documents.",
    difficulty: "easy",
    synonyms: ["track down", "locate", "pinpoint", "follow"],
    tip: "As a noun, 'a trace' means a very small amount or faint sign of something."
  },
  {
    word: "transformation",
    context: "Digital technology has driven a fundamental **transformation** in how retail businesses operate.",
    difficulty: "medium",
    synonyms: ["change", "conversion", "metamorphosis", "overhaul"],
    tip: "Implies a thorough, often dramatic, change in form or nature."
  },
  {
    word: "underlying",
    context: "Addressing the **underlying** causes of poverty requires more than short-term relief measures.",
    difficulty: "medium",
    synonyms: ["fundamental", "root", "basic", "core", "inherent"],
    tip: "Refers to a cause or factor that is not immediately obvious but drives what is visible on the surface."
  },
  {
    word: "utility",
    context: "Smartphones have largely replaced single-purpose devices due to their sheer **utility**.",
    difficulty: "hard",
    synonyms: ["usefulness", "practicality", "functionality", "value"],
    tip: "Also refers to public services like electricity and water — 'utility bills'."
  },
  {
    word: "adjustment",
    context: "The transition to remote work required a significant **adjustment** in how teams communicated.",
    difficulty: "easy",
    synonyms: ["adaptation", "modification", "change", "recalibration"],
    tip: "Implies a smaller, incremental change rather than a complete transformation."
  },
  {
    word: "alter",
    context: "Even small policy changes can **alter** consumer behaviour in unpredictable ways.",
    difficulty: "easy",
    synonyms: ["change", "modify", "adjust", "amend", "transform"],
    tip: "A neutral, versatile verb for 'to change' — works for both minor and major changes."
  },
  {
    word: "amendment",
    context: "Lawmakers proposed an **amendment** to close a loophole in the tax code.",
    difficulty: "medium",
    synonyms: ["revision", "modification", "alteration", "change", "correction"],
    tip: "Usually refers specifically to a change made to a law, constitution, or formal document."
  },
  {
    word: "aware",
    context: "Consumers are becoming more **aware** of the environmental cost of fast fashion.",
    difficulty: "easy",
    synonyms: ["conscious", "informed", "cognisant", "mindful"],
    tip: "Usually followed by 'of' — 'aware of the risks', 'aware of the consequences'."
  },
  {
    word: "capacity",
    context: "Hospitals were operating well beyond their **capacity** during the peak of the outbreak.",
    difficulty: "medium",
    synonyms: ["capability", "ability", "potential", "limit", "volume"],
    tip: "Can mean the maximum amount something can hold, or a person's ability to do something."
  },
  {
    word: "challenge",
    context: "Balancing economic growth with environmental protection remains a persistent **challenge**.",
    difficulty: "easy",
    synonyms: ["difficulty", "obstacle", "hurdle", "problem", "test"],
    tip: "Also a verb — 'to challenge' means to question or dispute something."
  },
  {
    word: "clause",
    context: "A confidentiality **clause** prevented former employees from discussing the settlement.",
    difficulty: "medium",
    synonyms: ["provision", "stipulation", "condition", "term"],
    tip: "Refers to a specific section within a legal or formal document."
  },
  {
    word: "compounds",
    context: "Chemists identified several toxic **compounds** in the industrial runoff.",
    difficulty: "hard",
    synonyms: ["substances", "mixtures", "combinations"],
    tip: "As a verb, 'to compound' means to make a problem worse — a distinct, essay-relevant usage."
  },
  {
    word: "conflict",
    context: "Resource scarcity has historically been a major driver of armed **conflict**.",
    difficulty: "easy",
    synonyms: ["dispute", "clash", "confrontation", "strife", "struggle"],
    tip: "Can describe anything from an interpersonal disagreement to full-scale war."
  },
  {
    word: "consultation",
    context: "The government held a public **consultation** before finalising the new planning laws.",
    difficulty: "medium",
    synonyms: ["discussion", "deliberation", "dialogue", "conference"],
    tip: "Implies a formal process of seeking opinions before making a decision."
  },
  {
    word: "contact",
    context: "Reducing physical **contact** during the outbreak was central to slowing transmission.",
    difficulty: "easy",
    synonyms: ["interaction", "communication", "connection"],
    tip: "As a verb, 'to contact someone' means to communicate with them."
  },
  {
    word: "decline",
    context: "The industry has experienced a steady **decline** in demand over the past five years.",
    difficulty: "easy",
    synonyms: ["fall", "drop", "downturn", "deterioration", "reduction"],
    tip: "Can be a noun (a decline in sales) or a verb (sales declined, or to decline an offer)."
  },
  {
    word: "discretion",
    context: "Judges are often given considerable **discretion** in sentencing decisions.",
    difficulty: "hard",
    synonyms: ["judgement", "latitude", "leeway", "autonomy"],
    tip: "Refers to the freedom to make decisions based on one's own judgement, within limits."
  },
  {
    word: "draft",
    context: "The committee circulated a **draft** of the proposal for feedback before the final vote.",
    difficulty: "easy",
    synonyms: ["outline", "preliminary version", "blueprint", "rough copy"],
    tip: "Implies an unfinished version, subject to revision before it is finalised."
  },
  {
    word: "enable",
    context: "Advances in mobile technology have **enabled** millions to access banking for the first time.",
    difficulty: "easy",
    synonyms: ["allow", "facilitate", "permit", "empower", "make possible"],
    tip: "Implies making something possible, often by removing a previous obstacle."
  },
  {
    word: "energy",
    context: "Investment in renewable **energy** has accelerated as the cost of solar panels has fallen.",
    difficulty: "easy",
    synonyms: ["power", "fuel"],
    tip: "In physics, a technical term for the capacity to do work; in policy contexts, usually refers to power sources."
  },
  {
    word: "enforcement",
    context: "Weak **enforcement** undermines even the most well-designed environmental regulations.",
    difficulty: "medium",
    synonyms: ["implementation", "application", "administration", "policing"],
    tip: "Refers to making sure rules or laws are actually followed, not just written."
  },
  {
    word: "entities",
    context: "Multiple government **entities** were involved in coordinating the disaster response.",
    difficulty: "hard",
    synonyms: ["organisations", "bodies", "institutions", "agencies"],
    tip: "A formal, neutral term for distinct organisations or things treated as a single unit."
  },
  {
    word: "equivalent",
    context: "The stipend is roughly **equivalent** to a month's rent in the city.",
    difficulty: "medium",
    synonyms: ["equal", "comparable", "corresponding", "matching"],
    tip: "Implies two things are of the same value or amount, even if not identical in form."
  },
  {
    word: "evolution",
    context: "The **evolution** of workplace culture has accelerated since the shift to remote work.",
    difficulty: "medium",
    synonyms: ["development", "progression", "growth", "transformation"],
    tip: "Implies gradual change over time, as opposed to a sudden, deliberate transformation."
  },
  {
    word: "expansion",
    context: "Rapid urban **expansion** has placed increasing strain on the city's water supply.",
    difficulty: "easy",
    synonyms: ["growth", "extension", "enlargement", "spread"],
    tip: "Implies growth in size, scope, or scale."
  },
  {
    word: "exposure",
    context: "Prolonged **exposure** to air pollution has been linked to respiratory illness.",
    difficulty: "medium",
    synonyms: ["contact with", "vulnerability to", "susceptibility"],
    tip: "Can refer to physical exposure (to a substance) or figurative exposure (to ideas, media, or risk)."
  },
  {
    word: "external",
    context: "The company brought in **external** consultants to review its financial practices.",
    difficulty: "easy",
    synonyms: ["outside", "outward", "exterior"],
    tip: "The opposite of 'internal' — signals something originating outside a given system or organisation."
  },
  {
    word: "fundamental",
    context: "Access to clean water is a **fundamental** human need, not a luxury.",
    difficulty: "easy",
    synonyms: ["basic", "essential", "core", "underlying", "elementary"],
    tip: "Describes something so central it cannot be removed without changing the nature of the whole."
  },
  {
    word: "generated",
    context: "The new policy is expected to have **generated** thousands of jobs within its first year.",
    difficulty: "easy",
    synonyms: ["produced", "created", "brought about", "yielded"],
    tip: "Implies something has been actively produced or brought into being, often as a by-product of a process."
  },
  {
    word: "generation",
    context: "Each **generation** faces a distinct set of economic challenges shaped by the era they grew up in.",
    difficulty: "easy",
    synonyms: ["age group", "cohort", "era"],
    tip: "Can refer to a group of people of similar age, or the process of producing something (energy generation)."
  },
  {
    word: "image",
    context: "The scandal severely damaged the company's public **image**.",
    difficulty: "easy",
    synonyms: ["reputation", "perception", "impression", "profile"],
    tip: "Figuratively refers to how something or someone is perceived by others, not just a visual picture."
  },
  {
    word: "liberal",
    context: "**Liberal** democracies generally place strong emphasis on individual rights and free expression.",
    difficulty: "medium",
    synonyms: ["progressive", "open-minded", "tolerant"],
    tip: "Has both a political sense (a philosophy of governance) and a general sense (open-minded, generous)."
  },
  {
    word: "licence",
    context: "Operating without a valid business **licence** can result in significant fines.",
    difficulty: "easy",
    synonyms: ["permit", "authorisation", "certification"],
    tip: "British spelling of the noun; 'license' is the verb in British English ('to license a product')."
  },
  {
    word: "logic",
    context: "Critics questioned the **logic** behind cutting funding for preventive healthcare.",
    difficulty: "medium",
    synonyms: ["reasoning", "rationale", "sense", "coherence"],
    tip: "Refers to a structured line of reasoning connecting evidence to a conclusion."
  },
  {
    word: "marginal",
    context: "The reforms produced only a **marginal** improvement in overall literacy rates.",
    difficulty: "hard",
    synonyms: ["minor", "slight", "negligible", "small"],
    tip: "In economics, refers specifically to the effect of one additional unit — 'marginal cost', 'marginal benefit'."
  },
  {
    word: "medical",
    context: "Advances in **medical** technology have significantly extended average life expectancy.",
    difficulty: "easy",
    synonyms: ["clinical", "health-related"],
    tip: "Relates specifically to medicine and healthcare, as distinct from 'mental' or 'physical' more broadly."
  },
  {
    word: "mental",
    context: "Workplace stress can take a serious toll on employees' **mental** health.",
    difficulty: "easy",
    synonyms: ["psychological", "cognitive", "emotional"],
    tip: "Relates to the mind, as opposed to 'physical', which relates to the body."
  },
  {
    word: "modified",
    context: "The vaccine formula was **modified** to better target newer variants of the virus.",
    difficulty: "easy",
    synonyms: ["altered", "adjusted", "adapted", "revised", "amended"],
    tip: "Implies a change made to improve or update something already in existence."
  },
  {
    word: "monitoring",
    context: "Continuous **monitoring** of water quality helps detect contamination early.",
    difficulty: "easy",
    synonyms: ["tracking", "surveillance", "observation", "oversight"],
    tip: "Implies ongoing, systematic observation rather than a one-off check."
  },
  {
    word: "network",
    context: "Refugees often rely on informal support **networks** to navigate life in a new country.",
    difficulty: "easy",
    synonyms: ["system", "web", "grid", "connections"],
    tip: "Can describe physical infrastructure (a transport network) or social connections (a support network)."
  },
  {
    word: "objective",
    context: "The programme's main **objective** is to reduce youth unemployment by ten percent.",
    difficulty: "easy",
    synonyms: ["goal", "aim", "purpose", "target"],
    tip: "As an adjective, 'objective' also means impartial — distinct from its noun sense of a goal."
  },
  {
    word: "orientation",
    context: "New employees attend a two-day **orientation** to familiarise themselves with company policies.",
    difficulty: "medium",
    synonyms: ["induction", "introduction", "briefing"],
    tip: "Can refer to an introductory programme, or more abstractly, a person's attitude or direction ('political orientation')."
  },
  {
    word: "perspective",
    context: "Hearing from affected communities offers a valuable **perspective** often missing from policy debates.",
    difficulty: "easy",
    synonyms: ["viewpoint", "standpoint", "outlook", "angle"],
    tip: "Refers to a particular way of viewing or interpreting a situation."
  },
  {
    word: "precise",
    context: "The exact economic impact of the policy is difficult to state with **precise** figures.",
    difficulty: "easy",
    synonyms: ["exact", "accurate", "specific", "definite"],
    tip: "Emphasises exactness — useful for essays discussing the reliability of data."
  },
  {
    word: "prime",
    context: "Urban centres remain **prime** targets for infrastructure investment due to population density.",
    difficulty: "medium",
    synonyms: ["principal", "main", "leading", "foremost"],
    tip: "As an adjective, means of first importance — also used as a verb meaning to prepare someone or something."
  },
  {
    word: "psychology",
    context: "Understanding consumer **psychology** helps companies design more effective advertising.",
    difficulty: "medium",
    synonyms: ["mindset", "mentality", "thought processes"],
    tip: "Refers to the study of the mind, or, more loosely, a person's or group's typical way of thinking."
  },
  {
    word: "pursue",
    context: "Many graduates now **pursue** careers outside their original field of study.",
    difficulty: "easy",
    synonyms: ["follow", "chase", "seek", "aim for", "strive for"],
    tip: "Implies sustained effort toward a goal, not a single action."
  },
  {
    word: "ratio",
    context: "The student-to-teacher **ratio** has a measurable impact on classroom outcomes.",
    difficulty: "medium",
    synonyms: ["proportion", "rate", "balance"],
    tip: "Expresses the quantitative relationship between two amounts."
  },
  {
    word: "rejected",
    context: "The proposal was **rejected** by the committee due to concerns over its long-term cost.",
    difficulty: "easy",
    synonyms: ["turned down", "dismissed", "declined", "refused"],
    tip: "Implies a formal or deliberate refusal to accept something."
  },
  {
    word: "revenue",
    context: "A significant share of government **revenue** comes from indirect taxation.",
    difficulty: "easy",
    synonyms: ["income", "earnings", "receipts", "proceeds"],
    tip: "Refers specifically to money generated through business or government activity, not personal wages."
  },
  {
    word: "stability",
    context: "Political **stability** is often a precondition for sustained foreign investment.",
    difficulty: "easy",
    synonyms: ["steadiness", "security", "constancy", "equilibrium"],
    tip: "The opposite of 'volatility' or 'instability' — implies a lack of sudden or disruptive change."
  },
  {
    word: "styles",
    context: "Teaching **styles** must adapt to accommodate a wide range of learning needs.",
    difficulty: "easy",
    synonyms: ["approaches", "methods", "manners", "techniques"],
    tip: "Refers to a distinctive way of doing something, often reflecting personal or cultural preference."
  },
  {
    word: "substitution",
    context: "The rising cost of meat has led many consumers toward plant-based **substitution**.",
    difficulty: "hard",
    synonyms: ["replacement", "swap", "alternative"],
    tip: "Refers to replacing one thing with another, often of similar function."
  },
  {
    word: "sustainable",
    context: "Balancing economic growth with environmental limits is central to achieving **sustainable** development.",
    difficulty: "medium",
    synonyms: ["renewable", "viable long-term", "eco-friendly", "enduring"],
    tip: "Implies something can continue indefinitely without depleting the resources it depends on."
  },
  {
    word: "symbolic",
    context: "The treaty's signing was largely **symbolic**, with few binding obligations attached.",
    difficulty: "hard",
    synonyms: ["representative", "emblematic", "figurative", "token"],
    tip: "Implies something represents a larger idea, often without substantial practical effect."
  },
  {
    word: "target",
    context: "The government set an ambitious **target** to cut carbon emissions by half within a decade.",
    difficulty: "easy",
    synonyms: ["goal", "objective", "aim", "benchmark"],
    tip: "As a verb, 'to target' means to specifically aim at or focus on a particular group or outcome."
  },
  {
    word: "transition",
    context: "The **transition** to a low-carbon economy will require significant investment in new infrastructure.",
    difficulty: "medium",
    synonyms: ["shift", "changeover", "conversion", "move"],
    tip: "Implies a gradual passage from one state or condition to another."
  },
  {
    word: "trend",
    context: "The **trend** toward remote work is likely to persist even after the pandemic subsides.",
    difficulty: "easy",
    synonyms: ["pattern", "movement", "direction", "tendency"],
    tip: "Describes a general direction in which something is developing over time."
  },
  {
    word: "version",
    context: "The updated **version** of the app addresses several long-standing security flaws.",
    difficulty: "easy",
    synonyms: ["edition", "variant", "iteration", "form"],
    tip: "Refers to a particular form of something that exists in multiple, similar forms."
  },
  {
    word: "welfare",
    context: "Critics argue that cuts to **welfare** programmes disproportionately affect the most vulnerable.",
    difficulty: "easy",
    synonyms: ["wellbeing", "social support", "public assistance"],
    tip: "Can mean general wellbeing, or specifically government support for those in need."
  },
  {
    word: "whereas",
    context: "Manufacturing output rose in the north, **whereas** it declined sharply in the south.",
    difficulty: "medium",
    synonyms: ["while", "in contrast", "on the other hand"],
    tip: "A formal connective for highlighting a contrast between two clauses."
  },
  {
    word: "cope",
    context: "Without adequate mental health support, many students struggle to **cope** with academic pressure.",
    difficulty: "easy",
    synonyms: ["manage", "deal with", "handle", "get by", "endure"],
    tip: "Usually followed by 'with' — 'cope with stress', 'cope with change'."
  },
  {
    word: "power",
    context: "Authoritarian leaders often consolidate **power** by weakening independent institutions.",
    difficulty: "easy",
    synonyms: ["authority", "control", "influence", "dominance", "command"],
    tip: "Can refer to political authority, physical strength, or energy — context determines which sense applies."
  },
  {
    word: "abuse",
    context: "Executives were accused of **abusing** their position to secure favourable contracts for family members.",
    difficulty: "medium",
    synonyms: ["misuse", "exploit", "take advantage of", "mistreat"],
    tip: "As used here, 'abuse' means to misuse a position or power, not physical harm."
  },
  {
    word: "selfish",
    context: "Critics dismissed the executive's decision as **selfish**, prioritising short-term bonuses over the company's survival.",
    difficulty: "easy",
    synonyms: ["self-centred", "egotistical", "self-serving", "inconsiderate"],
    tip: "The opposite of 'altruistic' — implies prioritising one's own interest at others' expense."
  },
  {
    word: "discord",
    context: "The controversial ruling sowed **discord** within the party, splitting members into rival factions.",
    difficulty: "hard",
    synonyms: ["conflict", "disagreement", "friction", "disunity", "strife"],
    tip: "A formal, slightly literary word for disagreement or tension within a group."
  },
  {
    word: "criticise",
    context: "Environmental groups **criticised** the government for approving the pipeline without a full impact assessment.",
    difficulty: "easy",
    synonyms: ["condemn", "denounce", "censure", "fault", "rebuke"],
    tip: "British spelling; 'criticize' is the American spelling — both mean to express disapproval."
  },
  {
    word: "incalculable",
    context: "The long-term cost of losing biodiversity is arguably **incalculable**, extending far beyond economic measures.",
    difficulty: "hard",
    synonyms: ["immeasurable", "inestimable", "boundless", "untold"],
    tip: "Emphasises that something is too vast or complex to be precisely quantified."
  },
  {
    word: "trauma",
    context: "Survivors of the disaster often carry psychological **trauma** long after the physical damage has been repaired.",
    difficulty: "medium",
    synonyms: ["distress", "anguish", "psychological injury", "shock"],
    tip: "In everyday use it's often used loosely, but in a clinical sense it refers to a deeply distressing experience with lasting effects."
  },
  {
    word: "story",
    context: "The documentary tells the **story** of a community rebuilding after decades of industrial decline.",
    difficulty: "easy",
    synonyms: ["account", "narrative", "tale", "chronicle"],
    tip: "Can mean a factual account or a fictional narrative — context clarifies which is meant."
  },
  {
    word: "lives",
    context: "The new vaccine has already saved countless **lives** across the region.",
    difficulty: "easy",
    synonyms: ["existences", "personal circumstances", "everyday realities"],
    tip: "The plural of 'life' — often paired with verbs like 'save', 'change', or 'affect' to emphasise human impact."
  },
  {
    word: "accountability",
    context: "Whistle-blower protections are essential for maintaining **accountability** within large corporations.",
    difficulty: "medium",
    synonyms: ["responsibility", "answerability", "liability", "transparency"],
    tip: "Refers to being answerable for one's actions or decisions, especially to those affected by them."
  },
  {
    word: "cynical",
    context: "Years of broken campaign promises have left many voters **cynical** about politics altogether.",
    difficulty: "medium",
    synonyms: ["sceptical", "distrustful", "jaded", "disillusioned"],
    tip: "Implies a general distrust of others' motives, often born from repeated disappointment."
  },
  {
    word: "overgeneralisation",
    context: "Dismissing an entire generation as lazy is an **overgeneralisation** that ignores significant individual variation.",
    difficulty: "hard",
    synonyms: ["sweeping statement", "generalisation", "broad-brush claim", "stereotype"],
    tip: "A logical flaw where a conclusion drawn from limited cases is applied too broadly — useful for critiquing weak arguments."
  },
  {
    word: "attention span",
    context: "Educators worry that constant notifications are shortening students' **attention span**.",
    difficulty: "medium",
    synonyms: ["concentration span", "focus", "ability to concentrate"],
    tip: "Refers to the length of time a person can sustain focus on a single task."
  },
  {
    word: "epiphany",
    context: "It was only after losing his job that he had an **epiphany** about the fragility of his previous lifestyle.",
    difficulty: "hard",
    synonyms: ["revelation", "realisation", "moment of insight", "awakening"],
    tip: "A sudden, often life-changing realisation — stronger and more personal than simply 'understanding'."
  },
  {
    word: "occasional",
    context: "Beyond the **occasional** setback, the recovery has generally stayed on track.",
    difficulty: "easy",
    synonyms: ["infrequent", "sporadic", "intermittent", "periodic"],
    tip: "Describes something happening now and then, rather than regularly or constantly."
  },
  {
    word: "elicit",
    context: "The survey was designed to **elicit** honest feedback from employees who might otherwise stay silent.",
    difficulty: "hard",
    synonyms: ["draw out", "evoke", "provoke", "bring about", "extract"],
    tip: "Don't confuse with 'illicit' (illegal) — 'elicit' means to draw out a response or reaction."
  },
  {
    word: "obsession",
    context: "Social media has fuelled an unhealthy **obsession** with curated, idealised images of everyday life.",
    difficulty: "medium",
    synonyms: ["fixation", "preoccupation", "compulsion", "infatuation"],
    tip: "Implies an excessive, often unhealthy, degree of focus on a single idea or activity."
  },
  {
    word: "unabashedly",
    context: "The film is **unabashedly** stylised, making no attempt to portray its violence realistically.",
    difficulty: "hard",
    synonyms: ["unapologetically", "openly", "shamelessly", "boldly"],
    tip: "Signals that something is done without embarrassment or hesitation, even if it might invite criticism."
  },
  {
    word: "choreographed",
    context: "Every fight scene felt meticulously **choreographed**, prioritising visual spectacle over narrative logic.",
    difficulty: "medium",
    synonyms: ["staged", "orchestrated", "planned", "arranged"],
    tip: "Originally a term for dance, now widely used for any carefully planned sequence of movement or action."
  },
  {
    word: "dazzling",
    context: "Critics praised the film's **dazzling** visual effects, even as they questioned its shallow characterisation.",
    difficulty: "medium",
    synonyms: ["stunning", "spectacular", "brilliant", "impressive"],
    tip: "Describes something so striking it almost overwhelms the senses — often used of visuals or performances."
  },
  {
    word: "theatrical",
    context: "The villain's **theatrical** speeches undercut the story's attempt to feel grounded and realistic.",
    difficulty: "medium",
    synonyms: ["dramatic", "exaggerated", "stagey", "melodramatic"],
    tip: "Can describe genuine stage drama, or, more critically, behaviour that seems performed rather than sincere."
  },
  {
    word: "music",
    context: "The film's score uses **music** to heighten tension during its most dramatic sequences.",
    difficulty: "easy",
    synonyms: ["score", "soundtrack", "composition"],
    tip: "In film criticism, 'score' specifically refers to the music composed for a film, distinct from licensed songs."
  },
  {
    word: "destroy",
    context: "A single scandal can **destroy** a reputation built over decades.",
    difficulty: "easy",
    synonyms: ["ruin", "demolish", "devastate", "wreck", "obliterate"],
    tip: "Can be literal (physical destruction) or figurative (a reputation, a relationship, an argument)."
  },
  {
    word: "complexity",
    context: "Reducing the conflict to a simple story of good versus evil ignores its underlying **complexity**.",
    difficulty: "medium",
    synonyms: ["intricacy", "complication", "nuance", "sophistication"],
    tip: "Refers to the degree to which something involves many interconnected parts or considerations."
  },
  {
    word: "fidelity to the creed",
    context: "The vigilante's absolute **fidelity to the creed** left no room for compromise, even when compromise seemed the more humane choice.",
    difficulty: "hard",
    synonyms: ["loyalty to the code", "devotion to the principle", "strict adherence to the doctrine"],
    tip: "A formal phrase for unwavering loyalty to a set of guiding principles or beliefs."
  },
  {
    word: "idealised",
    context: "The film presents an **idealised** version of heroism, glossing over the moral compromises real vigilantism would involve.",
    difficulty: "hard",
    synonyms: ["romanticised", "glorified", "glamorised", "sanitised"],
    tip: "Implies presenting something as better or purer than it would be in reality."
  },
  {
    word: "vigilante",
    context: "The story follows a **vigilante** who takes justice into his own hands after losing faith in the legal system.",
    difficulty: "medium",
    synonyms: ["self-appointed enforcer", "one-man justice-seeker", "masked avenger"],
    tip: "Refers to someone who enforces the law without legal authority — a recurring figure in debates about justice and due process."
  },
  {
    word: "belief",
    context: "The character's unwavering **belief** in his own righteousness blinds him to the harm his actions cause.",
    difficulty: "easy",
    synonyms: ["conviction", "faith", "certainty", "confidence"],
    tip: "Can refer to religious faith, or more generally, a firmly held opinion or conviction."
  },
  {
    word: "emulate",
    context: "Young viewers may be tempted to **emulate** the vigilante's methods without grasping their real-world consequences.",
    difficulty: "hard",
    synonyms: ["imitate", "copy", "mimic", "model oneself on"],
    tip: "Implies imitating someone specifically because you admire them, not just copying at random."
  },
  {
    word: "consume",
    context: "Teenagers now **consume** the majority of their entertainment through short-form video rather than television.",
    difficulty: "medium",
    synonyms: ["watch", "view", "take in", "absorb"],
    tip: "As used here, 'consume' means to watch or engage with media, distinct from its literal sense of eating or using up resources."
  },
  {
    word: "bystander",
    context: "The film raises uncomfortable questions about the moral responsibility of the **bystander** who does nothing to intervene.",
    difficulty: "medium",
    synonyms: ["onlooker", "witness", "observer", "spectator"],
    tip: "Refers to someone present at an event who does not participate — often invoked in discussions of moral responsibility."
  }
];
