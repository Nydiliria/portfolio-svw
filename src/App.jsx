import {Routes, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Navbar from './components/Navbar'
import ProjectDetail from "./pages/ProjectDetail.jsx";

function App() {
    return (
        <div className="min-h-screen font-sans text-gray-900">
            <Navbar/>

            {/* Pagina Wisselaar */}
            <main className="max-w-6xl mx-auto p-6">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/projects/:id" element={<ProjectDetail/>}/>
                </Routes>
            </main>

            <footer className="text-center p-10 text-gray-400 text-sm">
                © 2026 - Gebouwd met React & Tailwind
            </footer>
        </div>
    )
}

export default App