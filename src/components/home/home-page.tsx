import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ContactForm } from "@/components/home/contact-form";
import { ProjectMock } from "@/components/projects/mockups";
import {
  additionalWork,
  industries,
  processSteps,
  profile,
  projects,
  skillGroups,
  stats,
} from "@/data/content";
import { cn } from "@/lib/cn";

const accentText: Record<string, string> = {
  ink: "text-fg",
  slate: "text-accent",
  stone: "text-stone",
  olive: "text-olive",
  rust: "text-rust",
};

export function HomePage() {
  return (
    <>
      <Hero />
      <Work />
      <Process />
      <About />
      <Contact />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="paper-grid pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div>
            <div className="hero-line text-sm font-medium tracking-wide text-fg-muted uppercase">
              {profile.role}
            </div>
            <h1 className="hero-line mt-4 max-w-3xl font-display text-4xl tracking-tight text-fg sm:text-6xl">
              {profile.name}
            </h1>
            <p className="hero-line mt-6 max-w-xl text-lg text-fg-muted">
              {profile.tagline}
            </p>
            <div className="hero-line mt-8 flex flex-wrap gap-3">
              <a
                href="#work"
                className="inline-flex min-h-11 items-center gap-2 rounded-md bg-accent px-5 text-sm font-medium text-accent-fg transition-transform duration-150 active:scale-[0.96]"
              >
                View work
                <ArrowRight className="size-4" />
              </a>
              <a
                href="/sureshkumar-resume.pdf"
                download
                className="inline-flex min-h-11 items-center rounded-md border border-border bg-bg-elevated px-5 text-sm font-medium text-fg transition-colors duration-150 hover:bg-bg-subtle"
              >
                Download resume
              </a>
            </div>
          </div>
          <div className="hero-line mx-auto w-full max-w-sm lg:max-w-none">
            <div className="overflow-hidden">
              <img
                src="/sureshkumar.png"
                alt="Portrait of Sureshkumar"
                width={500}
                height={500}
                className="h-[350px] w-[350px] rounded-full object-cover object-[center_18%] mx-auto"
              />
            </div>
          </div>
        </div>
        <dl className="mt-14 grid grid-cols-2 gap-6 border-t border-border pt-8 sm:grid-cols-3 lg:grid-cols-6">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="text-xs tracking-wide text-fg-subtle uppercase">
                {stat.label}
              </dt>
              <dd className="mt-1 font-display text-3xl text-fg">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="border-t border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium tracking-wide text-fg-muted uppercase">
              Selected work
            </p>
            <h2 className="mt-2 font-display text-3xl text-fg sm:text-4xl">
              Projects with a business job to do.
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-8">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              to="/projects/$slug"
              params={{ slug: project.id }}
              className="group grid gap-6 rounded-xl border border-border bg-bg p-4 transition-[border-color,transform] duration-200 hover:border-border-strong sm:p-6 lg:grid-cols-2 lg:p-8"
            >
              <div className={cn(index % 2 === 1 && "lg:order-2")}>
                <ProjectMock id={project.id} />
              </div>
              <div className={cn("flex flex-col justify-center", index % 2 === 1 && "lg:order-1")}>
                <p className="text-xs tracking-wide text-fg-subtle uppercase">
                  {project.type} · {project.year}
                </p>
                <h3
                  className={cn(
                    "mt-2 font-display text-2xl sm:text-3xl",
                    accentText[project.accent],
                  )}
                >
                  {project.title}
                </h3>
                <p className="mt-3 max-w-prose text-sm text-fg-muted sm:text-base">
                  {project.overview}
                </p>
                <ul className="mt-4 space-y-1.5 text-sm text-fg-muted">
                  {project.bullets.slice(0, 4).map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-border-strong" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border px-2.5 py-1 text-xs text-fg-muted"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-fg">
                  Read case study
                  <ArrowUpRight className="size-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <h3 className="font-display text-xl text-fg">Also</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {additionalWork.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-border bg-bg p-4"
              >
                <p className="font-medium text-fg">{item.title}</p>
                <p className="mt-1 text-sm text-fg-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-medium tracking-wide text-fg-muted uppercase">
          Process
        </p>
        <h2 className="mt-2 max-w-xl font-display text-3xl text-fg sm:text-4xl">
          From discovery to documentation.
        </h2>
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step) => (
            <li
              key={step.number}
              className="rounded-lg border border-border bg-bg-elevated p-5"
            >
              <span className="font-mono text-xs text-fg-subtle">{step.number}</span>
              <h3 className="mt-2 font-medium text-fg">{step.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="border-t border-border bg-inverse text-inverse-fg">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-medium tracking-wide text-inverse-fg/50 uppercase">
            About
          </p>
          <h2 className="mt-2 font-display text-3xl sm:text-4xl">
            Product thinking with a builder’s hands.
          </h2>
          <p className="mt-5 max-w-prose text-inverse-fg/75">{profile.about}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="rounded-full border border-inverse-fg/15 px-3 py-1.5 text-xs text-inverse-fg/80"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
        <div className="grid gap-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-lg border border-inverse-fg/12 bg-inverse-fg/5 p-4"
            >
              <p className="text-xs tracking-wide text-inverse-fg/50 uppercase">
                {group.title}
              </p>
              <p className="mt-2 text-sm text-inverse-fg/90">
                {group.items.join(" · ")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2">
        <div>
          <p className="text-sm font-medium tracking-wide text-fg-muted uppercase">
            Contact
          </p>
          <h2 className="mt-2 font-display text-3xl text-fg sm:text-4xl">
            Let’s build something strategic.
          </h2>
          <p className="mt-4 max-w-prose text-fg-muted">
            Open to web applications, dashboard systems, business websites, and
            product design collaborations. Messages stay on this device for the
            demo — or write directly.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-6 inline-flex min-h-11 items-center text-sm font-medium text-fg underline-offset-4 hover:underline"
          >
            {profile.email}
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}