import ProjectCard from '../components/ProjectCard'

export default function Projects() {
    const myProjects = [
        {id: 1, title: "Webshop", desc: "PHP & SQL project", img: "/path/to/img.png"},
        {id: 2, title: "React Dashboard", desc: "Vite & Tailwind", img: "/path/to/img2.png"}
    ];

    return (
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
    )
}