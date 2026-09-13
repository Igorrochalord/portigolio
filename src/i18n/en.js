// English content — translated from src/i18n/pt.js. Keep the same shape when editing.

export default {
  ui: {
    nav: {
      impacto: "Impact",
      automacao: "Automation",
      skills: "Skills",
      projetos: "Projects",
      trajetoria: "Timeline",
      depoimentos: "Testimonials",
      contato: "Contact",
      cv: "Resume",
    },
    hero: {
      available: "AVAILABLE FOR NEW CHALLENGES",
      viewProjects: "View projects",
      downloadCV: "Download Resume",
      systemDashboard: "System Dashboard",
      productionOnline: "Production Online",
    },
    dashboard: {
      eyebrow: "ENGINEERING DASHBOARD",
      heading: "Infrastructure metrics, in real time",
      cloudCost: { title: "Cloud Cost Savings", legendSavings: "Savings", legendCurrent: "Current cost" },
      deployTime: { title: "Deploy Time (min)" },
      automations: { title: "Active Automations" },
    },
    impact: {
      eyebrow: "PROFESSIONAL IMPACT",
      heading: "Results, not just job titles",
    },
    automation: {
      eyebrow: "PUBLIC DATA AT SCALE",
      heading: "Government data automation and collection, in production",
      subheading: "Scrapers, pipelines, and real-time streaming that power Poder360's data journalism.",
      scrapersByCategory: {
        title: "Scrapers by category",
        badge: "191 active",
        caption: "In real time: news, government agencies, economic data (Central Bank), stock market (SEC-equivalent) and more",
      },
      sseLoadTest: {
        title: "Load test — SSE Gateway (elections)",
        badge: "200K connections",
        caption: "Concurrent connections supported, per load step",
        tooltipLabel: "connections",
        tooltipName: "Load",
      },
    },
    github: {
      eyebrow: "DEPLOY ACTIVITY",
      liveBadge: "LIVE — via GitHub API",
      heading: "This site is CI/CD too",
      viewOnGithub: "View on GitHub",
      errorPrefix: "Couldn't load live data right now. Check it directly at",
      loading: "Loading GitHub activity…",
      durationCaption: "Duration of the latest deploys (seconds)",
      tooltipDurationLabel: "Duration",
      noMessage: "no message",
      justNow: "just now",
      minutesAgo: (n) => `${n} min ago`,
      hoursAgo: (n) => `${n}h ago`,
      daysAgo: (n) => `${n}d ago`,
    },
    skills: {
      eyebrow: "BACKEND & DEVOPS STACK",
      heading: "Skills Dashboard",
    },
    projects: {
      eyebrow: "PROJECTS",
      heading: "Products I built at Poder360",
      subheading:
        "Public-data systems in production, from backend data collection to real-time streaming — each with the real result it delivered.",
      personalHeading: "Personal projects",
      personalSubheading: "Built outside work hours, without production-scale metrics.",
    },
    timeline: {
      eyebrow: "CAREER PATH",
      heading: "Timeline",
    },
    engineeringMetrics: {
      eyebrow: "ENGINEERING METRICS",
      heading: "Numbers that tell the story",
    },
    testimonials: {
      eyebrow: "TESTIMONIALS",
      heading: "What people say about working with me",
      subheading: "Real recommendations received on LinkedIn.",
      translatedNote: "Translated from Portuguese",
    },
    contact: {
      eyebrow: "LET'S TALK",
      heading: "Backend / DevOps",
      subheading: (name, role, location) => `${name} — ${role}, ${location}. Let's talk about the next challenge.`,
      whatsapp: "WhatsApp",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
      cv: "Resume",
    },
    dedication: {
      eyebrow: "IN MEMORY OF",
      helpTitle: "You don't have to go through this alone",
      cvvLabel: "CVV (Brazil) — cvv.org.br · 188",
    },
    footer: {
      rights: (year, name) => `© ${year} ${name}. All rights reserved.`,
    },
    langToggle: {
      label: "PT",
      ariaLabel: "Switch to Portuguese",
    },
  },

  profile: {
    name: "Igor Cabral Rocha",
    role: "Backend Developer Python | DevOps",
    location: "Brasília, Brazil",
    tagline: "Building scalable, automated, and resilient systems.",
    summary:
      "Python is my strongest skill — I use it to build backends, automations, and data pipelines, backed by Docker, CI/CD, and Cloud to ship everything to production reliably.",
  },

  links: {
    linkedin: "https://www.linkedin.com/in/igor-rocha-0bb14521a/?locale=en-US",
    github: "https://github.com/Igorrochalord",
    whatsapp: "https://wa.me/5561991207786",
    cv: `${import.meta.env.BASE_URL}cv/curriculo_igor_en.pdf`,
    email: "mailto:igorprofessionaljob@gmail.com",
  },

  githubRepo: {
    owner: "Igorrochalord",
    name: "portigolio",
    workflow: "deploy.yml",
  },

  dedication: {
    name: "Ismael Alves da Silva Araújo",
    years: "2026",
    message:
      "This portfolio is dedicated to my father, Ismael. Every line of code here carries a bit of the strength he taught me. He passed away in 2026, but he remains present in every step of my career.",
    photos: [
      { src: "memoria/papai.jpg", alt: "My father" },
      { src: "memoria/piscina.jpg", alt: "My father, my brother and me at the pool" },
      { src: "memoria/skate.jpg", alt: "My father skateboarding" },
      { src: "memoria/futebol.jpg", alt: "My father and me" },
    ],
    helpMessage:
      "If you're going through a hard time, you don't have to face it alone. CVV (Centro de Valorização da Vida) offers free, confidential emotional support 24/7, every day — by phone (188, Brazil), chat, and email.",
    helpLink: "https://cvv.org.br/",
  },

  maleSuicideIntro:
    "In Brazil, suicide disproportionately affects men. Talking about it openly is part of honoring my father's memory.",

  maleSuicideStats: [
    { value: "77.8%", label: "of suicide deaths in Brazil in 2021 were men" },
    { value: "18.1/100k", label: "the highest rate is among men over 70 — the highest-risk group" },
    { value: "1 every 34 min", label: "the average frequency of suicide deaths in Brazil" },
  ],

  maleSuicideSource:
    "Source: Brazilian Ministry of Health — Epidemiological Bulletin No. 4/2024 (Mortality Information System/DATASUS, 2021 data).",

  heroMetrics: [
    { label: "Uptime", value: "99.9%", icon: "server" },
    { label: "Cloud Saving", value: "-35%", icon: "cloud" },
    { label: "Deploy Time", value: "-70%", icon: "cpu" },
    { label: "Automation", value: "+150", icon: "bot" },
  ],

  cloudCostData: [
    { name: "Current cost", value: 65 },
    { name: "Savings", value: 35 },
  ],

  deployTrend: [
    { month: "Jan", minutes: 40 },
    { month: "Feb", minutes: 34 },
    { month: "Mar", minutes: 28 },
    { month: "Apr", minutes: 20 },
    { month: "May", minutes: 14 },
    { month: "Jun", minutes: 12 },
  ],

  automationBars: [
    { name: "Before", value: 12 },
    { name: "After", value: 150 },
  ],

  skills: [
    { name: "Python", level: 95 },
    { name: "Docker", level: 90 },
    { name: "Terraform", level: 80 },
    { name: "AWS / GCP", level: 80 },
    { name: "SQL / BigQuery", level: 85 },
    { name: "Flask / APIs", level: 85 },
    { name: "Scrapy / Selenium", level: 88 },
    { name: "MongoDB", level: 78 },
  ],

  cases: [
    {
      company: "Poder360",
      title: "Real-Time Election Coverage + Public Data Automation",
      period: "2024–present",
      stack: ["Go", "Python", "Terraform", "Docker", "GCP"],
      metrics: [
        { label: "Uptime", value: "99.9%" },
        { label: "Connections tested (SSE)", value: "200K" },
        { label: "Deploy time", value: "-70%" },
        { label: "Active scrapers", value: "150+" },
      ],
    },
    {
      company: "Demander",
      title: "Legacy System Refactor + Internationalization",
      period: "2023–2024",
      stack: ["Laravel", "PHP", "SQL", "i18n"],
      metrics: [
        { label: "Bugs reduced", value: "-25%" },
        { label: "Query optimization", value: "-35%" },
      ],
    },
    {
      company: "LegalWtech",
      title: "Legal Bots & Automation",
      period: "2023",
      stack: ["AWS", "Docker", "Python", "Rasa"],
      metrics: [
        { label: "Documents processed/day", value: "500+" },
        { label: "Chatbot accuracy (Rasa)", value: "+45%" },
      ],
    },
  ],

  projects: [
    {
      name: "Políticos Coleta 2026",
      icon: "vote",
      tagline: "Real-time candidate database synced with Brazil's Electoral Court (TSE)",
      stack: ["Python", "MongoDB Atlas", "Google Cloud Storage", "Docker"],
      metrics: [
        { label: "Candidates monitored", value: "15,283+" },
        { label: "States covered", value: "28" },
      ],
      bullets: [
        "Reverse-engineered the TSE's undocumented internal API",
        "Automatic hourly sync: donations, expenses, bank statements, and documents",
        "Defensive rate limiting (token bucket + backoff) against blocks",
        "1st outlet with a candidate database 100% in sync with the TSE",
      ],
      link: "#",
      chart: {
        type: "bar",
        caption: "Scale of the monitored database",
        data: [
          { name: "States covered", value: 28 },
          { name: "Syncs/day", value: 24 },
        ],
      },
    },
    {
      name: "Real-Time Elections",
      icon: "radio-tower",
      tagline: "SSE gateway for live election coverage",
      stack: ["Go", "Redis", "Docker", "Kubernetes"],
      metrics: [
        { label: "Connections tested", value: "200K" },
        { label: "Fanout shards", value: "256" },
      ],
      bullets: [
        "Result streaming via Server-Sent Events with sharded fanout",
        "Replay of the last known event for instant bootstrap",
        "Per-IP rate limiting and reconnection with exponential backoff",
        "In-house load-testing tool (p50/p95, automated ramp-up)",
        "99.9% uptime under traffic spikes during election coverage",
      ],
      link: "#",
      chart: {
        type: "area",
        caption: "Load test: concurrent connections",
        data: [
          { name: "1K", value: 1000 },
          { name: "25K", value: 25000 },
          { name: "50K", value: 50000 },
          { name: "100K", value: 100000 },
          { name: "150K", value: 150000 },
          { name: "200K", value: 200000 },
        ],
      },
    },
    {
      name: "Monitor de Repasses",
      icon: "banknote",
      tagline: "Federal transfers (SIOP, Siga Brasil, National Treasury) — Google partnership",
      stack: ["Python", "Node.js", "React", "MongoDB", "Docker", "CI/CD"],
      metrics: [
        { label: "Data consolidation", value: "+30% faster" },
        { label: "Sources", value: "SIOP, Siga Brasil, BB, Treasury" },
      ],
      bullets: [
        "Dedicated collection containers with a full CI/CD pipeline (build, run, scheduler)",
        "Standardized, normalized data stored in MongoDB",
        "In-house API powering real-time dashboards (React front-end, Node.js back-end)",
        "Data infrastructure built in partnership with Google — now a public product",
      ],
      link: "https://monitor-repasses.poder360.com.br",
      chart: {
        type: "bar",
        caption: "Data consolidation time (-30%)",
        data: [
          { name: "Before", value: 100 },
          { name: "With automation", value: 70 },
        ],
      },
    },
    {
      name: "Monitor Poder360",
      icon: "bot",
      tagline: "Real-time news, economic data, and stock market coverage",
      stack: ["Python", "Celery", "Docker", "Kubernetes"],
      metrics: [
        { label: "Active scrapers", value: "150+" },
        { label: "Success rate", value: "98%" },
      ],
      bullets: [
        "Real-time monitoring of Brazil's Chamber of Deputies, Senate, and Supreme Court",
        "Economic data (Central Bank) and stock market data (SEC-equivalent) updated continuously",
        "+90 news scrapers monitoring agencies, outlets, and courts",
        "Monitoring of the Federal Official Gazette and the Presidency's agenda",
        "Automatic email alerts for subscribers",
      ],
      link: "#",
      chart: {
        type: "donut",
        caption: "Collection success rate",
        data: [
          { name: "Success", value: 98 },
          { name: "Failure", value: 2 },
        ],
      },
    },
  ],

  personalProjects: [
    {
      name: "BotEconomy",
      icon: "bot",
      tagline: "Financial analysis and stock monitoring Telegram bot",
      stack: ["Python", "Yahoo Finance API", "Matplotlib", "Docker"],
      bullets: [
        "Dynamic charts and on-demand PDF reports",
        "Automatic market alerts for investors/traders",
      ],
      period: "Aug 2024 – present",
      link: "https://github.com/Igorrochalord/BotEconomy",
    },
    {
      name: "Finança Inteligente",
      icon: "wallet",
      tagline: "Personal wealth-management ecosystem",
      stack: ["Python", "Streamlit", "MongoDB Atlas", "YahooQuery"],
      bullets: [
        "Real-time cash-flow control + market analysis (B3 stock exchange assets)",
        "Caching and exception handling for unstable financial APIs",
        "Executive PDF reports and automatic financial-independence goal calculation",
      ],
      period: "Dec 2025 – Feb 2026",
      link: "#",
    },
  ],

  scraperCategories: [
    { name: "News", value: 94 },
    { name: "Deputies", value: 19 },
    { name: "Senate", value: 17 },
    { name: "Supreme Court", value: 16 },
    { name: "Federal Government", value: 14 },
    { name: "Transparency Portal", value: 12 },
    { name: "Other (SEC, Central Bank...)", value: 19 },
  ],

  sseLoadTest: [
    { step: "1K", conexoes: 1000 },
    { step: "25K", conexoes: 25000 },
    { step: "50K", conexoes: 50000 },
    { step: "100K", conexoes: 100000 },
    { step: "150K", conexoes: 150000 },
    { step: "200K", conexoes: 200000 },
  ],

  automationStats: [
    { value: "150+", label: "Active scrapers/automations" },
    { value: "15,283+", label: "Candidates monitored per hour (TSE)" },
    { value: "200K", label: "SSE connections load-tested" },
    { value: "98%", label: "Data collection success rate" },
  ],

  timeline: [
    {
      year: "2023",
      company: "LegalWtech",
      detail: "Legal bots, AWS, Docker",
      color: "#071157",
      textColor: "#5b7fd6",
    },
    {
      year: "2023–2024",
      company: "Demander",
      detail: "Laravel, legacy refactor, i18n",
      color: "#7c3aed",
      textColor: "#7c3aed",
    },
    {
      year: "2024–present",
      company: "Poder360",
      detail: "Backend, DevOps, Cloud",
      color: "#fb5303",
      textColor: "#fb5303",
    },
  ],

  engineeringMetrics: [
    { value: "+120", label: "Critical bugs fixed in legacy systems" },
    { value: "-40%", label: "MTTR — mean time to resolve incidents" },
    { value: "-25%", label: "Bugs reduced (legacy refactor, Demander)" },
    { value: "500+", label: "Documents processed/day (LegalWtech)" },
  ],

  testimonials: [
    {
      name: "Leonardo Campos Muniz",
      role: "Senior Software Engineer, Full Stack Developer",
      relation: "Directly supervised Igor · Poder360",
      quote:
        "Watching Igor's work and growth up close has been a really great experience. He has an incredible drive to absorb knowledge and a deep desire to learn about DevOps and automation, as shown by the work he did migrating our systems. What stands out most to me is his proactivity: he always raises good discussions in our dailies and is constantly looking to apply market best practices. He has a huge future in tech.",
    },
    {
      name: "Diego Tiemann",
      role: "Partner & CTO at Demander",
      relation: "Directly supervised Igor · Demander",
      quote:
        "During the time we worked together, I saw Igor's commitment and determination in his responsibilities as an intern on our team. He always showed a strong desire to learn and grow professionally, and his dedication was evident in his daily work. He's a hard-working professional who constantly looks for ways to improve his skills and contribute positively to the team.",
    },
    {
      name: "Pedro Abreu",
      role: "Data Analysis, Python, Machine Learning, QA",
      relation: "Coworker",
      quote:
        "I had the pleasure of working alongside Igor, an extremely dedicated and talented developer. He shows great programming ability and, above all, a huge willingness to learn new technologies and share knowledge. His drive to help move tasks forward makes a real difference for the team, bringing more agility and collaboration to our work.",
    },
    {
      name: "John Kennedy",
      role: "Fullstack Developer — PHP, Laravel, Node, React",
      relation: "Same team · Poder360",
      quote:
        "With great enthusiasm, I recommend Igor, who since joining the company has shown remarkable potential and determination. Focused on DevOps, he stands out for his willingness to take on challenges and his quick adaptability to new situations. His proactive approach and ability to solve complex problems are impressive.",
    },
    {
      name: "João Ricardo Rodrigues",
      role: "Full Stack Developer — Java, Node.js, Python, React",
      relation: "Same team · Poder360",
      quote:
        "I'm pleased to recommend Igor, a dedicated and promising DevOps professional. He stands out for his fast learning, proactivity, and problem-solving ability. He contributes actively to the team, showing great commitment. I believe in his bright future and continued success.",
    },
    {
      name: "Lucas Marques",
      role: "Software Engineer — AI Engineering, Cloud, DevSecOps",
      relation: "Same team · Poder360",
      quote:
        "Excellent professional — works with sound judgment, deep expertise in his field, and a real focus on learning new technologies.",
    },
  ],
};
