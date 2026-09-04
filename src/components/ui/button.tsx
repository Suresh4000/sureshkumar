import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
  staticTap?: boolean;
};

export function Button({
  className,
  variant = "primary",
  staticTap,
  ...props
}: Props) {
  return (
    <button
      className={cn(
        "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 text-sm font-medium transition-[transform,background-color,color,border-color] duration-150 ease-out",
        !staticTap && "active:not-disabled:scale-[0.96]",
        variant === "primary" &&
          "bg-accent text-accent-fg hover:opacity-90 disabled:opacity-50",
        variant === "secondary" &&
          "border border-border bg-bg-elevated text-fg hover:bg-bg-subtle",
        variant === "ghost" && "text-fg-muted hover:bg-bg-subtle hover:text-fg",
        className,
      )}
      {...props}
    />
  );
}
