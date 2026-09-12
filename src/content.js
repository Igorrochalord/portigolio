// Conteúdo central do portfólio — edite aqui para atualizar textos/links.
// TODO: preencher com dados reais (links, WhatsApp, CV) antes de publicar.
// Fontes: repositórios internos do Poder360 (/home/igor/poder360) + currículo do LinkedIn do Igor.

export const profile = {
  name: "Igor Cabral Rocha",
  role: "Backend Developer Python | DevOps",
  location: "Brasília, DF",
  tagline: "Construindo sistemas escaláveis, automatizados e resilientes.",
  summary:
    "Python é minha maior força — uso para construir backends, automações e pipelines de dados, com apoio de Docker, CI/CD e Cloud para colocar tudo em produção com confiabilidade.",
};

export const links = {
  linkedin: "https://www.linkedin.com/in/igor-rocha-0bb14521a/",
  linkedinEn: "https://www.linkedin.com/in/igor-rocha-0bb14521a/?locale=en-US", // caso o site ganhe uma versão em inglês
  github: "https://github.com/Igorrochalord",
  whatsapp: "https://wa.me/5561991207786",
  // BASE_URL resolvido aqui (não só nos componentes) pra manter os dois currículos
  // funcionando em qualquer subpasta (ex.: GitHub Pages), igual às fotos da dedicatória.
  cv: `${import.meta.env.BASE_URL}cv/curriculo_igor.pdf`,
  cvEn: `${import.meta.env.BASE_URL}cv/curriculo_igor_en.pdf`, // caso o site ganhe uma versão em inglês
  email: "mailto:igorprofessionaljob@gmail.com",
};

// Repositório usado para puxar ao vivo o histórico de deploys/commits (via API pública do GitHub).
export const githubRepo = {
  owner: "Igorrochalord",
  name: "portigolio",
  workflow: "deploy.yml",
};

// Dedicatória ao pai do Igor. Edite o texto livremente — é seu, deixei só um rascunho.
export const dedication = {
  name: "Ismael Alves da Silva Araújo",
  years: "2026",
  message:
    "Este portfólio é dedicado ao meu pai, Ismael. Cada linha de código aqui carrega um pouco da força que ele me ensinou. Ele partiu em 2026, mas segue presente em cada passo da minha carreira.",
  photos: [
    { src: "memoria/papai.jpg", alt: "Meu pai" },
    { src: "memoria/piscina.jpg", alt: "Meu pai comigo e meu irmão na piscina" },
    { src: "memoria/skate.jpg", alt: "Meu pai andando de skate" },
    { src: "memoria/futebol.jpg", alt: "Eu e meu pai" },
  ],
  helpMessage:
    "Se você está passando por um momento difícil, não precisa enfrentar isso sozinho. O CVV (Centro de Valorização da Vida) oferece apoio emocional gratuito, sigiloso e 24h por dia, todos os dias — por telefone (188), chat e e-mail.",
  helpLink: "https://cvv.org.br/",
};

// Dados oficiais sobre suicídio masculino no Brasil — para dar contexto à dedicatória.
// Fonte: Ministério da Saúde, Boletim Epidemiológico nº 4/2024 (SIM/DATASUS, dados de 2021).
export const maleSuicideIntro =
  "No Brasil, o suicídio afeta homens de forma desproporcional. Falar sobre isso abertamente é parte de honrar a memória do meu pai.";

export const maleSuicideStats = [
  { value: "77,8%", label: "das mortes por suicídio no Brasil, em 2021, foram de homens" },
  { value: "18,1/100 mil", label: "maior taxa é entre homens acima de 70 anos — o grupo de maior risco" },
  { value: "1 a cada 34 min", label: "é a frequência média de mortes por suicídio no Brasil" },
];

export const maleSuicideSource =
  "Fonte: Ministério da Saúde — Boletim Epidemiológico nº 4/2024 (Sistema de Informações sobre Mortalidade/DATASUS, dados de 2021).";

export const heroMetrics = [
  { label: "Uptime", value: "99.9%", icon: "server" },
  { label: "Cloud Saving", value: "-35%", icon: "cloud" },
  { label: "Deploy Time", value: "-70%", icon: "cpu" },
  { label: "Automation", value: "+150", icon: "bot" },
];

export const cloudCostData = [
  { name: "Custo atual", value: 65 },
  { name: "Economia", value: 35 },
];

