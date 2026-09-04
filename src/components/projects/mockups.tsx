import { cn } from "@/lib/cn";

function Frame({
  title,
  children,
  className,
}: {
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-border bg-bg-elevated shadow-[0_20px_50px_-28px_rgba(28,25,21,0.45)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border px-3 py-2">
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="size-2 rounded-full bg-border-strong" />
        <span className="ml-2 truncate font-mono text-[10px] text-fg-subtle">
          {title}
        </span>
      </div>
      <div className="relative min-h-44 bg-bg-subtle">{children}</div>
    </div>
  );
}

export function GarageMock() {
  return (
    <Frame title="garage-erp / operations">
      <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[88px_1fr]">
        <aside className="space-y-2 border-r border-border bg-inverse p-3 text-[9px] text-inverse-fg/70">
          {["Jobs", "Vehicles", "Parts", "Billing"].map((item, i) => (
            <div
              key={item}
              className={cn(
                "rounded-sm px-2 py-1.5",
                i === 0 && "bg-inverse-fg/10 text-inverse-fg",
              )}
            >
              {item}
            </div>
          ))}
        </aside>
        <div className="p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-fg">Open job cards</p>
            <span className="rounded-sm bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] text-accent">
              12 active
            </span>
          </div>
          <div className="grid gap-2">
            {[
              ["JC-1042", "Honda Civic", "Brake service", "In bay"],
              ["JC-1041", "Toyota Innova", "Oil + filter", "Waiting"],
              ["JC-1039", "Hyundai Creta", "AC diagnosis", "Parts"],
            ].map((row) => (
              <div
                key={row[0]}
                className="grid grid-cols-4 gap-2 rounded-md border border-border bg-bg-elevated px-2 py-2 text-[10px]"
              >
                <span className="font-mono text-fg-muted">{row[0]}</span>
                <span className="truncate text-fg">{row[1]}</span>
                <span className="truncate text-fg-muted">{row[2]}</span>
                <span className="text-right text-olive">{row[3]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function ConsultingMock() {
  return (
    <Frame title="consulting / home">
      <div className="grid min-h-48 sm:grid-cols-2">
        <div className="flex flex-col justify-end bg-inverse p-5 text-inverse-fg">
          <p className="text-[10px] uppercase tracking-[0.18em] text-inverse-fg/50">
            Advisory
          </p>
          <p className="mt-2 font-display text-xl leading-tight">
            Quiet strategy
            <br />
            for operators.
          </p>
          <div className="mt-4 h-7 w-24 rounded-sm bg-inverse-fg/90" />
        </div>
        <div className="hidden space-y-3 bg-bg-elevated p-5 sm:block">
          <div className="h-2 w-24 rounded-sm bg-border" />
          <div className="h-2 w-full rounded-sm bg-border/80" />
          <div className="h-2 w-5/6 rounded-sm bg-border/80" />
          <div className="mt-6 grid grid-cols-2 gap-2">
            <div className="rounded-md border border-border p-3">
              <p className="font-mono text-[10px] text-fg-subtle">Next</p>
              <p className="mt-1 text-xs text-fg">45-min intake</p>
            </div>
            <div className="rounded-md border border-border p-3">
              <p className="font-mono text-[10px] text-fg-subtle">Leads</p>
              <p className="mt-1 text-xs text-fg">Pipeline live</p>
            </div>
          </div>
        </div>
      </div>
    </Frame>
  );
}

export function TravelMock() {
  return (
    <Frame title="ops / itineraries">
      <div className="p-4">
        <div className="mb-3 flex items-baseline justify-between">
          <p className="text-xs font-medium text-fg">Kerala circuit · 7 days</p>
          <span className="text-[10px] text-fg-subtle">Docs 4/4</span>
        </div>
        <div className="relative space-y-3 pl-4">
          <span className="absolute top-1 bottom-1 left-[7px] w-px bg-border" />
          {["Cochin arrival", "Munnar stay", "Alleppey houseboat", "Kovalam close"].map(
            (stop, i) => (
              <div key={stop} className="relative flex items-center gap-3">
                <span
                  className={cn(
                    "absolute -left-4 size-2 rounded-full border border-border bg-bg-elevated",
                    i === 1 && "bg-olive",
                  )}
                />
                <div className="flex-1 rounded-md border border-border bg-bg-elevated px-3 py-2 text-[11px] text-fg">
                  Day {i + 1} · {stop}
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </Frame>
  );
}

export function CorporateMock() {
  return (
    <Frame title="enterprise / services">
      <div className="bg-bg-elevated p-5">
        <p className="text-[10px] uppercase tracking-[0.16em] text-fg-subtle">
          Capabilities
        </p>
        <p className="mt-1 font-display text-lg text-fg">Platforms that last.</p>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {["Cloud", "Security", "Data"].map((s) => (
            <div
              key={s}
              className="rounded-md border border-border bg-bg px-2 py-3 text-center text-[11px] text-fg"
            >
              {s}
            </div>
          ))}
        </div>
        <div className="mt-4 h-16 rounded-md bg-bg-subtle" />
      </div>
    </Frame>
  );
}

export function FitnessMock() {
  return (
    <Frame title="studio / membership">
      <div className="relative min-h-48 bg-inverse p-5 text-inverse-fg">
        <p className="text-[10px] uppercase tracking-[0.2em] text-inverse-fg/50">
          Membership
        </p>
        <p className="mt-2 max-w-[12ch] font-display text-2xl leading-none">
          Train with intent.
        </p>
        <div className="mt-6 flex gap-2">
          <div className="h-8 w-28 rounded-sm bg-rust" />
          <div className="h-8 w-20 rounded-sm border border-inverse-fg/20" />
        </div>
        <div className="absolute right-4 bottom-4 hidden h-20 w-20 rounded-full border border-inverse-fg/20 sm:block" />
      </div>
    </Frame>
  );
}

export function ProjectMock({ id }: { id: string }) {
  switch (id) {
    case "garage-management":
      return <GarageMock />;
    case "executive-consulting":
      return <ConsultingMock />;
    case "travel-dashboard":
      return <TravelMock />;
    case "corporate-tech":
      return <CorporateMock />;
    case "fitness-landing":
      return <FitnessMock />;
    default:
      return <GarageMock />;
  }
}
