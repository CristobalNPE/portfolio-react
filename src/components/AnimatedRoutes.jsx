import React from 'react';
import {Route, Routes, useLocation} from "react-router-dom";
import Home from "../pages/Home.jsx";
import About from "../pages/About.jsx";
import Projects from "../pages/Projects.jsx";
import Stack from "../pages/Stack.jsx";
import {AnimatePresence} from "framer-motion"

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence exitBeforeEnter={true} >
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/stack" element={<Stack/>}/>
            </Routes>
        </AnimatePresence>

    );
};

export default AnimatedRoutes;
