import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Stack from "./pages/Stack.jsx";
import ProjectDetails from "./pages/ProjectDetails.jsx"


function App() {
    return (
        <div className="App">
            <Router>
                <Navbar/>
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about" element={<About/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/stack" element={<Stack/>}/>

                    <Route path="/projects/detalles" element={<ProjectDetails/>}/>
                </Routes>
            </Router>
        </div>
    )
}

export default App
