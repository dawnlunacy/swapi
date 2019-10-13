import React from 'react';
import './CardContainer.scss'
import Card from '../Card/Card'

const CardContainer = ({data, getMovieCharacters, currentCharacters}) => {
    console.log("Moose", getMovieCharacters)
    const infoCard = data.map(card => {
        // console.log("card", card)
        return(<Card className="movie-card"
        key={card.episode_id}
        data={card}
        findCharacters={getMovieCharacters}
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