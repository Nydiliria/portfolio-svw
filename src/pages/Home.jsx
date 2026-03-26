import {myProjects} from '../data/projects.js';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
    const featuredProjects = myProjects.slice(0, 3);

    return (
        /* Toevoeging: items-stretch zorgt dat kaarten even hoog worden */
        <main className="grid grid-cols-1 md:grid-cols-4 gap-6 p-4 max-w-6xl mx-auto items-stretch">

            {/* 1. Profile Image */}
            <figure
                className="md:col-span-1 md:row-span-2 overflow-hidden rounded-[2rem] shadow-sm border border-white/5 bg-slate-muted/20">
                <img src="/profileimg.jpg" alt="Sander"
                     className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"/>
            </figure>

            {/* 2. Intro/Bio */}
            <section
                className="md:col-span-3 bg-slate-muted rounded-[2rem] p-10 text-white shadow-xl border border-white/5">
                <h1 className="text-4xl font-bold mb-4 italic text-soft-sand">Hoi, ik ben Sander!</h1>
                <p className="text-xl text-soft-sand opacity-90 leading-relaxed font-light">
                    Ik studeer Creative Media & Game Technologies aan de hogeschool Rotterdam. Het is voor mij
                    belangrijk dat de dingen die ik maak de wereld om mij heen net een beetje leuker maken.
                </p>
            </section>

            {/* 3. Talen */}
            <section
                className="md:col-span-2 bg-slate-muted rounded-[2rem] p-8 text-white shadow-lg border border-white/5">
                <h2 className="text-lg font-bold mb-4 text-soft-sand uppercase tracking-wider">Talen</h2>
                <div className="flex flex-wrap gap-3 text-soft-sand">
                    {['JavaScript', 'PHP', 'HTML', 'CSS', 'SQL', 'React', 'Git', 'Python', 'Laravel'].map(lang => (
                        <span key={lang}
                              className="px-3 py-1 bg-deep-blue/40 rounded-lg text-sm border border-white/10 hover:border-vibrant-green transition-colors">
                            {lang}
                        </span>
                    ))}
                </div>
            </section>

            {/* 4. CONTACT CARD */}
            <aside
                className="md:col-span-1 md:row-span-2 bg-soft-sand rounded-[2rem] p-8 shadow-sm border border-white/10 flex flex-col h-full">
                <div className="flex flex-col gap-5">
                    <div>
                        <h2 className="text-xl font-bold mb-2 text-deep-blue">Contact ✉️</h2>
                        <p className="text-sm text-deep-blue/60 font-medium leading-relaxed">
                            Laten we samenwerken aan je volgende project.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        <a href="mailto:sander2002@gmail.com"
                           className="p-3 bg-burnt-orange rounded-xl hover:opacity-90 transition-all font-bold text-white text-center shadow-md">
                            Email mij
                        </a>
                        <a href="https://www.linkedin.com/in/sander-van-wijngaarden-042450223/"
                           target="_blank" rel="noopener noreferrer"
                           className="p-3 bg-deep-blue/5 rounded-xl hover:bg-vibrant-green hover:text-white transition-all font-medium text-deep-blue text-center border border-deep-blue/10">
                            LinkedIn
                        </a>
                        <a href="https://github.com/Nydiliria"
                           target="_blank" rel="noopener noreferrer"
                           className="p-3 bg-deep-blue/5 rounded-xl hover:bg-vibrant-green hover:text-white transition-all font-medium text-deep-blue text-center border border-deep-blue/10">
                            Github
                        </a>
                        <a href="https://www.boot.dev/u/nydiliria"
                           target="_blank" rel="noopener noreferrer"
                           className="p-3 bg-deep-blue/5 rounded-xl hover:bg-vibrant-green hover:text-white transition-all font-medium text-deep-blue text-center border border-deep-blue/10">
                            Boot.dev
                        </a>
                    </div>
                </div>
            </aside>

            {/* 5. Projecten - Deze vallen nu automatisch in de onderste rij naast de onderkant van Contact */}
            {featuredProjects.map((project) => (
                <section key={project.id} className="md:col-span-1 flex flex-col">
                    <h2 className="text-[10px] tracking-widest font-black text-soft-sand mb-2 ml-4 uppercase italic">Project</h2>
                    <div className="flex-grow">
                        <ProjectCard {...project} image={project.img} description={project.desc}/>
                    </div>
                </section>
            ))}
        </main>
    );
}