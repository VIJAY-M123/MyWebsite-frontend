import React from 'react';
import "./Style.css";

function Button({name, onClick}) {
    return (

        <div>
            <button className='button' onClick={onClick}>{name}</button>
        </div>
    )
}

export default Button