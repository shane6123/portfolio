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
    id: "betsnext",
    name: "Betsnext – Gaming Platform",
    short_desc: "Microservice-based gaming platform with Provably Fair algorithms.",
    tags: ["React", "Node.js", "Microservices", "Socket.IO", "MongoDB"],
    image: "/projectimg/betsnext.png", // Ensure you add this image
    link: "https://betsnext.com/",
    caseStudy: {
      challenge: "Ensuring game fairness and system stability. If one game crashes, it shouldn't affect the entire platform. Validating fairness (Roulette, Blackjack, Crash) was critical for user trust.",
      solution: "Implemented a Microservice Architecture where each game runs independently. Developed a 'Provably Fair' system using Client/Server seed nonces and rotation keys to cryptographically verify outcomes.",
      architecture: ["Microservices for isolation", "Socket.IO for real-time game state", "Crypto hashing for fairness verification"],
      outcome: "Achieved 100% game uptime isolation and transparent fairness verification for users."
    }
  },
  {
    id: "nek-rishta",
    name: "Nek Rishta – AI Matrimony",
    short_desc: "Next.js platform with Gemini AI matchmaking & Subscription.",
    tags: ["Next.js", "PostgreSQL", "Gemini AI", "Jenkins", "CCVenue"],
    image: "/projectimg/nekrishta.jpg", // Ensure you add this image
    link: "http://nekrishta.com/",
    caseStudy: {
      challenge: "Generating unique sequential usernames (handling deletions/gaps) and creating a matching system beyond basic filters. Also needed robust Role-Based Access Control (RBAC).",
      solution: "Integrated Gemini 2.5 Flash for semantic personality matching. Implemented Database Sequences for gap-free IDs. Built a Class-Based Express architecture for reusable code and scalable permissions.",
      architecture: ["Class-Based Express Architecture", "Jenkins Pipeline for CI/CD", "Socket.IO with Handshake Auth", "Redis for Session Management"],
      outcome: "Launched with AI-driven 'Smart Recommendations' and a secure, scalable subscription model using CCVenue."
    }
  },
  {
    id: "fcrf-diamond",
    name: "FCRF – Diamond Reports",
    short_desc: "Automated PDF generation platform using NestJS & Puppeteer.",
    tags: ["NestJS", "React", "Puppeteer", "Google Sheets", "Queue"],
    image: "/projectimg/fcrf.png", 
    link: "https://www.fcresearch.org/",
    caseStudy: {
      challenge: "Handling high-volume PDF generation requests from multiple external sources (CSV, Sheets) without blocking the main thread. Needed to decode user system data via User-Agent.",
      solution: "Implemented a Queue system to buffer requests and used Puppeteer for invoice/report generation. Integrated Sentry.io for real-time error tracking and Webhooks to monitor user activity.",
      architecture: ["NestJS (Synchronous API)", "Queue/Worker Pattern", "Puppeteer for Headless PDF", "Google Drive Integration"],
      outcome: "Automated 95% of manual reporting work, enabling instant PDF downloads and sharing."
    }
  },
  {
    id: "casebench",
    name: "Casebench – Legal SaaS",
    short_desc: "UAE-based Legal Case Management with Google Calendar Sync.",
    tags: ["Python Flask", "MySQL", "Google Calendar API", "jQuery"],
    image: "/projectimg/casebench.png", // Ensure you add this image
    link: "#", // Add link if available
    caseStudy: {
      challenge: "Two-way synchronization of events between the SaaS platform and Google Calendar. Handling updates and deletions accurately across both platforms was complex.",
      solution: "Implemented Google Calendar API with CRUD operations and webhooks to sync events in real-time. Built comprehensive modules for Matter invoicing, Expenses, and Partner/Admin role management.",
      architecture: ["Python Flask Backend", "MySQL Database", "Google Calendar API Integration", "Role-Based Access Control"],
      outcome: "Streamlined case tracking and billing for legal firms, reducing scheduling conflicts by 100%."
    }
  },
  {
    id: "r2r-care",
    name: "R2R Care – Multi-Tenant SaaS",
    short_desc: "Healthcare platform with dynamic subdomains & isolation.",
    tags: ["React", "AWS Lambda", "DocumentDB", "Amplify", "MobiScroll"],
    image: "/projectimg/r2rcare.png",
    link: "https://demo.r2rcare.co.uk/",
    caseStudy: {
      challenge: "We needed a single codebase to serve multiple hospitals (tenants), ensuring strict data isolation so Hospital A never sees Hospital B's patients.",
      solution: "Implemented a Multi-Tenant architecture using AWS Lambda and Dynamic Subdomains. Used tenant-IDs in request headers to route queries to specific DocumentDB collections.",
      architecture: ["AWS API Gateway & Lambda", "DocumentDB for Tenant Isolation", "AWS Amplify for Hosting", "EventBridge"],
      outcome: "Successfully boarded 5+ clinics on a single infrastructure, reducing hosting costs by 60%."
    }
  },
  {
    id: "azown-realestate",
    name: "Azown – Real Estate",
    short_desc: "End-to-end Property platform with CI/CD pipelines.",
    tags: ["React", "Node.js", "AWS EC2/S3", "GitHub Actions"],
    image: "/projectimg/azown.png",
    link: "https://www.azown.com/",
    caseStudy: {
      challenge: "Managing complex relationships between 4 user types (Vendor, Builder, Broker, Owner) and diverse property categories (Residential, Commercial, Plots).",
      solution: "Designed a flexible MongoDB schema to handle heterogeneous property data. Implemented CI/CD via GitHub Actions for automated deployment to AWS EC2.",
      architecture: ["CI/CD Pipeline (GitHub Actions)", "AWS Route53 & EC2", "MongoDB Aggregations"],
      outcome: "Scalable platform supporting 3 major property categories and service-based vendor marketplace."
    }
  },
  // {
  //   id: "kiran-chat",
  //   name: "Kiranjadhav – Stock Chat",
  //   short_desc: "Real-time Stock Alert & Chat App with Push Notifications.",
  //   tags: ["MERN", "Socket.IO", "TypeScript", "AWS"],
  //   image: "/projectimg/kiran.png", // Ensure you add this image
  //   link: "#",
  //   caseStudy: {
  //     challenge: "Delivering real-time stock buy/sell alerts to thousands of users simultaneously without latency. Ensuring users receive updates even when the app is closed.",
  //     solution: "Optimized Socket.IO implementation for broadcasting Admin-only calls. Implemented Push Notifications and group conversations restricted to admin broadcasts.",
  //     architecture: ["Socket.IO for Bi-directional comms", "Push Notification Services", "XLSX Export for User Data"],
  //     outcome: "Reliable alert system for option trading calls with instant user reachability."
  //   }
  // },
  // {
  //   id: "pvroof",
  //   name: "PVROOF.IO – Solar Installer",
  //   short_desc: "Solar platform with Stripe 3DS & AWS EventBridge.",
  //   tags: ["Stripe", "AWS DynamoDB", "AWS SES", "EventBridge"],
  //   image: "/projectimg/pvroof.webp", // Ensure you add this image
  //   link: "https://www.pvroof.io/",
  //   caseStudy: {
  //     challenge: "Handling secure UK-based transactions with 3DS verification and automating payment reminders.",
  //     solution: "Integrated Stripe for secure payments. Utilized AWS SES and EventBridge for timely payment reminders and customer communication.",
  //     architecture: ["Serverless Architecture", "AWS DynamoDB", "Stripe Payment Gateway"],
  //     outcome: "Secure PCI-compliant payment processing and automated customer engagement."
  //   }
  // }
];