import React from 'react';
import classes from './Char.module.css';

const char = (props) => {
    return (
        <div className={classes.Char} onClick={props.clicked}> 
            {props.character}
        </div>
    )
};

export default char;