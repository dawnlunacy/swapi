import React from 'react';
import './CardContainer.scss'
import Card from '../Card/Card'

const CardContainer = ({data}) => {
    const infoCard = data.map(card => {
        return(<Card
        key={card.name}
        name={card.name}
        height={card.height}
        mass={card.mass}
        homeworld={card.homeworld}
        />)
    })
    return(
        <div>
            <h1>HIIIII</h1>
            {infoCard}
        </div>
    )
}

export default CardContainer;