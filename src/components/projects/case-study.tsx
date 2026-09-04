import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { ProjectMock } from "@/components/projects/mockups";
import { getAdjacentProjects, type Project } from "@/data/content";

export function CaseStudy({ project }: { project: Project }) {
  const { prev, next } = getAdjacentProjects(project.id);

  return (
    <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <a
        href="/#work"
        className="inline-flex min-h-11 items-center gap-2 text-sm text-fg-muted hover:text-fg"
      >
        <ArrowLeft className="size-4" />
        All work
      </a>

      <header className="mt-6 grid gap-8 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="text-xs tracking-wide text-fg-subtle uppercase">
            {project.type} · {project.year}
          </p>
          <h1 className="mt-2 font-display text-4xl text-fg sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-fg-muted">{project.role}</p>
        </div>
        <ProjectMock id={project.id} />
      </header>

      <p className="mt-10 max-w-2xl text-lg text-fg-muted">{project.overview}</p>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        <section>
          <h2 className="font-display text-xl text-fg">Challenge</h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            {project.challenge}
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-fg">Approach</h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            {project.approach}
          </p>
        </section>
        <section>
          <h2 className="font-display text-xl text-fg">Outcome</h2>
          <p className="mt-3 text-sm leading-relaxed text-fg-muted">
            {project.outcome}
          </p>
        </section>
      </div>

      <section className="mt-12">
        <h2 className="font-display text-xl text-fg">Contributions</h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {project.bullets.map((item) => (
            <li
              key={item}
              className="rounded-md border border-border bg-bg-elevated px-4 py-3 text-sm text-fg"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {project.modules ? (
        <section className="mt-12">
          <h2 className="font-display text-xl text-fg">Modules</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.modules.map((mod) => (
              <span
                key={mod}
                className="rounded-full border border-border bg-bg-elevated px-3 py-1.5 text-sm text-fg-muted"
              >
                {mod}
              </span>
            ))}
          </div>
        </section>
      ) : null}

      {project.deliverables ? (
        <section className="mt-12">
          <h2 className="font-display text-xl text-fg">Deliverables</h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {project.deliverables.map((item) => (
              <li key={item} className="text-sm text-fg-muted">
                {item}
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className="mt-8 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-bg-subtle px-3 py-1 text-xs text-fg"
          >
            {skill}
          </span>
        ))}
      </div>

      <nav className="mt-16 grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
        <Link
          to="/projects/$slug"
          params={{ slug: prev.id }}
          className="rounded-lg border border-border bg-bg-elevated p-4 transition-colors duration-150 hover:bg-bg-subtle"
        >
          <p className="inline-flex items-center gap-1 text-xs text-fg-subtle">
            <ArrowLeft className="size-3" /> Previous
          </p>
          <p className="mt-1 font-medium text-fg">{prev.title}</p>
        </Link>
        <Link
          to="/projects/$slug"
          params={{ slug: next.id }}
          className="rounded-lg border border-border bg-bg-elevated p-4 text-right transition-colors duration-150 hover:bg-bg-subtle"
        >
          <p className="inline-flex items-center justify-end gap-1 text-xs text-fg-subtle">
            Next <ArrowRight className="size-3" />
          </p>
          <p className="mt-1 font-medium text-fg">{next.title}</p>
        </Link>
      </nav>
    </article>
  );
}
