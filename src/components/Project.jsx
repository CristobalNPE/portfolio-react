import React from 'react';
import '../styles/Project.css'
import {Link} from "react-router-dom";
import StackPill from "./StackPill.jsx";

const Project = (props) => {
    const backgroundImg = {
        backgroundImage: `url(${props.img})`
    }

    const StackPillElements = () => props.stack.map(s => <StackPill name={s} style={"small"}/>)
    return (
        <div className="project-card">
            <div className="project-img" style={backgroundImg}></div>
            <div className="project-details">
                <h3 className="project-title">{props.title}</h3>
                <p className="project-description">{props.description}</p>

                {/*TODO: should create a object list that holds : img, title, description, array of tech used(stack) and genereate it through a small pill component*/}

                <h3 className="project-title">Stack Utilizado:</h3>
                <div className="pills">
                    {StackPillElements()}
                </div>


                <div className="btn-container">
                    <Link
                        className="btn-details"
                        to="/projects/detalles"
                        state={props}
                    >
                        Ver Detalles
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Project;
