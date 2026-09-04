import { profile } from "../data/content";

const highlights = [
  {
    title: "Conversion-Focused Sites",
    description: "Landing pages, lead systems, and booking flows built for business results.",
  },
  {
    title: "Dashboard & ERP Planning",
    description: "End-to-end product design for complex operational systems.",
  },
  {
    title: "Full Delivery Cycle",
    description: "From research and wireframes through development, testing, and documentation.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
              About
            </h2>
            <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              Solution-oriented web professional
            </h3>
            <p className="mt-6 text-slate-600 dark:text-slate-300 leading-relaxed">
              {profile.about}
            </p>
          </div>

          <div className="space-y-6">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80"
              >
                <h4 className="font-semibold text-slate-900 dark:text-white">
                  {item.title}
                </h4>
                <p className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
