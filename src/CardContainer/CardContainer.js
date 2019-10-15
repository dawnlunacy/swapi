import React from 'react';
import './CardContainer.scss'
import Card from '../Card/Card'
import { Link, NavLink } from 'react-router-dom'

const CardContainer = ({data, getMovieCharacters, currentCharacters, name, quote, level, isLoading, movie}) => {

    const infoCard = data.map(card => {
        return(<Card className="movie-card"
        key={card.episode_id}
        id={card.episode_id}
        data={card}
        findCharacters={getMovieCharacters}
        />)
    })
    return(
        <>
        <header>
            <h1> StarWars</h1>
            { isLoading && movie && 
                <div className="loading-characters">
                    <div className="crawl">
                        <h1> { movie.title } </h1>
                        <p> { movie.release_date } </p>
                        <p> { movie.opening_crawl }</p>
                    </div>
                 </div>}
            <div className="header-display">
            <div className="user-info-display"> 
                <h2>{ name }</h2>
                <h3>{ quote }</h3>
                <h4>{ level }</h4>
            </div>
            <Link to='/'>
            <button className="sign-out-btn">SIGN OUT</button>
            </Link>

            </div>
        </header>
        <nav>
            <NavLink to='/movies'>
            <button className="main-btn">MOVIES</button>
            </NavLink>
            <button className="main-btn">FAVORITES</button>
          </nav>
          
        <div className="card-container">
            { infoCard }
        </div>
        </>
    )
}

export default CardContainer;