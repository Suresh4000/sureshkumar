export type Project = {
  id: string;
  title: string;
  type: string;
  year: string;
  role: string;
  overview: string;
  challenge: string;
  approach: string;
  outcome: string;
  bullets: string[];
  modules?: string[];
  responsibilities?: string[];
  deliverables?: string[];
  skills: string[];
  accent: "ink" | "slate" | "stone" | "olive" | "rust";
};

export const profile = {
  name: "Sureshkumar",
  role: "Web Solutions Engineer",
  tagline:
    "Strategic digital experiences through thoughtful design, scalable web development, and business-focused problem-solving.",
  about:
    "I turn business requirements into digital products that are easy to use and ready to grow. My work covers landing pages, administrative dashboards, booking systems, lead workflows, and long-term website care. I currently deepen React, Next.js, Node.js, and AI-assisted product planning.",
  email: "sureshkumarmr2004@gmail.com",
};

export const skillGroups = [
  {
    title: "Frontend",
    items: ["React.js", "JavaScript", "Vite", "HTML5", "CSS3", "Tailwind CSS"],
  },
  {
    title: "CMS & Web",
    items: [
      "WordPress",
      "Elementor",
      "WPBakery",
      "WooCommerce",
      "SEO",
      "Performance",
    ],
  },
  {
    title: "Design & Product",
    items: [
      "Figma",
      "UI Design",
      "UX Strategy",
      "Wireframing",
      "Design Systems",
      "Dashboards",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "VS Code", "Cursor AI", "Claude", "Canva"],
  },
  {
    title: "Learning",
    items: ["Next.js", "Node.js", "REST APIs", "AI Automation"],
  },
];

export const projects: Project[] = [
  {
    id: "garage-management",
    title: "Garage Management System",
    type: "Enterprise web application",
    year: "2025",
    role: "Product design & ERP planning",
    overview:
      "A complete Garage ERP plan for automotive service centers — from job cards and inventory to technician dashboards and billing.",
    challenge:
      "Service centers were running on paper job cards, disconnected spreadsheets, and tribal knowledge. Owners needed one system for customers, vehicles, technicians, parts, and invoices without overwhelming staff.",
    approach:
      "I wrote a 100+ page PRD, mapped user journeys for owner, receptionist, and technician roles, then designed dashboard architecture and database entities before any interface polish.",
    outcome:
      "A complete workflow, role-based interfaces, and wireframes that a development team can implement without re-discovering the business rules.",
    bullets: [
      "Product requirement documentation",
      "User flow design",
      "Dashboard architecture",
      "Database planning",
      "Admin & staff interfaces",
      "UX research",
    ],
    modules: [
      "Customer Management",
      "Vehicle Database",
      "Job Card System",
      "Service History",
      "Technician Dashboard",
      "Appointment Scheduling",
      "Inventory & Spare Parts",
      "Billing & Invoice",
      "Reports & Analytics",
      "Role-Based Authentication",
    ],
    responsibilities: [
      "Product Requirement Documentation (PRD)",
      "User Flow Design",
      "Dashboard Architecture",
      "Database Planning",
      "Admin & Staff Interfaces",
      "UX Research",
    ],
    deliverables: [
      "Complete system workflow",
      "100+ page PRD structure",
      "Dashboard wireframes",
      "User journey mapping",
    ],
    skills: ["Product Design", "Dashboard", "ERP Planning", "UI/UX"],
    accent: "slate",
  },
  {
    id: "executive-consulting",
    title: "Executive Consulting Platform",
    type: "Personal brand + web application",
    year: "2025",
    role: "UX strategy & product architecture",
    overview:
      "A premium digital platform for an executive consulting practice, built around lead generation and appointment conversion.",
    challenge:
      "The practice needed more than a brochure site. Visitors had to understand the offer quickly, book a conversation, and land in a simple lead pipeline.",
    approach:
      "I structured a conversion-first landing architecture, designed the booking flow and campaign pages, and planned a lightweight dashboard for inquiry tracking.",
    outcome:
      "A coherent brand-to-conversion system: landing, booking, insights, and campaign pages working as one product.",
    bullets: [
      "Premium landing page architecture",
      "Appointment booking flow",
      "Lead management dashboard",
      "Blog & insights structure",
      "Campaign landing pages",
      "Responsive UI/UX design",
      "Conversion optimization strategy",
    ],
    skills: ["Figma", "React Planning", "UX Strategy", "Wireframing"],
    accent: "ink",
  },
  {
    id: "travel-dashboard",
    title: "Travel Operations Dashboard",
    type: "Operations dashboard",
    year: "2024",
    role: "UX planning & data structure",
    overview:
      "An internal dashboard for travel operations: tours, itineraries, packages, and legal document workflow.",
    challenge:
      "Operations staff juggled listings, itineraries, and documents across tools. The data model was implicit, so errors showed up late — at the traveler’s door.",
    approach:
      "I designed the information architecture first: listing entities, itinerary timelines, package composition, and document states. Then I planned an admin surface that matched daily ops, not marketing pages.",
    outcome:
      "A structured operations workspace with clear ownership of tours, itineraries, and legal paperwork.",
    bullets: [
      "Tour listings",
      "Itinerary management",
      "Travel package organization",
      "Legal document workflow",
      "Administrative dashboard",
      "Structured data management",
    ],
    skills: ["Dashboard Design", "UX Planning", "Data Structure"],
    accent: "olive",
  },
  {
    id: "corporate-tech",
    title: "Corporate Technology Website",
    type: "Corporate website",
    year: "2024",
    role: "Frontend & website engineering",
    overview:
      "Redesign and ongoing care for an enterprise technology website, with a focus on credibility, speed, and accessibility.",
    challenge:
      "The existing site looked dated, loaded slowly, and did not present services with a clear hierarchy. Maintenance was ad hoc.",
    approach:
      "I rebuilt landing and service layouts, tightened typography and color, optimized imagery, and established a maintenance cadence with documentation.",
    outcome:
      "A faster, more credible site that the client can keep current without losing visual consistency.",
    bullets: [
      "Landing page redesign",
      "Service page layouts",
      "Typography & color system",
      "Responsive optimization",
      "Image optimization",
      "Website maintenance",
      "Client documentation",
      "Performance improvements",
    ],
    skills: ["WordPress", "Performance", "Responsive Design", "SEO"],
    accent: "stone",
  },
  {
    id: "fitness-landing",
    title: "Fitness Brand Landing Page",
    type: "React landing page",
    year: "2024",
    role: "Frontend development",
    overview:
      "A premium fitness landing page built in React + Vite, designed to convert visitors into memberships.",
    challenge:
      "The brand needed a high-energy first impression without sacrificing speed or mobile conversion.",
    approach:
      "I built a focused React landing with animated UI, a Swiper gallery, clear membership CTAs, and a tight responsive layout.",
    outcome:
      "A conversion-oriented page that presents the brand as premium and makes the next step obvious.",
    bullets: [
      "React + Vite development",
      "Animated UI",
      "Swiper integration",
      "Responsive design",
      "CTA optimization",
      "Premium branding",
    ],
    skills: ["React", "Vite", "Tailwind CSS", "Animation"],
    accent: "rust",
  },
];

