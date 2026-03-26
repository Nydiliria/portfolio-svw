import ProjectCard from '../components/ProjectCard'
import {myProjects} from '../data/projects.js'

export default function Projects() {
    const schoolProjects = myProjects.filter(p => p.type === 'school');
    const personalProjects = myProjects.filter(p => p.type === 'persoonlijk');

    return (
        <div className="max-w-6xl mx-auto py-12 px-4 animate-in fade-in duration-700">
            <header className="mb-16">
                <h1 className="text-5xl font-black mb-4 text-soft-sand tracking-tighter">
                    School & Persoonlijke Projecten
                </h1>
            </header>

            {/* Sectie: School */}
            <section className="mb-20">
                <div className="flex items-center gap-6 mb-10">
                    <h2 className="text-2xl font-bold text-soft-sand italic">School Projecten</h2>
                    <div className="h-[1px] bg-white/10 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {schoolProjects.map(p => (
                        <ProjectCard
                            key={p.id}
                            {...p}
                            image={p.img}           // Expliciet doorgeven van img -> image
                            description={p.desc}    // Expliciet doorgeven van desc -> description
                        />
                    ))}
                </div>
            </section>

            {/* Sectie: Persoonlijk */}
            <section>
                <div className="flex items-center gap-6 mb-10">
                    <h2 className="text-2xl font-bold text-soft-sand italic">Persoonlijke Projecten</h2>
                    <div className="h-[1px] bg-white/10 flex-grow"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {personalProjects.map(p => (
                        <ProjectCard
                            key={p.id}
                            {...p}
                            image={p.img}
                            description={p.desc}
                        />
                    ))}
                </div>
            </section>
        </div>
    )
}