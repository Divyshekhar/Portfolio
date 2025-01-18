import ParticlesComponent from './components/Particles'
import NavBar from './components/NavBar';
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';
import Project from './pages/Project';
import NotFound from './pages/NotFound';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
function App() {
    const [darkTheme, setDarkTheme] = useState(true);
    return (
        <Router>
            <ParticlesComponent darkTheme={darkTheme} />
            <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes>
                <Route path='/' element={<Home darkTheme={darkTheme} />} />
                <Route path="/contact" element={<Contact darkTheme={darkTheme} />} />
                <Route path="/about" element={<About darkTheme={darkTheme} />} />
                <Route path="/projects" element={<Project darkTheme={darkTheme} />} />
                <Route path="*" element={<NotFound darkTheme={darkTheme} />} />
            </Routes>
            <Footer />
        </Router>

    )
}


export default App
