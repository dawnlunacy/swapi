
import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss'

const Card = ({ data, findCharacters}) => {
    // console.log("CardProp",data)
    // console.log("findCharacters", findCharacters)

    return(
        <div className="card">
            <header className="card-header">
            <h2> {data.title} </h2>
            </header>
            <main className="card-main">
            <h3> Episode {data.episode_id}</h3>
            <h3>{data.release_date}</h3>
            </main>
            <footer>
            <button onClick={event => findCharacters(data.characters)}> View Characers </button>
            </footer>
        </div>
    )
}

export default Card;