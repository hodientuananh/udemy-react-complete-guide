import React from "react";
import Classes from './Person.css';

const person = (props) => {
    return (
        <div className={Classes.Person}>
            <p onClick={props.click}>I am a {props.name} with sex: {props.sex} with age: {Math.floor(Math.random() * 10)}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default person;
