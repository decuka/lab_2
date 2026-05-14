export default function Skills() {
    const skills = [
        'Web Application Security',
        'OWASP Top 10',
        'Burp Suite',
        'Nikto',
        'Metasploit',
        'Python',
        'Linux Administration',
        'Active Directory',
        'Network Security',
        'Digital Forensics',
        'OSINT',
        'AWS Fundamentals',
        'Teamwork',
        'Critical Thinking',
    ];

    return (
        <section className="border-b border-dashed border-slate-300 bg-white px-8 py-6 md:col-start-1 md:row-start-6 md:border-r dark:border-slate-700 dark:bg-slate-900">
            <h2 className="mb-4 text-xl font-bold text-slate-900 dark:text-white">
                Skills
            </h2>

            <ul className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:scale-105 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </section>
    );
}