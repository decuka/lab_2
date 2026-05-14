export default function Header({ theme, toggleTheme }) {
    return (
        <header className="bg-slate-950 px-10 py-12 text-white md:col-span-2">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="mb-2 text-4xl font-bold tracking-wide md:text-5xl">
                        Bohdan Mankovskyi
                    </h1>
                    <p className="text-xl text-slate-300">
                        Cybersecurity Student
                    </p>
                </div>

                <button
                    type="button"
                    onClick={toggleTheme}
                    className="rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                >
                    {theme === 'light' ? 'Night Theme' : 'Day Theme'}
                </button>
            </div>
        </header>
    );
}