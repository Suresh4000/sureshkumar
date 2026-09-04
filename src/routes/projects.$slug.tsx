import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SiteShell } from "@/components/layout/site-shell";
import { CaseStudy } from "@/components/projects/case-study";
import { getProject } from "@/data/content";

export const Route = createFileRoute("/projects/$slug")({
  component: ProjectPage,
  notFoundComponent: NotFound,
});

function ProjectPage() {
  const { slug } = Route.useParams();
  const project = getProject(slug);
  if (!project) {
    throw notFound();
  }

  return (
    <SiteShell>
      <CaseStudy project={project} />
    </SiteShell>
  );
}

function NotFound() {
  return (
    <SiteShell>
      <div className="mx-auto max-w-6xl px-4 py-24">
        <h1 className="font-display text-3xl text-fg">Project not found</h1>
        <Link to="/" className="mt-4 inline-flex text-sm text-accent">
          Back to work
        </Link>
      </div>
    </SiteShell>
  );
}