export const additionalWork = [
  {
    title: "Business Research Platform",
    description: "Market research and brand positioning for a startup product.",
  },
  {
    title: "Business Workflow System",
    description: "Dashboard planning and operational workflow documentation.",
  },
  {
    title: "Website Maintenance Program",
    description:
      "Monthly maintenance, performance audits, SEO checks, and responsive testing.",
  },
  {
    title: "Landing Page Design Collection",
    description:
      "High-conversion landing pages across consulting, SaaS, and service industries.",
  },
];

export const industries = [
  "Business Consulting",
  "Technology",
  "Automotive",
  "Travel & Tourism",
  "Fitness & Wellness",
  "Digital Services",
];

export const processSteps = [
  {
    number: "01",
    title: "Research & Discovery",
    body: "Understand the business, audience, constraints, and existing tools.",
  },
  {
    number: "02",
    title: "Requirement Analysis",
    body: "Turn conversations into clear product requirements and priorities.",
  },
  {
    number: "03",
    title: "Wireframing & UX",
    body: "Map user journeys and structure screens before visual design.",
  },
  {
    number: "04",
    title: "Visual Interface",
    body: "Define type, color, and layout systems that feel on-brand.",
  },
  {
    number: "05",
    title: "Frontend Development",
    body: "Build responsive, maintainable interfaces in React or WordPress.",
  },
  {
    number: "06",
    title: "Testing & Optimization",
    body: "Check performance, accessibility, and conversion paths.",
  },
  {
    number: "07",
    title: "Deploy & Document",
    body: "Ship, hand over, and leave the client with a clear operating guide.",
  },
];

export const stats = [
  { label: "Featured projects", value: "5+" },
  { label: "Web applications", value: "2" },
  { label: "Business websites", value: "3+" },
  { label: "Dashboard systems", value: "3" },
  { label: "Landing pages", value: "5+" },
  { label: "Industries", value: "6" },
];

export function getProject(id: string) {
  return projects.find((p) => p.id === id);
}

export function getAdjacentProjects(id: string) {
  const index = projects.findIndex((p) => p.id === id);
  return {
    prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
    next: index < projects.length - 1 ? projects[index + 1] : projects[0],
  };
}
