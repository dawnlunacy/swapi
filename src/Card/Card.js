import React from 'react';
import './Card.scss'

const Card = ({name, homeworld}) => {
    return(
        <div className="card">
            <h1>{name}</h1>
<<<<<<< HEAD
            <h3>{homeworld}</h3>
=======
            {/* <h3>{height}</h3>
            <h3>{mass}</h3>
            <h3>{homeworld}</h3> */}
>>>>>>> fetch-movies
        </div>
    )
}

export default Card;