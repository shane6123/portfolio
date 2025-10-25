const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Full Stack Developer (MERN)",
    icon: "/web.webp",
  },
  {
    title: "Backend Engineer (Node.js / NestJS)",
    icon: "/backend.webp",
  },
  {
    title: "Frontend Developer (React / Next.js)",
    icon: "/mobile.webp",
  },
  {
    title: "Cloud Integration Engineer (AWS / GCP)",
    icon: "/creator.webp",
  },
];

const technologies = [
  { name: "JavaScript (ES6+)", icon: "/tech/javascript.webp" },
  { name: "TypeScript", icon: "/tech/typescript.webp" },
  { name: "React.js", icon: "/tech/reactjs.webp" },
  { name: "PostgreSQL", icon: "/tech/postgresql.png" },
  { name: "AWS", icon: "/tech/aws.png" },
  { name: "Google Cloud", icon: "/tech/gcp.png" },
  { name: "Docker", icon: "/tech/docker.png" },
  { name: "Redux Toolkit", icon: "/tech/redux.png" },
  // { name: "Tailwind CSS", icon: "/tech/tailwind.webp" },
  { name: "Git", icon: "/tech/git.webp" },
  { name: "Prisma", icon: "/tech/prisma.png" },
  { name: "Sequelize", icon: "/tech/sequelize.png" },
  { name: "Sentry", icon: "/tech/sentry.jpeg" },
  // { name: "Swagger", icon: "/tech/swagger.jpeg" },
  // { name: "Bootstrap", icon: "/tech/bootstrap.webp" },
  // { name: "NestJS", icon: "/tech/nestjs.png" },
  // { name: "Express.js", icon: "/tech/express.png" },
  // { name: "MongoDB", icon: "/tech/mongodb.png" },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Websultanate Software Technologies Pvt. Ltd.",
    icon: "/company/websultanate.jpeg",
    iconBg: "#383E56",
    date: "Apr 2024 - Present",
    points: [
      "Contributing as a MERN Stack Developer to build scalable, high-performance web applications.",
      "Implementing backend APIs and optimizing full-stack performance for enterprise-grade clients.",
      "Collaborating with cross-functional teams to deliver robust, maintainable, and tested solutions.",
    ],
  },
  {
    title: "MERN Stack Developer",
    company_name: "Androcoders",
    icon: "/company/androcoders.png",
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Apr 2024",
    points: [
      "Developed multiple full-stack web applications using MongoDB, Express, React, and Node.js.",
      "Worked with AWS services (S3, Lambda, API Gateway) and implemented scalable APIs.",
      "Collaborated with designers and QA teams to deliver seamless UX across platforms.",
    ],
  },
  {
    title: "Backend Developer Intern",
    company_name: "Rablo.in",
    icon: "/company/rablo.png",
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Sep 2022",
    points: [
      "Built and optimized RESTful APIs using Node.js and MongoDB.",
      "Improved data-fetching efficiency and backend response times by 30%.",
      "Collaborated remotely with senior developers and contributed to production deployments.",
    ],
  },
];

const testimonials = [
  {
    id: 1,
    testimonial:
      "Shane is a proactive and detail-oriented engineer. His ability to design reliable backend architectures and integrate complex APIs is impressive.",
    name: "Team Lead, Websultanate Technologies",
    image: "/socialmedia/linkedin.svg",
    link: "https://www.linkedin.com/in/shanealam/",
  },
  {
    id: 2,
    testimonial:
      "Delivered clean, scalable code and modern frontend experiences using React and Next.js with excellent communication throughout.",
    name: "Client – Freelance Project",
    image: "/tech/github.webp",
    link: "https://github.com/shane6123",
  },
];

const projects = [
  {
	index: 1,	
    name: "FCRF – Diamond Reports Platform",
    description:
      "A report generation platform for diamond analytics and certification using React, NestJS, Puppeteer, and Google Sheets integration with GIA APIs.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "NestJS", color: "green-text-gradient" },
      { name: "Google Sheets API", color: "pink-text-gradient" },
    ],
    image: "/projectimg/fcrf.png",
    deploy_link: "https://www.fcresearch.org/",
    platform: "Web",
  },
  {
	index: 2,
    name: "Nek Rishta – AI-based Matrimonial Platform",
    description:
      "A modern matchmaking platform integrating Gemini AI for intelligent recommendations. Built with Next.js, Express, and PostgreSQL (Sequelize ORM).",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "PostgreSQL", color: "green-text-gradient" },
      { name: "Gemini AI", color: "pink-text-gradient" },
    ],
    image: "/projectimg/nekrishta.png",
    deploy_link: "http://nekrishta.com/",
    platform: "Web",
  },
  {
	index: 3,
    name: "R2R Care – Multi-Tenant Healthcare Platform",
    description:
      "Built a healthcare SaaS app with dynamic subdomain onboarding using AWS Amplify, Lambda, API Gateway, and DocumentDB for tenant isolation.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "AWS Lambda", color: "green-text-gradient" },
      { name: "DocumentDB", color: "pink-text-gradient" },
    ],
    image: "/projectimg/r2rcare.png",
    deploy_link: "https://demo.r2rcare.co.uk/",
    platform: "Web",
  },
  // {
  // 	index: 4,
  // 	name: "PVROOF.IO – Solar Installation Platform",
  // 	description:
  // 		"Integrated Stripe payments, AWS DynamoDB, SES, and EventBridge for handling secure UK-based transactions and automated reminders.",
  // 	tags: [
  // 		{ name: "Stripe", color: "blue-text-gradient" },
  // 		{ name: "AWS DynamoDB", color: "green-text-gradient" },
  // 		{ name: "AWS EventBridge", color: "pink-text-gradient" },
  // 	],
  // 	image: "/projectimg/pvroof.webp",
  // 	deploy_link: "https://www.pvroof.io/",
  // 	platform: "Web",
  // },
  {
	index: 5,
    name: "Azown – Real Estate Platform",
    description:
      "A comprehensive real estate platform offering property listings, virtual tours, and agent services with integrated payment solutions using Stripe and AWS services.",
    tags: [
      { name: "Stripe", color: "blue-text-gradient" },
      { name: "AWS DynamoDB", color: "green-text-gradient" },
      { name: "AWS EventBridge", color: "pink-text-gradient" },
    ],
    image: "/projectimg/azown.png",
    deploy_link: "https://www.azown.com/",
    platform: "Web",
  },
  {
	index: 6,
    name: "Yohesha – Banking & Financial Services App",
    description:
      "A comprehensive financial services platform offering banking, insurance, and investment solutions with real-time chat support using Socket.IO and Firebase Realtime Database.",
    tags: [
      { name: "Stripe", color: "blue-text-gradient" },
      { name: "AWS DynamoDB", color: "green-text-gradient" },
      { name: "AWS EventBridge", color: "pink-text-gradient" },
    ],
    image: "/projectimg/yohesha.png",
    deploy_link: "https://www.yohesha.com/",
    platform: "Web",
  },
];

export {
  navLinks,
  services,
  technologies,
  experiences,
  testimonials,
  projects,
};
