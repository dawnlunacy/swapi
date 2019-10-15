
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss'

const Card = ({ data, findCharacters}) => {
    const { title,episode_id, release_date, name, homeWorld, homeWorldPopulation, species, films } = data;

    return(
        <div className="card">
            <header className="card-header">
            { title && <h2> { title } </h2>}
            { name && <h2> { name }</h2> }
            </header>

            <main className="card-main">
            <ul> 
            { episode_id && <li> <h3> Episode { episode_id }</h3></li>}
            { release_date && <li><h3> { new Date(data.release_date + 'T00:00').toString().split(' ').slice(1,4 ).join(' ') } </h3></li>}

            { species && <li> Species: {species} </li>}
            { homeWorld && <li> Home World: {homeWorld} </li>}
            { homeWorldPopulation && <li> Population of Home World: {homeWorldPopulation} </li>}
            { species && <li> Species: {species} </li>}
            { films && films.map(film => <li> { film.title } </li>)}
            </ul>
            </main>
            <footer>
            { title && <Link to={`/movies/${episode_id}`} className='btn'>
            <button onClick={event => findCharacters(data.characters)}> View Characters </button>
            </Link>}       

            </footer>
        </div>
        
    )
}

export default Card;



