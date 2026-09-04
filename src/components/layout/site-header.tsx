import { Link } from "@tanstack/react-router";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/cn";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#process", label: "Process" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export function SiteHeader() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          to="/"
          className="font-display text-lg tracking-tight text-fg"
          onClick={() => setOpen(false)}
        >
          Sureshkumar
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm text-fg-muted transition-colors duration-150 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="/sureshkumar-resume.pdf"
            download
            className="ml-2 inline-flex min-h-11 items-center rounded-md border border-border bg-bg-elevated px-4 text-sm font-medium text-fg transition-colors duration-150 hover:bg-bg-subtle"
          >
            Resume
          </a>
          {/* <ThemeButton theme={theme} onToggle={toggle} /> */}
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          {/* <ThemeButton theme={theme} onToggle={toggle} /> */}
          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-md text-fg"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={cn(
                  "block h-px bg-fg transition-transform duration-150",
                  open && "translate-y-[4px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px bg-fg transition-transform duration-150",
                  open && "-translate-y-[4px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-bg md:hidden">
          <div className="flex flex-col px-4 py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex min-h-11 items-center text-sm text-fg"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/sureshkumar-resume.pdf"
              download
              className="flex min-h-11 items-center text-sm font-medium text-fg"
              onClick={() => setOpen(false)}
            >
              Download resume
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}

function ThemeButton({
  theme,
  onToggle,
}: {
  theme: "light" | "dark";
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      className="relative inline-flex size-11 items-center justify-center rounded-md text-fg-muted hover:bg-bg-subtle hover:text-fg"
    >
      <span className="relative size-5">
        <Sun
          className={cn(
            "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
            theme === "dark"
              ? "scale-100 opacity-100 blur-none"
              : "scale-[0.25] opacity-0 blur-[4px]",
          )}
        />
        <Moon
          className={cn(
            "absolute inset-0 size-5 transition-[opacity,transform,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)]",
            theme === "light"
              ? "scale-100 opacity-100 blur-none"
              : "scale-[0.25] opacity-0 blur-[4px]",
          )}
        />
      </span>
    </button>
  );
}
