import { cn } from "@/lib/cn";
import type { InputHTMLAttributes } from "react";

export function Input({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-md border border-border bg-bg-elevated px-3 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150",
        "placeholder:text-fg-subtle focus:border-border-strong focus:ring-2 focus:ring-accent/20",
        className,
      )}
      {...props}
    />
  );
}
