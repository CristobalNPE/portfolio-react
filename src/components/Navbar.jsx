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
            {
                !toggleNavbar &&
                <div className="toggleButton">
                    <button onClick={toggle}><ReorderIcon fontSize="large"/></button>
                </div>}
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/stack">Stack</Link>
            </div>
        </nav>
    );
};

export default Navbar;
