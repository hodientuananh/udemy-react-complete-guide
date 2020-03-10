import React from "react";

const person = (props) => {
    return (
        <div>
            <p>I am a {props.name} with sex: {props.sex} with age: {Math.floor(Math.random() * 10)}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;
