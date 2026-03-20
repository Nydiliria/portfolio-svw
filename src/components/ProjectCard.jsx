export default function ProjectCard({title, description, image}) {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition">
            <img src={image} alt={title} className="w-full h-48 object-cover"/>
            <div className="p-4">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>
            </div>
        </div>
    )
}