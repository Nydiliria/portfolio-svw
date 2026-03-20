export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-gray-200">
            <h2 className="text-xl font-bold">Portfolio</h2>
            <div className="space-x-6">
                <a href="/" className="hover:text-blue-500 transition">Home</a>
                <a href="/projects" className="hover:text-blue-500 transition">Projecten</a>
            </div>
        </nav>
    )
}