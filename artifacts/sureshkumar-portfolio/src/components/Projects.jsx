import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Featured Projects
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Selected work across industries
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            From ERP system planning to conversion-focused landing pages — a selection of complete projects.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={`group relative p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300 ${
                index === 0 || index === 1 ? "md:col-span-1" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-block px-2.5 py-1 text-xs font-medium rounded-md bg-blue-50 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 mb-3">
                    {project.type}
                  </span>
                  <h4 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h4>
                </div>
                <div className="shrink-0 p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} className="text-slate-500" />
                </div>
              </div>

              <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {project.overview}
              </p>

              {/* Key points */}
              <ul className="mt-4 space-y-1.5">
                {(project.contributions || project.modules || project.work || project.features || project.highlights || [])
                  .slice(0, 4)
                  .map((item) => (
                    <li
                      key={item}
                      className="text-sm text-slate-500 dark:text-slate-400 flex items-start gap-2"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-slate-400 shrink-0" />
                      {item}
                    </li>
                  ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 text-xs rounded-md bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
