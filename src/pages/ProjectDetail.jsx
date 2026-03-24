import {useParams, Link} from 'react-router-dom';
import {myProjects} from '../data/projects.js';

export default function ProjectDetail() {
    const {id} = useParams();
    const project = myProjects.find(p => p.id === parseInt(id));

    if (!project) return <div className="text-center py-20">Project niet gevonden.</div>;

    return (
        <article className="max-w-4xl mx-auto py-10 animate-in fade-in duration-500">
            <Link to="/projects" className="text-indigo-600 font-medium mb-8 inline-block hover:underline">
                ← Terug naar overzicht
            </Link>

            <img src={project.img} alt={project.title}
                 className="w-full h-[400px] object-cover rounded-[3rem] shadow-2xl mb-10"/>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2">
                    <h1 className="text-5xl font-black mb-6 tracking-tighter">{project.title}</h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">{project.longDesc}</p>
                </div>

                <div className="space-y-8">
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Opdrachtgever</h3>
                        <p className="text-lg font-semibold">{project.client}</p>
                    </div>
                    <div>
                        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">Type</h3>
                        <p className="text-lg font-semibold capitalize">{project.type}</p>
                    </div>
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer"
                           className="block w-full text-center bg-black text-white py-4 rounded-2xl font-bold hover:bg-gray-800 transition-all">
                            Bekijk Source Code
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}