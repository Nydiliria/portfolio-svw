import ProjectCard from '../components/ProjectCard'
import {myProjects} from '../data/projects.js'

export default function Projects() {
    return (
        <div className="animate-in fade-in duration-700">
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Mijn Projecten</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {myProjects.map(p => (
                    <ProjectCard
                        key={p.id}
                        title={p.title}
                        description={p.desc}
                        image={p.img}
                    />
                ))}
            </div>
        </div>
    )
}