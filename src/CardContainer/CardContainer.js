import React from 'react';
import './CardContainer.scss'
import Card from '../Card/Card'

const CardContainer = ({data, getMovieCharacters, currentCharacters, name, quote, level, isLoading, selectedMovie}) => {
    console.log("Moose", getMovieCharacters)
    console.log("MooseCharcacters", currentCharacters)
    console.log("MooseData", data)    

    const infoCard = data.map(card => {
        console.log("card", card)
        return(<Card className="movie-card"
        key={card.episode_id}
        id={card.episode_id}
        data={card}
        findCharacters={getMovieCharacters}
        // name={card.title}
        // homeworld={card.homeworld}
        />)
    })
    return(
        <>
        <header>
            <h1> StarWars</h1>
            { isLoading && <h1> Loading... </h1>}
            <div className="header-display">
            <div className="user-info-display"> 
                <h2>{ name }</h2>
                <h3>{ quote }</h3>
                <h4>{ level }</h4>
            </div>
            <button className="sign-out-btn">SIGN OUT</button>
            </div>
        </header>
        <nav>
            <button className="main-btn">MOVIES</button>
            <button className="main-btn">FAVORITES</button>
          </nav>
          
        <div className="card-container">
            { infoCard }
        </div>
        </>
    )
}

export default CardContainer;