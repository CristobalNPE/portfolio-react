import React from 'react';
import "../styles/StackPill.css"

const StackPill = (props) => {
    return (
        <div className="stack-pill">
            {props.name}
        </div>
    );
};

export default StackPill;
