
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
    synonyms: ["worsen", "aggravate", "intensify", "compound", "inflame", "heighten", "deteriorate"],
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
    synonyms: ["practical", "realistic", "sensible", "down-to-earth", "matter-of-fact", "functional"],
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
    synonyms: ["diverse", "assorted", "numerous", "a range of", "multiple", "myriad"],
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
    synonyms: ["lexicon", "word bank", "terminology", "word choice", "diction", "language", "words"],
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
    synonyms: ["give up", "forsake", "desert", "relinquish", "discontinue", "disregard", "ignore"],
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
    synonyms: ["change", "conversion", "metamorphosis", "overhaul", "revolutionary", "great change"],
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
    synonyms: ["psychological", "cognitive", "emotional", "brain", "mind"],
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
  },
  {
    word: "rights",
    context: "Campaigners argue that animals deserve legal **rights** that shield them from needless suffering.",
    difficulty: "medium",
    synonyms: ["entitlements", "privileges", "freedoms", "prerogatives", "claims"],
    tip: "Moral or legal claims that a person or being is entitled to — closely tied to 'entitlements' and 'freedoms'."
  },
  {
    word: "scale",
    context: "Few people grasp the sheer **scale** of food waste in wealthy nations.",
    difficulty: "medium",
    synonyms: ["magnitude", "extent", "size", "enormity", "proportions"],
    tip: "Refers to the size or extent of something, especially something large or serious."
  },
  {
    word: "amenities",
    context: "The new estate is popular with families thanks to its **amenities**, including parks, libraries and sports halls.",
    difficulty: "medium",
    synonyms: ["facilities", "services", "conveniences", "comforts", "resources"],
    tip: "Facilities or features that make a place comfortable or convenient to live in — almost always plural."
  },
  {
    word: "treatment",
    context: "The **treatment** of migrant workers in the construction industry has drawn sharp criticism from human rights groups.",
    difficulty: "medium",
    synonyms: ["handling", "management", "dealings with", "conduct towards"],
    tip: "Here it means how someone is handled or dealt with; in medicine it means care given for an illness."
  },
  {
    word: "stark",
    context: "The pandemic exposed a **stark** contrast between those who could work from home and those who could not.",
    difficulty: "medium",
    synonyms: ["sharp", "glaring", "striking", "marked", "pronounced", "unmistakable"],
    tip: "Often paired with 'contrast', 'reality' or 'warning' — signals something plain and impossible to ignore."
  },
  {
    word: "healthy",
    context: "Older adults who stay socially active tend to remain **healthy** for longer.",
    difficulty: "easy",
    synonyms: ["hale", "robust", "fit", "vigorous", "hearty"],
    tip: "'Hale' is a formal, slightly old-fashioned word for healthy, usually used of older people ('hale and hearty')."
  },
  {
    word: "physical",
    context: "Chronic stress takes a **physical** toll, from headaches to heart disease.",
    difficulty: "easy",
    synonyms: ["bodily", "corporeal", "somatic"],
    tip: "Relates to the body rather than the mind — a common contrast in essays on health and wellbeing."
  },
  {
    word: "sarcastic",
    context: "Her **sarcastic** remarks about the new policy drew laughter but did little to advance the debate.",
    difficulty: "medium",
    synonyms: ["mocking", "sardonic", "ironic", "scornful", "caustic", "biting", "satirical"],
    tip: "Implies saying one thing while meaning the opposite, in order to mock or wound."
  },
  {
    word: "experiences",
    context: "Travel exposes young people to **experiences** that no classroom can replicate.",
    difficulty: "easy",
    synonyms: ["encounters", "adventures", "episodes", "events", "incidents"],
    tip: "As a noun, an event or occurrence that a person lives through — common in essays on personal growth."
  },
  {
    word: "experiencing",
    context: "Communities **experiencing** rapid population decline often struggle to keep basic services running.",
    difficulty: "easy",
    synonyms: ["undergoing", "encountering", "facing", "enduring", "going through", "suffering"],
    tip: "Means living through or undergoing something; often paired with difficult states such as hardship or decline."
  },
  {
    word: "intertwine",
    context: "Poverty and poor health **intertwine** in ways that make each harder to escape.",
    difficulty: "hard",
    synonyms: ["interlink", "interweave", "interconnect", "entwine", "entangle", "twist together"],
    tip: "Suggests two things becoming so closely woven together that they are hard to separate."
  },
  {
    word: "proximity",
    context: "Residents complained about the factory's **proximity** to the primary school.",
    difficulty: "medium",
    synonyms: ["closeness", "nearness", "adjacency", "vicinity"],
    tip: "Nearness in space, time or relationship — usually followed by 'to'."
  },
  {
    word: "sentient",
    context: "Growing evidence that many animals are **sentient** has strengthened calls for stricter welfare laws.",
    difficulty: "hard",
    synonyms: ["conscious", "aware", "feeling", "capable of feeling"],
    tip: "Able to perceive and feel things — central to debates about animal welfare and artificial intelligence."
  },
  {
    word: "devastation",
    context: "The **devastation** felt by families who lost their livelihoods was compounded by months of official silence.",
    difficulty: "medium",
    synonyms: ["desolation", "grief", "distress", "anguish", "despair", "heartbreak"],
    tip: "Here it describes overwhelming emotional shock and grief; it can also mean widespread physical destruction, so let context decide."
  },
  {
    word: "overcome",
    context: "Many refugees **overcome** enormous obstacles to rebuild their lives abroad.",
    difficulty: "medium",
    synonyms: ["surmount", "conquer", "defeat", "beat", "rise above"],
    tip: "Implies successfully defeating a difficulty, not merely coping with it."
  },
  {
    word: "distressing",
    context: "Footage of the flooding proved so **distressing** that broadcasters issued warnings to viewers.",
    difficulty: "medium",
    synonyms: ["upsetting", "harrowing", "disturbing", "traumatic", "painful", "heartbreaking"],
    tip: "Causing upset, anxiety or pain — stronger than 'unpleasant'."
  },
  {
    word: "resolve",
    context: "Despite repeated setbacks, the team's **resolve** never wavered.",
    difficulty: "medium",
    synonyms: ["determination", "tenacity", "steadfastness", "firmness", "grit", "perseverance"],
    tip: "As a noun, firm determination to keep going; as a verb it means to settle a problem, so watch the sense."
  },
  {
    word: "quixotic",
    context: "Critics dismissed the pledge to eradicate poverty within a decade as **quixotic**.",
    difficulty: "hard",
    synonyms: ["idealistic", "unrealistic", "impractical", "utopian", "starry-eyed", "fanciful"],
    tip: "From Don Quixote — describes idealism that is noble in spirit but impractical."
  },
  {
    word: "deadly",
    context: "Health officials warned that the virus could prove **deadly** for elderly patients.",
    difficulty: "easy",
    synonyms: ["fatal", "lethal", "life-threatening", "mortal", "fatally"],
    tip: "Capable of causing death; 'lethal' stresses the power to kill, while 'fatal' often describes an outcome."
  },
  {
    word: "awry",
    context: "Even carefully drafted plans can go **awry** when circumstances change without warning.",
    difficulty: "hard",
    synonyms: ["wrong", "amiss", "askew", "astray", "off course", "off track"],
    tip: "Almost always appears in the phrase 'go awry' — meaning to go wrong or off course."
  },
  {
    word: "deliberately",
    context: "The company **deliberately** understated the risks in order to reassure nervous investors.",
    difficulty: "easy",
    synonyms: ["intentionally", "purposely", "knowingly", "on purpose", "wilfully", "consciously"],
    tip: "Signals that an act was planned and fully conscious rather than accidental — important when assigning blame."
  },
  {
    word: "hamper",
    context: "Bureaucratic red tape can **hamper** efforts to deliver aid quickly.",
    difficulty: "medium",
    synonyms: ["hinder", "impede", "obstruct", "hold back", "restrict", "prevent"],
    tip: "To make progress difficult or slow; it stops short of blocking something entirely."
  },
  {
    word: "mistrust",
    context: "Repeated scandals have deepened public **mistrust** of the press.",
    difficulty: "medium",
    synonyms: ["doubt", "distrust", "suspicion", "scepticism", "wariness", "misgiving"],
    tip: "A general lack of trust or confidence in someone or something, often built up over time."
  },
  {
    word: "unfounded",
    context: "Claims that the new policy will destroy small businesses appear largely **unfounded**.",
    difficulty: "medium",
    synonyms: ["groundless", "unsupported", "baseless", "unjustified", "unsubstantiated"],
    tip: "Describes claims, fears or suspicions that have no evidence behind them."
  },
  {
    word: "sensationalising",
    context: "Tabloid newspapers are often accused of **sensationalising** minor incidents to boost sales.",
    difficulty: "hard",
    synonyms: ["exaggerating", "dramatising", "overplaying", "embellishing", "hyping", "overhyping"],
    tip: "Presenting events in an exaggerated, shocking way to attract attention — usually a criticism of the media."
  },
  {
    word: "paralysed",
    context: "Political infighting has **paralysed** the government, leaving urgent reforms stalled.",
    difficulty: "medium",
    synonyms: ["immobilised", "crippled", "incapacitated", "hamstrung", "unable to function", "brought to a standstill"],
    tip: "Literally means unable to move; figuratively, unable to act or function effectively."
  },
  {
    word: "unparalleled",
    context: "The city's rapid growth has created **unparalleled** demand for affordable housing.",
    difficulty: "hard",
    synonyms: ["unprecedented", "unmatched", "unrivalled", "unequalled", "peerless", "unsurpassed", "without equal"],
    tip: "Means having no equal or match — a strong, formal way of stressing that something is exceptional."
  },
  {
    word: "requisite",
    context: "Many graduates lack the **requisite** experience to secure senior roles.",
    difficulty: "hard",
    synonyms: ["necessary", "essential", "required", "indispensable", "needed"],
    tip: "Formal for 'necessary for a purpose' — usually appears before a noun, as in 'the requisite skills'."
  },
  {
    word: "professional",
    context: "Patients should be able to rely on the judgement of a trained medical **professional**.",
    difficulty: "easy",
    synonyms: ["specialist", "expert", "practitioner"],
    tip: "As a noun, someone qualified and paid to work in a skilled occupation such as medicine or law."
  },
  {
    word: "easily",
    context: "Routine paperwork can be **easily** automated with widely available software.",
    difficulty: "easy",
    synonyms: ["simply", "effortlessly", "readily", "without difficulty", "with ease", "straightforwardly"],
    tip: "Means without difficulty or effort; 'readily' is a more formal alternative."
  },
  {
    word: "spread",
    context: "Activists use social media to **spread** information about environmental damage.",
    difficulty: "easy",
    synonyms: ["disseminate", "circulate", "broadcast", "propagate", "share", "distribute"],
    tip: "In this sense, to make information or ideas reach many people; 'disseminate' is the formal equivalent."
  },
  {
    word: "increase",
    context: "The government plans to **increase** spending on public transport over the next decade.",
    difficulty: "easy",
    synonyms: ["escalate", "raise", "boost", "hike", "step up", "expand"],
    tip: "As a verb, to make something greater in amount; 'escalate' usually suggests a rapid or worrying rise."
  },
  {
    word: "death",
    context: "Public health campaigns have helped to lower **death** rates from heart disease.",
    difficulty: "easy",
    synonyms: ["mortality", "fatality"],
    tip: "In statistics and formal writing, 'mortality' is the standard word for rates of death."
  },
  {
    word: "chaos",
    context: "The sudden collapse of the banking system plunged the country into **chaos**.",
    difficulty: "easy",
    synonyms: ["disorder", "confusion", "mess", "turmoil", "mayhem", "pandemonium"],
    tip: "Complete disorder and confusion, usually with no one in control."
  },
  {
    word: "loot",
    context: "During the blackout, gangs began to **loot** shops across the city.",
    difficulty: "medium",
    synonyms: ["plunder", "pillage", "ransack", "raid", "steal from", "rob"],
    tip: "To steal goods from a place during a riot, war or disaster, when law and order has broken down."
  },
  {
    word: "worker",
    context: "A factory **worker** should never have to choose between safety and a pay cheque.",
    difficulty: "easy",
    synonyms: ["personnel", "employee", "staff", "labourer"],
    tip: "'Personnel' is the formal, collective term used in reports and policy essays."
  },
  {
    word: "reject",
    context: "Many communities **reject** top-down policies that ignore local needs.",
    difficulty: "medium",
    synonyms: ["refuse", "resist", "turn down", "repudiate", "shun", "decline", "spurn"],
    tip: "'Repudiate' and 'shun' suggest a firmer, often moral, refusal."
  },
  {
    word: "magnify",
    context: "Social media can **magnify** small disagreements into public outrage.",
    difficulty: "medium",
    synonyms: ["enlarge", "enhance", "amplify", "intensify", "heighten"],
    tip: "To make something larger or stronger; 'amplify' fits best for influence or sound."
  },
  {
    word: "downfall",
    context: "Unchecked corruption led to the regime's eventual **downfall**.",
    difficulty: "medium",
    synonyms: ["collapse", "ruin", "undoing", "demise", "fall"],
    tip: "The loss of power, success or status, often caused by a specific flaw or event."
  },
  {
    word: "mundane",
    context: "Even the most **mundane** chores can feel meaningful when shared with family.",
    difficulty: "medium",
    synonyms: ["ordinary", "quotidian", "everyday", "humdrum", "routine"],
    tip: "Dull and unremarkable; 'quotidian' is the formal word for everyday."
  },
  {
    word: "delight",
    context: "Children showed obvious **delight** as they explored the new library.",
    difficulty: "easy",
    synonyms: ["great pleasure", "satisfaction", "gratification", "happiness", "joy", "glee", "elation"],
    tip: "Strong pleasure; works as both a noun and a verb."
  },
  {
    word: "sliver",
    context: "Only a **sliver** of the population benefits from the new policy.",
    difficulty: "medium",
    synonyms: ["fragment", "shard", "splinter", "shred", "scrap"],
    tip: "Literally a thin piece; figuratively, a very small portion."
  },
  {
    word: "depleted",
    context: "Overfishing has left the ocean's fish stocks severely **depleted**.",
    difficulty: "medium",
    synonyms: ["reduced", "exhausted", "drained", "used up", "diminished"],
    tip: "Used up or greatly reduced, especially of resources or energy."
  },
  {
    word: "hostile",
    context: "Refugees often face a **hostile** reception in their host countries.",
    difficulty: "medium",
    synonyms: ["unfriendly", "antagonistic", "aggressive", "unwelcoming", "inhospitable", "adverse"],
    tip: "Signals active opposition or unfriendliness, stronger than merely 'cold'."
  },
  {
    word: "relinquish",
    context: "Few leaders willingly **relinquish** power once they have tasted it.",
    difficulty: "hard",
    synonyms: ["give up", "surrender", "yield", "renounce", "let go of", "forgo"],
    tip: "A formal verb for voluntarily giving up a right, claim or position."
  },
  {
    word: "action",
    context: "Every individual **action**, however small, sends a message to others.",
    difficulty: "easy",
    synonyms: ["behaviour", "conduct", "deed", "act", "step"],
    tip: "In essays, 'actions' is often contrasted with 'words' or 'intentions'."
  },
  {
    word: "activism",
    context: "Youth **activism** has pushed climate change onto the political agenda.",
    difficulty: "medium",
    synonyms: ["advocacy", "campaigning", "protest", "mobilisation"],
    tip: "Vigorous, often public, action to bring about political or social change."
  },
  {
    word: "admiration",
    context: "Her tireless work for refugees earned the **admiration** of the entire community.",
    difficulty: "medium",
    synonyms: ["deep respect", "reverence", "honour", "glorify", "esteem"],
    tip: "Warm approval and respect; 'reverence' suggests admiration close to awe."
  },
  {
    word: "adulation",
    context: "Celebrities often mistake public **adulation** for genuine respect.",
    difficulty: "hard",
    synonyms: ["praise", "acclaim", "idolisation", "flattery", "excessive praise"],
    tip: "Excessive or uncritical praise and admiration."
  },
  {
    word: "advantage",
    context: "Speaking several languages gives job applicants a clear **advantage**.",
    difficulty: "easy",
    synonyms: ["benefit", "edge", "upper hand", "plus", "gain"],
    tip: "A condition that puts someone in a favourable position; 'edge' is the informal equivalent."
  },
  {
    word: "affluent",
    context: "Tax reforms should ask the **affluent** to contribute more to public services.",
    difficulty: "medium",
    synonyms: ["rich people", "wealthy", "well-off", "prosperous", "well-to-do", "moneyed"],
    tip: "'The affluent' means wealthy people as a group; as an adjective it means having plenty of money."
  },
  {
    word: "aggressive",
    context: "**Aggressive** drivers put everyone on the road at risk.",
    difficulty: "easy",
    synonyms: ["belligerent", "hostile", "confrontational", "combative", "pugnacious"],
    tip: "'Belligerent' is more formal and suggests a readiness to pick fights."
  },
  {
    word: "agree",
    context: "The patient must **agree** to the procedure before surgery can begin.",
    difficulty: "easy",
    synonyms: ["consent", "concur", "assent", "approve", "accept"],
    tip: "'Consent' is for giving permission; 'concur' is for sharing an opinion."
  },
  {
    word: "align",
    context: "A company's public statements should **align** with its actual practices.",
    difficulty: "medium",
    synonyms: ["match", "coincide", "correspond", "tally", "harmonise"],
    tip: "To bring into agreement or line; usually followed by 'with'."
  },
  {
    word: "allegedly",
    context: "The factory **allegedly** dumped waste into the river for years.",
    difficulty: "medium",
    synonyms: ["reportedly", "seemingly", "ostensibly", "apparently", "supposedly", "purportedly"],
    tip: "Signals a claim made without proof, so the writer stays neutral."
  },
  {
    word: "altruism",
    context: "Acts of **altruism** surge in the aftermath of natural disasters.",
    difficulty: "hard",
    synonyms: ["selfless manner", "selflessness", "unselfishness", "selfless concern for others", "benevolence"],
    tip: "Selfless concern for the well-being of others."
  },
  {
    word: "amicably",
    context: "The two neighbouring states settled the border dispute **amicably**.",
    difficulty: "hard",
    synonyms: ["genially", "cordially", "in a friendly manner", "harmoniously", "peacefully"],
    tip: "In a friendly, non-hostile way, especially when resolving a disagreement."
  },
  {
    word: "anxiety",
    context: "Exam season fills many students with intense **anxiety**.",
    difficulty: "medium",
    synonyms: ["worry", "unease", "apprehension", "discomfort", "nervousness", "angst"],
    tip: "A feeling of unease about an uncertain outcome; 'apprehension' looks ahead to something feared."
  },
  {
    word: "apocalypse",
    context: "Films depicting the **apocalypse** reflect our deepest fears about technology.",
    difficulty: "hard",
    synonyms: ["end of the world", "doomsday scenarios", "disastrous situations", "catastrophe", "armageddon"],
    tip: "Literally a revelation of the end of the world; figuratively, any total disaster."
  },
  {
    word: "approval",
    context: "The new scheme needs **approval** from local residents before it can proceed.",
    difficulty: "medium",
    synonyms: ["endorsement", "agreement", "consent", "backing", "sanction"],
    tip: "Formal or informal agreement; 'endorsement' suggests public support."
  },
  {
    word: "arduousness",
    context: "Few appreciate the **arduousness** of caring for an elderly relative full-time.",
    difficulty: "hard",
    synonyms: ["difficulty", "challenge", "strenuousness", "toil", "hardship", "gruelling nature"],
    tip: "The quality of demanding great and sustained effort; from 'arduous'."
  },
  {
    word: "assimilate",
    context: "Newcomers often struggle to **assimilate** into an unfamiliar culture.",
    difficulty: "hard",
    synonyms: ["absorb", "integrate", "incorporate", "blend in", "adapt"],
    tip: "To take in and become part of something; used for both people and ideas."
  },
  {
    word: "awareness",
    context: "Campaigns have raised public **awareness** of the dangers of vaping.",
    difficulty: "medium",
    synonyms: ["consciousness", "knowledge", "understanding", "recognition", "mindfulness"],
    tip: "Knowledge or perception of a situation or fact."
  },
  {
    word: "ban",
    context: "The city council voted to **ban** single-use plastics in restaurants.",
    difficulty: "easy",
    synonyms: ["prohibit", "forbid", "outlaw", "bar", "disallow"],
    tip: "To forbid officially; 'prohibit' is the formal equivalent."
  },
  {
    word: "bond",
    context: "Team-building trips help colleagues **bond** outside the office.",
    difficulty: "easy",
    synonyms: ["socialise", "interact", "build relationships", "connect", "form ties"],
    tip: "As a verb, to form a close relationship; the noun 'bond' means a connection."
  },
  {
    word: "brain",
    context: "Regular exercise is linked to improved **brain** health in later life.",
    difficulty: "medium",
    synonyms: ["cognitive", "neurological"],
    tip: "'Cognitive' relates to thinking, memory and understanding."
  },
  {
    word: "businessman",
    context: "A successful **businessman** has a responsibility to give back to the community.",
    difficulty: "medium",
    synonyms: ["business owners", "players in the market", "corporate bosses", "employers", "entrepreneur", "executive"],
    tip: "In modern essays, gender-neutral terms such as 'business owners' are usually preferred."
  },
  {
    word: "business transaction",
    context: "Every **business transaction** should be recorded to ensure transparency.",
    difficulty: "medium",
    synonyms: ["commercial deals", "commercial dealings", "deals", "trade", "exchanges"],
    tip: "'Commercial deals' broadens a single exchange into the deals a business makes."
  },
  {
    word: "campaign",
    context: "The anti-littering **campaign** reduced waste in public parks within a year.",
    difficulty: "easy",
    synonyms: ["initiative", "movement", "drive", "crusade", "effort"],
    tip: "An organised series of actions with a goal; 'initiative' stresses that it is a planned effort."
  },
  {
    word: "carbon footprint",
    context: "Air travel greatly increases an individual's **carbon footprint**.",
    difficulty: "medium",
    synonyms: ["greenhouse gas emission", "greenhouse gas emissions", "total emissions"],
    tip: "The total greenhouse gases produced by a person, organisation or activity."
  },
  {
    word: "carefully",
    context: "Scientists **carefully** analysed the data before publishing their findings.",
    difficulty: "easy",
    synonyms: ["meticulously", "cautiously", "attentively", "painstakingly", "with great care"],
    tip: "'Meticulously' adds a sense of extreme attention to detail."
  },
  {
    word: "catastrophes",
    context: "Climate change is expected to trigger more frequent **catastrophes**, from floods to wildfires.",
    difficulty: "medium",
    synonyms: ["disasters", "calamities", "tragedies", "cataclysms"],
    tip: "Sudden events that cause great damage or suffering."
  },
  {
    word: "character",
    context: "Adversity often reveals a person's true **character**.",
    difficulty: "easy",
    synonyms: ["attribute", "personality", "trait", "disposition", "nature", "quality"],
    tip: "The mix of qualities that make up a person's nature."
  },
  {
    word: "charisma",
    context: "Great leaders often possess the **charisma** to inspire complete strangers.",
    difficulty: "medium",
    synonyms: ["social magnetism", "compelling personalities", "charm", "allure", "appeal"],
    tip: "A compelling, attractive quality that inspires devotion in others."
  },
  {
    word: "city",
    context: "Rapid growth has turned the small fishing village into a bustling **city**.",
    difficulty: "easy",
    synonyms: ["metropolis", "urban area", "urban centre", "conurbation"],
    tip: "'Metropolis' suggests a very large, busy city; 'urban area' is more neutral."
  },
  {
    word: "commemoration",
    context: "The annual **commemoration** draws thousands to remember the war's victims.",
    difficulty: "hard",
    synonyms: ["honouring", "remembrance", "tribute", "memorial", "memorialisation"],
    tip: "A ceremony or act that honours the memory of a person or event."
  },
  {
    word: "company",
    context: "The **company** announced plans to cut its emissions by half.",
    difficulty: "easy",
    synonyms: ["firm", "corporation", "business", "enterprise"],
    tip: "'Firm' is compact and common; 'corporation' suggests a large company."
  },
  {
    word: "compel",
    context: "Rising living costs **compel** many families to take on second jobs.",
    difficulty: "medium",
    synonyms: ["force", "oblige", "coerce", "pressure", "drive"],
    tip: "To make someone do something through strong pressure or necessity."
  },
  {
    word: "conceal",
    context: "Some firms **conceal** the true environmental cost of their products.",
    difficulty: "medium",
    synonyms: ["hide", "withhold", "disguise", "cover up", "keep secret"],
    tip: "To keep something from being seen or known; 'withhold' suits information."
  },
  {
    word: "consequences",
    context: "Ignoring early warning signs can have serious **consequences**.",
    difficulty: "easy",
    synonyms: ["repercussions", "effects", "results", "outcomes", "ramifications"],
    tip: "'Repercussions' usually implies unwelcome, far-reaching consequences."
  },
  {
    word: "consideration",
    context: "Public transport works best when passengers show **consideration** for one another.",
    difficulty: "medium",
    synonyms: ["understanding", "care", "concern", "respect", "thoughtfulness", "tactfulness"],
    tip: "Here it means thoughtful care for others' feelings, not a period of thinking."
  },
  {
    word: "constantly",
    context: "Smartphones **constantly** compete for our attention.",
    difficulty: "easy",
    synonyms: ["perpetually", "continually", "continuously", "incessantly", "always", "relentlessly"],
    tip: "'Perpetually' and 'incessantly' stress that something never stops."
  },
  {
    word: "conviction",
    context: "She defended her stance with quiet **conviction**.",
    difficulty: "medium",
    synonyms: ["belief", "strong belief", "firm belief", "certainty", "deep-seated belief"],
    tip: "A firmly held belief; also a legal term for a guilty verdict."
  },
  {
    word: "counter",
    context: "Their findings run **counter** to what most people assume.",
    difficulty: "medium",
    synonyms: ["contrary", "opposed", "opposite", "against", "contradictory"],
    tip: "Often appears in 'run counter to', meaning to go against."
  },
  {
    word: "cultivate",
    context: "Schools should **cultivate** curiosity rather than reward rote memorisation.",
    difficulty: "medium",
    synonyms: ["nurture", "foster", "develop", "encourage", "nourish"],
    tip: "Literally to grow crops; figuratively to develop a quality with care."
  },
  {
    word: "cure",
    context: "Many people see education as a **cure** for social inequality.",
    difficulty: "medium",
    synonyms: ["remedy", "antidote", "panacea", "solution", "treatment"],
    tip: "'Panacea' means an all-purpose cure and is often used sceptically."
  },
  {
    word: "damaging",
    context: "Fake news can have a **damaging** effect on public trust.",
    difficulty: "easy",
    synonyms: ["destructive", "devastating", "harmful", "detrimental", "ruinous"],
    tip: "Causing harm; 'devastating' is the strongest option."
  },
  {
    word: "dead uniformity",
    context: "Critics warn that rigid curricula produce a **dead uniformity** in students' thinking.",
    difficulty: "hard",
    synonyms: ["liveless conformity", "lifeless conformity", "lifeless sameness", "soulless conformity", "stifling conformity"],
    tip: "Conformity that drains individuality and energy; 'dead' means lacking life or spirit."
  },
  {
    word: "demands",
    context: "Consumers' ever-changing **demands** force businesses to innovate constantly.",
    difficulty: "easy",
    synonyms: ["needs", "desires", "requirements", "requests", "wants"],
    tip: "Here, the things people require or want."
  },
  {
    word: "demanded",
    context: "The judge **demanded** that the documents be handed over immediately.",
    difficulty: "easy",
    synonyms: ["ordered", "directed", "insisted", "commanded", "required"],
    tip: "'Ordered' and 'directed' imply the authority to be obeyed."
  },
  {
    word: "demanding",
    context: "Her **demanding** manner left junior staff feeling belittled.",
    difficulty: "medium",
    synonyms: ["condescending", "patronising", "domineering", "overbearing"],
    tip: "Here it describes an overbearing manner, not simply a difficult job."
  },
  {
    word: "desirable",
    context: "Low unemployment is a **desirable** outcome for any economy.",
    difficulty: "medium",
    synonyms: ["favourable", "attractive", "advantageous", "appealing", "preferable", "sought-after"],
    tip: "Worth wanting or having."
  },
  {
    word: "devalue",
    context: "Grade inflation can **devalue** the qualifications students worked hard to earn.",
    difficulty: "medium",
    synonyms: ["diminish", "undermine", "belittle", "cheapen", "downgrade"],
    tip: "To reduce the worth or importance of something."
  },
  {
    word: "diminish",
    context: "Public trust in the media has begun to **diminish**.",
    difficulty: "medium",
    synonyms: ["reduce", "decrease", "lessen", "shrink", "dwindle"],
    tip: "Works both ways: trust diminished, or scandals diminished trust."
  },
  {
    word: "discourse",
    context: "Social media has coarsened public **discourse** on political issues.",
    difficulty: "hard",
    synonyms: ["dialogue", "conversation", "discussion", "debate", "exchange"],
    tip: "Formal spoken or written discussion of a topic; often 'public discourse'."
  },
  {
    word: "discouraged",
    context: "Repeated rejections left the young writer **discouraged**.",
    difficulty: "medium",
    synonyms: ["demoralised", "disheartened", "dispirited", "downhearted"],
    tip: "Having lost confidence or enthusiasm; 'demoralised' is stronger."
  },
  {
    word: "dishonest",
    context: "**Dishonest** advertising misleads consumers into buying inferior products.",
    difficulty: "easy",
    synonyms: ["deceptive", "untruthful", "fraudulent", "deceitful", "misleading"],
    tip: "'Deceptive' can describe things that mislead as well as people who lie."
  },
  {
    word: "disillusioned",
    context: "Many young voters feel **disillusioned** with traditional politics.",
    difficulty: "hard",
    synonyms: ["disappointed", "disenchanted", "jaded", "let down"],
    tip: "Disappointed after discovering that something is less good than believed."
  },
  {
    word: "disregard",
    context: "Some drivers **disregard** speed limits in residential areas.",
    difficulty: "medium",
    synonyms: ["treat as unimportant", "ignore", "overlook", "brush aside", "pay no heed to"],
    tip: "To pay no attention to something, treating it as unimportant."
  },
  {
    word: "eccentric",
    context: "The **eccentric** inventor wore a lab coat to the supermarket.",
    difficulty: "medium",
    synonyms: ["unconventional", "unusual", "abnormal", "peculiar", "quirky", "offbeat"],
    tip: "Departing from the norm in an unconventional, often harmless, way."
  },
  {
    word: "economic challenges",
    context: "Rising debt and unemployment are among the **economic challenges** facing the country.",
    difficulty: "medium",
    synonyms: ["financial crises", "financial difficulties", "monetary troubles", "fiscal woes"],
    tip: "Paraphrase both words: economic becomes financial, challenges becomes crises or difficulties."
  },
  {
    word: "eloquent",
    context: "The **eloquent** speech moved even the sceptics in the audience.",
    difficulty: "hard",
    synonyms: ["persuasive", "articulate", "fluent", "expressive", "silver-tongued"],
    tip: "Fluent and persuasive in speech or writing."
  },
  {
    word: "empower",
    context: "Education can **empower** women to make independent financial choices.",
    difficulty: "medium",
    synonyms: ["enable", "authorise", "equip", "give control to", "give agency to"],
    tip: "To give someone the power, confidence or authority to act."
  },
  {
    word: "enchanting",
    context: "Tourists find the lantern-lit old town utterly **enchanting**.",
    difficulty: "medium",
    synonyms: ["enthralling", "charming", "fascinating", "mesmerising", "captivating", "bewitching"],
    tip: "Delightfully attractive, as if under a spell."
  },
  {
    word: "endure",
    context: "Nurses had to **endure** exhausting shifts throughout the pandemic.",
    difficulty: "medium",
    synonyms: ["tolerate", "put up with", "withstand", "bear", "suffer"],
    tip: "Can also mean 'to last over time'; context decides."
  },
  {
    word: "enduring",
    context: "The novel's **enduring** popularity shows that its themes remain relevant.",
    difficulty: "medium",
    synonyms: ["long-lasting", "lasting", "durable", "permanent", "timeless"],
    tip: "Continuing over a long period of time."
  },
  {
    word: "energising",
    context: "A short walk outdoors can be surprisingly **energising**.",
    difficulty: "medium",
    synonyms: ["revitalising", "invigorating", "refreshing", "stimulating", "rejuvenating", "uplifting"],
    tip: "Giving vitality or renewed energy."
  },
  {
    word: "engagement",
    context: "Community **engagement** is vital to the success of urban renewal projects.",
    difficulty: "medium",
    synonyms: ["involvement", "participation", "commitment", "interaction"],
    tip: "Active involvement in something."
  },
  {
    word: "entertainment",
    context: "Streaming has transformed how families find **entertainment** at home.",
    difficulty: "easy",
    synonyms: ["enjoyment", "amusement", "recreation", "leisure", "fun", "diversion"],
    tip: "Something that provides enjoyment or amusement."
  },
  {
    word: "environment",
    context: "Children thrive in a stable and nurturing home **environment**.",
    difficulty: "easy",
    synonyms: ["surroundings", "setting", "habitat", "milieu"],
    tip: "The surroundings in which a person lives or works; in another sense, the natural world."
  },
  {
    word: "epitome",
    context: "The skyscraper is the **epitome** of modern urban ambition.",
    difficulty: "hard",
    synonyms: ["height", "apex", "peak", "embodiment", "personification", "quintessence"],
    tip: "A perfect example of a quality; 'apex' focuses on the highest point."
  },
  {
    word: "epitomises",
    context: "The company **epitomises** the spirit of local entrepreneurship.",
    difficulty: "hard",
    synonyms: ["exemplifies", "embodies", "typifies", "personifies", "represents"],
    tip: "Verb form of 'epitome': to be a perfect example of something."
  },
  {
    word: "escape",
    context: "Corrupt officials often **escape** punishment through legal loopholes.",
    difficulty: "easy",
    synonyms: ["evade", "flee", "avoid", "elude", "get away from", "dodge"],
    tip: "'Evade' suggests using cleverness to avoid a duty or penalty."
  },
  {
    word: "excessively",
    context: "Some celebrities spend **excessively** on luxury goods.",
    difficulty: "medium",
    synonyms: ["extravagantly", "immoderately", "overly", "unreasonably", "too much", "disproportionately"],
    tip: "To a greater degree than is reasonable; 'extravagantly' suggests wasteful spending."
  },
  {
    word: "explicitly",
    context: "The contract **explicitly** forbids employees from sharing confidential data.",
    difficulty: "medium",
    synonyms: ["clearly", "specifically", "expressly", "unambiguously", "in no uncertain terms"],
    tip: "In a clear, direct way that leaves no room for doubt."
  },
  {
    word: "exploited",
    context: "The region's solar potential has yet to be fully **exploited**.",
    difficulty: "medium",
    synonyms: ["harnessed", "utilised", "tapped", "made use of"],
    tip: "Here it is neutral or positive: put to use. Elsewhere it can mean treated unfairly."
  },
  {
    word: "exercise of free will",
    context: "Many philosophers view moral responsibility as flowing from the **exercise of free will**.",
    difficulty: "hard",
    synonyms: ["utilisation of liberty", "use of liberty", "use of freedom", "expression of independent choice", "choosing freely"],
    tip: "Acting on one's own choices without compulsion."
  },
  {
    word: "fine and imprisonment",
    context: "Offenders caught dumping toxic waste face a **fine and imprisonment**.",
    difficulty: "medium",
    synonyms: ["monetary penalty and jail", "financial penalty and jail", "monetary penalty and jail time", "cash penalty and prison time", "monetary punishment and incarceration"],
    tip: "'Monetary penalty' is a formal way to say 'fine'; 'jail' is a plain word for imprisonment."
  },
  {
    word: "flourish",
    context: "Small businesses **flourish** when red tape is kept to a minimum.",
    difficulty: "medium",
    synonyms: ["thrive", "develop", "prosper", "bloom", "blossom", "boom"],
    tip: "To grow or develop in a healthy, successful way."
  },
  {
    word: "force",
    context: "Confessions obtained through **force** are rarely reliable.",
    difficulty: "medium",
    synonyms: ["coercion", "compulsion", "duress", "pressure"],
    tip: "As a noun, pressure or violence used to compel; as a verb, to compel."
  },
  {
    word: "gather",
    context: "Thousands **gather** in the square each year to mark the festival.",
    difficulty: "medium",
    synonyms: ["congregate", "assemble", "convene", "collect", "flock"],
    tip: "'Congregate' is formal and suggests a group coming together for a purpose."
  },
  {
    word: "genetically determined",
    context: "Some researchers argue that personality is largely **genetically determined**.",
    difficulty: "medium",
    synonyms: ["innate", "inborn", "hereditary", "inherited", "biologically fixed", "hard-wired"],
    tip: "Fixed by inherited genes rather than shaped by upbringing; 'innate' means present from birth."
  },
  {
    word: "global warming",
    context: "Rising sea levels are one visible consequence of **global warming**.",
    difficulty: "medium",
    synonyms: ["worldwide warmth", "worldwide heating", "planetary warming", "rising worldwide temperatures"],
    tip: "A long-term rise in Earth's average temperature, largely driven by greenhouse gases."
  },
  {
    word: "group",
    context: "A tight-knit **group** of neighbours organised the flood relief effort.",
    difficulty: "easy",
    synonyms: ["clan", "community", "collective", "circle", "band"],
    tip: "'Clan' suggests a group bound by kinship; 'community' by shared place or interest."
  },
  {
    word: "growth",
    context: "Rapid economic **growth** has lifted millions out of poverty.",
    difficulty: "easy",
    synonyms: ["progress", "development", "expansion", "increase", "advancement"],
    tip: "Increase in size, strength or importance."
  },
  {
    word: "higher and slower",
    context: "Migrating birds tend to fly **higher and slower** on calm, clear days.",
    difficulty: "hard",
    synonyms: ["at greater altitudes and lower speeds", "at greater heights and lower speeds", "at a higher altitude and reduced speed", "further up and more slowly"],
    tip: "Comparative words can be expanded into fuller phrases: higher becomes 'at greater altitudes'."
  },
  {
    word: "hone",
    context: "Debating helps students **hone** their ability to argue persuasively.",
    difficulty: "medium",
    synonyms: ["sharpen", "refine", "perfect", "polish", "fine-tune"],
    tip: "To sharpen or refine a skill over time."
  },
  {
    word: "hospitals and schools",
    context: "Public funds should be prioritised for **hospitals and schools**.",
    difficulty: "medium",
    synonyms: ["medical and educational institutions", "medical and academic institutions", "healthcare and education facilities", "health and learning institutions"],
    tip: "Replace each noun with a broader category word: medical, educational, academic."
  },
  {
    word: "hostility",
    context: "Public **hostility** towards the new policy forced ministers to reconsider.",
    difficulty: "hard",
    synonyms: ["vitriol", "aggression", "animosity", "antipathy", "hatred", "enmity", "ill will"],
    tip: "Strong antagonism; 'vitriol' is bitter, harsh language."
  },
  {
    word: "human nature",
    context: "Cynics argue that greed is simply part of **human nature**.",
    difficulty: "medium",
    synonyms: ["humanity", "innate characteristics", "inborn traits", "fundamental character", "man's disposition"],
    tip: "The general qualities and behaviour shared by all people."
  },
  {
    word: "idolise",
    context: "Teenagers often **idolise** celebrities they have never met.",
    difficulty: "medium",
    synonyms: ["worship", "adore", "revere", "venerate", "put on a pedestal"],
    tip: "To admire someone so extravagantly that they are almost treated as a god."
  },
  {
    word: "ignite",
    context: "A single viral video can **ignite** a national debate.",
    difficulty: "medium",
    synonyms: ["kindle", "spark", "trigger", "fuel", "inflame", "arouse"],
    tip: "Literally to set alight; figuratively to spark strong feelings or action."
  },
  {
    word: "important",
    context: "It is **important** for citizens to stay informed about local issues.",
    difficulty: "easy",
    synonyms: ["significant", "crucial", "vital", "essential", "key", "major"],
    tip: "'Significant' is the most direct formal replacement."
  },
  {
    word: "increasing",
    context: "There is an **increasing** demand for skilled workers in healthcare.",
    difficulty: "easy",
    synonyms: ["growing", "rising", "escalating", "mounting", "swelling"],
    tip: "'Mounting' and 'escalating' add a sense of urgency."
  },
  {
    word: "increasingly",
    context: "Young people are **increasingly** turning to online learning.",
    difficulty: "medium",
    synonyms: ["progressively", "more and more", "ever more", "steadily"],
    tip: "Describes a change that continues to grow over time."
  },
  {
    word: "indifference",
    context: "Public **indifference** to local elections has led to record-low turnout.",
    difficulty: "medium",
    synonyms: ["disinterest", "nonchalance", "apathy", "unconcern", "detachment", "lack of concern"],
    tip: "A lack of interest or sympathy; 'nonchalance' adds a cool, casual tone."
  },
  {
    word: "innovative",
    context: "The start-up won an award for its **innovative** approach to recycling.",
    difficulty: "medium",
    synonyms: ["creative", "original", "pioneering", "inventive", "groundbreaking", "novel"],
    tip: "Featuring new methods or ideas; 'pioneering' suggests being first."
  },
  {
    word: "instinctive tendency",
    context: "Humans have an **instinctive tendency** to trust those who look familiar.",
    difficulty: "medium",
    synonyms: ["natural inclination", "intuitive inclination", "natural tendency", "innate urge", "inborn impulse", "intuitive urge"],
    tip: "A behaviour that comes naturally without conscious thought."
  },
  {
    word: "insurmountable",
    context: "For many refugees, language barriers seem **insurmountable** at first.",
    difficulty: "hard",
    synonyms: ["unbeatable", "unconquerable", "impossible to overcome", "overwhelming"],
    tip: "Too great to be overcome; stronger than 'difficult'."
  },
  {
    word: "inundated",
    context: "Charities were **inundated** with donations after the earthquake.",
    difficulty: "hard",
    synonyms: ["flooded", "overwhelmed", "swamped", "deluged", "overrun"],
    tip: "Literally flooded with water; figuratively overwhelmed by a large amount of something."
  },
  {
    word: "investigate",
    context: "Journalists **investigate** claims of corruption to hold power to account.",
    difficulty: "medium",
    synonyms: ["monitor", "place it under scrutiny", "inspect", "examine", "probe", "look into"],
    tip: "To examine carefully in order to establish the facts."
  },
  {
    word: "irresponsibility",
    context: "The company's **irresponsibility** in handling toxic waste angered residents.",
    difficulty: "medium",
    synonyms: ["thoughtlessness", "thoughtless", "lack of consideration", "carelessness", "negligence"],
    tip: "Failure to act with proper care; 'negligence' is the legal-flavoured equivalent."
  },
  {
    word: "isolate",
    context: "Hospitals **isolate** patients with highly infectious diseases.",
    difficulty: "medium",
    synonyms: ["separate", "distance", "detach", "cut off", "quarantine", "segregate"],
    tip: "To set apart from others, physically, socially or emotionally."
  },
  {
    word: "isolation",
    context: "Prolonged **isolation** can leave elderly residents feeling forgotten.",
    difficulty: "medium",
    synonyms: ["alienation", "loneliness", "separation", "seclusion", "solitude"],
    tip: "'Alienation' stresses emotional distance from others or from society."
  },
  {
    word: "judge",
    context: "Employers **judge** candidates by more than academic results alone.",
    difficulty: "medium",
    synonyms: ["assess", "evaluate", "discern", "appraise", "gauge", "determine"],
    tip: "To form an opinion or conclusion carefully."
  },
  {
    word: "lauded",
    context: "The scientist was **lauded** for her breakthrough in cancer research.",
    difficulty: "hard",
    synonyms: ["praised", "highly regarded", "approved", "acclaimed", "commended", "applauded"],
    tip: "Praised highly, often publicly."
  },
  {
    word: "legislating",
    context: "Governments are **legislating** against online hate speech.",
    difficulty: "hard",
    synonyms: ["constitutionalising", "enacting laws", "passing laws", "making laws"],
    tip: "Making laws; 'enacting' is the formal verb for bringing a law into force."
  },
  {
    word: "legislation",
    context: "New **legislation** will require companies to disclose their carbon emissions.",
    difficulty: "medium",
    synonyms: ["policy", "regulation", "law", "statute", "rules"],
    tip: "Laws considered collectively; it is an uncountable noun."
  },
  {
    word: "lust",
    context: "His **lust** for power blinded him to the suffering of others.",
    difficulty: "medium",
    synonyms: ["desire", "want", "craving", "hunger", "appetite"],
    tip: "An intense, often excessive craving; not limited to sexual desire."
  },
  {
    word: "magnetism",
    context: "The city's cultural **magnetism** attracts artists from every continent.",
    difficulty: "medium",
    synonyms: ["attractiveness", "allure", "appeal", "charisma", "pull", "draw"],
    tip: "A powerful attractive quality."
  },
  {
    word: "maintain",
    context: "Regular servicing is needed to **maintain** public infrastructure.",
    difficulty: "medium",
    synonyms: ["preserve", "sustain", "uphold", "keep up", "retain", "conserve"],
    tip: "To keep something in good condition or at the same level."
  },
  {
    word: "manipulate",
    context: "Some advertisers **manipulate** emotions to drive impulse purchases.",
    difficulty: "medium",
    synonyms: ["influence", "sway", "exploit", "control", "engineer"],
    tip: "To control or influence cleverly, often unfairly."
  },
  {
    word: "market",
    context: "The electric-vehicle **market** is expanding faster than analysts predicted.",
    difficulty: "medium",
    synonyms: ["sector", "industry", "field", "trade", "marketplace"],
    tip: "Here, an area of commercial activity; 'sector' and 'industry' are the usual formal alternatives."
  },
  {
    word: "mask",
    context: "Cheerful slogans often **mask** the harsh reality of factory work.",
    difficulty: "medium",
    synonyms: ["cloak", "contain", "conceal", "disguise", "hide", "obscure"],
    tip: "To hide or disguise something; 'cloak' is a more literary alternative."
  },
  {
    word: "meaning",
    context: "The **meaning** of 'success' differs from one generation to the next.",
    difficulty: "medium",
    synonyms: ["connotation", "definition", "significance", "sense", "implication"],
    tip: "'Connotation' refers to the associations beyond the literal definition."
  },
  {
    word: "measure",
    context: "It is difficult to **measure** happiness using economic indicators alone.",
    difficulty: "medium",
    synonyms: ["quantify", "gauge", "assess", "calculate", "evaluate"],
    tip: "'Quantify' means to express something as a number."
  },
  {
    word: "misperceived",
    context: "Her silence was **misperceived** as arrogance by her new colleagues.",
    difficulty: "hard",
    synonyms: ["mistaken", "misinterpreted", "misconstrued", "misunderstood", "misjudged"],
    tip: "Understood wrongly; 'misconstrued' is the formal choice."
  },
  {
    word: "money",
    context: "Many young people worry more about **money** than about their careers.",
    difficulty: "easy",
    synonyms: ["finance", "wealth", "funds", "capital", "cash"],
    tip: "'Finance' and 'wealth' add formality."
  },
  {
    word: "moral obligations",
    context: "Wealthy nations have **moral obligations** to assist poorer neighbours in a crisis.",
    difficulty: "medium",
    synonyms: ["ethical responsibility", "ethical responsibilities", "ethical duties", "ethical commitments"],
    tip: "Duties rooted in right and wrong rather than in law."
  },
  {
    word: "mutilate",
    context: "Heavy-handed editing can **mutilate** an author's original message.",
    difficulty: "hard",
    synonyms: ["disfigure", "distort", "deform", "mangle"],
    tip: "Literally to damage the body severely; figuratively to spoil by destroying parts."
  },
  {
    word: "neglect",
    context: "Local councils that **neglect** public parks risk losing community spirit.",
    difficulty: "medium",
    synonyms: ["ignore", "overlook", "disregard", "fail to look after", "leave unattended"],
    tip: "To fail to give proper care or attention."
  },
  {
    word: "noisy",
    context: "The **noisy** crowds at the football match spilled onto the streets.",
    difficulty: "easy",
    synonyms: ["rowdy", "loud", "boisterous", "clamorous", "raucous", "disorderly"],
    tip: "'Rowdy' adds a sense of disorderly behaviour, not just volume."
  },
  {
    word: "object",
    context: "Residents **object** to the proposed highway running through their neighbourhood.",
    difficulty: "medium",
    synonyms: ["challenge", "disagree", "protest", "oppose", "take exception"],
    tip: "As a verb (ob-JECT), to express disapproval; as a noun, a thing."
  },
  {
    word: "observant",
    context: "An **observant** teacher can spot early signs of trouble in a quiet student.",
    difficulty: "medium",
    synonyms: ["perceptive", "alert", "attentive", "watchful", "sharp-eyed"],
    tip: "Quick to notice things; 'perceptive' also implies insight."
  },
  {
    word: "oppressing",
    context: "Authoritarian regimes survive by **oppressing** dissenting voices.",
    difficulty: "medium",
    synonyms: ["suppressing", "silencing", "subjugating", "crushing"],
    tip: "Treating people harshly and unjustly, especially by denying their rights."
  },
  {
    word: "organisation",
    context: "A non-profit **organisation** provides free legal aid to migrant workers.",
    difficulty: "medium",
    synonyms: ["institution", "corporation", "firm", "body", "association", "establishment"],
    tip: "A group formally set up for a shared purpose."
  },
  {
    word: "social outcast",
    context: "Refusing to conform can turn a teenager into a **social outcast**.",
    difficulty: "medium",
    synonyms: ["ostracisation", "marginalisation", "pariah", "outsider", "excluded person"],
    tip: "Someone rejected by a group; 'pariah' is the stronger word."
  },
  {
    word: "outperform",
    context: "Students taught in smaller classes often **outperform** their peers.",
    difficulty: "medium",
    synonyms: ["outdo", "surpass", "beat", "exceed", "outshine", "outclass"],
    tip: "To do better than others."
  },
  {
    word: "patent",
    context: "The pharmaceutical giant filed a **patent** to protect its new drug formula.",
    difficulty: "hard",
    synonyms: ["copyright", "intellectual property right", "exclusive right", "legal protection"],
    tip: "A patent protects an invention, while copyright protects creative works; the two are related but not identical."
  },
  {
    word: "patronage",
    context: "Renaissance art flourished thanks to the **patronage** of wealthy families.",
    difficulty: "medium",
    synonyms: ["support", "sponsor", "sponsorship", "backing"],
    tip: "Financial or other support given by a patron."
  },
  {
    word: "perception",
    context: "Media coverage can shape public **perception** of immigration.",
    difficulty: "medium",
    synonyms: ["sense of world", "understanding", "view", "impression", "interpretation"],
    tip: "The way something is seen, understood or interpreted."
  },
  {
    word: "perfect",
    context: "No policy is **perfect**, but some come close to meeting everyone's needs.",
    difficulty: "easy",
    synonyms: ["flawless", "faultless", "impeccable", "ideal", "immaculate"],
    tip: "Without any flaw; 'impeccable' is the formal choice."
  },
  {
    word: "persecute",
    context: "Minorities were **persecuted** for their beliefs under the old regime.",
    difficulty: "hard",
    synonyms: ["abuse", "victimise", "oppress", "harass", "mistreat", "torment"],
    tip: "To treat cruelly and unfairly, especially because of identity or belief."
  },
  {
    word: "polite",
    context: "A **polite** reply costs nothing but earns goodwill.",
    difficulty: "easy",
    synonyms: ["courteous", "respectful", "civil", "well-mannered", "gracious"],
    tip: "'Courteous' is the more formal option."
  },
  {
    word: "political",
    context: "**Political** decisions should be based on evidence, not popularity.",
    difficulty: "medium",
    synonyms: ["governmental", "administrative", "legislative", "civic"],
    tip: "Relating to government and public affairs."
  },
  {
    word: "political clout",
    context: "Farmers wield considerable **political clout** in rural constituencies.",
    difficulty: "medium",
    synonyms: ["authority", "power", "influence", "leverage", "sway", "weight"],
    tip: "The power to influence government decisions; 'clout' is informal."
  },
  {
    word: "populated",
    context: "Heavily **populated** urban districts struggle to provide affordable housing.",
    difficulty: "medium",
    synonyms: ["crowded", "inhabited", "teeming", "overcrowded", "congested"],
    tip: "Lived in by people; with 'heavily' it suggests crowding."
  },
  {
    word: "poverty",
    context: "Education remains the surest route out of **poverty**.",
    difficulty: "medium",
    synonyms: ["destitution", "financial hardship", "deprivation", "want", "penury", "impoverishment"],
    tip: "The state of lacking money for basic needs; 'destitution' is extreme poverty."
  },
  {
    word: "precarious",
    context: "Refugees often live in **precarious** conditions with little protection.",
    difficulty: "hard",
    synonyms: ["danger", "dangerous", "harmful", "risky", "unstable", "insecure", "hazardous"],
    tip: "Uncertain, unstable or dangerous; a situation that could easily collapse."
  },
  {
    word: "principles",
    context: "Leaders who abandon their **principles** for popularity soon lose public trust.",
    difficulty: "medium",
    synonyms: ["values", "virtues", "ethics", "morals", "tenets", "standards"],
    tip: "Fundamental beliefs that guide behaviour."
  },
  {
    word: "products",
    context: "The company plans to expand its range of eco-friendly **products**.",
    difficulty: "easy",
    synonyms: ["offerings", "goods", "merchandise", "wares", "commodities"],
    tip: "'Offerings' is a neat business-style alternative."
  },
  {
    word: "promote",
    context: "The campaign aims to **promote** healthier eating habits among teenagers.",
    difficulty: "medium",
    synonyms: ["advocate", "champion", "encourage", "foster", "advance"],
    tip: "To support or actively encourage something."
  },
  {
    word: "prosperity",
    context: "Trade has historically brought **prosperity** to port cities.",
    difficulty: "medium",
    synonyms: ["affluence", "material comfort", "wealth", "abundance", "flourishing"],
    tip: "A state of success, especially financial."
  },
  {
    word: "purpose",
    context: "Volunteering gave him a renewed sense of **purpose**.",
    difficulty: "medium",
    synonyms: ["motivation", "aspiration", "aim", "goal", "objective", "intention"],
    tip: "The reason for which something is done; personally, a sense of direction."
  },
  {
    word: "quietness",
    context: "The **quietness** of the library helps students concentrate.",
    difficulty: "easy",
    synonyms: ["silence", "noiselessness", "stillness", "hush", "tranquillity", "peace"],
    tip: "The absence of noise."
  },
  {
    word: "recklessly",
    context: "Investors who act **recklessly** can lose their savings overnight.",
    difficulty: "medium",
    synonyms: ["in haste", "too quickly", "carelessly", "rashly", "impulsively", "heedlessly"],
    tip: "Without thinking about the consequences."
  },
  {
    word: "rejuvenating",
    context: "A weekend in the countryside can be **rejuvenating** after months of stress.",
    difficulty: "medium",
    synonyms: ["refreshing", "revitalising", "restorative", "reviving"],
    tip: "Making someone feel young, fresh and energetic again."
  },
  {
    word: "resilience",
    context: "Communities show remarkable **resilience** after natural disasters.",
    difficulty: "hard",
    synonyms: ["grit", "tenacity", "determination", "fortitude", "toughness", "perseverance"],
    tip: "The ability to recover quickly from difficulty."
  },
  {
    word: "respect",
    context: "Young people should show **respect** for their elders.",
    difficulty: "medium",
    synonyms: ["deference", "esteem", "regard", "honour", "reverence"],
    tip: "'Deference' means respectful submission to another's authority or wishes."
  },
  {
    word: "respite",
    context: "Holidays offer workers a brief **respite** from relentless deadlines.",
    difficulty: "hard",
    synonyms: ["rest", "break", "relief", "breather", "lull", "reprieve"],
    tip: "A short period of rest or relief from something difficult."
  },
  {
    word: "responsibility",
    context: "Parents bear primary **responsibility** for their children's upbringing.",
    difficulty: "medium",
    synonyms: ["obligation", "duty", "accountability", "onus"],
    tip: "Something one is required or expected to do or take care of."
  },
  {
    word: "restrict",
    context: "Some governments **restrict** access to certain websites.",
    difficulty: "medium",
    synonyms: ["regulate", "prohibit", "impose strict limits upon", "constrain", "confine", "limit", "curb"],
    tip: "To limit the size, range or freedom of something."
  },
  {
    word: "ridicule",
    context: "Students who speak up often face **ridicule** from classmates.",
    difficulty: "medium",
    synonyms: ["mockery", "derision", "scorn", "taunting", "jeering"],
    tip: "Mocking or contemptuous treatment of a person or idea."
  },
  {
    word: "satisfy",
    context: "No single policy can **satisfy** every interest group.",
    difficulty: "medium",
    synonyms: ["appease", "content", "gratify", "fulfil", "pacify", "placate"],
    tip: "'Appease' suggests calming someone by giving in to their demands."
  },
  {
    word: "savage",
    context: "The film depicts the **savage** conditions faced by soldiers in the trenches.",
    difficulty: "hard",
    synonyms: ["barbaric", "untamed", "uncontrolled", "wild", "agitated", "ferocious", "brutal"],
    tip: "Fierce and violent, or wild and uncivilised; a judgemental word, so use with care."
  },
  {
    word: "self-absorption",
    context: "Constant selfies point to a culture of **self-absorption**.",
    difficulty: "hard",
    synonyms: ["self-obsession", "narcissism", "egocentrism", "self-centredness", "self-centred", "vanity"],
    tip: "Excessive preoccupation with oneself."
  },
  {
    word: "self-worth",
    context: "Social media comparison can quietly erode a teenager's **self-worth**.",
    difficulty: "medium",
    synonyms: ["self-esteem", "self-confidence", "self-respect", "self-belief", "self-regard"],
    tip: "A person's sense of their own value."
  },
  {
    word: "sensitive devices",
    context: "Pilots rely on highly **sensitive devices** to detect turbulence.",
    difficulty: "medium",
    synonyms: ["responsive gadgets", "responsive devices", "reactive gadgets", "delicate instruments"],
    tip: "Paraphrase each part: sensitive becomes responsive, devices becomes gadgets."
  },
  {
    word: "show off",
    context: "Some influencers **show off** expensive purchases to attract followers.",
    difficulty: "easy",
    synonyms: ["flaunt", "parade", "boast about", "brag about", "display ostentatiously"],
    tip: "'Flaunt' means to display something ostentatiously."
  },
  {
    word: "sinister",
    context: "Behind the friendly slogans lay a more **sinister** motive.",
    difficulty: "medium",
    synonyms: ["harmful", "menacing", "ominous", "threatening", "malevolent", "evil"],
    tip: "Suggesting that something harmful or evil is at work."
  },
  {
    word: "snobbishly",
    context: "The critic **snobbishly** dismissed popular fiction as unworthy of study.",
    difficulty: "hard",
    synonyms: ["arrogantly", "haughtily", "condescendingly", "pretentiously", "disdainfully", "loftily"],
    tip: "In a way that shows one thinks oneself superior."
  },
  {
    word: "social status",
    context: "Luxury cars are often bought to signal **social status**.",
    difficulty: "medium",
    synonyms: ["social rank", "social standing", "standing", "rank in society", "position in society", "prestige"],
    tip: "A person's relative position or rank in society."
  },
  {
    word: "soothe",
    context: "Gentle music can **soothe** anxious patients before surgery.",
    difficulty: "medium",
    synonyms: ["comfort", "console", "calm", "pacify", "ease", "reassure"],
    tip: "To calm or relieve someone who is upset or in pain."
  },
  {
    word: "specific",
    context: "The teacher gave **specific** examples to illustrate each point.",
    difficulty: "easy",
    synonyms: ["particular", "precise", "definite", "exact", "distinct"],
    tip: "Clearly defined rather than general."
  },
  {
    word: "staggering",
    context: "The **staggering** cost of the project shocked taxpayers.",
    difficulty: "hard",
    synonyms: ["astonishing", "astounding", "shocking", "stunning", "overwhelming", "incredible"],
    tip: "So great or surprising as to be almost unbelievable."
  },
  {
    word: "station",
    context: "People of humble **station** rarely had a voice in Victorian society.",
    difficulty: "medium",
    synonyms: ["position", "rank", "standing", "status", "social class"],
    tip: "Here, a person's rank or position in society; it can also mean a place where a service is based."
  },
  {
    word: "statue",
    context: "A bronze **statue** of the founder stands at the entrance.",
    difficulty: "easy",
    synonyms: ["figure", "sculpture", "effigy", "monument", "carving"],
    tip: "A carved or cast figure of a person or animal."
  },
  {
    word: "steely",
    context: "The captain faced the crisis with **steely** determination.",
    difficulty: "medium",
    synonyms: ["strongly", "strong", "firm", "unyielding", "resolute", "tough"],
    tip: "Hard and unyielding, like steel."
  },
  {
    word: "stigma",
    context: "Many patients avoid seeking help because of the **stigma** attached to mental illness.",
    difficulty: "hard",
    synonyms: ["disgrace", "shame", "taint", "dishonour", "failure"],
    tip: "A mark of shame or disapproval attached to a person or condition."
  },
  {
    word: "strengthen",
    context: "Joint military exercises **strengthen** ties between allied nations.",
    difficulty: "medium",
    synonyms: ["intensify", "reinforce", "reiterate", "enhance", "bolster", "fortify"],
    tip: "To make stronger; 'reinforce' adds support to something that already exists."
  },
  {
    word: "stress",
    context: "Long working hours put enormous **stress** on employees.",
    difficulty: "medium",
    synonyms: ["pressure", "strain", "tension", "burden"],
    tip: "Mental or emotional strain caused by demanding circumstances."
  },
  {
    word: "success",
    context: "**Success** in life is rarely measured by wealth alone.",
    difficulty: "easy",
    synonyms: ["achievement", "accomplishment", "triumph", "victory"],
    tip: "The accomplishment of an aim or purpose."
  },
  {
    word: "superficial",
    context: "Critics argue that the report offers only a **superficial** analysis of the crisis.",
    difficulty: "medium",
    synonyms: ["shallow", "cursory", "surface-level", "skin-deep", "trivial"],
    tip: "Concerned only with the obvious or surface aspects."
  },
  {
    word: "symbol",
    context: "The olive branch remains a universal **symbol** of peace.",
    difficulty: "easy",
    synonyms: ["representation", "emblem", "sign", "token", "icon"],
    tip: "Something that stands for or represents an idea."
  },
  {
    word: "tangible",
    context: "Voters want **tangible** improvements to their daily lives, not empty promises.",
    difficulty: "medium",
    synonyms: ["actual", "genuine", "concrete", "real", "palpable"],
    tip: "Real and able to be perceived or measured."
  },
  {
    word: "task",
    context: "Cleaning the entire building is no small **task**.",
    difficulty: "easy",
    synonyms: ["chore", "job", "duty", "assignment", "errand", "undertaking"],
    tip: "A piece of work to be done; 'chore' suggests something routine or unpleasant."
  },
  {
    word: "technologies",
    context: "Emerging **technologies** are transforming how doctors diagnose disease.",
    difficulty: "medium",
    synonyms: ["innovations", "inventions", "technical advances", "tools"],
    tip: "Machinery, methods and devices developed from scientific knowledge."
  },
  {
    word: "tedious",
    context: "Filling in forms by hand can be a **tedious** process.",
    difficulty: "medium",
    synonyms: ["dull", "monotonous", "boring", "tiresome", "wearisome", "repetitive"],
    tip: "Long, slow and boring."
  },
  {
    word: "tedium",
    context: "Assembly-line workers face hours of **tedium** each day.",
    difficulty: "hard",
    synonyms: ["monotony", "boredom", "dullness", "drudgery", "tiresomeness"],
    tip: "The state of being boring; the noun form of 'tedious'."
  },
  {
    word: "temporary",
    context: "Seasonal jobs offer only **temporary** relief from unemployment.",
    difficulty: "easy",
    synonyms: ["short-lived", "transient", "momentary", "brief", "passing", "provisional"],
    tip: "Lasting for a limited time only."
  },
  {
    word: "test",
    context: "The pilot programme will **test** whether four-day weeks improve productivity.",
    difficulty: "medium",
    synonyms: ["determine", "indicate", "examine", "assess", "trial", "check"],
    tip: "As a verb, to try something out to find out how well it works."
  },
  {
    word: "therapeutic",
    context: "Gardening can be deeply **therapeutic** for people recovering from illness.",
    difficulty: "medium",
    synonyms: ["healing", "restorative", "curative", "remedial"],
    tip: "Having a healing or calming effect."
  },
  {
    word: "thought and action",
    context: "Lasting reform requires both **thought and action** from ordinary citizens.",
    difficulty: "medium",
    synonyms: ["mindsets and effort", "mind-sets and effort", "thinking and effort", "attitudes and endeavour", "mentality and work"],
    tip: "Paraphrase each half: thought becomes mindset, action becomes effort."
  },
  {
    word: "threat",
    context: "Antibiotic resistance is a growing **threat** to global health.",
    difficulty: "easy",
    synonyms: ["danger", "harm", "risk", "hazard", "menace", "peril"],
    tip: "Something likely to cause damage or danger."
  },
  {
    word: "toxic",
    context: "A **toxic** workplace culture drives talented staff away.",
    difficulty: "medium",
    synonyms: ["destructive", "deleterious", "harmful", "poisonous", "damaging", "noxious"],
    tip: "Literally poisonous; figuratively very harmful, especially to relationships or environments."
  },
  {
    word: "trailblazer",
    context: "She was a **trailblazer** for women in engineering.",
    difficulty: "hard",
    synonyms: ["leader", "pioneer", "innovator", "groundbreaker", "path-breaker"],
    tip: "Someone who is first to do something and opens the way for others."
  },
  {
    word: "truth",
    context: "Investigative journalism seeks to uncover the **truth** behind official statements.",
    difficulty: "easy",
    synonyms: ["fact", "reality", "veracity", "actuality", "honesty"],
    tip: "'Fact' is a verifiable piece of information; 'truth' can be broader."
  },
  {
    word: "unauthorised",
    context: "Police shut down an **unauthorised** street market near the station.",
    difficulty: "medium",
    synonyms: ["unlawful", "unlicensed", "illegal", "unapproved", "unsanctioned", "illicit"],
    tip: "Done without official permission."
  },
  {
    word: "undoubtedly",
    context: "Education is **undoubtedly** the strongest tool for social mobility.",
    difficulty: "medium",
    synonyms: ["unquestionably", "definitely", "certainly", "without doubt", "indisputably", "undeniably"],
    tip: "Used to state something as beyond question."
  },
  {
    word: "unfettered",
    context: "**Unfettered** access to information is essential in a democracy.",
    difficulty: "hard",
    synonyms: ["unrestrained", "free", "unrestricted", "unchecked", "unbridled", "uninhibited"],
    tip: "Not held back by restraints; fetters were chains."
  },
  {
    word: "unruly",
    context: "Teachers struggled to manage an **unruly** class on sports day.",
    difficulty: "medium",
    synonyms: ["uncontrollable", "disorderly", "rowdy", "wild", "unmanageable", "disobedient"],
    tip: "Difficult to control or keep in order."
  },
  {
    word: "upheaval",
    context: "The financial crisis brought sudden **upheaval** to millions of households.",
    difficulty: "hard",
    synonyms: ["disruption", "turmoil", "disturbance", "commotion", "radical change"],
    tip: "A violent or sudden change or disruption."
  },
  {
    word: "use",
    context: "Farmers **use** drones to monitor crop health more efficiently.",
    difficulty: "easy",
    synonyms: ["harness", "utilise", "employ", "exploit", "put to work", "apply"],
    tip: "'Harness' suggests controlling a resource so that it becomes useful."
  },
  {
    word: "violation",
    context: "Repeated **violation** of labour laws led to heavy fines for the firm.",
    difficulty: "medium",
    synonyms: ["infringement", "breach", "contravention", "transgression", "offence"],
    tip: "The act of breaking a rule, law or agreement."
  },
  {
    word: "virtuous",
    context: "Nobody is entirely **virtuous**, but society expects its leaders to try.",
    difficulty: "hard",
    synonyms: ["righteous", "morally upright", "honourable", "ethical", "principled", "upstanding"],
    tip: "Having high moral standards."
  },
  {
    word: "vital needs",
    context: "Food, water and shelter are **vital needs** that no government should neglect.",
    difficulty: "medium",
    synonyms: ["crucial necessities", "critical necessities", "essential requirements", "fundamental necessities"],
    tip: "Things people cannot live without."
  },
  {
    word: "vitality",
    context: "New cafés and galleries have restored **vitality** to the old town.",
    difficulty: "hard",
    synonyms: ["liveliness", "spirit", "energy", "vigour", "dynamism", "zest"],
    tip: "Physical or mental energy and liveliness."
  },
  {
    word: "weary",
    context: "**Weary** commuters queued for the last train home.",
    difficulty: "medium",
    synonyms: ["tired", "exhausted", "fatigued", "fatigue", "worn out", "drained", "spent"],
    tip: "Feeling very tired, especially after prolonged effort."
  },
  {
    word: "well-being",
    context: "Strong friendships contribute greatly to a person's overall **well-being**.",
    difficulty: "medium",
    synonyms: ["contentment", "welfare", "wellness", "happiness", "quality of life"],
    tip: "The state of being comfortable, healthy and happy."
  },
  {
    word: "willingly",
    context: "Volunteers **willingly** gave up their weekends to help clean the beach.",
    difficulty: "medium",
    synonyms: ["voluntarily", "by choice", "readily", "gladly", "of one's own accord", "eagerly", "freely"],
    tip: "Without being forced."
  },
  {
    word: "worry",
    context: "Her constant **worry** about money kept her awake at night.",
    difficulty: "easy",
    synonyms: ["trepidation", "terror", "anxiety", "concern", "unease", "dread", "fear"],
    tip: "'Trepidation' is fear or anxiety about something that may happen."
  },
  {
    word: "zone",
    context: "The city has created a car-free **zone** in its historic centre.",
    difficulty: "easy",
    synonyms: ["area", "space", "region", "district", "sector"],
    tip: "A designated area with a particular use or character."
  },
  {
    word: "higher pursuits",
    context: "Once basic needs are met, people can turn to **higher pursuits** such as art and philosophy.",
    difficulty: "hard",
    synonyms: ["grander goals", "more noble goals", "nobler goals", "loftier goals", "loftier ambitions", "grander aspirations"],
    tip: "'Higher' here means more elevated or ideal, not 'taller'."
  },
  {
    word: "physical concerns",
    context: "Maslow argued that **physical concerns** must be met before people seek fulfilment.",
    difficulty: "medium",
    synonyms: ["material needs", "worldly needs", "bodily needs", "basic material needs", "tangible needs"],
    tip: "Practical, bodily worries such as food and shelter."
  },
  {
    word: "free will",
    context: "Debates about **free will** ask whether our choices are truly our own.",
    difficulty: "medium",
    synonyms: ["self-autonomy", "liberty", "autonomy", "self-determination", "independent choice", "freedom of choice"],
    tip: "The ability to choose one's actions independently; 'autonomy' means self-governance."
  },
  {
    word: "moral behaviour",
    context: "Religion is only one source of **moral behaviour** in society.",
    difficulty: "medium",
    synonyms: ["honourable act", "honourable conduct", "ethical conduct", "ethical behaviour", "upright conduct", "virtuous conduct"],
    tip: "Conduct that reflects a sense of right and wrong."
  },
  {
    word: "reward",
    context: "Some argue that **reward** is the only real reason people work.",
    difficulty: "medium",
    synonyms: ["monetary gain", "acquisition of money", "financial gain", "payoff", "bonus", "recompense"],
    tip: "Here it is treated as money or material gain rather than praise."
  },
  {
    word: "natural rights",
    context: "The declaration affirmed that all citizens possess **natural rights** that no government may remove.",
    difficulty: "medium",
    synonyms: ["basic entitlement", "basic entitlements", "fundamental entitlements", "inherent freedoms", "inalienable entitlements", "innate entitlements"],
    tip: "Rights believed to belong to people simply by being human."
  },
  {
    word: "adverse consequences",
    context: "Ignoring safety rules can have **adverse consequences** for entire communities.",
    difficulty: "medium",
    synonyms: ["severe repercussions", "harmful repercussions", "serious repercussions", "negative outcomes", "damaging effects", "grave ramifications"],
    tip: "Harmful outcomes; 'repercussions' suggests they follow from a specific action."
  },
  {
    word: "environment",
    context: "A stable political **environment** encourages foreign investment.",
    difficulty: "medium",
    synonyms: ["condition", "conditions", "state", "circumstances", "situation"],
    tip: "Here it means the overall set of conditions in which something operates."
  },
  {
    word: "not in harmony",
    context: "Business goals and environmental protection are often **not in harmony**.",
    difficulty: "medium",
    synonyms: ["contradict", "conflict", "conflicts", "clash", "be at odds", "be incompatible"],
    tip: "A negative phrase can be replaced by a single verb such as 'clash'."
  },
  {
    word: "as a rule",
    context: "**As a rule**, younger consumers prefer to shop online.",
    difficulty: "medium",
    synonyms: ["typically", "usually", "generally", "normally", "ordinarily", "in general"],
    tip: "An idiom meaning 'in most cases'."
  },
  {
    word: "enterprises",
    context: "Young people are often drawn to risky **enterprises** in the hope of quick profit.",
    difficulty: "medium",
    synonyms: ["activities", "ventures", "undertakings", "projects", "endeavours"],
    tip: "An ambitious project or business venture."
  },
  {
    word: "business",
    context: "Critics of capitalism claim that **business** has become little more than a race for profit.",
    difficulty: "medium",
    synonyms: ["making revenues", "making profits", "making profit", "commerce", "trade", "commercial activity"],
    tip: "In this sense, commercial activity aimed at earning money."
  },
  {
    word: "magic",
    context: "Before modern science, people often explained illness through **magic**.",
    difficulty: "medium",
    synonyms: ["supernatural", "mythical conceptions", "mythical beliefs", "sorcery", "witchcraft", "enchantment"],
    tip: "Supernatural forces or beliefs used to explain events."
  },
  {
    word: "theology",
    context: "The conflict between science and **theology** shaped much of Western intellectual history.",
    difficulty: "medium",
    synonyms: ["religious beliefs", "religious doctrine", "religious teachings", "study of religion", "religious studies"],
    tip: "The systematic study of religious faith and belief."
  },
  {
    word: "scientific statements",
    context: "Policymakers are urged to base decisions on **scientific statements** rather than opinion.",
    difficulty: "medium",
    synonyms: ["factual grounding in science", "logical grounding in science", "science-based claims", "evidence-based claims", "statements grounded in science"],
    tip: "Claims that rest on evidence and logic rather than belief."
  },
  {
    word: "new world order",
    context: "Some analysts believe the pandemic ushered in a **new world order**.",
    difficulty: "hard",
    synonyms: ["reshuffled global framework", "reshaped global framework", "reshaped global dynamics", "reshuffled global dynamics", "changed global power structure", "new global power balance"],
    tip: "A dramatic shift in how power is arranged between nations."
  },
  {
    word: "warning",
    context: "Scientists issued a stark **warning** about rising sea levels.",
    difficulty: "easy",
    synonyms: ["alarm", "cautions", "caution", "alert", "notice", "red flag"],
    tip: "Something that alerts people to a danger."
  },
  {
    word: "food shortage",
    context: "Prolonged drought has led to a severe **food shortage** in the region.",
    difficulty: "medium",
    synonyms: ["starvation", "lack of food", "famine", "hunger", "food scarcity", "scarcity of food"],
    tip: "'Famine' is an extreme, widespread lack of food."
  },
  {
    word: "offer an antidote to the perception of day-to-day existence as routine and colourless",
    context: "Fantasy fiction can **offer an antidote to the perception of day-to-day existence as routine and colourless**.",
    difficulty: "hard",
    synonyms: ["relieve the boredom associated with dull life", "relieve the boredom of a dull life", "relieve boredom", "relieve monotony", "alleviate boredom", "combat boredom", "ease the monotony of everyday life"],
    tip: "Capture 'antidote' (relieve) and 'routine and colourless' (dull, boring)."
  },
  {
    word: "hero-worship",
    context: "The media's **hero-worship** of sports stars can create unrealistic expectations for young fans.",
    difficulty: "medium",
    synonyms: ["admiration and deep respect", "deep admiration", "idolisation", "veneration", "reverence"],
    tip: "Excessive admiration of a person seen as a hero."
  },
  {
    word: "outpourings of grief",
    context: "The sudden loss of a beloved teacher prompted **outpourings of grief** from former students.",
    difficulty: "medium",
    synonyms: ["outburst of mourning", "large display of sorrow", "public display of sorrow", "wave of mourning", "mass mourning", "expressions of sorrow"],
    tip: "Strong, open expressions of sorrow, often shared by many people."
  },
  {
    word: "purposeful",
    context: "A **purposeful** life is often more fulfilling than a merely comfortable one.",
    difficulty: "medium",
    synonyms: ["to have a goal", "to have an aim", "to have an objective", "goal-oriented", "driven", "deliberate", "intentional"],
    tip: "Having a clear aim or intention."
  },
  {
    word: "aerobic exercise",
    context: "Singing in a choir can be a form of **aerobic exercise**.",
    difficulty: "hard",
    synonyms: ["vocal workout", "calisthenics", "cardio workout", "cardiovascular exercise"],
    tip: "Sustained activity that raises the heart rate and breathing."
  },
  {
    word: "ailment",
    context: "Many minor **ailments** can be treated at home without seeing a doctor.",
    difficulty: "medium",
    synonyms: ["medical condition", "medical problem", "illness", "sickness", "disease", "health problem"],
    tip: "An illness, typically a minor one."
  },
  {
    word: "individuals in the autumn of their life",
    context: "Community centres offer companionship to **individuals in the autumn of their life**.",
    difficulty: "hard",
    synonyms: ["the old", "the ageing", "the elderly", "senior citizens", "older adults", "the aged"],
    tip: "A metaphor: 'autumn' stands for the later stage of life."
  },
  {
    word: "defuse tensions",
    context: "Skilled diplomats can **defuse tensions** before they escalate into open conflict.",
    difficulty: "hard",
    synonyms: ["mediate interpersonal conflicts", "alleviate strained relationships", "improve tense situations", "calm hostile situations", "resolve conflict", "pacify disputes"],
    tip: "To reduce danger or hostility in a strained situation."
  },
  {
    word: "on a whim",
    context: "Some shoppers make expensive purchases **on a whim** and regret them later.",
    difficulty: "medium",
    synonyms: ["for frivolous reasons", "on impulse", "impulsively", "spontaneously", "for no serious reason", "without planning"],
    tip: "Suddenly and without careful thought."
  },
  {
    word: "boosting bottomlines",
    context: "Cutting waste is a simple way of **boosting bottomlines** without laying off staff.",
    difficulty: "hard",
    synonyms: ["increasing profit", "increasing profits", "raising profits", "improving profitability", "growing profit margins"],
    tip: "The 'bottom line' is net profit, so boosting it means increasing profit."
  },
  {
    word: "remuneration",
    context: "Executive **remuneration** has outpaced inflation for over a decade.",
    difficulty: "hard",
    synonyms: ["compensation", "pay", "payment", "salary", "wages", "earnings", "compensation employees receive for work"],
    tip: "Formal word for pay or payment received for work."
  },
  {
    word: "walk the talk",
    context: "Companies that promote sustainability must **walk the talk** by cutting their own emissions.",
    difficulty: "medium",
    synonyms: ["practise what we preach", "practise what you preach", "do what one says", "act on one's words", "follow through on promises", "match words with actions"],
    tip: "An idiom: behave in ways consistent with what you say."
  },
  {
    word: "public citizens",
    context: "It is the duty of **public citizens** to vote responsibly.",
    difficulty: "medium",
    synonyms: ["members of society", "ordinary people", "the populace", "residents", "the general population"],
    tip: "Ordinary members of a country or community."
  },
  {
    word: "generate momentum",
    context: "A viral hashtag helped the campaign **generate momentum** almost overnight.",
    difficulty: "medium",
    synonyms: ["gain traction", "build up speed", "gather pace", "gather steam", "build up impetus"],
    tip: "To build up the force or speed that keeps something moving forward."
  },
  {
    word: "kinship",
    context: "Migrants often rely on **kinship** networks to find work and housing.",
    difficulty: "hard",
    synonyms: ["family bonds", "family ties", "blood ties", "familial connection", "relatedness"],
    tip: "A sense of connection based on family or shared origin."
  },
  {
    word: "remarkable accomplishments",
    context: "The scientists were honoured for their **remarkable accomplishments** in vaccine research.",
    difficulty: "medium",
    synonyms: ["exceptional achievements", "extraordinary results", "outstanding achievements", "notable feats", "exceptional accomplishments"],
    tip: "Paraphrase both words: remarkable becomes exceptional, accomplishments becomes achievements."
  },
  {
    word: "opposing views",
    context: "A good moderator gives fair time to **opposing views** in a debate.",
    difficulty: "medium",
    synonyms: ["differing perspectives", "differing opinions", "differing considerations", "differing views", "divergent perspectives", "divergent opinions", "divergent considerations", "divergent views", "dissimilar perspectives", "dissimilar opinions", "dissimilar considerations", "contrasting perspectives", "contrasting opinions", "contrasting considerations", "contrasting views", "conflicting views", "different views", "different opinions", "different perspectives"],
    tip: "Mix an adjective (differing, divergent, contrasting) with a noun (perspectives, opinions)."
  },
  {
    word: "steady stream",
    context: "Refugees arrived in a **steady stream** throughout the summer.",
    difficulty: "medium",
    synonyms: ["constant flow", "never-ending flow", "unbroken flow", "continuous flow", "unceasing flow"],
    tip: "A continuous, regular flow of people or things."
  },
  {
    word: "stimulating",
    context: "The documentary was a **stimulating** exploration of urban poverty.",
    difficulty: "medium",
    synonyms: ["thought-provoking", "inspiring", "invigorating", "engages the mind", "engaging"],
    tip: "Encouraging interest, thought or activity."
  },
  {
    word: "strengthen attention spans",
    context: "Reading long novels can **strengthen attention spans** in a distracted generation.",
    difficulty: "hard",
    synonyms: ["hone their ability to focus", "build their concentration", "sharpen their concentration", "improve their focus", "enhance concentration", "boost concentration"],
    tip: "Strengthen becomes hone or build; attention span becomes ability to focus."
  },
  {
    word: "expanded vocabulary",
    context: "An **expanded vocabulary** helps students express nuanced ideas.",
    difficulty: "hard",
    synonyms: ["enriched lexicon", "wider lexicon", "larger lexicon", "stronger language ability", "broader wordbank", "broader word bank", "richer word bank"],
    tip: "'Lexicon' and 'wordbank' both refer to the stock of words a person knows."
  },
  {
    word: "taking away their autonomy",
    context: "Micromanaging staff risks **taking away their autonomy** and dampening creativity.",
    difficulty: "hard",
    synonyms: ["removing their agency", "depriving them of agency", "stripping them of independence", "removing their independence", "denying them control"],
    tip: "Autonomy means the freedom to make one's own decisions; 'agency' is a close alternative."
  },
  {
    word: "anonymity",
    context: "**Anonymity** online can embolden people to say things they would never say aloud.",
    difficulty: "medium",
    synonyms: ["being nameless", "being unidentifiable", "namelessness", "hidden identity", "concealed identity", "obscurity"],
    tip: "The state of not being identified."
  },
  {
    word: "good conduct",
    context: "Prisoners may earn early release for **good conduct**.",
    difficulty: "medium",
    synonyms: ["good manner", "good manners", "proper behaviour", "exemplary behaviour", "decent behaviour", "upright behaviour"],
    tip: "Behaviour that follows accepted standards."
  },
  {
    word: "take heart",
    context: "Despite the setbacks, activists were told to **take heart** because change was coming.",
    difficulty: "medium",
    synonyms: ["be brave", "not to lose hope", "do not lose hope", "be encouraged", "be courageous", "stay hopeful", "cheer up"],
    tip: "An idiom: to gain courage or comfort from something."
  },
  {
    word: "start small",
    context: "For those wishing to live sustainably, it helps to **start small**.",
    difficulty: "medium",
    synonyms: ["take baby steps", "minor incremental acts", "take minor incremental steps", "begin modestly", "begin with modest steps"],
    tip: "To begin with modest, manageable actions."
  },
  {
    word: "conscious effort",
    context: "Making friends in a new city takes **conscious effort**.",
    difficulty: "medium",
    synonyms: ["active steps", "deliberate work", "deliberate effort", "intentional effort", "purposeful effort"],
    tip: "Effort made deliberately, with awareness."
  },
  {
    word: "interpersonal interactions",
    context: "Remote work can reduce spontaneous **interpersonal interactions** among colleagues.",
    difficulty: "hard",
    synonyms: ["social exchanges", "civil conversations", "amicable communication", "communication between people", "dealings between people", "face-to-face exchanges"],
    tip: "Contact and communication between people."
  },
  {
    word: "language",
    context: "Music is often described as a universal **language**.",
    difficulty: "medium",
    synonyms: ["form of expression", "communication", "mode of expression", "means of communication", "medium of expression"],
    tip: "Here, any system of expression or communication, not only spoken words."
  }
];
