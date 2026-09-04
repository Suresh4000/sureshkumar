import { Link } from "@tanstack/react-router";
import { profile } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-fg-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex flex-wrap gap-5 text-sm text-fg-muted">
          <Link to="/" className="hover:text-fg">
            Home
          </Link>
          <a href="/#work" className="hover:text-fg">
            Work
          </a>
          <a href="/sureshkumar-resume.pdf" download className="hover:text-fg">
            Resume
          </a>
          <a href={`mailto:${profile.email}`} className="hover:text-fg">
            {profile.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