// Ilustra a redução de -70% no tempo de publicação (cargo atual, Pleno I).
export const deployTrend = [
  { month: "Jan", minutes: 40 },
  { month: "Fev", minutes: 34 },
  { month: "Mar", minutes: 28 },
  { month: "Abr", minutes: 20 },
  { month: "Mai", minutes: 14 },
  { month: "Jun", minutes: 12 },
];

export const automationBars = [
  { name: "Antes", value: 12 },
  { name: "Depois", value: 150 },
];

export const skills = [
  { name: "Python", level: 95 },
  { name: "Docker", level: 90 },
  { name: "Terraform", level: 80 },
  { name: "AWS / GCP", level: 80 },
  { name: "SQL / BigQuery", level: 85 },
  { name: "Flask / APIs", level: 85 },
  { name: "Scrapy / Selenium", level: 88 },
  { name: "MongoDB", level: 78 },
];

export const cases = [
  {
    company: "Poder360",
    title: "Cobertura Eleitoral em Tempo Real + Automação de Dados Públicos",
    period: "2024–atual",
    stack: ["Go", "Python", "Terraform", "Docker", "GCP"],
    metrics: [
      { label: "Uptime", value: "99.9%" },
      { label: "Conexões testadas (SSE)", value: "200 mil" },
      { label: "Deploy time", value: "-70%" },
      { label: "Scrapers ativos", value: "150+" },
    ],
  },
  {
    company: "Demander",
    title: "Refatoração de Sistema Legado + Internacionalização",
    period: "2023–2024",
    stack: ["Laravel", "PHP", "SQL", "i18n"],
    metrics: [
      { label: "Bugs reduzidos", value: "-25%" },
      { label: "Otimização de queries", value: "-35%" },
    ],
  },
  {
    company: "LegalWtech",
    title: "Bots Jurídicos & Automação",
    period: "2023",
    stack: ["AWS", "Docker", "Python", "Rasa"],
    metrics: [
      { label: "Documentos processados/dia", value: "500+" },
      { label: "Precisão do chatbot (Rasa)", value: "+45%" },
    ],
  },
];

