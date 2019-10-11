// import React from 'react';
// import './Card.scss'

// const Card = ({name, homeWorld,}) => {
//     return(
//         <div className="card">
//             <h1>{name}</h1>
//             <h3>{homeWorld}</h3>
//             {/* <h3>{}</h3> */}


//             {/* <h3>{height}</h3>
//             <h3>{mass}</h3>
//             <h3>{homeworld}</h3> */}
//         </div>
//     )
// }

// export default Card;

import React from 'react';
import './Card.scss'

const Card = (cardInfo) => {
    console.log("CardProp",cardInfo)
    return(
        <div className="card">
            <h1> {cardInfo.title} </h1>
            <h2>{cardInfo.episode_id}</h2>
            <h2>{cardInfo.release_date}</h2>
            <button> </button>
        </div>
    )
}

export default Card;