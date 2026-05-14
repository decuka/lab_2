export default function AboutMe() {
    return (
        <section className="border-b border-dashed border-slate-300 bg-white px-8 py-6 md:col-start-1 md:row-start-4 md:border-r dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-3 text-xl font-bold text-slate-900 dark:text-white">
                About Me
            </h2>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                I am a third-year Cybersecurity student interested in web security,
                forensic analysis, Red Team activities, and secure backend development.
            </p>
        </section>
    );
}