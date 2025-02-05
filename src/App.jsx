import ParticlesComponent from './components/Particles'
import NavBar from './components/NavBar';
import './App.css'
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";
import Footer from './components/Footer';
function App() {
    const [darkTheme, setDarkTheme] = useState(false);
    return (
        <Router>
            <ParticlesComponent darkTheme={darkTheme} />
            <NavBar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
            <Routes>
                <Route path='/' element={<Home darkTheme={darkTheme} />} />
                <Route path="/404" element={<NotFound darkTheme={darkTheme} />} />
                {/* <Redirect from='*' to='/404' /> */}
            </Routes>
            <Footer />
        </Router>

    )
}


export default App
