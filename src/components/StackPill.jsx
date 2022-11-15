import React from 'react';
import "../styles/StackPill.css"

const StackPill = (props) => {
    return (
        <div className={`${props.style === "small" ? "stack-pill-s" : "stack-pill"}`}>
            {props.name}
        </div>
    );
};

export default StackPill;
