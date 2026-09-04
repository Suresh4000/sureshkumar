import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">
            Contact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Let’s build something strategic
          </h3>
          <p className="mt-4 text-slate-600 dark:text-slate-400">
            Open to web application projects, dashboard systems, business websites, and product design collaborations.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:hello@sureshkumar.dev"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              <Mail size={18} />
              Get in Touch
            </a>
          </div>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href="#"
              className="p-3 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="#"
              className="p-3 rounded-lg text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
