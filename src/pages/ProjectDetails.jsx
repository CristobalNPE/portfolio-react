import React from 'react';
import {useLocation, useNavigate} from "react-router-dom";
import '../styles/ProjectDetails.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {motion} from "framer-motion"
import StackPill from "../components/StackPill.jsx";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ProjectDetails = () => {
    const location = useLocation()
    const project = location.state;
    const navigate = useNavigate()

    const StackPillElements = () => project.fullStack.map(s => <StackPill name={s}/>)

    function returnToProjects() {
        navigate("/projects")
    }

    function generateImgCarousel() {
        return project.captures.map(capture => (
            <div className="carousel-card">
                <img src={capture} alt={`Project Capture`}/>
            </div>))
    }

    return (
        <motion.div
            initial={{width: 0, opacity: 0}}
            animate={{width: "80%", opacity: 1}}
            exit={{x: window.innerWidth, transition: {duration: 0.15}}}
            className="projects-details">

            <div className="section-title">
                <h1 className="section-title__text">{project.title}</h1>
            </div>

            <p className="description-text">{project.fullDescription}</p>

            <section className="description_section">
                <div className="section-stack">
                    <h2 className="subtitle">Tech used:</h2>
                    <div className="pills">
                        {StackPillElements()}
                    </div>
                </div>
                <div className="section-btns">
                    <a className="btn-out"
                       href="https://www.github.com">

                        <ArrowOutwardIcon fontSize="large"/>
                        Visit live website

                    </a>
                    <a
                        className="btn-out btn-secondary"
                        href="https://www.github.com">

                        <GitHubIcon fontSize="large"/>
                        Check on Github
                    </a>
                </div>

            </section>

            <Carousel className="carousel-custom" autoPlay={true} infiniteLoop={true} width={"80%"}>
                {generateImgCarousel()}
            </Carousel>


            <h2 className="subtitle">Main objectives:</h2>
            <p className="description-text">{project.objectives}</p>

            <h2 className="subtitle">Difficulties:</h2>
            <p className="description-text">{project.difficulties}</p>


            <a className="btn btn-out" onClick={() => returnToProjects()}><ArrowBackIosIcon/> Back to Projects</a>


        </motion.div>

    );
};

export default ProjectDetails;
