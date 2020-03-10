import React from "react";
import './Person.css';

const person = (props) => {
    return (
        <div className='Person'>
            <p>I am a {props.name} with sex: {props.sex} with age: {Math.floor(Math.random() * 10)}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed}/>
        </div>
    )
};

export default person;
