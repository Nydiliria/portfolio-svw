import {Link} from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto border-b border-white/10">
            <h2 className="text-xl font-black text-soft-sand tracking-tighter">Sander.dev</h2>
            <div className="space-x-8">
                <Link to="/" className="font-bold text-white hover:text-vibrant-green transition-colors">Home</Link>
                <Link to="/projects"
                      className="font-bold text-soft-sand hover:text-vibrant-green transition-colors">Projecten</Link>
            </div>
        </nav>
    )
}