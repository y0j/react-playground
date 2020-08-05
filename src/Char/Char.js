import React from 'react';
import './Char.css';

const char = (props) => {
    return (
        <div className="Char"> 
            <p>{props.textInput}</p>
        </div>
    )
};

export default char;