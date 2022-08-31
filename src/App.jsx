import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import Stack from './pages/Stack.jsx'
import Navbar from "./components/Navbar"

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/stack" element={<Stack/>}/>
                </Routes>
                <Navbar/>
            </Router>
        </div>
    )
}

export default App
