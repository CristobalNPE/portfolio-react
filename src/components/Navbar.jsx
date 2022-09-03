import React, {useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';
import "../styles/Navbar.css"
import ReorderIcon from '@mui/icons-material/Reorder';

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false)

    const location = useLocation()

    useEffect(() => {
        setToggleNavbar(false)
    }, [location]);


    function toggle() {
        setToggleNavbar(prevState => !prevState)
    }

    return (
        <nav className="navbar" id={toggleNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={toggle}><ReorderIcon fontSize="large"/></button>
            </div>
            <div className="links">
                <Link to="/">Inicio</Link>
                <Link to="/about">Perfil</Link>
                <Link to="/projects">Proyectos</Link>
                <Link to="/stack">Stack</Link>
            </div>
        </nav>
    );
};

export default Navbar;
