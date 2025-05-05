import ParticlesComponent from './components/Particles'
import NavBar from './components/NavBar';
import './App.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './components/Footer';
function App() {
    const [darkTheme, setDarkTheme] = useState();
    useEffect(() => {

        const prefer = localStorage.getItem('dark');
        if (prefer === 'true') {
            setDarkTheme(true);
        }
        else {
            setDarkTheme(false);
        }
    })


    return (
        <Router>
            <ParticlesComponent darkTheme={darkTheme} />
            <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes>
                <Route path='/' element={<Home darkTheme={darkTheme} />} />
                <Route path='*' element={<NotFound darkTheme={darkTheme} />} />
            </Routes>
            <Footer />
        </Router>

    )
}


export default App
