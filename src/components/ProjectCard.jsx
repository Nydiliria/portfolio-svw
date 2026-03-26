import {Link} from 'react-router-dom';

export default function ProjectCard({id, title, description, image, client}) {
    return (
        <Link to={`/projects/${id}`} className="group block h-full">
            <article
                className="bg-slate-muted border border-white/10 rounded-3xl overflow-hidden hover:bg-slate-muted/80 hover:border-vibrant-green/50 transition-all duration-300 h-full flex flex-col shadow-lg">
                <div className="h-48 overflow-hidden">
                    {image ? (
                        <img src={image} alt={title}
                             className="w-full h-full object-cover group-hover:scale-105 transition-transform"/>
                    ) : (
                        <div className="w-full h-full bg-deep-blue/40 flex items-center justify-center">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                                 className="w-10 h-10 invert opacity-20" alt="GitHub"/>
                        </div>
                    )}
                </div>
                <div className="p-6">
                    <span
                        className="text-[10px] font-black text-burnt-orange uppercase tracking-widest">{client || 'Eigen Project'}</span>
                    <h3 className="font-bold text-xl text-white mb-2">{title}</h3>
                    <p className="text-soft-sand/70 text-sm line-clamp-2">{description}</p>
                </div>
            </article>
        </Link>
    );
}