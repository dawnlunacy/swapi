import React from 'react';
import './Card.scss'

const Card = ({name, homeworld}) => {
    return(
        <div>
            <h1>{name}</h1>
            <h3>{homeworld}</h3>
        </div>
    )
}

export default Card;