import ProjectCard from '../components/ProjectCard'
import {myProjects} from '../data/projects.js'

export default function Projects() {
    const schoolProjects = myProjects.filter(p => p.type === 'school');
    const personalProjects = myProjects.filter(p => p.type === 'persoonlijk');

    return (
        <div className="max-w-6xl mx-auto py-10 animate-in fade-in duration-700">
            <h1 className="text-4xl font-black mb-12 text-gray-900 tracking-tighter">Mijn Portfolio</h1>

            {/* Sectie: School */}
            <section className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">School Projecten</h2>
                    <div className="h-[1px] bg-gray-200 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {schoolProjects.map(p => (
                        <ProjectCard key={p.id} {...p} image={p.img} description={p.desc}/>
                    ))}
                </div>
            </section>

            {/* Sectie: Persoonlijk */}
            <section>
                <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800">Persoonlijke Projecten</h2>
                    <div className="h-[1px] bg-gray-200 flex-grow"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {personalProjects.map(p => (
                        <ProjectCard key={p.id} {...p} image={p.img} description={p.desc}/>
                    ))}
                </div>
            </section>
        </div>
    )
}