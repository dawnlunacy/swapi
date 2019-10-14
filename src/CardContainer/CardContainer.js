import React from 'react';
import './CardContainer.scss'
import Card from '../Card/Card'

const CardContainer = ({data, findCharacters}) => {
    // console.log("Moose", findCharacters)
    const infoCard = data.map(card => {
        // console.log("card", card)
        return(<Card className="movie-card"
        key={card.episode_id}
        data={card}
        findCharacters={findCharacters}
        // name={card.title}
        // homeworld={card.homeworld}
        />)
    })
    return(
        <div className="card-container">
            {/* <h1>HIIIII</h1> */}
            {infoCard}
        </div>
    )
}

export default CardContainer;