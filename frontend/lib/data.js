export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Gallery", href: "#gallery" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { label: "Projects completed", target: 48, suffix: "+" },
  { label: "Years of experience", target: 3, suffix: "" },
  { label: "Happy clients", target: 30, suffix: "+" },
  { label: "Countries served", target: 12, suffix: "" },
];

export const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Next.js",
  "PostgreSQL",
  "GraphQL",
  "AWS",
  "UI Engineering",
];

export const projects = [
  {
    title: "Food Recipe App",
    category: "Web app",
    image: "/projects/food-recipe.png",
    description: "A recipe discovery app built with JavaScript, with a live version available to explore.",
    tags: ["JavaScript", "React"],
    demoUrl: "https://food-recipe-app-two-tawny.vercel.app",
  },
  {
    title: "SpendWise Expense Tracker",
    category: "Full-stack app",
    image: "/projects/expense-tracker.png",
    description:
      "A full-stack expense tracker with dashboards, spending charts, categories, and budget tools.",
    tags: ["React", "FastAPI", "PostgreSQL", "Docker"],
    demoUrl: "https://expense-tracker-fullstack-theta.vercel.app",
  },
  {
    title: "Spice & Soul Restaurant",
    category: "Restaurant app",
    mark: "S",
    thumb: "thumb-c",
    description:
      "A restaurant ordering and management app with menu filters, cart, order placement, and an admin dashboard.",
    tags: ["PHP", "MySQL", "JavaScript"],
  },
  {
    title: "TechPulse Electronic Shop",
    category: "E-commerce",
    mark: "T",
    thumb: "thumb-d",
    description:
      "A full-stack electronics store with product search, shopping cart, checkout, order tracking, and admin tools.",
    tags: ["Next.js", "TypeScript", "FastAPI", "SQL"],
  },
  {
    title: "AURA Medical Center",
    category: "Hospital management",
    image: "/projects/hospital-management.png",
    description:
      "A hospital operations platform for appointments, billing, bed tracking, doctor payouts, and patient care.",
    tags: ["Next.js", "FastAPI", "Flutter", "PostgreSQL"],
    demoUrl: "https://hospital-management-seven-sigma.vercel.app",
  },
  {
    title: "Job Tracker",
    category: "Productivity app",
    image: "/projects/job-tracker.png",
    description: "A web app for organizing job applications and tracking your job search.",
    tags: ["React", "TypeScript"],
    demoUrl: "https://job-tracker-lac-rho.vercel.app",
  },
  {
    title: "ATM Management System",
    category: "Application",
    mark: "A",
    thumb: "thumb-e",
    description: "An ATM management system application with account and transaction management.",
    tags: ["ATM", "Management system"],
  },
];

export const gallery = [
  {
    title: "Food Recipe App",
    page: "Landing page",
    image: "/projects/food-recipe.png",
  },
  {
    title: "SpendWise Expense Tracker",
    page: "Sign-in screen",
    image: "/projects/expense-tracker.png",
  },
  {
    title: "AURA Medical Center",
    page: "Landing & sign-in",
    image: "/projects/hospital-management.png",
  },
  {
    title: "Job Tracker",
    page: "Sign-in screen",
    image: "/projects/job-tracker.png",
  },
];

export const experience = [
  {
    period: "2023 — 2026",
    role: "Full Stack Developer",
    description: "Building full-stack web and mobile applications.",
  },
];

export const testimonials = [
  {
    quote:
      "Sujan took our vague idea and turned it into a product our customers genuinely love. Clear communication, fast iterations and code we could build on.",
    name: "Julia Meyer",
    role: "Founder, Nimbus",
    initials: "JM",
  },
  {
    quote:
      "We went from prototype to launch in nine weeks. Sujan owns the details — performance, accessibility, edge cases — without ever slowing the team down.",
    name: "Sam Keller",
    role: "CTO, Kasa",
    initials: "SK",
    accent: true,
  },
];
