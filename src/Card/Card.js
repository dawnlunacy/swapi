import React from 'react';
import './Card.scss'

const Card = ({name, height, mass, homeworld}) => {
    return(
        <div>
            <h1>{name}</h1>
            <h3>{height}</h3>
            <h3>{mass}</h3>
            <h3>{homeworld}</h3>
        </div>
    )
}

export default Card;