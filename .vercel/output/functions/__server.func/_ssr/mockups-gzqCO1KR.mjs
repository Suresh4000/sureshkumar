import { b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as cn } from "./site-shell-VawXc1GZ.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/mockups-gzqCO1KR.js
var import_jsx_runtime = require_jsx_runtime();
function Frame({ title, children, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-[0_20px_50px_-28px_rgba(28,25,21,0.45)]", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 border-b border-border px-3 py-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-border-strong" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-border-strong" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-2 rounded-full bg-border-strong" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "ml-2 truncate font-mono text-[10px] text-fg-subtle",
					children: title
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative min-h-44 bg-bg-subtle",
			children
		})]
	});
}
function GarageMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "garage-erp / operations",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-[72px_1fr] sm:grid-cols-[88px_1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
				className: "space-y-2 border-r border-border bg-inverse p-3 text-[9px] text-inverse-fg/70",
				children: [
					"Jobs",
					"Vehicles",
					"Parts",
					"Billing"
				].map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cn("rounded-sm px-2 py-1.5", i === 0 && "bg-inverse-fg/10 text-inverse-fg"),
					children: item
				}, item))
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "p-3 sm:p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-3 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-medium text-fg",
						children: "Open job cards"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "rounded-sm bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] text-accent",
						children: "12 active"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid gap-2",
					children: [
						[
							"JC-1042",
							"Honda Civic",
							"Brake service",
							"In bay"
						],
						[
							"JC-1041",
							"Toyota Innova",
							"Oil + filter",
							"Waiting"
						],
						[
							"JC-1039",
							"Hyundai Creta",
							"AC diagnosis",
							"Parts"
						]
					].map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-4 gap-2 rounded-md border border-border bg-bg-elevated px-2 py-2 text-[10px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono text-fg-muted",
								children: row[0]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-fg",
								children: row[1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "truncate text-fg-muted",
								children: row[2]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-right text-olive",
								children: row[3]
							})
						]
					}, row[0]))
				})]
			})]
		})
	});
}
function ConsultingMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "consulting / home",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid min-h-48 sm:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col justify-end bg-inverse p-5 text-inverse-fg",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-[10px] uppercase tracking-[0.18em] text-inverse-fg/50",
						children: "Advisory"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 font-display text-xl leading-tight",
						children: [
							"Quiet strategy",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"for operators."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-7 w-24 rounded-sm bg-inverse-fg/90" })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden space-y-3 bg-bg-elevated p-5 sm:block",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-24 rounded-sm bg-border" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-full rounded-sm bg-border/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-2 w-5/6 rounded-sm bg-border/80" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-6 grid grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] text-fg-subtle",
								children: "Next"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-fg",
								children: "45-min intake"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-md border border-border p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-mono text-[10px] text-fg-subtle",
								children: "Leads"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-fg",
								children: "Pipeline live"
							})]
						})]
					})
				]
			})]
		})
	});
}
function TravelMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "ops / itineraries",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "p-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-baseline justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-medium text-fg",
					children: "Kerala circuit · 7 days"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] text-fg-subtle",
					children: "Docs 4/4"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative space-y-3 pl-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute top-1 bottom-1 left-[7px] w-px bg-border" }), [
					"Cochin arrival",
					"Munnar stay",
					"Alleppey houseboat",
					"Kovalam close"
				].map((stop, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("absolute -left-4 size-2 rounded-full border border-border bg-bg-elevated", i === 1 && "bg-olive") }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 rounded-md border border-border bg-bg-elevated px-3 py-2 text-[11px] text-fg",
						children: [
							"Day ",
							i + 1,
							" · ",
							stop
						]
					})]
				}, stop))]
			})]
		})
	});
}
function CorporateMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "enterprise / services",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "bg-bg-elevated p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.16em] text-fg-subtle",
					children: "Capabilities"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 font-display text-lg text-fg",
					children: "Platforms that last."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid grid-cols-3 gap-2",
					children: [
						"Cloud",
						"Security",
						"Data"
					].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "rounded-md border border-border bg-bg px-2 py-3 text-center text-[11px] text-fg",
						children: s
					}, s))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mt-4 h-16 rounded-md bg-bg-subtle" })
			]
		})
	});
}
function FitnessMock() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Frame, {
		title: "studio / membership",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative min-h-48 bg-inverse p-5 text-inverse-fg",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[10px] uppercase tracking-[0.2em] text-inverse-fg/50",
					children: "Membership"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 max-w-[12ch] font-display text-2xl leading-none",
					children: "Train with intent."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-28 rounded-sm bg-rust" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-8 w-20 rounded-sm border border-inverse-fg/20" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-4 bottom-4 hidden h-20 w-20 rounded-full border border-inverse-fg/20 sm:block" })
			]
		})
	});
}
function ProjectMock({ id }) {
	switch (id) {
		case "garage-management": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GarageMock, {});
		case "executive-consulting": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConsultingMock, {});
		case "travel-dashboard": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TravelMock, {});
		case "corporate-tech": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CorporateMock, {});
		case "fitness-landing": return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FitnessMock, {});
		default: return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GarageMock, {});
	}
}
//#endregion
export { ProjectMock as t };
