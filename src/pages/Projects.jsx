import React, {useState} from 'react';
import '../styles/Projects.css'
import ProjectsImg from '../assets/proyects.png'
import ProjectsData from '../constants/projectsdata.js'
import Project from '../components/Project.jsx'
import {motion} from "framer-motion"

const Projects = () => {

    const [allProjects, setAllProjects] = useState(ProjectsData);



    const projectElements = () => {
        return allProjects.map(project => (
            <Project
                img={project.img}
                title={project.title}
                description={project.description}
                fullDescription={project.fullDescription}
                stack={project.stack}
                fullStack={project.fullStack}
                captures={project.captures}
                objectives={project.objectives}
                difficulties={project.difficulties}

            />
        ))
    }


    return (
        <motion.div
            initial={{width: 0, opacity: 0}}
            animate={{width: "80%", opacity: 1}}
            exit={{x: window.innerWidth, transition: {duration: 0.15}}}

            className="projects">
            <div className="section-title">
                <img className="section-title__img" src={ProjectsImg} alt="Image of stacked files"/>
                <h1 className="section-title__text">Projects</h1>
                <hr className="section-title__line"/>
            </div>

            <div className="projects-box">
                {projectElements()}

                <div className="proyect-indicators">

                </div>
            </div>
     
        </motion.div>
    );
};

export default Projects;
