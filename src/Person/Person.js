import React from "react";
import Radium from "radium";
import './Person.css';

const person = (props) => {
    let style = {
        '@media (min-width: 500px)': {
            width: '450px'
        }
    };
    return (
        <div className='Person' style={style}>
            <p onClick={props.click}>I am a {props.name} with sex: {props.sex} with age: {Math.floor(Math.random() * 10)}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    )
};

export default Radium(person);
