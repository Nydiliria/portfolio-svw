export default function Home() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 animate-in fade-in duration-700">
            {/* Grote Intro Card */}
            <div
                className="md:col-span-2 md:row-span-2 bg-indigo-600 rounded-[2rem] p-10 text-white flex flex-col justify-end min-h-[400px]">
                <h1 className="text-5xl font-bold mb-4 italic">Hoi!</h1>
                <p className="text-xl opacity-90">Ik ben een developer die houdt van strakke interfaces en schone
                    code.</p>
            </div>

            {/* Skills Card */}
            <div className="md:col-span-2 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                <h2 className="text-xl font-bold mb-4">Tech Stack</h2>
                <div className="flex flex-wrap gap-2">
                    {['React', 'Tailwind', 'PHP', 'Vite', 'Git'].map(skill => (
                        <span key={skill}
                              className="px-4 py-2 bg-gray-100 rounded-full text-sm font-semibold">{skill}</span>
                    ))}
                </div>
            </div>

            {/* Project Teaser Card */}
            <div
                className="md:col-span-1 bg-emerald-400 rounded-[2rem] p-8 flex items-center justify-center text-center font-bold text-lg">
                Check mijn laatste projecten 🚀
            </div>

            {/* About Me Card */}
            <div className="md:col-span-1 bg-white rounded-[2rem] p-8 shadow-sm border border-gray-100">
                <p className="text-gray-500 text-sm">Altijd aan het leren en bouwen.</p>
            </div>
        </div>
    )
}