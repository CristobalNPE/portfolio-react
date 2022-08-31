import React from 'react';
import '../styles/StackCard.css'

const StackCard = ({name, img}) => {
    return (
        <div className="stack-card">
            <h3 className="card-title">{name}</h3>
            <img className="card-img" src={img} alt={`${name} logo`}/>
        </div>
    );
};

export default StackCard;
