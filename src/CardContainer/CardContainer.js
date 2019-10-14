import React from 'react';
import './CardContainer.scss'
import Card from '../Card/Card'

const CardContainer = ({data, getMovieCharacters, currentCharacters, name, quote, level}) => {
    console.log("Moose", getMovieCharacters)
    console.log("MooseCharcacters", currentCharacters)
    console.log("MooseData", data)

    console.log('USER INFO', name, quote, level) //undefined for now
    

    const infoCard = data.map(card => {
        console.log("card", card)
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
            <header>
                <h1>{name}</h1>
                <p>{quote}</p>
                <h3>{level}</h3>
            </header>
            {infoCard}
        </div>
    )
}

export default CardContainer;