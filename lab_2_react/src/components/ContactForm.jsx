import { useEffect, useState } from 'react';

export default function ContactForm() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 60000);

        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) {
        return null;
    }

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setIsOpen(false)}
        >
            <div
                className="relative w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-slate-900"
                onClick={(event) => event.stopPropagation()}
            >
                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="absolute right-4 top-3 text-3xl font-bold text-slate-500 hover:text-slate-900 dark:hover:text-white"
                >
                    &times;
                </button>

                <h2 className="mb-6 text-center text-2xl font-bold text-slate-900 dark:text-white">
                    Contact Form
                </h2>

                <form
                    action="https://formspree.io/f/mlgzynzj"
                    method="POST"
                    className="flex flex-col gap-4"
                >
                    <div>
                        <label
                            htmlFor="name"
                            className="mb-1 block font-semibold text-slate-700 dark:text-slate-200"
                        >
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="email"
                            className="mb-1 block font-semibold text-slate-700 dark:text-slate-200"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="phone"
                            className="mb-1 block font-semibold text-slate-700 dark:text-slate-200"
                        >
                            Phone
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="message"
                            className="mb-1 block font-semibold text-slate-700 dark:text-slate-200"
                        >
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="w-full rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-600 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="rounded-lg bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}