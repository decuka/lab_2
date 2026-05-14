import Header from './components/Header';
import Objective from './components/Objective';
import Experience from './components/Experience';
import Contact from './components/Contact';
import AboutMe from './components/AboutMe';
import Education from './components/Education';
import Skills from './components/Skills';
import Language from './components/Language';

export default function App() {
    return (
        <div>
            <Header />

            <main>
                <Objective />
                <Experience />
            </main>

            <aside>
                <Contact />
                <AboutMe />
                <Education />
                <Skills />
                <Language />
            </aside>
        </div>
    );
}