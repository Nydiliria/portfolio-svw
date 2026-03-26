import {Routes, Route} from 'react-router-dom';
import NotFound from "./pages/NotFound.jsx";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navbar from './components/Navbar';
import ProjectDetail from "./pages/ProjectDetail.jsx";

function App() {
    return (
        <div className="min-h-screen font-sans bg-deep-blue">
            <Navbar/>
            <main className="max-w-6xl mx-auto p-6">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/:id" element={<ProjectDetail/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </main>
            <footer className="text-center p-10 text-white/20 text-sm">
                © 2026 - Sander van Wijngaarden
            </footer>
        </div>
    );
}

export default App;