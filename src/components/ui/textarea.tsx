import { cn } from "@/lib/cn";
import type { TextareaHTMLAttributes } from "react";

export function Textarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "min-h-32 w-full rounded-lg border border-border bg-bg-elevated px-3 py-2.5 text-sm text-fg outline-none transition-[border-color,box-shadow] duration-150",
        "placeholder:text-fg-subtle focus:border-border-strong focus:ring-2 focus:ring-accent/20",
        className,
      )}
      {...props}
    />
  );
}
