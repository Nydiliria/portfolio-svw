import {Link} from 'react-router-dom';

export default function ProjectCard({id, title, description, image, github, client}) {
    return (
        <Link to={`/projects/${id}`} className="group block h-full">
            <article
                className="bg-white border border-gray-200 rounded-3xl overflow-hidden hover:shadow-xl transition-all h-full flex flex-col relative">

                {/* Conditionele Afbeelding / Placeholder */}
                {image ? (
                    /* Als er een afbeelding is: */
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                ) : (
                    /* Als er GEEN afbeelding is: Toon Placeholder met GitHub Link */
                    <div
                        className="w-full h-48 bg-gray-50 flex flex-col items-center justify-center gap-4 border-b border-gray-100 group-hover:bg-gray-100 transition-colors">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                            alt="GitHub"
                            className="w-16 h-16 opacity-30 group-hover:opacity-50 transition-opacity"
                        />
                        {github && (
                            <a
                                href={github}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()} // Voorkom dat de detailpagina opent
                                className="text-xs font-semibold text-indigo-600 hover:underline"
                            >
                                Bekijk op GitHub →
                            </a>
                        )}
                    </div>
                )}

                <div className="p-5 flex flex-col flex-grow">
                    <header className="mb-2">
                        <span
                            className="text-[10px] font-black text-indigo-600 uppercase tracking-widest">{client}</span>
                        <h3 className="font-bold text-xl text-gray-900">{title}</h3>
                    </header>
                    <p className="text-gray-500 text-sm line-clamp-2 flex-grow">{description}</p>
                </div>
            </article>
        </Link>
    );
}