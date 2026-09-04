import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { profile } from "@/data/content";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.email("Enter a valid email"),
  projectType: z.string().min(2, "Tell me the kind of project"),
  message: z.string().min(12, "A little more detail helps"),
});

type Values = z.infer<typeof schema>;
const STORAGE_KEY = "sk-inquiries";

export function ContactForm() {
  const form = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", projectType: "", message: "" },
  });

  function onSubmit(values: Values) {
    const existing = JSON.parse(
      window.localStorage.getItem(STORAGE_KEY) ?? "[]",
    ) as Values[];
    existing.push({ ...values });
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(existing));
    form.reset();
    toast.success("Message saved", {
      description: `A copy is also ready at ${profile.email}`,
    });
    const subject = encodeURIComponent(`Project inquiry: ${values.projectType}`);
    const body = encodeURIComponent(
      `${values.message}\n\n— ${values.name}\n${values.email}`,
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="rounded-xl border border-border bg-bg-elevated p-5 sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Name" error={form.formState.errors.name?.message}>
          <Input autoComplete="name" {...form.register("name")} />
        </Field>
        <Field label="Email" error={form.formState.errors.email?.message}>
          <Input type="email" autoComplete="email" {...form.register("email")} />
        </Field>
      </div>
      <Field
        className="mt-4"
        label="Project type"
        error={form.formState.errors.projectType?.message}
      >
        <Input
          placeholder="Dashboard, website, landing page…"
          {...form.register("projectType")}
        />
      </Field>
      <Field
        className="mt-4"
        label="Message"
        error={form.formState.errors.message?.message}
      >
        <Textarea {...form.register("message")} />
      </Field>
      <Button type="submit" className="mt-5 w-full sm:w-auto" disabled={form.formState.isSubmitting}>
        Send message
      </Button>
    </form>
  );
}

function Field({
  label,
  error,
  children,
  className,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label className="mb-1.5 block">{label}</Label>
      {children}
      {error ? <p className="mt-1 text-xs text-danger">{error}</p> : null}
    </div>
  );
}
