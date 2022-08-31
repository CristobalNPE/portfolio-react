import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/Navbar.css"

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="toggleButton">
                <button>Explorar</button>
            </div>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/about">Acerca de mi</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/stack">Stack</Link>
            </div>
        </nav>
    );
};

export default Navbar;
