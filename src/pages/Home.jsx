import {myProjects} from '../data/projects.js';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
    const featuredProjects = myProjects.slice(0, 2);

    return (
        <main className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto">

            {/* 1. Profile Image */}
            <figure
                className="md:col-span-1 md:row-span-2 overflow-hidden rounded-[2rem] shadow-sm border border-gray-100 bg-white">
                <img
                    src="/profileimg.jpg"
                    alt="Portretfoto van Sander"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </figure>

            {/* 2. Intro/Bio */}
            <section
                className="md:col-span-3 bg-indigo-600 rounded-[2rem] p-10 text-white flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4 italic">Hoi, ik ben Sander!</h1>
                <p className="text-xl opacity-90 leading-relaxed font-light">
                    Ik ben een gedreven developer in opleiding. Ik hou van het bouwen van
                    gebruiksvriendelijke applicaties en het oplossen van complexe puzzels met code.
                </p>
            </section>

            {/* 3. Skillset */}
            <section className="md:col-span-1 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold mb-4 text-indigo-600">Mijn Skills</h2>
                <ul className="space-y-2 text-gray-600 font-medium">
                    <li>⚡ React & Vite</li>
                    <li>🎨 Tailwind CSS</li>
                    <li>📦 Git & GitHub</li>
                </ul>
            </section>

            {/* 4. Programmeertalen */}
            <section className="md:col-span-2 bg-gray-900 rounded-[2rem] p-8 text-white">
                <h2 className="text-lg font-bold mb-4 text-emerald-400">Talen</h2>
                <div className="flex flex-wrap gap-3">
                    {['JavaScript', 'PHP', 'HTML5', 'CSS3', 'SQL'].map(lang => (
                        <span key={lang} className="px-3 py-1 bg-gray-800 rounded-lg text-sm border border-gray-700">
                            {lang}
                        </span>
                    ))}
                </div>
            </section>

            {/* 5. CONTACT CARD */}
            <aside
                className="md:col-span-1 md:row-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100 flex flex-col">
                <h2 className="text-xl font-bold mb-4">Contact ✉️</h2>
                <p className="text-sm text-gray-500 mb-6">Laten we samenwerken aan je volgende project.</p>
                <div className="flex flex-col gap-4">
                    <a href="mailto:jouw@email.com"
                       className="p-3 bg-gray-50 rounded-xl hover:bg-indigo-50 transition-colors font-medium text-indigo-600 text-center">
                        Email mij
                    </a>
                    <a href="#"
                       className="p-3 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors font-medium text-blue-600 text-center">
                        LinkedIn
                    </a>
                </div>
            </aside>

            {/* 6. Projecten */}
            {featuredProjects.map((project) => (
                <section key={project.id} className="md:col-span-1">
                    <h2 className="text-[10px] tracking-widest font-black text-gray-400 mb-2 ml-4 uppercase">
                        Project
                    </h2>
                    <ProjectCard
                        title={project.title}
                        description={project.desc}
                        image={project.img}
                    />
                </section>
            ))}
        </main>
    );
}