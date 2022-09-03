import React from 'react';
import UserImg from "../assets/user.png";
import '../styles/About.css'


const About = () => {
    return (
        <div className="about-me">
            <div className="section-title">
                <img className="section-title__img" src={UserImg} alt="Image representing an user"/>
                <h1 className="section-title__text">Perfil</h1>
                <hr className="section-title__line"/>
            </div>

            <div className="about-me__infobox">


            </div>
        </div>
    );
};

export default About;
