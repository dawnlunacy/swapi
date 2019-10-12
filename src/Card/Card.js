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
import { Link } from 'react-router-dom';
import './Card.scss'

const Card = ({ data, findCharacters}) => {
    // console.log("CardProp",data)
    // console.log("findCharacters", findCharacters)

    return(
        <div className="card">
            <h2> {data.title} </h2>
            <h3>{data.episode_id}</h3>
            <h3>{data.release_date}</h3>
            <button onClick={event => findCharacters(data.characters)}> View Characers </button>
        </div>
    )
}

export default Card;