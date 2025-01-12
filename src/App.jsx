import ParticlesComponent from './components/Particles'
import NavBar from './components/NavBar';
import './App.css'
import { useState } from 'react'
function App() {
    const [darkTheme, setDarkTheme] = useState(true);
    const isDarkTheme = false;
    return (
        <>
            <ParticlesComponent darkTheme = {isDarkTheme} />
            <NavBar darkTheme = {isDarkTheme}/>
        </>

    )
}


export default App
