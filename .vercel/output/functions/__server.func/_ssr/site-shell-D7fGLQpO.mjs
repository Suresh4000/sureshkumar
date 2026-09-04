import { i as __toESM } from "../_runtime.mjs";
import { r as require_react } from "../_libs/@hookform/resolvers+[...].mjs";
import { f as useRouterState, x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as Sun, r as Moon } from "../_libs/lucide-react.mjs";
import { r as useTheme } from "./router-DJMNkVXi.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-shell-D7fGLQpO.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var profile = {
	name: "Sureshkumar",
	role: "Web Solutions Engineer",
	tagline: "Strategic digital experiences through thoughtful design, scalable web development, and business-focused problem-solving.",
	about: "I turn business requirements into digital products that are easy to use and ready to grow. My work covers landing pages, administrative dashboards, booking systems, lead workflows, and long-term website care. I currently deepen React, Next.js, Node.js, and AI-assisted product planning.",
	email: "hello@sureshkumar.dev"
};
var skillGroups = [
	{
		title: "Frontend",
		items: [
			"React.js",
			"JavaScript",
			"Vite",
			"HTML5",
			"CSS3",
			"Tailwind CSS"
		]
	},
	{
		title: "CMS & Web",
		items: [
			"WordPress",
			"Elementor",
			"WPBakery",
			"WooCommerce",
			"SEO",
			"Performance"
		]
	},
	{
		title: "Design & Product",
		items: [
			"Figma",
			"UI Design",
			"UX Strategy",
			"Wireframing",
			"Design Systems",
			"Dashboards"
		]
	},
	{
		title: "Tools",
		items: [
			"Git",
			"GitHub",
			"VS Code",
			"Cursor AI",
			"Claude",
			"Canva"
		]
	},
	{
		title: "Learning",
		items: [
			"Next.js",
			"Node.js",
			"REST APIs",
			"AI Automation"
		]
	}
];
var projects = [
	{
		id: "garage-management",
		title: "Garage Management System",
		type: "Enterprise web application",
		year: "2025",
		role: "Product design & ERP planning",
		overview: "A complete Garage ERP plan for automotive service centers — from job cards and inventory to technician dashboards and billing.",
		challenge: "Service centers were running on paper job cards, disconnected spreadsheets, and tribal knowledge. Owners needed one system for customers, vehicles, technicians, parts, and invoices without overwhelming staff.",
		approach: "I wrote a 100+ page PRD, mapped user journeys for owner, receptionist, and technician roles, then designed dashboard architecture and database entities before any interface polish.",
		outcome: "A complete workflow, role-based interfaces, and wireframes that a development team can implement without re-discovering the business rules.",
		bullets: [
			"Product requirement documentation",
			"User flow design",
			"Dashboard architecture",
			"Database planning",
			"Admin & staff interfaces",
			"UX research"
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
			"Role-Based Authentication"
		],
		responsibilities: [
			"Product Requirement Documentation (PRD)",
			"User Flow Design",
			"Dashboard Architecture",
			"Database Planning",
			"Admin & Staff Interfaces",
			"UX Research"
		],
		deliverables: [
			"Complete system workflow",
			"100+ page PRD structure",
			"Dashboard wireframes",
			"User journey mapping"
		],
		skills: [
			"Product Design",
			"Dashboard",
			"ERP Planning",
			"UI/UX"
		],
		accent: "slate"
	},
	{
		id: "executive-consulting",
		title: "Executive Consulting Platform",
		type: "Personal brand + web application",
		year: "2025",
		role: "UX strategy & product architecture",
		overview: "A premium digital platform for an executive consulting practice, built around lead generation and appointment conversion.",
		challenge: "The practice needed more than a brochure site. Visitors had to understand the offer quickly, book a conversation, and land in a simple lead pipeline.",
		approach: "I structured a conversion-first landing architecture, designed the booking flow and campaign pages, and planned a lightweight dashboard for inquiry tracking.",
		outcome: "A coherent brand-to-conversion system: landing, booking, insights, and campaign pages working as one product.",
		bullets: [
			"Premium landing page architecture",
			"Appointment booking flow",
			"Lead management dashboard",
			"Blog & insights structure",
			"Campaign landing pages",
			"Responsive UI/UX design",
			"Conversion optimization strategy"
		],
		skills: [
			"Figma",
			"React Planning",
			"UX Strategy",
			"Wireframing"
		],
		accent: "ink"
	},
	{
		id: "travel-dashboard",
		title: "Travel Operations Dashboard",
		type: "Operations dashboard",
		year: "2024",
		role: "UX planning & data structure",
		overview: "An internal dashboard for travel operations: tours, itineraries, packages, and legal document workflow.",
		challenge: "Operations staff juggled listings, itineraries, and documents across tools. The data model was implicit, so errors showed up late — at the traveler’s door.",
		approach: "I designed the information architecture first: listing entities, itinerary timelines, package composition, and document states. Then I planned an admin surface that matched daily ops, not marketing pages.",
		outcome: "A structured operations workspace with clear ownership of tours, itineraries, and legal paperwork.",
		bullets: [
			"Tour listings",
			"Itinerary management",
			"Travel package organization",
			"Legal document workflow",
			"Administrative dashboard",
			"Structured data management"
		],
		skills: [
			"Dashboard Design",
			"UX Planning",
			"Data Structure"
		],
		accent: "olive"
	},
	{
		id: "corporate-tech",
		title: "Corporate Technology Website",
		type: "Corporate website",
		year: "2024",
		role: "Frontend & website engineering",
		overview: "Redesign and ongoing care for an enterprise technology website, with a focus on credibility, speed, and accessibility.",
		challenge: "The existing site looked dated, loaded slowly, and did not present services with a clear hierarchy. Maintenance was ad hoc.",
		approach: "I rebuilt landing and service layouts, tightened typography and color, optimized imagery, and established a maintenance cadence with documentation.",
		outcome: "A faster, more credible site that the client can keep current without losing visual consistency.",
		bullets: [
			"Landing page redesign",
			"Service page layouts",
			"Typography & color system",
			"Responsive optimization",
			"Image optimization",
			"Website maintenance",
			"Client documentation",
			"Performance improvements"
		],
		skills: [
			"WordPress",
			"Performance",
			"Responsive Design",
			"SEO"
		],
		accent: "stone"
	},
	{
		id: "fitness-landing",
		title: "Fitness Brand Landing Page",
		type: "React landing page",
		year: "2024",
		role: "Frontend development",
		overview: "A premium fitness landing page built in React + Vite, designed to convert visitors into memberships.",
		challenge: "The brand needed a high-energy first impression without sacrificing speed or mobile conversion.",
		approach: "I built a focused React landing with animated UI, a Swiper gallery, clear membership CTAs, and a tight responsive layout.",
		outcome: "A conversion-oriented page that presents the brand as premium and makes the next step obvious.",
		bullets: [
			"React + Vite development",
			"Animated UI",
			"Swiper integration",
			"Responsive design",
			"CTA optimization",
			"Premium branding"
		],
		skills: [
			"React",
			"Vite",
			"Tailwind CSS",
			"Animation"
		],
		accent: "rust"
	}
];
var additionalWork = [
	{
		title: "Business Research Platform",
		description: "Market research and brand positioning for a startup product."
	},
	{
		title: "Business Workflow System",
		description: "Dashboard planning and operational workflow documentation."
	},
	{
		title: "Website Maintenance Program",
		description: "Monthly maintenance, performance audits, SEO checks, and responsive testing."
	},
	{
		title: "Landing Page Design Collection",
		description: "High-conversion landing pages across consulting, SaaS, and service industries."
	}
];
var industries = [
	"Business Consulting",
	"Technology",
	"Automotive",
	"Travel & Tourism",
	"Fitness & Wellness",
	"Digital Services"
];
var processSteps = [
	{
		number: "01",
		title: "Research & Discovery",
		body: "Understand the business, audience, constraints, and existing tools."
	},
	{
		number: "02",
		title: "Requirement Analysis",
		body: "Turn conversations into clear product requirements and priorities."
	},
	{
		number: "03",
		title: "Wireframing & UX",
		body: "Map user journeys and structure screens before visual design."
	},
	{
		number: "04",
		title: "Visual Interface",
		body: "Define type, color, and layout systems that feel on-brand."
	},
	{
		number: "05",
		title: "Frontend Development",
		body: "Build responsive, maintainable interfaces in React or WordPress."
	},
	{
		number: "06",
		title: "Testing & Optimization",
		body: "Check performance, accessibility, and conversion paths."
	},
	{
		number: "07",
		title: "Deploy & Document",
		body: "Ship, hand over, and leave the client with a clear operating guide."
	}
];
var stats = [
	{
		label: "Featured projects",
		value: "5+"
	},
	{
		label: "Web applications",
		value: "2"
	},
	{
		label: "Business websites",
		value: "3+"
	},
	{
		label: "Dashboard systems",
		value: "3"
	},
	{
		label: "Landing pages",
		value: "5+"
	},
	{
		label: "Industries",
		value: "6"
	}
];
function getProject(id) {
	return projects.find((p) => p.id === id);
}
function getAdjacentProjects(id) {
	const index = projects.findIndex((p) => p.id === id);
	return {
		prev: index > 0 ? projects[index - 1] : projects[projects.length - 1],
		next: index < projects.length - 1 ? projects[index + 1] : projects[0]
	};
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-bg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-sm text-fg-muted",
				children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" ",
					profile.name
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-5 text-sm text-fg-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "hover:text-fg",
						children: "Home"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/#work",
						className: "hover:text-fg",
						children: "Work"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/sureshkumar-resume.pdf",
						download: true,
						className: "hover:text-fg",
						children: "Resume"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: `mailto:${profile.email}`,
						className: "hover:text-fg",
						children: profile.email
					})
				]
			})]
		})
	});
}
var links = [
	{
		href: "/#work",
		label: "Work"
	},
	{
		href: "/#process",
		label: "Process"
	},
	{
		href: "/#about",
		label: "About"
	},
	{
		href: "/#contact",
		label: "Contact"
	}
];
function SiteHeader() {
	const { theme, toggle } = useTheme();
	const [open, setOpen] = (0, import_react.useState)(false);
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-bg/85 backdrop-blur-md",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "font-display text-lg tracking-tight text-fg",
						onClick: () => setOpen(false),
						children: "Sureshkumar"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "hidden items-center gap-1 md:flex",
						children: [
							links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: link.href,
								className: "rounded-md px-3 py-2 text-sm text-fg-muted transition-colors duration-150 hover:text-fg",
								children: link.label
							}, link.href)),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "/sureshkumar-resume.pdf",
								download: true,
								className: "ml-2 inline-flex min-h-11 items-center rounded-md border border-border bg-bg-elevated px-4 text-sm font-medium text-fg transition-colors duration-150 hover:bg-bg-subtle",
								children: "Resume"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeButton, {
								theme,
								onToggle: toggle
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 md:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeButton, {
							theme,
							onToggle: toggle
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex size-11 items-center justify-center rounded-md text-fg",
							"aria-label": open ? "Close menu" : "Open menu",
							onClick: () => setOpen((v) => !v),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "sr-only",
								children: "Menu"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex w-5 flex-col gap-1.5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px bg-fg transition-transform duration-150", open && "translate-y-[4px] rotate-45") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block h-px bg-fg transition-transform duration-150", open && "-translate-y-[4px] -rotate-45") })]
							})]
						})]
					})
				]
			}),
			open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "border-t border-border bg-bg md:hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col px-4 py-3",
					children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "flex min-h-11 items-center text-sm text-fg",
						onClick: () => setOpen(false),
						children: link.label
					}, link.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/sureshkumar-resume.pdf",
						download: true,
						className: "flex min-h-11 items-center text-sm font-medium text-fg",
						onClick: () => setOpen(false),
						children: "Download resume"
					})]
				})
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "sr-only",
				children: pathname
			})
		]
	});
}
function ThemeButton({ theme, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick: onToggle,
		"aria-label": theme === "dark" ? "Switch to light theme" : "Switch to dark theme",
		className: "relative inline-flex size-11 items-center justify-center rounded-md text-fg-muted hover:bg-bg-subtle hover:text-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "relative size-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: cn("absolute inset-0 size-5 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", theme === "dark" ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: cn("absolute inset-0 size-5 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]", theme === "light" ? "scale-100 opacity-100 blur-none" : "scale-[0.25] opacity-0 blur-[4px]") })]
		})
	});
}
function SiteShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh bg-bg text-fg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", { children }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { getProject as a, profile as c, stats as d, getAdjacentProjects as i, projects as l, additionalWork as n, industries as o, cn as r, processSteps as s, SiteShell as t, skillGroups as u };
