export default function Experience() {
    return (
        <section className="bg-white px-10 py-8 md:col-start-2 md:row-start-4 md:row-end-8 dark:bg-slate-900">
            <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
                Experience
            </h2>

            <ol className="list-decimal space-y-6 pl-6 marker:font-bold marker:text-blue-600">
                <li className="rounded-xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        Cybersecurity Internship Program at SoftServe
                    </h3>
                    <span className="mt-1 mb-3 block text-sm font-medium text-slate-500 dark:text-slate-400">
                        June 2025 - August 2025
                    </span>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                        Improved practical cybersecurity skills through security tasks,
                        vulnerability analysis, and team-based projects.
                    </p>
                </li>

                <li className="rounded-xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        Commercial Red Team Experience
                    </h3>
                    <span className="mt-1 mb-3 block text-sm font-medium text-slate-500 dark:text-slate-400">
                        September 2025 - December 2025
                    </span>
                    <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                        Worked with enterprise infrastructure, Active Directory,
                        network mapping, service enumeration, and web application
                        security testing.
                    </p>
                </li>

                <li className="rounded-xl border border-slate-200 p-5 shadow-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                        CTF and Security Competitions
                    </h3>
                    <p className="mt-2 leading-relaxed text-slate-600 dark:text-slate-300">
                        Participated in HackTheBox, TryHackMe, and offline CTF events,
                        achieving prize-winning positions in several challenges.
                    </p>
                </li>
            </ol>
        </section>
    );
}