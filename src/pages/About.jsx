import React from 'react';
import UserImg from "../assets/user.png";
import '../styles/About.css'
import {motion} from "framer-motion"

const About = () => {
    return (
        <motion.div
            initial={{width:0, opacity:0}}
            animate={{width:"80%", opacity:1}}
            exit={{x:window.innerWidth, transition: {duration:0.15}}}

            className="about-me">
            <div className="section-title">
                <img className="section-title__img" src={UserImg} alt="Image representing an user"/>
                <h1 className="section-title__text">About me</h1>
                <hr className="section-title__line"/>
            </div>

            <div className="about-me__infobox">


            </div>
        </motion.div>
    );
};

export default About;
