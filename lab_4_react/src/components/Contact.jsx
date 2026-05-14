export default function Contact() {
    return (
        <section className="flex flex-col border-b border-dashed border-slate-300 bg-slate-100 md:col-span-2 md:flex-row dark:border-slate-700 dark:bg-slate-800">
            <a
                href="mailto:bogdan.mankovskyi0@gmail.com"
                className="flex-1 p-4 text-center font-medium text-blue-600 transition hover:bg-slate-200 hover:text-blue-800 dark:text-blue-400 dark:hover:bg-slate-700"
            >
                bogdan.mankovskyi0@gmail.com
            </a>

            <a
                href="tel:+380678448794"
                className="flex-1 border-t border-dashed border-slate-300 p-4 text-center font-medium text-blue-600 transition hover:bg-slate-200 hover:text-blue-800 md:border-t-0 md:border-l dark:border-slate-700 dark:text-blue-400 dark:hover:bg-slate-700"
            >
                +380 67 844 8794
            </a>

            <p className="flex-1 border-t border-dashed border-slate-300 p-4 text-center font-medium text-slate-700 md:border-t-0 md:border-l dark:border-slate-700 dark:text-slate-300">
                Lviv, Ukraine
            </p>

            <a
                href="https://www.linkedin.com/in/bohdan-mankovskyi-92803b1b8/"
                className="flex-1 border-t border-dashed border-slate-300 p-4 text-center font-medium text-blue-600 transition hover:bg-slate-200 hover:text-blue-800 md:border-t-0 md:border-l dark:border-slate-700 dark:text-blue-400 dark:hover:bg-slate-700"
            >
                LinkedIn
            </a>
        </section>
    );
}