import { stats, industries } from "../data/content";

export default function Stats() {
  return (
    <section className="section-padding bg-slate-900 dark:bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="mt-16 pt-12 border-t border-slate-800">
          <p className="text-center text-sm font-medium text-slate-400 uppercase tracking-wider mb-6">
            Industries Worked Across
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-4 py-2 text-sm rounded-full border border-slate-700 text-slate-300 bg-slate-800/50"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
