import React, {useState} from 'react';
import StackImg from '../assets/stack.png'
import '../styles/Stack.css'
import StackCard from "../components/StackCard.jsx";
import cardsData from "../constants/stackdata.js"


const Stack = () => {
    const [data, setData] = useState(cardsData)

    const stackCardElements = () => {
        return data.map(cardData => <StackCard key={cardData.id} name={cardData.id} img={cardData.img}/>)
    }


    return (
        <div className="stack">
            <div className="section-title">
                <img className="section-title__img" src={StackImg} alt="Image of stack overflowing"/>
                <h1 className="section-title__text">Stack</h1>
                <hr className="section-title__line"/>
            </div>

            <div className="stack-box">
                {stackCardElements()}
            </div>
        </div>
    );
};

export default Stack;
