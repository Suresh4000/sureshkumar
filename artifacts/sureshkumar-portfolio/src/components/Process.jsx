import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Design Process
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            How I approach every project
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {processSteps.map((step, i) => (
            <div
              key={step.number}
              className="relative p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/60"
            >
              <span className="text-2xl font-bold text-blue-600/20 dark:text-blue-400/20">
                {step.number}
              </span>
              <h4 className="mt-2 font-semibold text-slate-900 dark:text-white text-sm sm:text-base">
                {step.title}
              </h4>
              {i < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-slate-200 dark:bg-slate-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
