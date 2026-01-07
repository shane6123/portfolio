export const navLinks = [
  { id: "about", title: "About" },
  { id: "specialization", title: "Specialization" },
  { id: "work", title: "Work" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

export const aboutText = {
  heading: "Building scalable, user-focused applications.",
  bio: "Senior Software Developer with 3+ years in MERN & NestJS. I bridge the gap between complex backend architecture and seamless frontend experiences.",
  highlights: [
    "Delivered FCRF Diamond Reports: Automated PDF generation reducing manual work by 95%.",
    "Architected Multi-Tenant Healthcare SaaS: Scalable isolation for 5+ hospital chains on AWS.",
    "AI Integration: Built 'Nek Rishta' matching engine using Google Gemini AI & Vector Embeddings.",
    // "⚡ High-Performance: Optimized PostgreSQL queries reducing load times by 40% for enterprise dashboards."
  ]
};

export const skills = {
  frontend: {
    title: "Frontend Ecosystem",
    icon: "Layout",
    items: ["React.js", "Next.js 14", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"]
  },
  backend: {
    title: "Backend Architecture",
    icon: "Server",
    items: ["Node.js", "NestJS", "Express.js", "Python (Flask)", "Socket.IO", "Microservices", "GraphQL"]
  },
  database: {
    title: "Database & ORM",
    icon: "Database",
    items: ["PostgreSQL", "MongoDB", "Firebase Realtime DB", "Sequelize", "Prisma", "Mongoose", "Redis"]
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: "Cloud",
    items: ["AWS Lambda", "AWS S3", "AWS EC2", "AWS API Gateway", "Route53", "Docker", "CI/CD (Jenkins/GitHub Actions)"]
  },
  tools: {
    title: "Tools & Integrations",
    icon: "Settings",
    items: ["Git/GitHub", "JIRA", "Sentry.io", "Puppeteer", "Google Sheets API", "Stripe/CCVenue", "OpenAI/Gemini API"]
  }
};

export const education = [
  {
    degree: "B.Tech in Computer Science",
    school: "Allenhouse Institute of Technology (AKTU)",
    date: "May 2019 - Jun 2023",
    grade: "CGPA: 8.01",
    desc: "Focused on Data Structures, Algorithms, and Web Technologies."
  },
  {
    degree: "Intermediate (Class XII)",
    school: "State Board",
    date: "2016 - 2018",
    grade: "Percentage: 78%",
    desc: "Major in Physics, Chemistry, and Mathematics."
  },
  {
    degree: "High School (Class X)",
    school: "State Board",
    date: "2014 - 2016",
    grade: "Percentage: 84%",
    desc: "Foundation in Science and Mathematics."
  }
];

export const services = [
  {
    title: "Full Stack Developer",
    icon: "Layout",
    description: "Building scalable web apps using the MERN stack with a focus on performance."
  },
  {
    title: "Backend Architect",
    icon: "Server",
    description: "Designing high-performance APIs and Microservices with Node.js & NestJS."
  },
  {
    title: "Frontend Specialist",
    icon: "Smartphone",
    description: "Creating responsive, pixel-perfect UIs with React, Next.js and Tailwind CSS."
  },
  {
    title: "Cloud Integrator",
    icon: "Cloud",
    description: "Deploying and managing secure infrastructure on AWS and Google Cloud."
  },
];

export const experiences = [
  {
    title: "Software Developer",
    company_name: "Websultanate Software Technologies",
    date: "Apr 2024 - Present",
    points: [
      "Architecting scalable MERN applications for enterprise clients, ensuring 99.9% uptime.",
      "Optimized database queries in PostgreSQL reducing data retrieval load times by 40%.",
      "Leading code reviews, implementing CI/CD pipelines, and mentoring junior developers.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Androcoders",
    date: "Oct 2022 - Apr 2024",
    points: [
      "Developed REST APIs using Express and integrated AWS S3 for secure media storage.",
      "Implemented server-side rendering (SSR) with Next.js to improve SEO rankings.",
      "Collaborated with UX/UI designers to implement responsive designs.",
    ],
  },
  {
    title: "Backend Intern",
    company_name: "Rablo.in",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Built microservices using Node.js and MongoDB to handle high-concurrency requests.",
      "Refactored legacy code to improve maintainability and reduce technical debt.",
    ],
  },
];

export const projects = [
  {
    id: "nek-rishta",
    name: "Nek Rishta | AI-Powered Matrimonial SaaS",
    short_desc:
      "Subscription-based matrimonial platform with AI-driven matchmaking, real-time chat, secure payments, and admin-controlled feature limits.",
    tech:
      "Next.js, Node.js (Class-Based Express), PostgreSQL, Sequelize, Gemini AI, Socket.IO, Puppeteer, CC Avenue, AWS",
    link: "https://www.nekrishta.com",
    img: "/projectimg/nekrishta.jpg",
    case_study: {
      overview:
        "Nek Rishta is a production-grade matrimonial SaaS platform focused on privacy, intelligent matchmaking, and subscription-driven monetization. The platform supports premium profile boosting, real-time communication, AI-based recommendations, and a fully configurable admin system.",
      key_features: [
        "AI-driven matchmaking and profile recommendations using Gemini AI",
        [
          "Subscription-based access control",
          "Premium & Featured profile boosts",
          "Admin-configurable package limits",
        ],
        "Real-time chat with Socket.IO and secure authentication",
        [
          "Signed URLs for profile images and documents",
          "Blurred profiles until request approval",
        ],
        "Automated invoicing and secure CC Avenue payments",
      ],
      key_contributions: [
        "Designed a scalable class-based backend architecture with reusable base services",
        [
          "PostgreSQL sequence-based unique username and ID generation",
          "Delete-safe and collision-free logic",
        ],
        "Integrated Gemini AI (gemini-2.5-flash) for intelligent matchmaking",
        [
          "Implemented premium & featured profile rotation (2 premium + 1 featured)",
          "Fallback logic to avoid empty or duplicate results",
        ],
        "Built real-time chat with Socket.IO using handshake-level authentication",
        "Developed a full admin panel for users, subscriptions, packages, and analytics",
        "Implemented secure authentication using sessions, JWT, and Axios interceptors",
        "Automated invoice PDF generation using Puppeteer",
      ],
      challenge: [
        "Preventing duplicate profiles across match pages",
        "Ensuring privacy and preventing misuse of profile media",
        "Managing flexible subscription limits without redeployment",
      ],
      solution: [
        "Implemented exclusion and fallback logic for matchmaking queries",
        "Used time-limited signed URLs for all private media",
        "Admin-driven configuration for package limits and permissions",
      ],
      architecture: [
        "Class-Based Express Architecture",
        "PostgreSQL with Sequelize ORM",
        "Socket.IO for real-time messaging",
        "AI integration via Gemini API",
      ],
      outcome: [
        "Highly scalable and secure matchmaking platform",
        "Improved engagement via AI recommendations",
        "Flexible monetization through subscriptions and boosts",
      ],
    },
  },

  {
    id: "fcrf-diamond",
    name: "FCRF | Diamond Reports & Intelligence Platform",
    short_desc:
      "Enterprise-grade diamond intelligence platform delivering automated reports, pricing analytics, and rarity insights for global luxury brands.",
    tech:
      "React.js, NestJS, Google Sheets API, Puppeteer, Queues, Webhooks, Highcharts, Sentry, WordPress Integration",
    link: "https://www.fcresearch.org",
    img: "/projectimg/fcrf.png",
    case_study: {
      overview:
        "FCRF is a high-end diamond intelligence and reporting platform used by global luxury brands, auction houses, and financial institutions. It delivers advanced rarity analysis, pricing intelligence, auction insights, and automated PDF reports through both web tools and external APIs.",
      trusted_by: [
        "Dior",
        "Sotheby’s",
        "Bulgari",
        "Bloomberg",
        "Financial Times",
        "Cartier",
        "Knight Frank",
      ],
      key_features: [
        "Advanced diamond analytics tools (Rarity, Argyle, Diamond Diary, Price Intelligence)",
        [
          "True Face-Up analysis",
          "Auction Genie",
          "Diamond Index tools with visual charts",
        ],
        "High-volume external APIs for enterprise automation",
        "Automated, high-fidelity PDF and booklet generation",
        [
          "Report history",
          "Save, share, and download",
        ],
        "SEO-friendly public report sharing",
      ],
      key_contributions: [
        "Designed two independent service layers: Web App and External APIs",
        [
          "Implemented Google Sheet locking using async-mutex",
          "0.5s throttling to prevent race conditions",
        ],
        "Built queue-based processing for high-concurrency API usage",
        [
          "Isolated sheets per company",
          "Prevented cross-tenant conflicts",
        ],
        "Migrated heavy sheet calculations into backend services",
        "Designed a custom pricing intelligence engine using multi-source data",
        "Implemented parent-child user hierarchy with shared credits",
        "Integrated QR-based GIA number extraction",
        "Built Puppeteer-based PDF automation and booklet formats",
        "Implemented iframe token exchange with WordPress",
        "Integrated Sentry and webhooks for monitoring and tracking",
      ],
      challenge: [
        "Heavy Google Sheet calculations causing performance bottlenecks",
        "Concurrency conflicts from shared enterprise credentials",
        "Secure communication with WordPress iframe environment",
      ],
      solution: [
        "Queue-based execution and backend offloading of calculations",
        "Sheet isolation per tenant and serialized API execution",
        "Token exchange via postMessage events",
      ],
      architecture: [
        "NestJS API with Queue/Worker pattern",
        "Google Sheets as controlled computation engines",
        "Puppeteer for PDF automation",
        "Event-driven integrations with webhooks",
      ],
      outcome: [
        "Enterprise adoption by global luxury brands",
        "95% reduction in manual reporting effort",
        "Stable, high-performance reporting under heavy concurrency",
      ],
    },
  },

  {
    id: "r2r-care",
    name: "R2R Care | Multi-Tenant Healthcare SaaS",
    short_desc:
      "Multi-tenant healthcare SaaS for managing patients, caregivers, scheduling, visits, and automated billing.",
    tech:
      "React.js, Node.js, AWS Lambda, API Gateway, DocumentDB, EventBridge, Amplify, Mobiscroll",
    link: "https://www.r2rcare.co.uk",
    img: "/projectimg/r2rcare.png",
    case_study: {
      overview:
        "R2R Care is a multi-tenant healthcare SaaS platform enabling care agencies to manage clients, caregivers, shifts, visits, tasks, medications, and billing with strict tenant isolation.",
      key_features: [
        "Dynamic tenant onboarding with subdomains",
        "Shift and visit scheduling with automation",
        [
          "Task and medication assignment",
          "Overlap and conflict handling",
        ],
        "Automated weekly and monthly billing",
        "Role-based dashboards for care managers",
      ],
      key_contributions: [
        "Designed super-admin onboarding for healthcare companies",
        "Implemented token-based dynamic database binding per tenant",
        "Ensured strict database isolation using DocumentDB",
        "Integrated Mobiscroll for complex scheduling visualization",
        "Automated visit generation using EventBridge cron jobs",
        "Built end-to-end billing lifecycle with invoice drafts and payments",
      ],
      challenge: [
        "Maintaining tenant isolation with dynamic onboarding",
        "Handling complex scheduling overlaps",
        "Automating healthcare billing workflows",
      ],
      solution: [
        "Token-driven DB binding and per-tenant databases",
        "Rule-based scheduling with visual validation",
        "Event-driven billing automation",
      ],
      architecture: [
        "Serverless AWS Architecture",
        "Event-driven cron workflows",
        "DocumentDB tenant isolation",
      ],
      outcome: [
        "Secure and scalable healthcare SaaS",
        "Reduced manual scheduling and billing effort",
        "Improved operational efficiency for care agencies",
      ],
    },
  },

  {
    id: "pvroof",
    name: "PVROOF.IO | Solar Installer Advertising Platform",
    short_desc:
      "Subscription-based solar advertising platform with Stripe 3DS payments and automated renewal notifications.",
    tech:
      "Stripe, AWS DynamoDB, AWS SES, AWS EventBridge, Serverless Architecture",
    link: "https://www.pvroof.io",
    img: "/projectimg/default.png",
    case_study: {
      overview:
        "PVROOF.IO enables solar installation companies to advertise via embedded ads in voucher PDFs, supporting full-page and footer-based placements with automated billing and reminders.",
      key_features: [
        "Subscription-based advertiser onboarding",
        "PDF-based ad placement on every 4th page",
        [
          "Full-page ads",
          "Footer ads",
        ],
        "Stripe payments with 3D Secure authentication",
        "Automated renewal reminders via email",
      ],
      key_contributions: [
        "Implemented advertiser onboarding with subscription selection",
        "Integrated Stripe payments with full 3DS authentication",
        "Built advertiser dashboard for content and branding management",
        "Stored scalable ad and subscription data in DynamoDB",
        "Automated reminders at 10, 5, and 1 days before expiry",
      ],
      challenge: [
        "Secure payment handling with regional compliance",
        "Automated subscription lifecycle management",
      ],
      solution: [
        "Stripe 3DS authentication",
        "EventBridge-based scheduled reminder workflows",
      ],
      architecture: [
        "Serverless AWS Architecture",
        "Stripe Payment Gateway",
        "Event-driven notification system",
      ],
      outcome: [
        "Fully automated ad subscription lifecycle",
        "Zero manual intervention for renewals",
        "Scalable global-ready architecture",
      ],
    },
  },

  {
    id: "betsnext",
    name: "BetsNext | Crypto Gaming Platform",
    short_desc:
      "Crypto-based gaming platform featuring provably fair games with microservice-style isolation.",
    tech:
      "React.js, Node.js, MongoDB, Socket.IO, Cryptography, Microservices",


    link: "https://betsnext.com",
    img: "/projectimg/betsnext.png",
    case_study: {
      overview:
        "BetsNext is a crypto gaming platform offering casino-style games built on provably fair algorithms to ensure transparency, fairness, and user trust.",
      key_features: [
        "Provably fair gaming system",
        [
          "Server seed",
          "Client seed",
          "Nonce and hash verification",
        ],
        "Real-time gameplay and updates",
        "Unified game history and admin monitoring",
      ],
      key_contributions: [
        "Worked on Blackjack, Hi-Lo, Crash, Dice, and Coin Flip",
        "Implemented player-side fairness verification",
        "Designed microservice-style isolation per game",
        "Implemented house edge logic for platform profitability",
        "Added key rotation for enhanced security",
      ],
      challenge: [
        "Ensuring fairness and transparency in crypto gaming",
        "Preventing single-game failures from impacting the platform",
      ],
      solution: [
        "Provably fair algorithms with public verification",
        "Game-level isolation using microservice principles",
      ],
      architecture: [
        "Microservices for game isolation",
        "Socket.IO for real-time state updates",
        "Cryptographic hashing for fairness",
      ],
      outcome: [
        "Transparent and verifiable gameplay",
        "High system stability and user trust",
        "Scalable foundation for adding new games",
      ],
    },
  },
  {
    id: "casebench-legaldiary",
    name: "CaseBench / LegalDiary | Legal Case Management SaaS",
    short_desc:
      "Legal SaaS platform for case management, billing, and calendar synchronization used by law firms and legal teams.",
    tech:
      "Flask, MySQL, Vanilla JavaScript, jQuery, Google Calendar API",
    link: "#",
    img: "/projectimg/casebench.png",
    case_study: {
      overview:
        "CaseBench (LegalDiary) is a legal case management SaaS designed for law firms to manage cases, schedules, billing, and client data. The platform emphasizes accuracy, role-based access, and seamless calendar synchronization.",
      key_features: [
        "Two-way Google Calendar synchronization (CRUD)",
        [
          "Create, update, and delete events",
          "Automatic sync between platform and Google Calendar",
        ],
        "Role-based access control with partner-level permissions",
        "Comprehensive case and activity tracking",
        [
          "Daily activities",
          "Case expenses",
          "Matter-wise billing",
        ],
        "Invoice generation per matter and client",
      ],
      key_contributions: [
        "Integrated Google Calendar API with full two-way synchronization",
        "Designed and implemented RBAC including partner-level roles",
        "Built modules for activity tracking, expenses, and billing",
        "Implemented matter-wise invoice generation",
        "Contributed to extending the platform for a UAE-based Legal SaaS",
      ],
      challenge: [
        "Ensuring reliable two-way synchronization with Google Calendar",
        "Designing flexible role hierarchies for law firms",
      ],
      solution: [
        "Implemented idempotent calendar sync logic with update/delete tracking",
        "Designed granular RBAC supporting partner and admin roles",
      ],
      architecture: [
        "Flask-based backend",
        "MySQL relational database",
        "Google Calendar API integration",
        "Role-Based Access Control (RBAC)",
      ],
      outcome: [
        "Streamlined legal case scheduling and billing",
        "100% calendar consistency across systems",
        "Scalable foundation for regional Legal SaaS expansion",
      ],
    },
  },

  {
    id: "alis-cafe-loyalty",
    name: "Alis Cafe | Loyalty Program Integration",
    short_desc:
      "POS-integrated loyalty system with real-time coupon creation, redemption tracking, and automated expiry management.",
    tech:
      "Node.js, Express, MongoDB, POSist POS, Webhooks, Cron Jobs",
    link: "https://www.aliscafe.in",
    img: "/projectimg/default.png",
    case_study: {
      overview:
        "A loyalty management system tightly integrated with the POSist POS platform, enabling automated reward generation, real-time coupon redemption, and full lifecycle tracking for cafe customers.",
      key_features: [
        "POS-integrated loyalty program with real-time data sync",
        [
          "Automatic customer creation",
          "Bill-based reward calculation",
        ],
        "Rule-based coupon generation engine",
        [
          "6th coffee → Free coffee coupon",
          "9th beverage → Beverage coupon",
          "12th purchase → Pizza coupon",
        ],
        "Customer dashboard for coupon tracking",
        [
          "Active coupons",
          "Redeemed coupons",
          "Expired coupons",
        ],
        "Automated coupon expiry handling",
      ],
      key_contributions: [
        "Integrated POSist using webhook-style APIs for bi-directional data sync",
        "Designed loyalty reward engine aligned with POSist data structures",
        "Implemented real-time coupon redemption flow synced with POS billing",
        "Built customer dashboard for coupon visibility and redemption status",
        "Automated coupon expiration using scheduled cron jobs (30-day validity)",
      ],
      challenge: [
        "Maintaining real-time consistency between POS and backend systems",
        "Implementing complex reward milestones without manual intervention",
      ],
      solution: [
        "Webhook-driven, event-based synchronization with POSist",
        "Deterministic reward engine based on purchase milestones",
      ],
      architecture: [
        "Webhook-based POS integration",
        "Node.js Express backend",
        "MongoDB for coupon and transaction storage",
        "Scheduled cron jobs for lifecycle management",
      ],
      outcome: [
        "Seamless in-store and online loyalty experience",
        "Accurate, real-time reward tracking",
        "Increased customer retention and repeat visits",
      ],
    },
  },

  {
    id: "kiranjadhav-stock-chat",
    name: "Kiranjadhav | Stock Trading Chat Platform",
    short_desc:
      "Real-time stock and options trading chat platform with admin-controlled alerts and push notifications.",
    tech:
      "MERN Stack, TypeScript, Socket.IO, Push Notifications, AWS",
    link: "#",
    img: "/projectimg/kiran.png",
    case_study: {
      overview:
        "A real-time communication platform for options traders, focused on instant delivery of buy/sell calls, admin-only alerts, and subscription-based access control.",
      key_features: [
        "Real-time group chat using Socket.IO",
        "Admin-only trading alerts",
        [
          "/alert",
          "/buy",
          "/sell",
          "/new",
        ],
        "Push notifications with images and context",
        "Subscription-based access with single-login enforcement",
        "Admin-to-user direct messaging and group management",
      ],
      key_contributions: [
        "Built low-latency real-time messaging with Socket.IO",
        "Implemented admin-only broadcast alerts for trading calls",
        "Integrated push notifications for offline and background users",
        "Enforced single active session per user using login state flags",
        "Developed admin controls for user and group management",
      ],
      challenge: [
        "Delivering time-sensitive trading alerts without latency",
        "Preventing account sharing in a subscription-based system",
      ],
      solution: [
        "Optimized Socket.IO event delivery for real-time alerts",
        "Single-login enforcement with automatic session invalidation",
      ],
      architecture: [
        "MERN stack architecture",
        "Socket.IO for bi-directional communication",
        "Push notification services",
        "AWS-hosted backend infrastructure",
      ],
      outcome: [
        "Reliable, instant delivery of trading signals",
        "Improved trader responsiveness",
        "Reduced subscription misuse",
      ],
    },
  },

  {
    id: "azown-real-estate",
    name: "Azown | Real Estate Marketplace Platform",
    short_desc:
      "Full-scale real estate marketplace supporting rentals, sales, commercial listings, and vendor services.",
    tech:
      "React.js, Node.js, Express, MongoDB, AWS (EC2, S3, Route 53), GitHub Actions",
    link: "https://www.azown.com",
    img: "/projectimg/azown.png",
    case_study: {
      overview:
        "Azown is a full-featured real estate marketplace enabling property owners, brokers, builders, and service vendors to collaborate within a unified platform.",
      key_features: [
        "Property listings across multiple categories",
        [
          "Residential: PG, Flat, Full House",
          "Commercial: Rent & Buy",
          "Plots",
        ],
        "Vendor service marketplace",
        [
          "Cleaning",
          "Painting",
          "Packers & Movers",
        ],
        "Broker assignment and co-listing support",
        "Role-based access control",
      ],
      key_contributions: [
        "Built the platform end-to-end from scratch",
        "Designed complex property categorization and filters",
        "Implemented multi-role system (Owner, Broker, Builder, Vendor)",
        "Enabled property-to-broker assignment with broker profile visibility",
        "Built vendor services module for service discovery",
        "Designed and deployed CI/CD pipelines using GitHub Actions",
      ],
      challenge: [
        "Managing complex relationships across multiple user roles",
        "Handling diverse property types and service listings",
      ],
      solution: [
        "Role-based access control with clear ownership boundaries",
        "Structured data models for properties, roles, and services",
      ],
      architecture: [
        "React frontend with Node.js backend",
        "MongoDB with aggregation pipelines",
        "AWS EC2, S3, and Route 53",
        "CI/CD via GitHub Actions",
      ],
      outcome: [
        "Scalable real estate marketplace platform",
        "Improved collaboration between owners and brokers",
        "Streamlined property discovery and service engagement",
      ],
    },
  }

];
