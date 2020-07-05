import React from 'react';

const Button = (props) => {

    return(
        <svg>
        <use href={props.icon}/>
        </svg>
    )
} 

export default Button;