import { n as useForm, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { x as require_jsx_runtime, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as ArrowRight, i as ArrowUpRight } from "../_libs/lucide-react.mjs";
import { a as string, i as object, t as email } from "../_libs/zod.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { c as profile, d as stats, l as projects, n as additionalWork, o as industries, r as cn, s as processSteps, t as SiteShell, u as skillGroups } from "./site-shell-D7fGLQpO.mjs";
import { t as ProjectMock } from "./mockups-CXX17e-D.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BgmyS1aQ.js
var import_jsx_runtime = require_jsx_runtime();
function Button({ className, variant = "primary", staticTap, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		className: cn("inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-[transform,background-color,color,border-color] duration-150 ease-out", !staticTap && "active:not-disabled:scale-[0.96]", variant === "primary" && "bg-accent text-accent-fg hover:opacity-90 disabled:opacity-50", variant === "secondary" && "border border-border bg-bg-elevated text-fg hover:bg-bg-subtle", variant === "ghost" && "text-fg-muted hover:bg-bg-subtle hover:text-fg", className),
		...props
	});
}
function Input({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-11 w-full rounded-md border border-border bg-bg-elevated px-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150", "placeholder:text-fg-subtle focus:border-border-strong focus:ring-2 focus:ring-accent/20", className),
		...props
	});
}
function Label({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: cn("text-sm font-medium text-fg", className),
		...props
	});
}
function Textarea({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		className: cn("min-h-32 w-full rounded-lg border border-border bg-bg-elevated px-3 py-2.5 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150", "placeholder:text-fg-subtle focus:border-border-strong focus:ring-2 focus:ring-accent/20", className),
		...props
	});
}
var schema = object({
	name: string().min(2, "Please enter your name"),
	email: email("Enter a valid email"),
	projectType: string().min(2, "Tell me the kind of project"),
	message: string().min(12, "A little more detail helps")
});
var STORAGE_KEY = "sk-inquiries";
function ContactForm() {
	const form = useForm({
		resolver: u(schema),
		defaultValues: {
			name: "",
			email: "",
			projectType: "",
			message: ""
		}
	});
	function onSubmit(values) {
		const existing = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "[]");
		existing.push({ ...values });
		window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
		form.reset();
		toast.success("Message saved", { description: `A copy is also ready at ${profile.email}` });
		const subject = encodeURIComponent(`Project inquiry: ${values.projectType}`);
		const body = encodeURIComponent(`${values.message}\n\n— ${values.name}\n${values.email}`);
		window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		onSubmit: form.handleSubmit(onSubmit),
		className: "rounded-xl border border-border bg-bg-elevated p-5 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Name",
					error: form.formState.errors.name?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						autoComplete: "name",
						...form.register("name")
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
					label: "Email",
					error: form.formState.errors.email?.message,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						type: "email",
						autoComplete: "email",
						...form.register("email")
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				className: "mt-4",
				label: "Project type",
				error: form.formState.errors.projectType?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					placeholder: "Dashboard, website, landing page…",
					...form.register("projectType")
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
				className: "mt-4",
				label: "Message",
				error: form.formState.errors.message?.message,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, { ...form.register("message") })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "submit",
				className: "mt-5 w-full sm:w-auto",
				disabled: form.formState.isSubmitting,
				children: "Send message"
			})
		]
	});
}
function Field({ label, error, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
				className: "mb-1.5 block",
				children: label
			}),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-danger",
				children: error
			}) : null
		]
	});
}
var accentText = {
	ink: "text-fg",
	slate: "text-accent",
	stone: "text-stone",
	olive: "text-olive",
	rust: "text-rust"
};
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Work, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
	] });
}
function Hero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "paper-grid pointer-events-none absolute inset-0 opacity-60" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "hero-line text-sm font-medium tracking-wide text-fg-muted uppercase",
					children: profile.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "hero-line mt-4 max-w-3xl font-display text-4xl tracking-tight text-fg sm:text-6xl",
					children: profile.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "hero-line mt-6 max-w-xl text-lg text-fg-muted",
					children: profile.tagline
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-line mt-8 flex flex-wrap gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#work",
						className: "inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-fg transition-transform duration-150 active:scale-[0.96]",
						children: ["View work", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/sureshkumar-resume.pdf",
						download: true,
						className: "inline-flex min-h-11 items-center rounded-md border border-border bg-bg-elevated px-5 text-sm font-medium text-fg transition-colors duration-150 hover:bg-bg-subtle",
						children: "Download resume"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3 lg:grid-cols-6",
					children: stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
						className: "text-xs tracking-wide text-fg-subtle uppercase",
						children: stat.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
						className: "mt-1 font-display text-3xl text-fg",
						children: stat.value
					})] }, stat.label))
				})
			]
		})]
	});
}
function Work() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "work",
		className: "border-t border-border bg-bg-elevated",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex items-end justify-between gap-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-medium tracking-wide text-fg-muted uppercase",
						children: "Selected work"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "mt-2 font-display text-3xl text-fg sm:text-4xl",
						children: "Projects with a business job to do."
					})] })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-10 grid gap-8",
					children: projects.map((project, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/projects/$slug",
						params: { slug: project.id },
						className: "group grid gap-6 rounded-xl border border-border bg-bg p-4 transition-[border-color,transform] duration-200 hover:border-border-strong sm:p-6 lg:grid-cols-2 lg:p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: cn(index % 2 === 1 && "lg:order-2"),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectMock, { id: project.id })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: cn("flex flex-col justify-center", index % 2 === 1 && "lg:order-1"),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs tracking-wide text-fg-subtle uppercase",
									children: [
										project.type,
										" · ",
										project.year
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: cn("mt-2 font-display text-2xl sm:text-3xl", accentText[project.accent]),
									children: project.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-3 max-w-prose text-sm text-fg-muted sm:text-base",
									children: project.overview
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 space-y-1.5 text-sm text-fg-muted",
									children: project.bullets.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1 shrink-0 rounded-full bg-border-strong" }), item]
									}, item))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-5 flex flex-wrap gap-2",
									children: project.skills.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full border border-border px-2.5 py-1 text-xs text-fg-muted",
										children: skill
									}, skill))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "mt-6 inline-flex items-center gap-1 text-sm font-medium text-fg",
									children: ["Read case study", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, { className: "size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })]
								})
							]
						})]
					}, project.id))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-12",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl text-fg",
						children: "Also"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 grid gap-3 sm:grid-cols-2",
						children: additionalWork.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-bg p-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-medium text-fg",
								children: item.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-sm text-fg-muted",
								children: item.description
							})]
						}, item.title))
					})]
				})
			]
		})
	});
}
function Process() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "process",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium tracking-wide text-fg-muted uppercase",
					children: "Process"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 max-w-xl font-display text-3xl text-fg sm:text-4xl",
					children: "From discovery to documentation."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4",
					children: processSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "rounded-lg border border-border bg-bg-elevated p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-xs text-fg-subtle",
								children: step.number
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-2 font-medium text-fg",
								children: step.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-fg-muted",
								children: step.body
							})
						]
					}, step.number))
				})
			]
		})
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "about",
		className: "border-t border-border bg-inverse text-inverse-fg",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium tracking-wide text-inverse-fg/50 uppercase",
					children: "About"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl sm:text-4xl",
					children: "Product thinking with a builder’s hands."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-prose text-inverse-fg/75",
					children: profile.about
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 flex flex-wrap gap-2",
					children: industries.map((industry) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-full border border-inverse-fg/15 px-3 py-1.5 text-xs text-inverse-fg/80",
						children: industry
					}, industry))
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-3",
				children: skillGroups.map((group) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "rounded-lg border border-inverse-fg/12 bg-inverse-fg/5 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs tracking-wide text-inverse-fg/50 uppercase",
						children: group.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-inverse-fg/90",
						children: group.items.join(" · ")
					})]
				}, group.title))
			})]
		})
	});
}
function Contact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm font-medium tracking-wide text-fg-muted uppercase",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-2 font-display text-3xl text-fg sm:text-4xl",
					children: "Let’s build something strategic."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-prose text-fg-muted",
					children: "Open to web applications, dashboard systems, business websites, and product design collaborations. Messages stay on this device for the demo — or write directly."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${profile.email}`,
					className: "mt-6 inline-flex min-h-11 items-center text-sm font-medium text-fg underline-offset-4 hover:underline",
					children: profile.email
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
		})
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteShell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {}) });
}
//#endregion
export { Home as component };
