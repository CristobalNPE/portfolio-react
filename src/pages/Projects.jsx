import React from 'react';
import '../styles/Projects.css'
import ProjectsImg from '../assets/proyects.png'
import Project from '../components/Project.jsx'

const Projects = () => {
    return (
        <div className="projects">
            <div className="section-title">
                <img className="section-title__img" src={ProjectsImg} alt="Image of stacked files"/>
                <h1 className="section-title__text">Proyectos</h1>
                <hr className="section-title__line"/>
            </div>

            <div className="projects-box">
                <Project/><Project/><Project/><Project/>

                <div className="proyect-indicators">

                </div>
            </div>
        </div>
    );
};

export default Projects;
