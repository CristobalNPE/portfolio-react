import React from 'react';
import StackImg from '../assets/stack.png'
import '../styles/Stack.css'

const Stack = () => {
    return (
        <div className="stack">

            <div className="section-title">
                <img className="section-title__img" src={StackImg} alt="Image of stack overflowing"/>
                <h1 className="section-title__text">Stack</h1>
                <hr className="section-title__line"/>
            </div>


        </div>
    );
};

export default Stack;
