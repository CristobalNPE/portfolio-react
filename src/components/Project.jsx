import React from 'react';

const Project = () => {
    return (
        <div className="project-card">
            <div className="project-img"></div>
            <div className="project-details">
                <h3 className="project-title">Lo Sabes?</h3>
                <p className="project-description">Aplicación web básica creada utilizando los conceptos básicos de
                    Spring Boot y React en cojunto. Permite responder un simple quiz alimentado desde una API
                    propia.</p>

                {/*TODO: should create a object list that holds : img, title, description, array of tech used(stack) and genereate it through a small pill component*/}

                <h3>Stack Utilizado:</h3>
                {/*{stackElements}*/}

            </div>
        </div>
    );
};

export default Project;
