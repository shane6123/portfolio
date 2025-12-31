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
    "💎 Delivered FCRF Diamond Reports: Automated PDF generation reducing manual work by 95%.",
    "🏥 Architected Multi-Tenant Healthcare SaaS: Scalable isolation for 5+ hospital chains on AWS.",
    "🤖 AI Integration: Built 'Nek Rishta' matching engine using Google Gemini AI & Vector Embeddings.",
    "⚡ High-Performance: Optimized PostgreSQL queries reducing load times by 40% for enterprise dashboards."
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
    name: "Nek Rishta | Matrimonial Platform",
    short_desc: "Production-grade matrimonial platform with AI-driven matchmaking and secure payments.",
    tags: ["Next.js", "Node.js (Class-Based)", "PostgreSQL", "Sequelize", "Gemini AI", "Redis", "Jenkins", "CC Avenue"],
    image: "/projectimg/nekrishta.jpg",
    link: "http://nekrishta.com",
    caseStudy: {
      overview: "Designed and developed a scalable, production-grade matrimonial platform with AI-driven matchmaking, secure payments, and plan-based feature control.",
      key_contributions: [
        "Architected a class-based backend framework with reusable base services, controllers, and repositories.",
        "Implemented PostgreSQL sequence-based unique ID and username generation with safe deletion handling.",
        "Integrated Gemini AI to enhance matchmaking accuracy and intelligent profile recommendations.",
        "Built subscription and permission management with full backend enforcement and granular feature access.",
        "Integrated CC Avenue payment gateway with secure transaction handling and plan lifecycle management.",
        "Designed profile boost logic (2 premium + 1 featured profile per page) dynamically controlled by plans.",
        "Developed a feature-rich admin panel for managing users, subscriptions, plans, and platform analytics.",
        "Implemented secure authentication using sessions, access tokens, refresh tokens, and Axios interceptors.",
        "Built real-time chat using Socket.IO with handshake-based authentication for improved security.",
        "Automated invoice PDF generation using Puppeteer."
      ],
      challenge: "Collision-free username generation using database sequences with delete support. Efficient, scalable implementation of profile boosting based on subscription tiers and granular permission management.",
      solution: "Architected a class-based backend with reusable services. Integrated Gemini AI for matchmaking. Implemented PostgreSQL sequences for unique IDs. Built subscription management with CC Avenue integration and dynamic profile boosting logic.",
      architecture: ["Class-Based Express Architecture", "PostgreSQL Sequences", "Redis for Session Management", "Socket.IO with Handshake Auth", "Jenkins CI/CD"],
      outcome: "Launched with AI-driven 'Smart Recommendations', secure role-based access, and a scalable subscription model using CCVenue."
    }
  },
  {
    id: "casebench",
    name: "CaseBench / LegalDiary",
    short_desc: "Comprehensive legal case-management platform with Google Calendar sync.",
    tags: ["Flask", "MySQL", "Vanilla JS", "jQuery", "Google Calendar API"],
    image: "/projectimg/casebench.png",
    link: "#",
    caseStudy: {
      overview: "Developed a comprehensive legal case-management platform used by law firms to manage schedules, billing, and client data.",
      key_contributions: [
        "Integrated Google Calendar with two-way synchronization (create, update, delete).",
        "Implemented role-based access control, including intermediate partner roles between admin and standard users.",
        "Built modules for activities, expenses, billing, and matter-wise invoice generation.",
        "Currently extending the platform for a UAE-based Legal SaaS with advanced case-management workflows."
      ],
      challenge: "Reliable handling of Google Calendar update and delete sync, ensuring consistency across systems. Implementing intermediate partner roles between admin and standard users.",
      solution: "Integrated Google Calendar with two-way synchronization (create, update, delete). Built modules for activities, expenses, billing, and matter-wise invoice generation. Implemented RBAC with partner roles.",
      architecture: ["Python Flask Backend", "MySQL Database", "Google Calendar API Integration", "Role-Based Access Control"],
      outcome: "Streamlined case tracking and billing for law firms, ensuring 100% calendar consistency."
    }
  },
  {
    id: "fcrf-diamond",
    name: "FCRF | Diamond Reports",
    short_desc: "High-performance diamond reporting platform integrating multiple external data sources.",
    tags: ["React.js", "NestJS", "Puppeteer", "Google Sheets", "Queues", "Sentry.io"],
    image: "/projectimg/fcrf.png", 
    link: "https://www.fcresearch.org",
    caseStudy: {
      overview: "Engineered a high-performance diamond reporting platform integrating multiple external data sources and automation pipelines.",
      key_contributions: [
        "Implemented Diamond, Rarity, Argyle, and Diary reports using multi-source data ingestion.",
        "Integrated external tools including Rarity, Argyle, True Faceup, and Auction Genie.",
        "Built queue-based processing to handle high-volume, multi-sheet external requests reliably.",
        "Designed OpenAPI-driven diary report summaries.",
        "Implemented QR code scanning to automatically extract GIA numbers.",
        "Enabled PDF generation, sharing, saving, and historical tracking of reports.",
        "Integrated Sentry.io for real-time error monitoring and webhooks for user activity tracking.",
        "Decoded client system metadata using User-Agent parsing."
      ],
      challenge: "Handling high-volume PDF generation requests from multiple external sources (CSV, Sheets) without blocking. Decoding client system metadata and integrating tools like Rarity and Argyle.",
      solution: "Built queue-based processing for multi-sheet requests. Implemented Diamond, Rarity, Argyle, Diary reports. Used Puppeteer for PDF generation and Webhooks for activity tracking.",
      architecture: ["NestJS (Synchronous API)", "Queue/Worker Pattern", "Puppeteer for Headless PDF", "OpenAPI", "Google Drive Integration"],
      outcome: "Automated PDF generation reducing manual work by 95%. Enabled QR code scanning for GIA extraction and real-time error monitoring."
    }
  },
  {
    id: "azown-realestate",
    name: "Azown | Real Estate Platform",
    short_desc: "Full-scale real estate marketplace with role-based access and CI/CD pipelines.",
    tags: ["React.js", "Node.js", "Express", "MongoDB", "AWS EC2", "GitHub Actions"],
    image: "/projectimg/azown.png",
    link: "https://www.azown.com",
    caseStudy: {
      overview: "Built a full-scale real estate marketplace from scratch.",
      key_contributions: [
        "Developed the platform end-to-end with role-based access (vendor, builder, broker, owner).",
        "Designed structured property categorization: Residential (Flat, PG, Full House), Commercial (Rent, Buy), Plots.",
        "Integrated service-based offerings (painting, moving, packing).",
        "Implemented CI/CD pipelines using GitHub Actions."
      ],
      challenge: "Managing complex relationships between 4 user types (Vendor, Builder, Broker, Owner) and diverse property categories (Residential, Commercial, Plots) and services.",
      solution: "Developed end-to-end platform with service-based offerings. Designed structured property categorization. Implemented CI/CD pipelines using GitHub Actions for automated deployment.",
      architecture: ["CI/CD Pipeline (GitHub Actions)", "AWS Route53 & EC2", "MongoDB Aggregations", "Role-Based Access Control"],
      outcome: "Scalable marketplace supporting 3 major property categories and service-based vendor marketplace."
    }
  },
  {
    id: "kiran-chat",
    name: "Kiranjadhav | Stock Chat",
    short_desc: "Real-time communication platform for stock and options trading communities.",
    tags: ["MERN", "TypeScript", "Socket.IO", "Push Notifications", "AWS"],
    image: "/projectimg/kiran.png",
    link: "#",
    caseStudy: {
      overview: "Developed a real-time communication platform for stock and options trading communities.",
      key_contributions: [
        "Built real-time group chat with secure Socket.IO communication.",
        "Implemented admin-only broadcast alerts for buy/sell trading signals.",
        "Added push notifications for offline users.",
        "Enabled Excel (XLSX) export of user and activity data."
      ],
      challenge: "Delivering real-time stock buy/sell alerts to thousands of users simultaneously without latency. Ensuring offline users receive updates via push notifications.",
      solution: "Built real-time group chat with secure Socket.IO communication. Implemented admin-only broadcast alerts for buy/sell trading signals. Added push notifications and XLSX export for user data.",
      architecture: ["Socket.IO for Bi-directional comms", "Push Notification Services", "AWS EC2 & S3", "XLSX Export"],
      outcome: "Reliable alert system for trading signals with instant user reachability and data export capabilities."
    }
  },
  {
    id: "r2r-care",
    name: "R2R Care | Multi-Tenant Healthcare",
    short_desc: "Secure, scalable multi-tenant healthcare SaaS with dynamic subdomain provisioning.",
    tags: ["React.js", "Node.js", "DocumentDB", "AWS Amplify", "Lambda", "EventBridge"],
    image: "/projectimg/r2rcare.png",
    link: "https://demo.r2rcare.co.uk",
    caseStudy: {
      overview: "Designed and implemented a secure, scalable multi-tenant healthcare SaaS.",
      key_contributions: [
        "Implemented dynamic subdomain provisioning for onboarding new healthcare organizations.",
        "Ensured strict database isolation per tenant for compliance and security.",
        "Designed a robust multi-tenant architecture using AWS serverless services."
      ],
      challenge: "Ensuring strict database isolation per tenant for compliance and security while allowing dynamic onboarding of new healthcare organizations.",
      solution: "Implemented dynamic subdomain provisioning. Designed robust multi-tenant architecture using AWS serverless services to ensure isolation.",
      architecture: ["AWS API Gateway & Lambda", "DocumentDB for Tenant Isolation", "AWS Amplify", "EventBridge"],
      outcome: "Seamless onboarding of new healthcare organizations with isolated databases and compliant architecture."
    }
  },
  {
    id: "pvroof",
    name: "PVROOF.IO | Solar Installer",
    short_desc: "Solar platform with Stripe 3DS payments and automated notifications.",
    tags: ["Stripe", "AWS DynamoDB", "AWS SES", "EventBridge"],
    image: "/projectimg/pvroof.webp",
    link: "https://www.pvroof.io",
    caseStudy: {
      overview: "Solar platform integration for UK-based transactions.",
      key_contributions: [
        "Integrated Stripe payments with 3DS authentication for UK users.",
        "Automated payment reminders and notifications using AWS SES and EventBridge."
      ],
      challenge: "Handling secure UK-based transactions with 3DS verification and automating payment reminders.",
      solution: "Integrated Stripe payments with 3DS authentication for UK users. Automated payment reminders and notifications using AWS SES and EventBridge.",
      architecture: ["Serverless Architecture", "AWS DynamoDB", "Stripe Payment Gateway", "AWS SES"],
      outcome: "Secure PCI-compliant payment processing and automated customer engagement."
    }
  },
  {
    id: "betsnext",
    name: "BetsNext – Crypto Gaming Platform",
    short_desc: "Crypto-based gaming platform with multiple provably fair games and microservice architecture.",
    tags: ["React.js", "Node.js", "Microservices", "Socket.IO", "MongoDB", "Cryptography"],
    image: "/projectimg/betsnext.png",
    link: "https://betsnext.com",
    caseStudy: {
      overview: "Developed a crypto-based gaming platform with multiple provably fair games.",
      key_contributions: [
        "Built games including Roulette, Dice, Crash, Mines, Tower, Hi-Lo, Blackjack, and Plinko.",
        "Designed a microservice architecture, with each game running as an independent service.",
        "Implemented provably fair gaming algorithms using server seed, client seed, nonce, and hash verification.",
        "Built fairness verification systems for Dice, Blackjack, Hi-Lo, and Mines.",
        "Implemented key rotation and shared seed logic across games per user.",
        "Designed and enforced house edge (house cut) mechanisms."
      ],
      challenge: "Ensuring game fairness and system stability. If one game crashes, it shouldn't affect the entire platform. Validating fairness for games like Roulette, Dice, Crash, and Blackjack was critical for user trust.",
      solution: "Designed a microservice architecture where each game runs independently. Implemented provably fair algorithms using server/client seeds, nonces, and hash verification. Enforced house edge mechanisms.",
      architecture: ["Microservices for isolation", "Socket.IO for real-time game state", "Crypto hashing for fairness verification", "Key Rotation Logic"],
      outcome: "Achieved 100% game uptime isolation and transparent fairness verification for users."
    }
  }
];