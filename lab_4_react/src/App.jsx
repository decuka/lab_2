import { useEffect, useState } from 'react';

import Header from './components/Header';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Language from './components/Language';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

export default function App() {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const currentHour = new Date().getHours();

        if (currentHour >= 7 && currentHour < 21) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    }, []);

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) => {
            return currentTheme === 'light' ? 'dark' : 'light';
        });
    };

    return (
        <div className="min-h-screen bg-slate-200 px-4 py-10 font-sans text-slate-800 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-200">
            <div className="mx-auto grid max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl transition-colors duration-300 md:grid-cols-[35%_65%] dark:bg-slate-900 dark:text-slate-200">
                <Header theme={theme} toggleTheme={toggleTheme} />

                <main className="contents">
                    <Objective />
                    <Experience />
                </main>

                <aside className="contents">
                    <Contact />
                    <AboutMe />
                    <Education />
                    <Skills />
                    <Language />
                </aside>

                <Reviews />
                <Footer />
                <ContactForm />
            </div>
        </div>
    );
}