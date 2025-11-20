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
    items: ["AWS Lambda", "AWS S3", "AWS EC2", "AWS API Gateway", "Route53", "Docker", "CI/CD"]
  },
  tools: {
    title: "Tools & Integrations",
    icon: "Settings",
    items: ["Git/GitHub", "JIRA", "Sentry.io", "Puppeteer", "Google Sheets API", "Stripe", "OpenAI API"]
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
    id: "fcrf-diamond",
    name: "FCRF – Diamond Reports",
    short_desc: "Diamond analytics platform with automated PDF generation.",
    tags: ["React", "NestJS", "Puppeteer", "GIA API"],
    image: "/projectimg/fcrf.png", 
    link: "https://www.fcresearch.org/",
    caseStudy: {
      challenge: "The client needed to generate complex, pixel-perfect PDF certificates for diamonds based on dynamic GIA data. Doing this manually was slow and prone to human error.",
      solution: "I built a NestJS microservice using Puppeteer to programmatically render HTML templates into PDFs. We utilized Google Sheets API as a CMS, allowing admins to update diamond inventory in real-time without database access.",
      architecture: ["NestJS for backend logic", "Puppeteer for Headless Chrome PDF generation", "Redis for caching API responses from GIA"],
      outcome: "Automated 95% of the manual reporting work and reduced report generation time from 10 minutes to 5 seconds."
    }
  },
  {
    id: "nek-rishta",
    name: "Nek Rishta – AI Matrimony",
    short_desc: "Matchmaking platform using Gemini AI for compatibility.",
    tags: ["Next.js", "PostgreSQL", "Sequelize", "Gemini AI"],
    image: "/projectimg/nekrishta.png",
    link: "http://nekrishta.com/",
    caseStudy: {
      challenge: "Traditional filtering based on caste/religion wasn't finding 'compatible' matches based on personality. The dataset was complex with strict relational integrity requirements.",
      solution: "I integrated Google's Gemini AI to analyze user bios and preferences to generate a compatibility score. Used Sequelize ORM to handle complex Many-to-Many relationships between user profiles and preferences.",
      architecture: ["Next.js App Router for SEO", "PostgreSQL for structured relational data", "Sequelize ORM for database abstraction"],
      outcome: "Increased user engagement by offering 'Smart Recommendations' alongside traditional filtering."
    }
  },
  {
    id: "r2r-care",
    name: "R2R Care – Multi-Tenant SaaS",
    short_desc: "Healthcare platform with dynamic subdomains.",
    tags: ["React", "AWS Lambda", "DocumentDB", "Amplify"],
    image: "/projectimg/r2rcare.png",
    link: "https://demo.r2rcare.co.uk/",
    caseStudy: {
      challenge: "We needed a single codebase to serve multiple hospitals (tenants), ensuring strict data isolation so Hospital A never sees Hospital B's patients.",
      solution: "Implemented a Multi-Tenant architecture using AWS Lambda. We used tenant-IDs in request headers to route queries to specific DocumentDB collections, ensuring logical isolation.",
      architecture: ["AWS API Gateway for routing", "Custom Middleware for Tenant Identification", "AWS Cognito for secure role-based auth"],
      outcome: "Successfully boarded 5+ clinics on a single infrastructure, reducing hosting costs by 60%."
    }
  },
  {
    id: "azown-realestate",
    name: "Azown – Real Estate",
    short_desc: "Property platform with Stripe & AWS EventBridge.",
    tags: ["Stripe", "DynamoDB", "EventBridge"],
    image: "/projectimg/azown.png",
    link: "https://www.azown.com/",
    caseStudy: {
      challenge: "Handling complex subscription models for agents and ensuring real-time notifications for property inquiries without slowing down the app.",
      solution: "Used Stripe Webhooks to handle recurring billing. Implemented AWS EventBridge to trigger email notifications (SES) asynchronously whenever a property interest was registered.",
      architecture: ["Event-Driven Architecture", "DynamoDB for single-table design efficiency", "Stripe Connect for payments"],
      outcome: "Zero downtime for notifications and secure PCI-compliant payment processing."
    }
  },
  {
    id: "yohesha-finance",
    name: "Yohesha – FinTech App",
    short_desc: "Banking & Insurance platform with real-time support.",
    tags: ["Firebase", "Socket.IO", "React"],
    image: "/projectimg/yohesha.png",
    link: "https://www.yohesha.com/",
    caseStudy: {
      challenge: "Users required instant support for banking queries, and the app needed real-time updates for transaction statuses.",
      solution: "Integrated Socket.IO for a live chat support system connecting users to agents. Used Firebase Realtime Database to push transaction status updates instantly to the frontend.",
      architecture: ["Socket.IO for bi-directional communication", "Firebase for real-time data syncing", "Redux for frontend state management"],
      outcome: "Reduced customer support ticket resolution time by 50% via the live chat feature."
    }
  }
];