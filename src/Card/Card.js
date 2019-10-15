
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss'

const Card = ({ data, findCharacters}) => {
    console.log("CardProp",data)
    // console.log("findCharacters", findCharacters)
    // const { date } = new Date(data.release_date + 'T00:00').toString().split(' ').slice(1,4 ).join(' ');
    const { title, episode_id, release_date, name, homeWorld, homeWorldPopulation, species, films } = data;
    // const film = films.map(film => <li> {film }</li>)

    return(
        <div className="card">
            <header className="card-header">
            {/* <h2> {data.title} </h2>
            <h2> {data.name} </h2> */}
            
            { title && <h2> { title } </h2>}
            { name && <h2> { name }</h2> }

            </header>
            <main className="card-main">
            {/* <h3>  {data.species}</h3>
            <h3>  {data.homeWorld}</h3> */}
             {/* <h3>  { species }</h3>
            <h3>  { homeWorld }</h3>
            <h3> { homeWorldPopulation }</h3>
            <h3>  {episode_id}</h3> */}
        {/* <ul> { films.map(film => <li> { film } </li>) } </ul> */}
            <ul> 
            { episode_id && <li> <h3> Episode { episode_id }</h3></li>}
            { release_date && <li><h3> { new Date(data.release_date + 'T00:00').toString().split(' ').slice(1,4 ).join(' ') } </h3></li>}

            { species && <li> Species: {species} </li>}
            { homeWorld && <li> Home World: {homeWorld} </li>}
            { homeWorldPopulation && <li> Population of Home World: {homeWorldPopulation} </li>}
            { species && <li> Species: {species} </li>}
            { films && films.map(film => <li> { film.title } </li>)}
            </ul>

            {/* <h3>{new Date(release_date + 'T00:00').toString().split(' ').slice(1,4 ).join(' ')}</h3> */}
            </main>
            <footer>
            {/* <button onClick={event => findCharacters(data.characters)}> View Characters </button> */}
            <Link to='/movies/moose' className='btn'>  
            { title && <button onClick={event => findCharacters(data.characters)}> View Characters </button> }            
             </Link>
            </footer>
        </div>
        
    )
}

export default Card;



