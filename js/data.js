/*
 * Portfolio content — Jordan NGUCHO
 * Every user-facing string is bilingual: { en: "...", fr: "..." }.
 * To add a project, append an object to `projects` (see the existing ones for the shape).
 */
window.PORTFOLIO = {
  profile: {
    name: "Jordan NGUCHO",
    email: "ymbeutchou@gmail.com",
    phone: "+33 6 13 58 91 92",
    phoneHref: "+33613589192",
    location: { en: "Athis-Mons, Paris area, France", fr: "Athis-Mons, région parisienne, France" },
    linkedin: "https://linkedin.com/in/jordan-ngucho",
    github: "https://github.com/ngucho",
    githubUser: "ngucho",
    cv: "assets/Jordan-ngucho-cv.pdf",
    // Paste your Calendly link here (e.g. "https://calendly.com/jordan-ngucho/30min") to show "Book a call" buttons.
    calendly: "",
    roles: {
      en: ["Data Scientist", "AI Project Lead", "Solution Architect", "Startup Co-founder", "MLOps Engineer"],
      fr: ["Data Scientist", "Chef de projet IA", "Architecte solution", "Co-fondateur de startups", "Ingénieur MLOps"]
    }
  },

  stats: [
    { value: 4, suffix: "+", label: { en: "years building Data & AI", fr: "ans en Data & IA" } },
    { value: 5, suffix: "+", label: { en: "industrial AI projects in production", fr: "projets IA industriels en production" } },
    { value: 380, suffix: "+", label: { en: "user interviews led", fr: "entretiens utilisateurs menés" } },
    { value: 300, suffix: "M+", label: { en: "monthly views on media I power", fr: "vues/mois sur le média que j'équipe" } }
  ],

  experience: [
    {
      org: "Safran Aircraft Engines",
      role: { en: "Data Scientist — AI team lead", fr: "Data Scientist — lead d'équipe IA" },
      period: { en: "Jan 2023 — Present", fr: "Janv. 2023 — Présent" },
      place: "Villaroche, France",
      type: "industry",
      points: {
        en: [
          "Lead a team of 4 Data/AI engineers delivering 5+ critical industrial projects to production.",
          "Designed an end-to-end architecture (PostgreSQL → TensorFlow → FastAPI → React) with real-time anomaly detection and digital twins.",
          "Set up GitLab CI/CD + Docker pipelines with 24/7 monitoring of model performance in production.",
          "Built and exposed ETL pipelines so plants can retrieve their high-frequency production data on their own, with optimised complex SQL.",
          "Delivered web apps (Dash, FastAPI) and analysis & forecasting tools used by engineering and production teams."
        ],
        fr: [
          "Management d'une équipe de 4 ingénieurs Data/IA pour livrer 5+ projets industriels critiques en production.",
          "Conception d'une architecture de bout en bout (PostgreSQL → TensorFlow → FastAPI → React) avec détection d'anomalies temps réel et jumeaux numériques.",
          "Mise en place de pipelines CI/CD GitLab + Docker avec supervision 24/7 de la performance des modèles.",
          "Conception et mise à disposition d'ETL permettant aux usines de récupérer elles-mêmes leurs données de production haute fréquence (SQL complexe optimisé).",
          "Développement de web apps (Dash, FastAPI) et d'outils d'analyse et de prévision utilisés par l'ingénierie et la production."
        ]
      }
    },
    {
      org: "Jolari Tech",
      role: { en: "Founder (freelance structure)", fr: "Fondateur (structure freelance)" },
      period: { en: "Jul 2026 — Present", fr: "Juil. 2026 — Présent" },
      place: "France",
      type: "venture",
      points: {
        en: [
          "Micro-enterprise set up to take on freelance Data Engineering, Data Science and full-stack missions — available for a first engagement.",
          "Product R&D on Zephyru, a dating app built on recommendation and matching algorithms (in development)."
        ],
        fr: [
          "Micro-entreprise créée pour accueillir des missions freelance en Data Engineering, Data Science et full-stack — disponible pour une première mission.",
          "R&D produit sur Zephyru, application de rencontre reposant sur des algorithmes de recommandation et de matching (en développement)."
        ]
      }
    },
    {
      org: "Scoop Afrique",
      role: { en: "CTO & Strategy / Operations Director", fr: "CTO & Directeur Stratégie / Opérations" },
      period: { en: "Dec 2024 — Present", fr: "Déc. 2024 — Présent" },
      place: "Abidjan, Côte d'Ivoire",
      type: "venture",
      points: {
        en: [
          "Deployed Speech-to-Text and Text-to-Speech (Piper) into a media reaching 300M+ views/month and 1.5M+ subscribers.",
          "Built a custom Next.js CRM; own the technical roadmap, budgets and hiring."
        ],
        fr: [
          "Déploiement de solutions Speech-to-Text et Text-to-Speech (Piper) pour un média à 300M+ vues/mois et 1,5M+ abonnés.",
          "Développement d'un CRM sur mesure en Next.js ; pilotage de la roadmap technique, des budgets et du recrutement."
        ]
      }
    },
    {
      org: "Docfira",
      role: { en: "CEO, Co-founder & Solution Architect", fr: "CEO, Co-fondateur & Architecte solution" },
      period: { en: "May 2024 — Present", fr: "Mai 2024 — Présent" },
      place: "Abidjan, Côte d'Ivoire",
      type: "venture",
      points: {
        en: [
          "Building docfira.com, a care-continuity suite (Patient, Pro, Scribe, SIH, Connect) for Côte d'Ivoire.",
          "Designed Scribe, a GenAI system that drafts the report, prescription and follow-up plan in ~30 s instead of ~15 min.",
          "Architected the full stack: Next.js, TypeScript, Hono, Supabase, Upstash, Auth0, Drizzle.",
          "Ran 380+ interviews with patients and health professionals to drive the roadmap and UX."
        ],
        fr: [
          "Construction de docfira.com, une suite de continuité des soins (Patient, Pro, Scribe, SIH, Connect) pour la Côte d'Ivoire.",
          "Conception de Scribe, système GenAI qui rédige compte rendu, ordonnance et plan de suivi en ~30 s au lieu de ~15 min.",
          "Architecture complète : Next.js, TypeScript, Hono, Supabase, Upstash, Auth0, Drizzle.",
          "380+ entretiens avec patients et professionnels de santé pour piloter la roadmap et l'UX."
        ]
      }
    },
    {
      org: "Cholala Pepper",
      role: { en: "Founder & Project Lead", fr: "Fondateur & Chef de projet" },
      period: { en: "2024 — 2025 (stopped)", fr: "2024 — 2025 (arrêté)" },
      place: "France — Cameroon",
      type: "venture",
      points: {
        en: [
          "Ran an agri-food startup on a hybrid France–Cameroon model: producer sourcing, international logistics, multichannel distribution.",
          "Stopped in 2025 after a crop disease destroyed the plantations."
        ],
        fr: [
          "Pilotage d'une startup agroalimentaire en modèle hybride France–Cameroun : sourcing producteurs, logistique internationale, distribution multicanale.",
          "Arrêtée en 2025 après qu'une maladie a détruit les plantations."
        ]
      }
    },
    {
      org: "Université Paris 1 Panthéon-Sorbonne",
      role: { en: "Teaching Assistant — Probability & Statistics", fr: "Chargé de TD — Probabilités & Statistiques" },
      period: { en: "Jan — May 2025", fr: "Janv. — Mai 2025" },
      place: "Paris, France",
      type: "teaching",
      points: {
        en: ["Ran probability tutorials for first-year undergraduates (~20 students) with individual follow-up."],
        fr: ["Animation de TD de probabilités en Licence 1 (~20 étudiants) avec suivi individualisé."]
      }
    },
    {
      org: "Safran Tech",
      role: { en: "Data Scientist", fr: "Data Scientist" },
      period: { en: "Sep 2021 — Sep 2022", fr: "Sept. 2021 — Sept. 2022" },
      place: "Magny-les-Hameaux, France",
      type: "industry",
      points: {
        en: [
          "Built supervised ML models (CNNs, Gaussian Processes, regression) to automate constitutive-law selection and optimise manufacturing processes.",
          "Implemented the Chaboche cyclic-plasticity model, validated on industrial cases."
        ],
        fr: [
          "Modèles ML supervisés (CNN, processus gaussiens, régression) pour automatiser la sélection de lois de comportement et optimiser les procédés.",
          "Implémentation du modèle de Chaboche (plasticité cyclique) validé sur cas industriels."
        ]
      }
    },
    {
      org: "ONERA",
      role: { en: "Deep Learning & Computer Vision Intern", fr: "Stagiaire Deep Learning & Computer Vision" },
      period: { en: "Mar — Aug 2021", fr: "Mars — Août 2021" },
      place: "Palaiseau, France",
      type: "industry",
      points: {
        en: ["Built an automatic object-detection system (YOLO, CNN): preprocessing, labelling, training and validation."],
        fr: ["Création d'un système de détection automatique d'objets (YOLO, CNN) : prétraitement, labellisation, entraînement, validation."]
      }
    }
  ],

  /*
   * Project categories used by the filter chips.
   */
  categories: {
    all: { en: "All", fr: "Tous" },
    ai: { en: "AI & ML", fr: "IA & ML" },
    genai: { en: "GenAI & Speech", fr: "GenAI & Voix" },
    fullstack: { en: "Full-stack", fr: "Full-stack" },
    industrial: { en: "Industrial", fr: "Industrie" },
    venture: { en: "Ventures", fr: "Entrepreneuriat" },
    opensource: { en: "Open source", fr: "Open source" }
  },

  projects: [
    {
      id: "docfira-scribe",
      featured: true,
      title: "Docfira · Scribe",
      org: "Docfira",
      period: "2024 →",
      status: { en: "Live", fr: "En ligne" },
      tags: ["genai", "fullstack", "venture"],
      icon: "pulse",
      hue: 160,
      image: "assets/projects/docfira",
      tagline: {
        en: "Care-continuity suite and AI medical scribe for Côte d'Ivoire — report ready in 30 seconds.",
        fr: "Suite de continuité des soins et scribe médical IA pour la Côte d'Ivoire — compte rendu prêt en 30 secondes."
      },
      role: { en: "CEO, Co-founder & Solution Architect", fr: "CEO, Co-fondateur & Architecte solution" },
      problem: {
        en: "Côte d'Ivoire has about 1 doctor per 10,000 people (WHO norm: 4.5), 23M people newly enrolled in universal health coverage, ~40% of adults with hypertension — and clinicians lose 30–40% of their time to paperwork. Records get lost between consultations, often in poorly connected areas.",
        fr: "La Côte d'Ivoire compte environ 1 médecin pour 10 000 habitants (norme OMS : 4,5), 23 M d'Ivoiriens enrôlés à la CMU, ~40 % d'adultes hypertendus — et les soignants perdent 30 à 40 % de leur temps en tâches administratives. Le dossier se perd entre deux consultations, souvent dans des zones mal connectées."
      },
      solution: {
        en: "Docfira brings the patient, their doctor and the hospital onto one shared care record, through five products: Patient (measures, treatments, reminders), Pro (agenda, records, documents), Scribe, and soon SIH (hospital information system) and Connect (secure care messaging). Scribe listens to the consultation from a computer or phone and drafts the report, prescription and follow-up plan in about 30 seconds instead of 15 minutes. It only documents what was said — no invented advice — and the doctor remains the final validator.",
        fr: "Docfira réunit le patient, son médecin et l'hôpital autour d'un même dossier de soin, via cinq produits : Patient (mesures, traitements, rappels), Pro (agenda, dossier, documents), Scribe, et bientôt SIH (système d'information hospitalier) et Connect (messagerie sécurisée du soin). Scribe écoute la consultation depuis l'ordinateur ou le téléphone et rédige compte rendu, ordonnance et plan de suivi en 30 secondes environ au lieu de 15 minutes. Il ne documente que ce qui a été dit — aucun conseil inventé — et le médecin reste le validateur final."
      },
      pipeline: ["Consultation audio", "Speech-to-Text", "LLM drafting", "Doctor validation", "Shared care record", "Patient & alerts"],
      highlights: {
        en: [
          "380+ user interviews (238 patients, 149 health professionals) shaped the roadmap and UX.",
          "Example journey: a diabetic patient logs glucose daily; three high values in a row raise an alert on the doctor's dashboard.",
          "Designed for low-connectivity areas (offline-first), with a full TypeScript stack: Next.js, Hono, Supabase + Drizzle, Upstash, Auth0."
        ],
        fr: [
          "380+ entretiens utilisateurs (238 patients, 149 professionnels de santé) pour orienter roadmap et UX.",
          "Parcours type : un patient diabétique saisit sa glycémie chaque jour ; trois valeurs hautes d'affilée déclenchent une alerte sur le tableau de bord du médecin.",
          "Pensé pour les zones mal connectées (offline-first), stack 100 % TypeScript : Next.js, Hono, Supabase + Drizzle, Upstash, Auth0."
        ]
      },
      metrics: [
        { value: "30 s", label: { en: "report vs ~15 min by hand", fr: "compte rendu vs ~15 min à la main" } },
        { value: "5", label: { en: "products in one suite", fr: "produits, une seule suite" } },
        { value: "380+", label: { en: "user interviews", fr: "entretiens utilisateurs" } }
      ],
      stack: ["Next.js", "TypeScript", "Hono", "Supabase", "Drizzle", "Upstash", "Auth0", "LLMs", "Speech-to-Text"],
      links: [
        { label: "docfira.com", url: "https://www.docfira.com" },
        { label: "Scribe", url: "https://www.docfira.com/scribe" }
      ]
    },
    {
      id: "safran-anomaly-platform",
      featured: true,
      title: { en: "Real-time Anomaly Detection & Digital Twins", fr: "Détection d'anomalies temps réel & jumeaux numériques" },
      org: "Safran Aircraft Engines",
      period: "2023 →",
      status: { en: "In production", fr: "En production" },
      tags: ["ai", "industrial", "fullstack"],
      icon: "engine",
      hue: 215,
      tagline: {
        en: "End-to-end AI platform monitoring aircraft-engine manufacturing in real time.",
        fr: "Plateforme IA de bout en bout pour surveiller en temps réel la fabrication de moteurs d'avion."
      },
      role: { en: "Data Scientist & team lead (4 engineers)", fr: "Data Scientist & lead d'équipe (4 ingénieurs)" },
      problem: {
        en: "High-frequency process data was analysed after the fact, so drifts and anomalies were found late, and process changes could not be evaluated against product life before running them.",
        fr: "Les données procédé haute fréquence étaient analysées a posteriori : les dérives étaient détectées tard, et l'impact d'un changement de procédé sur la durée de vie produit ne pouvait pas être anticipé."
      },
      solution: {
        en: "A global architecture from data to UI: optimised ETL into PostgreSQL, TensorFlow models for real-time anomaly and drift detection on time series, predictive digital twins, a FastAPI service layer and React dashboards. Models ship through GitLab CI/CD in Docker, with 24/7 monitoring of their performance.",
        fr: "Une architecture globale de la donnée à l'interface : ETL optimisés vers PostgreSQL, modèles TensorFlow de détection d'anomalies et de dérives sur séries temporelles, jumeaux numériques prédictifs, une couche de services FastAPI et des dashboards React. Les modèles sont livrés via CI/CD GitLab sous Docker, avec un monitoring 24/7 de leur performance."
      },
      pipeline: ["Sensors & MES", "ETL → PostgreSQL", "TensorFlow models", "FastAPI", "React dashboards", "Monitoring 24/7"],
      highlights: {
        en: [
          "5+ critical industrial projects delivered to production with a team of 4.",
          "Root-cause analysis and multifactor modelling feeding actionable recommendations.",
          "PoCs in SAM segmentation and RAG (LangChain) assistants for engineering teams."
        ],
        fr: [
          "5+ projets industriels critiques livrés en production avec une équipe de 4.",
          "Analyses de causes racines et modélisation multifactorielle débouchant sur des recommandations actionnables.",
          "PoC de segmentation SAM et d'assistants RAG (LangChain) pour l'ingénierie."
        ]
      },
      metrics: [
        { value: "5+", label: { en: "projects in prod", fr: "projets en prod" } },
        { value: "4", label: { en: "engineers led", fr: "ingénieurs encadrés" } },
        { value: "24/7", label: { en: "model monitoring", fr: "monitoring modèles" } }
      ],
      stack: ["Python", "TensorFlow", "PostgreSQL", "FastAPI", "React", "Docker", "GitLab CI/CD", "SQL"],
      links: []
    },
    {
      id: "safran-factory-data",
      featured: true,
      title: { en: "Factory Data Access, Web Apps & Forecasting", fr: "Accès aux données usines, web apps & prévision" },
      org: "Safran Aircraft Engines",
      period: "2023 →",
      status: { en: "In production", fr: "En production" },
      tags: ["industrial", "fullstack", "ai"],
      icon: "db",
      hue: 195,
      tagline: {
        en: "ETLs that let plants pull their own data, plus Dash/FastAPI apps and forecasting tools.",
        fr: "Des ETL qui permettent aux usines de récupérer leurs données, des apps Dash/FastAPI et des outils de prévision."
      },
      role: { en: "Data engineer & data scientist", fr: "Data engineer & data scientist" },
      problem: {
        en: "Production data was spread across plant systems and hard to retrieve: engineers depended on manual extractions before they could analyse a drift or anticipate the next weeks.",
        fr: "Les données de production étaient dispersées dans les systèmes des usines et difficiles à récupérer : les ingénieurs dépendaient d'extractions manuelles avant de pouvoir analyser une dérive ou anticiper les semaines à venir."
      },
      solution: {
        en: "Designed and exposed ETL pipelines so plants can retrieve the data they need on their own, then built web applications on top — Dash for interactive analytics, FastAPI for services — and analysis and forecasting tools to predict production behaviour and support decisions.",
        fr: "Conception et mise à disposition de pipelines ETL pour que les usines récupèrent elles-mêmes les données dont elles ont besoin, puis développement de web apps par-dessus — Dash pour l'analyse interactive, FastAPI pour les services — et d'outils d'analyse et de prévision pour anticiper le comportement de la production et aider à la décision."
      },
      pipeline: ["Plant systems", "ETL", "PostgreSQL / SQL", "FastAPI services", "Dash apps", "Forecasts & analysis"],
      highlights: {
        en: [
          "Self-service data access for plants instead of one-off extractions.",
          "Root-cause analysis, multifactor modelling and time-series forecasting.",
          "Same platform feeds the real-time anomaly-detection models."
        ],
        fr: [
          "Accès aux données en libre-service pour les usines plutôt que des extractions ponctuelles.",
          "Analyse de causes racines, modélisation multifactorielle et prévision sur séries temporelles.",
          "La même plateforme alimente les modèles de détection d'anomalies temps réel."
        ]
      },
      metrics: [],
      stack: ["Python", "SQL", "PostgreSQL", "ETL", "Dash", "FastAPI", "Time series", "Docker"],
      links: []
    },
    {
      id: "scoop-afrique",
      featured: true,
      title: "Scoop Afrique — Voice AI & CRM",
      org: "Scoop Afrique",
      period: "2024 →",
      status: { en: "In production", fr: "En production" },
      tags: ["genai", "fullstack", "venture"],
      icon: "wave",
      hue: 0,
      image: "assets/projects/scoop-afrique",
      tagline: {
        en: "Speech AI and a custom CRM for a media with 300M+ monthly views.",
        fr: "IA vocale et CRM sur mesure pour un média à 300M+ vues mensuelles."
      },
      role: { en: "CTO & Strategy / Operations Director", fr: "CTO & Directeur Stratégie / Opérations" },
      problem: {
        en: "A fast-growing African digital media needed to produce and repurpose content at scale and to manage partners and advertisers without generic, costly tools.",
        fr: "Un média digital africain en forte croissance devait produire et décliner du contenu à grande échelle et gérer partenaires et annonceurs sans outils génériques coûteux."
      },
      solution: {
        en: "Integrated Speech-to-Text and self-hosted Text-to-Speech (Piper) into the editorial workflow — every article on scoop-afrique.com can be listened to through a built-in \"Listen to the article\" player. Built a tailored Next.js CRM, and run the technical roadmap, budget and hiring.",
        fr: "Intégration du Speech-to-Text et d'un Text-to-Speech auto-hébergé (Piper) dans le flux éditorial — chaque article de scoop-afrique.com peut s'écouter via le lecteur « Écouter l'article ». Développement d'un CRM Next.js sur mesure, et pilotage de la roadmap technique, du budget et du recrutement."
      },
      pipeline: ["Raw video/audio", "Speech-to-Text", "Editorial", "Piper TTS", "Publishing", "CRM"],
      highlights: {
        en: [
          "Voice AI running behind 300M+ views/month and 1.5M+ subscribers.",
          "Self-hosted TTS keeps per-minute costs low.",
          "In-house CRM built around the team's real sales process."
        ],
        fr: [
          "IA vocale derrière 300M+ vues/mois et 1,5M+ abonnés.",
          "TTS auto-hébergé pour maîtriser le coût à la minute.",
          "CRM interne construit autour du vrai processus commercial de l'équipe."
        ]
      },
      metrics: [
        { value: "300M+", label: { en: "views / month", fr: "vues / mois" } },
        { value: "1.5M+", label: { en: "subscribers", fr: "abonnés" } }
      ],
      stack: ["Next.js", "TypeScript", "Speech-to-Text", "Piper TTS", "PostgreSQL"],
      links: [{ label: "scoop-afrique.com", url: "https://www.scoop-afrique.com" }]
    },
    {
      id: "jenkins-analyzer",
      featured: true,
      title: "Jenkins Analyzer",
      org: { en: "Open source", fr: "Open source" },
      period: "2026",
      status: { en: "Open source", fr: "Open source" },
      tags: ["opensource", "fullstack", "ai"],
      icon: "chart",
      hue: 265,
      tagline: {
        en: "See, forecast and rebalance the load on a Jenkins server — no backend needed.",
        fr: "Visualiser, prévoir et rééquilibrer la charge d'un serveur Jenkins — sans backend."
      },
      role: { en: "Author", fr: "Auteur" },
      problem: {
        en: "Teams don't know when their Jenkins machine is saturated or idle, so scheduled jobs pile up at the same hour and maintenance windows are guessed.",
        fr: "Les équipes ne savent pas quand leur Jenkins est saturé ou au repos : les jobs planifiés s'empilent à la même heure et les fenêtres de maintenance sont devinées."
      },
      solution: {
        en: "An Angular 20 app where the browser queries the Jenkins REST API directly. It computes occupancy, peak concurrency and idle windows, draws a zoomable load timeline and a typical week, forecasts load 1–7 days ahead with ranges and saturation risks, and proposes new cron offsets to spread scheduled jobs — plus the best slot for a new job.",
        fr: "Une app Angular 20 où le navigateur interroge directement l'API REST Jenkins. Elle calcule l'occupation, la concurrence maximale et les fenêtres creuses, trace une timeline zoomable et une semaine type, prévoit la charge à 1–7 jours avec intervalles et risques de saturation, et propose de nouveaux crons pour étaler les jobs — ainsi que le meilleur créneau pour un nouveau job."
      },
      pipeline: ["Jenkins REST API", "Domain analytics (pure TS)", "Forecasting", "Cron optimiser", "Angular UI"],
      highlights: {
        en: [
          "Clean/hexagonal layering: domain, ports, application, infrastructure, presentation.",
          "Pure-TypeScript, unit-tested analytics and planning modules.",
          "Demo mode, CORS dev proxy and a dependency-free NAS packaging script."
        ],
        fr: [
          "Architecture en couches (hexagonale) : domaine, ports, application, infrastructure, présentation.",
          "Modules d'analyse et de planification en TypeScript pur, testés unitairement.",
          "Mode démo, proxy CORS de dev et script de packaging NAS sans dépendance."
        ]
      },
      metrics: [
        { value: "1–7 d", label: { en: "load forecast", fr: "prévision de charge" } },
        { value: "0", label: { en: "backend", fr: "backend" } }
      ],
      stack: ["Angular 20", "TypeScript", "Signals", "Karma", "Jenkins API"],
      links: [{ label: "GitHub", url: "https://github.com/ngucho/Jenkins-Analyzer" }]
    },
    {
      id: "zephyru",
      title: "Zephyru",
      org: "Jolari Tech",
      period: "2026 →",
      status: { en: "In development", fr: "En développement" },
      tags: ["ai", "venture"],
      icon: "spark",
      hue: 320,
      tagline: {
        en: "A dating app powered by recommendation and matching algorithms — in active development.",
        fr: "Une application de rencontre propulsée par des algorithmes de recommandation et de matching — en développement."
      },
      role: { en: "Founder & product lead", fr: "Fondateur & lead produit" },
      problem: {
        en: "Mainstream dating apps optimise for swipes and engagement rather than for relevant, compatible matches.",
        fr: "Les applications de rencontre grand public optimisent le swipe et l'engagement plutôt que la pertinence et la compatibilité des rencontres."
      },
      solution: {
        en: "Zephyru is a dating app whose core is a set of recommendation and matching algorithms. It is still being built and has not launched in production yet.",
        fr: "Zephyru est une application de rencontre dont le cœur est un ensemble d'algorithmes de recommandation et de matching. Elle est toujours en construction et n'est pas encore en production."
      },
      pipeline: ["User profiles & signals", "Recommendation", "Matching", "Feedback loop"],
      highlights: {
        en: ["Not yet in production — ongoing product R&D under Jolari Tech."],
        fr: ["Pas encore en production — R&D produit en cours au sein de Jolari Tech."]
      },
      metrics: [],
      stack: ["Recommender systems", "Matching algorithms", "Python", "TypeScript"],
      links: []
    },
    {
      id: "hd-corporate",
      title: "HD Corporate",
      org: { en: "Client project", fr: "Projet client" },
      period: "2026",
      status: { en: "Delivered · live", fr: "Livré · en ligne" },
      tags: ["fullstack"],
      icon: "building",
      hue: 45,
      image: "assets/projects/hdcorporate",
      tagline: {
        en: "Showcase website for a business lawyer: company creation and corporate legal services.",
        fr: "Site vitrine pour un juriste d'affaires : création de société et secrétariat juridique."
      },
      role: { en: "Freelance web developer (design & build)", fr: "Développeur web freelance (conception & réalisation)" },
      problem: {
        en: "A certified business lawyer needed a credible online presence to present services — company creation (SAS, SASU, Delaware LLC), corporate legal secretarial work, M&A — and turn visitors into discovery calls.",
        fr: "Un juriste d'affaires certifié avait besoin d'une présence en ligne crédible pour présenter ses services — création de société (SAS, SASU, LLC Delaware), secrétariat juridique, M&A — et transformer les visiteurs en appels découverte."
      },
      solution: {
        en: "Designed and built hdcorporate.fr: a premium showcase site with clear service pages, process and FAQ sections, transparent pricing and a free discovery-call booking flow (Cal.com), built as a TypeScript monorepo with Auth0.",
        fr: "Conception et réalisation de hdcorporate.fr : un site vitrine haut de gamme avec pages services, processus et FAQ, tarifs transparents et prise de rendez-vous gratuite (Cal.com), développé en monorepo TypeScript avec Auth0."
      },
      pipeline: ["Brand & copy", "Service pages", "Process & FAQ", "Cal.com booking", "Launch"],
      highlights: {
        en: ["Live at hdcorporate.fr.", "Conversion-focused: every section leads to a booked call or a company-creation offer."],
        fr: ["En ligne sur hdcorporate.fr.", "Orienté conversion : chaque section mène à un appel réservé ou à une offre de création de société."]
      },
      metrics: [],
      stack: ["TypeScript", "Turborepo", "Auth0", "Cal.com", "SEO"],
      links: [
        { label: "hdcorporate.fr", url: "https://www.hdcorporate.fr" },
        { label: "GitHub", url: "https://github.com/ngucho/hdcorporate" }
      ]
    },
    {
      id: "constitutive-law-ml",
      title: { en: "ML Selection of Constitutive Laws", fr: "Sélection ML de lois de comportement" },
      org: "Safran Tech",
      period: "2021 — 2022",
      status: { en: "Research", fr: "Recherche" },
      tags: ["ai", "industrial"],
      icon: "network",
      hue: 195,
      tagline: {
        en: "CNNs and Gaussian Processes picking the right material model from loading histories.",
        fr: "CNN et processus gaussiens pour choisir le bon modèle matériau à partir des historiques de chargement."
      },
      role: { en: "Data Scientist", fr: "Data Scientist" },
      problem: {
        en: "Choosing and calibrating the right constitutive law for nonlinear mechanics is slow, expert-dependent and hard to reproduce.",
        fr: "Choisir et calibrer la bonne loi de comportement en mécanique non linéaire est lent, dépendant de l'expert et difficile à reproduire."
      },
      solution: {
        en: "Supervised models that classify loading histories with a CNN, complemented by optimised KNN and Gaussian-Process regressors, to recommend the constitutive law; the Chaboche cyclic-plasticity model was implemented and validated on industrial cases with ABAQUS.",
        fr: "Des modèles supervisés qui classent les historiques de chargement par CNN, complétés par un KNN optimisé et des régressions par processus gaussiens, pour recommander la loi de comportement ; le modèle de Chaboche (plasticité cyclique) a été implémenté et validé sur cas industriels avec ABAQUS."
      },
      pipeline: ["Loading histories", "Feature extraction", "CNN classifier", "GP / KNN", "Law recommendation", "ABAQUS validation"],
      highlights: {
        en: ["Bridges physics-based simulation and machine learning.", "Also applied to manufacturing-process optimisation."],
        fr: ["Fait le pont entre simulation physique et machine learning.", "Également appliqué à l'optimisation de procédés de fabrication."]
      },
      metrics: [],
      stack: ["Python", "TensorFlow", "Scikit-learn", "Gaussian Processes", "ABAQUS"],
      links: []
    },
    {
      id: "spatter-detection",
      title: { en: "Spatter Detection in Metal 3D Printing", fr: "Détection d'éjectas en impression 3D métal" },
      org: "ONERA",
      period: "2021",
      status: { en: "Research", fr: "Recherche" },
      tags: ["ai", "industrial"],
      icon: "eye",
      hue: 0,
      tagline: {
        en: "Computer vision on high-speed video to detect spatters in additive manufacturing.",
        fr: "Vision par ordinateur sur vidéo rapide pour détecter les éjectas en fabrication additive."
      },
      role: { en: "Deep Learning & CV intern", fr: "Stagiaire Deep Learning & CV" },
      problem: {
        en: "Spatters ejected during metal additive manufacturing affect part quality, but counting them by hand on high-speed footage is impossible at scale.",
        fr: "Les éjectas projetés pendant la fabrication additive métallique dégradent la qualité des pièces, mais les compter à la main sur des vidéos rapides est impossible à grande échelle."
      },
      solution: {
        en: "A complete CV pipeline: high-speed video acquisition, OpenCV preprocessing, a labelled dataset, then YOLOv4 detection and Mask-RCNN segmentation trained and validated on the process footage.",
        fr: "Un pipeline CV complet : acquisition vidéo haute vitesse, prétraitement OpenCV, jeu de données labellisé, puis détection YOLOv4 et segmentation Mask-RCNN entraînées et validées sur les vidéos du procédé."
      },
      pipeline: ["High-speed video", "OpenCV preprocessing", "Labelling", "YOLOv4 / Mask-RCNN", "Validation"],
      highlights: {
        en: ["End-to-end ownership from data acquisition to model validation."],
        fr: ["Prise en charge de bout en bout, de l'acquisition à la validation du modèle."]
      },
      metrics: [],
      stack: ["Python", "YOLOv4", "Mask-RCNN", "OpenCV", "TensorFlow"],
      links: []
    },
    {
      id: "composite-digital-twin",
      title: { en: "Digital Twin of 3D-Woven Composites", fr: "Jumeau numérique de composites tissés 3D" },
      org: "Safran Aircraft Engines",
      period: "2023 — 2025",
      status: { en: "Industrialised", fr: "Industrialisé" },
      tags: ["industrial", "ai"],
      icon: "cube",
      hue: 140,
      tagline: {
        en: "Predicting how process changes on woven preforms impact part life.",
        fr: "Prédire l'impact des changements de procédé sur la durée de vie des pièces tissées."
      },
      role: { en: "Simulation engineer & data scientist", fr: "Ingénieur simulation & data scientist" },
      problem: {
        en: "Forming 3D-woven composite preforms is complex; every process tweak needed costly trials to know its effect on the final part.",
        fr: "La mise en forme de préformes composites tissées 3D est complexe ; chaque ajustement procédé exigeait des essais coûteux pour en connaître l'effet."
      },
      solution: {
        en: "Built and matured a full forming methodology with meso/macro multi-scale models and nonlinear FEM coupling, correlated with experiments, and wrapped it into predictive digital twins. Supervised 4 engineering interns on image analysis, mesoscopic modelling and constitutive laws.",
        fr: "Création et maturation d'une méthodologie complète de mise en forme avec modèles multi-échelles méso/macro et couplage MEF non linéaire, corrélés aux essais, puis encapsulés dans des jumeaux numériques prédictifs. Encadrement de 4 stagiaires ingénieurs (analyse d'images, modélisation mésoscopique, lois de comportement)."
      },
      pipeline: ["Tomography / images", "Meso model", "Macro FEM", "Test correlation", "Predictive twin"],
      highlights: {
        en: ["Model–test correlation on real industrial parts.", "Post-processing tooling to automate simulation campaigns."],
        fr: ["Corrélation modèles–essais sur pièces industrielles.", "Outils de post-traitement pour automatiser les campagnes de simulation."]
      },
      metrics: [{ value: "4", label: { en: "interns supervised", fr: "stagiaires encadrés" } }],
      stack: ["Python", "LS-DYNA", "ABAQUS", "ANSA", "Multi-scale FEM"],
      links: []
    },
    {
      id: "inceptiontime",
      title: "InceptionTime · PyTorch",
      org: { en: "Open source", fr: "Open source" },
      period: "2022",
      status: { en: "Open source", fr: "Open source" },
      tags: ["opensource", "ai"],
      icon: "wave",
      hue: 250,
      tagline: {
        en: "A compact PyTorch port of InceptionTime for time-series classification.",
        fr: "Un portage PyTorch compact d'InceptionTime pour la classification de séries temporelles."
      },
      role: { en: "Author", fr: "Auteur" },
      problem: {
        en: "InceptionTime (Ismail Fawaz et al., 2020) — \"AlexNet for time series\" — was originally released for Keras.",
        fr: "InceptionTime (Ismail Fawaz et al., 2020) — « l'AlexNet des séries temporelles » — était initialement publié pour Keras."
      },
      solution: {
        en: "A minimal, readable PyTorch implementation of the Inception modules and residual blocks, ready to drop into time-series classification work such as sensor or industrial signals.",
        fr: "Une implémentation PyTorch minimale et lisible des modules Inception et blocs résiduels, prête pour la classification de séries temporelles (capteurs, signaux industriels)."
      },
      pipeline: ["Time series", "Inception modules", "Residual blocks", "GAP", "Classifier"],
      highlights: { en: ["GPL-3.0, single-file implementation."], fr: ["GPL-3.0, implémentation en un seul fichier."] },
      metrics: [],
      stack: ["Python", "PyTorch", "Deep Learning"],
      links: [{ label: "GitHub", url: "https://github.com/ngucho/InceptionTime-Pytorch" }]
    },
    {
      id: "cholala-pepper",
      title: "Cholala Pepper",
      org: "Cholala Pepper",
      period: "2024 — 2025",
      status: { en: "Stopped", fr: "Arrêté" },
      tags: ["venture"],
      icon: "leaf",
      hue: 10,
      tagline: {
        en: "Agri-food startup run on a hybrid France–Cameroon model.",
        fr: "Startup agroalimentaire en modèle hybride France–Cameroun."
      },
      role: { en: "Founder & project lead", fr: "Fondateur & chef de projet" },
      problem: {
        en: "Quality Cameroonian pepper products struggle to reach European consumers through a reliable, traceable chain.",
        fr: "Les produits pimentés camerounais de qualité peinent à atteindre les consommateurs européens via une chaîne fiable et traçable."
      },
      solution: {
        en: "Structured the whole supply chain — producer sourcing, international logistics, multichannel distribution — and ran the business remotely with KPI-driven, agile coordination and financial modelling.",
        fr: "Structuration de toute la supply chain — sourcing producteurs, logistique internationale, distribution multicanale — et pilotage à distance avec coordination agile, suivi KPI et modélisation financière."
      },
      pipeline: ["Producers (CM)", "Processing", "Logistics", "Distribution (FR)", "KPIs"],
      outcome: {
        en: "The project was stopped in 2025 after a crop disease destroyed the plantations.",
        fr: "Le projet a été arrêté en 2025 après qu'une maladie a détruit les plantations."
      },
      highlights: {
        en: ["Cross-continent operations coordinated remotely."],
        fr: ["Opérations intercontinentales coordonnées à distance."]
      },
      metrics: [],
      stack: ["Supply chain", "Financial modelling", "Ops", "Growth"],
      links: []
    }
  ],

  skills: [
    {
      icon: "brain",
      title: { en: "Data Science, ML & GenAI", fr: "Data Science, ML & GenAI" },
      items: ["LLMs", "RAG · LangChain · LangGraph", "Speech-to-Text / TTS", "Computer Vision (YOLO, Mask-RCNN, SAM)", "CNN", "Gaussian Processes", "Time series & anomaly detection", "Digital twins", "TensorFlow", "PyTorch", "Scikit-learn"]
    },
    {
      icon: "cloud",
      title: { en: "Cloud & MLOps", fr: "Cloud & MLOps" },
      items: ["AWS SageMaker", "S3 · IAM · VPC", "Docker", "GitLab CI/CD", "Model governance & monitoring", "Microservices", "Linux"]
    },
    {
      icon: "db",
      title: { en: "Data Engineering & Full-stack", fr: "Data Engineering & Full-stack" },
      items: ["Python", "Advanced SQL", "PostgreSQL", "High-frequency ETL", "FastAPI", "Django", "Next.js", "React", "Angular", "TypeScript", "Hono", "Supabase", "Offline-first"]
    },
    {
      icon: "compass",
      title: { en: "Leadership & Delivery", fr: "Leadership & Pilotage" },
      items: ["AI project management", "Team leadership", "Agile / Scrum", "Strategic scoping & ROI", "Product discovery", "Budget & hiring", "Steering committees"]
    },
    {
      icon: "cube",
      title: { en: "Simulation", fr: "Simulation" },
      items: ["Multi-scale FEM", "LS-DYNA", "ABAQUS", "ANSA", "ANSYS", "Composites"]
    }
  ],

  education: [
    { school: "MINES ParisTech", degree: { en: "Specialised Master — Materials & Structural Design", fr: "Mastère Spécialisé — Matériaux & Conception Structurée" }, year: "2022" },
    { school: "Université d'Évry / Paris-Saclay", degree: { en: "MSc — Mathematics & Mechanics", fr: "Master 2 — Mathématiques & Mécanique" }, year: "2021" },
    { school: "AIMS Cameroon", degree: { en: "MSc — Mathematical Sciences", fr: "Master 2 — Sciences Mathématiques" }, year: "2019" },
    { school: "Université de Douala", degree: { en: "MSc — Theoretical Physics", fr: "Master 2 — Physique Théorique" }, year: "2018" }
  ],

  certifications: [
    { name: { en: "AWS Specialization for Data Scientists (SageMaker, MLOps, governance)", fr: "AWS Specialization for Data Scientist (SageMaker, MLOps, gouvernance)" }, issuer: "AWS", year: "2026" },
    { name: { en: "Project Management Certification", fr: "Certification Gestion de Projet" }, issuer: "Safran", year: "2025" },
    { name: { en: "Google Project Management Professional", fr: "Google Project Management Professional" }, issuer: "Google · Coursera", year: "" }
  ],

  languages: [
    { name: { en: "French", fr: "Français" }, level: { en: "Native", fr: "Langue maternelle" } },
    { name: { en: "English", fr: "Anglais" }, level: { en: "Fluent", fr: "Courant" } }
  ]
};
