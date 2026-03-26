import {Link} from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
            <h1 className="text-9xl font-black text-white/5 absolute tracking-tighter">404</h1>
            <h2 className="text-4xl font-bold text-soft-sand mb-4 relative">Pagina niet gevonden</h2>
            <p className="text-white/60 mb-8 relative">Oeps! De pagina die je zoekt bestaat niet of is verhuisd.</p>
            <Link to="/"
                  className="px-8 py-3 bg-vibrant-green text-white font-bold rounded-xl hover:scale-105 transition-all shadow-lg relative">
                Terug naar Home
            </Link>
        </div>
    );
}