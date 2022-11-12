import "../styles/Home.css"
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import chileMap from "../assets/chile.svg"

import {motion} from "framer-motion"
import {useEffect, useState} from "react";

const Home = () => {

    return (

        <motion.div
            initial={{width: 0, opacity: 0}}
            animate={{width: "80%", opacity: 1}}
            exit={{x: window.innerWidth, transition: {duration: 0.15}}}

            className="home">
            <div className="welcome-msg">
                <h3 className="subtitle">Welcome! My name is</h3>
                <h1 className="main-title">Cristóbal<br/> Pulgar Estay</h1>
                <h3 className="subtitle">- Full Stack Web Developer - </h3>
            </div>
            <ul className="contact-shortcuts">
                <li className="contact-icon">
                    <a className="contact-link" href="mailto:cristobal.npe@gmail.com"><MailIcon fontSize="large"/></a>
                </li>
                <li className="contact-icon">
                    <a className="contact-link" href="#"><GitHubIcon fontSize="large"/></a></li>
                <li className="contact-icon">
                    <a className="contact-link" href="#"><LinkedInIcon fontSize="large"/></a>
                </li>
                <li className="contact-icon">
                    <img src={chileMap} className="map" alt=""/>
                    <a
                        className="contact-link"
                        href="#">
                        <LocationOnIcon fontSize="large"/></a>
                </li>
            </ul>
        </motion.div>
    );
};

export default Home;