// Projetos reais construídos no Poder360 (fonte: repositórios internos + LinkedIn).
export const projects = [
  {
    name: "Políticos Coleta 2026",
    icon: "vote",
    tagline: "Base de candidatos em tempo real com o TSE",
    stack: ["Python", "MongoDB Atlas", "Google Cloud Storage", "Docker"],
    metrics: [
      { label: "Candidatos monitorados", value: "15.283+" },
      { label: "UFs cobertas", value: "28" },
    ],
    bullets: [
      "Engenharia reversa da API interna do TSE (não documentada)",
      "Sincronização automática a cada hora: doações, despesas, extratos e documentos",
      "Rate limiting defensivo (token bucket + backoff) contra bloqueios",
      "1º veículo com base de políticos 100% atualizada com o TSE",
    ],
    link: "#",
    chart: {
      type: "bar",
      caption: "Escala da base monitorada",
      data: [
        { name: "UFs cobertas", value: 28 },
        { name: "Sincs/dia", value: 24 },
      ],
    },
  },
  {
    name: "Eleições em Tempo Real",
    icon: "radio-tower",
    tagline: "Gateway SSE para apuração eleitoral ao vivo",
    stack: ["Go", "Redis", "Docker", "Kubernetes"],
    metrics: [
      { label: "Conexões testadas", value: "200 mil" },
      { label: "Shards de fanout", value: "256" },
    ],
    bullets: [
      "Streaming de resultados via Server-Sent Events com fanout sharded",
      "Replay do último evento conhecido para bootstrap instantâneo",
      "Rate limiting por IP e reconexão com backoff exponencial",
      "Ferramenta própria de teste de carga (p50/p95, ramp-up automatizado)",
      "99,9% de uptime sob pico de tráfego em cobertura eleitoral",
    ],
    link: "#",
    chart: {
      type: "area",
      caption: "Teste de carga: conexões simultâneas",
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
    tagline: "Repasses federais (SIOP, Siga Brasil, Tesouro Nacional) — parceria Google",
    stack: ["Python", "Node.js", "React", "MongoDB", "Docker", "CI/CD"],
    metrics: [
      { label: "Consolidação de dados", value: "+30% mais rápida" },
      { label: "Fontes", value: "SIOP, Siga Brasil, BB, Tesouro" },
    ],
    bullets: [
      "Containers dedicados à coleta, com pipeline CI/CD completo (build, run, scheduler)",
      "Dados padronizados e normalizados, armazenados em MongoDB",
      "API própria alimentando dashboards em tempo real (front-end React, back-end Node.js)",
      "Infraestrutura construída em parceria com o Google — hoje é produto público",
    ],
    link: "https://monitor-repasses.poder360.com.br",
    chart: {
      type: "bar",
      caption: "Tempo de consolidação dos dados (-30%)",
      data: [
        { name: "Antes", value: 100 },
        { name: "Com automação", value: 70 },
      ],
    },
  },
  {
    name: "Monitor Poder360",
    icon: "bot",
    tagline: "Notícias, dados econômicos e mercado de ações em tempo real",
    stack: ["Python", "Celery", "Docker", "Kubernetes"],
    metrics: [
      { label: "Scrapers ativos", value: "150+" },
      { label: "Taxa de sucesso", value: "98%" },
    ],
    bullets: [
      "Monitoramento em tempo real de Câmara, Senado e STF",
      "Dados econômicos (Bacen) e do mercado de ações (CVM) atualizados continuamente",
      "+90 scrapers de notícias monitorando agências, veículos e tribunais",
      "Monitoramento do Diário Oficial da União e agenda da Presidência",
      "Alertas automáticos por e-mail para assinantes",
    ],
    link: "#",
    chart: {
      type: "donut",
      caption: "Taxa de sucesso na coleta",
      data: [
        { name: "Sucesso", value: 98 },
        { name: "Falha", value: 2 },
      ],
    },
  },
];

// Projetos pessoais (fora do Poder360) — sem métricas de produção para não inflar números.
export const personalProjects = [
  {
    name: "BotEconomy",
    icon: "bot",
    tagline: "Bot de análise financeira e monitoramento de ações no Telegram",
    stack: ["Python", "Yahoo Finance API", "Matplotlib", "Docker"],
    bullets: [
      "Gráficos dinâmicos e relatórios em PDF sob demanda",
      "Alertas automáticos de mercado para investidores/traders",
    ],
    period: "ago 2024 – atual",
    link: "https://github.com/Igorrochalord/BotEconomy",
  },
  {
    name: "Finança Inteligente",
    icon: "wallet",
    tagline: "Ecossistema pessoal de gestão patrimonial",
    stack: ["Python", "Streamlit", "MongoDB Atlas", "YahooQuery"],
    bullets: [
      "Controle de fluxo de caixa + análise de mercado (ativos B3) em tempo real",
      "Cache e tratamento de exceções para APIs financeiras instáveis",
      "Relatórios executivos em PDF e cálculo automático de metas de independência financeira",
    ],
    period: "dez 2025 – fev 2026",
    link: "#",
  },
];

// Scrapers/automações ativos por categoria (contagem real dos repositórios).
export const scraperCategories = [
  { name: "Notícias", value: 94 },
  { name: "Deputados", value: 19 },
  { name: "Senado", value: 17 },
  { name: "STF", value: 16 },
  { name: "Governo Federal", value: 14 },
  { name: "Portal Transparência", value: 12 },
  { name: "Outros (CVM, Bacen...)", value: 19 },
];

// Degraus do teste de carga do gateway SSE de eleições.
export const sseLoadTest = [
  { step: "1K", conexoes: 1000 },
  { step: "25K", conexoes: 25000 },
  { step: "50K", conexoes: 50000 },
  { step: "100K", conexoes: 100000 },
  { step: "150K", conexoes: 150000 },
  { step: "200K", conexoes: 200000 },
];

export const automationStats = [
  { value: "150+", label: "Scrapers/automações ativos" },
  { value: "15.283+", label: "Candidatos monitorados por hora (TSE)" },
  { value: "200 mil", label: "Conexões SSE testadas em carga" },
  { value: "98%", label: "Taxa de sucesso na coleta de dados" },
];

// Cor de cada empresa na linha do tempo.
// LegalWtech: #071157 confirmado no CSS do site oficial (legalwtech.com.br).
// Poder360: #fb5303 confirmado no SVG oficial da logo (laranja da marca).
// Demander: não localizei a marca oficial — usando cor placeholder até confirmar.
export const timeline = [
  {
    year: "2023",
    company: "LegalWtech",
    detail: "Bots jurídicos, AWS, Docker",
    color: "#071157",
    // #071157 é quase preto sobre o fundo escuro do site — usa um tom mais claro só para texto/legibilidade.
    textColor: "#5b7fd6",
  },
  {
    year: "2023–2024",
    company: "Demander",
    detail: "Laravel, refatoração de legado, i18n",
    color: "#7c3aed", // TODO: confirmar cor oficial da marca Demander
    textColor: "#7c3aed",
  },
  {
    year: "2024–atual",
    company: "Poder360",
    detail: "Backend, DevOps, Cloud",
    color: "#fb5303",
    textColor: "#fb5303",
  },
];

export const engineeringMetrics = [
  { value: "+120", label: "Bugs críticos corrigidos em sistemas legados" },
  { value: "-40%", label: "MTTR — tempo médio de resolução de incidentes" },
  { value: "-25%", label: "Bugs reduzidos (refatoração de legado, Demander)" },
  { value: "500+", label: "Documentos processados/dia (LegalWtech)" },
];

// Depoimentos reais do LinkedIn (recomendações recebidas).
export const testimonials = [
  {
    name: "Leonardo Campos Muniz",
    role: "Senior Software Engineer, Full Stack Developer",
    relation: "Supervisionou Igor diretamente · Poder360",
    quote:
      "Acompanhar o trabalho e a evolução do Igor de perto tem sido uma experiência muito bacana. Ele tem uma garra absurda para absorver e um profundo desejo pelo conhecimento na área de DevOps e automação, visto o trabalho que fez na migração de nossos sistemas. O que mais destaco nele é a proatividade: sempre levanta boas discussões nas dailies e está sempre buscando aplicar as melhores práticas do mercado. Tem um futuro gigante na área tech.",
  },
  {
    name: "Diego Tiemann",
    role: "Sócio e Diretor de Tecnologia na Demander",
    relation: "Supervisionou Igor diretamente · Demander",
    quote:
      "Durante o período em que trabalhamos juntos, pude observar o comprometimento e a determinação do Igor em suas responsabilidades como estagiário em nossa equipe. Ele sempre demonstrou um forte desejo de aprender e crescer profissionalmente, e sua dedicação foi evidente em seu trabalho diário. É um profissional esforçado, que busca constantemente maneiras de melhorar suas habilidades e contribuir de maneira positiva para a equipe.",
  },
  {
    name: "Pedro Abreu",
    role: "Análise de Dados, Python, Machine Learning, QA",
    relation: "Colega de trabalho",
    quote:
      "Tive o prazer de trabalhar ao lado do Igor, um desenvolvedor extremamente dedicado e talentoso. Ele demonstra grande habilidade em programação e, acima de tudo, uma enorme disposição para aprender novas tecnologias e compartilhar conhecimento. Sua força de vontade em ajudar no desenvolvimento das tarefas faz toda a diferença para a equipe, trazendo mais agilidade e colaboração ao trabalho.",
  },
  {
    name: "John Kennedy",
    role: "Desenvolvedor Fullstack — PHP, Laravel, Node, React",
    relation: "Mesma equipe · Poder360",
    quote:
      "Com grande entusiasmo, recomendo Igor, que desde seu início na empresa tem demonstrado notável potencial e determinação. Focado em DevOps, se destaca pela disposição em enfrentar desafios e pela rápida adaptação a novas situações. Sua abordagem proativa e capacidade de resolver problemas complexos são impressionantes.",
  },
  {
    name: "João Ricardo Rodrigues",
    role: "Desenvolvedor Full Stack — Java, Node.js, Python, React",
    relation: "Mesma equipe · Poder360",
    quote:
      "Tenho o prazer de recomendar o Igor, um profissional dedicado e promissor na área de DevOps. Se destaca por sua rápida aprendizagem, proatividade e capacidade de resolução de problemas. Contribui ativamente com a equipe, demonstrando grande comprometimento. Acredito em seu futuro brilhante e sucesso contínuo.",
  },
  {
    name: "Lucas Marques",
    role: "Software Engineer — AI Engineering, Cloud, DevSecOps",
    relation: "Mesma equipe · Poder360",
    quote:
      "Excelente profissional, atua com sabedoria, expertise em sua área e com atenção para aprender novas tecnologias.",
  },
];
