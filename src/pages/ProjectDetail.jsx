import {useParams, Link, Navigate} from 'react-router-dom';
import {myProjects} from '../data/projects.js';

export default function ProjectDetail() {
    const {id} = useParams();
    const project = myProjects.find(p => p.id === parseInt(id));

    if (!project) return <Navigate to="/404" replace/>;

    return (
        <article className="max-w-5xl mx-auto py-12 px-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Link to="/projects"
                  className="group flex items-center gap-2 text-vibrant-green font-bold mb-10 hover:text-soft-sand transition-colors">
                <span className="group-hover:-translate-x-1 transition-transform">←</span> Terug naar overzicht
            </Link>

            <header className="relative mb-16">
                <img src={project.img || '/placeholder.png'} alt={project.title}
                     className="w-full h-[300px] md:h-[500px] object-cover rounded-[2rem] md:rounded-[3rem] shadow-2xl border border-white/5"/>
                <div
                    className="absolute top-6 left-6 bg-burnt-orange text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest shadow-lg">
                    {project.type || 'Project'}
                </div>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <div className="lg:col-span-2 space-y-8">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-black mb-6 text-soft-sand tracking-tighter">{project.title}</h1>
                        <p className="text-xl text-white/80 leading-relaxed font-light">{project.longDesc}</p>
                    </div>
                    <div className="pt-8">
                        <h3 className="text-vibrant-green font-bold uppercase tracking-widest text-xs mb-4 text-opacity-80">Gebruikte
                            Technologie</h3>
                        <div className="flex flex-wrap gap-3">
                            {project.tech?.map(t => (
                                <span key={t}
                                      className="px-4 py-2 bg-slate-muted/30 border border-white/10 rounded-xl text-soft-sand text-sm font-medium">{t}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <aside className="space-y-10">
                    <div className="bg-slate-muted/20 p-8 rounded-[2rem] border border-white/5 space-y-8">
                        {project.client && (
                            <div>
                                <h4 className="text-[10px] font-black text-vibrant-green uppercase tracking-widest mb-1">Opdrachtgever</h4>
                                <p className="text-lg text-white font-semibold">{project.client}</p>
                            </div>
                        )}
                        <div>
                            <h4 className="text-[10px] font-black text-vibrant-green uppercase tracking-widest mb-1">Mijn
                                Rol</h4>
                            <p className="text-lg text-white font-semibold">{project.role || 'Developer'}</p>
                        </div>
                        {project.github && (
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                               className="flex items-center justify-center gap-3 w-full bg-soft-sand text-deep-blue py-4 rounded-2xl font-black hover:bg-vibrant-green hover:text-white transition-all shadow-xl">
                                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-5 h-5"
                                     alt="GitHub"/>
                                BEKIJK CODE
                            </a>
                        )}
                    </div>
                </aside>
            </div>
        </article>
    );
}