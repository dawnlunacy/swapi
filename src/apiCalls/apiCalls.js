// export const getPeople = peopleUrl => {
//     return fetch(peopleUrl)
//     .then(response => response.json())
//     .then(people => {
//         const peopleData = people.results.map(person => { //"NEXT" SHOWS MORE CHARACTERS, BUT IT'S OUTSIDE OF RESULTS ON THE SAME LEVEL
//             const { name, films, species, homeworld} = person

//             const homeWorldInfo = getHomeworld(homeworld).then(world => world)

//             // return homeWorld
//             const speciesDetail =  getSpecies(species).then(info => info)

//             const personData = Promise.all([speciesDetail, homeWorldInfo]).then(data => ({ 
//                 name, 
//                 films, 
//                 species: data[0].name, 
//                 homeWorld: data[1].name,
//                 homeWorldPopulation: data[1].population
//             }))
//             return personData
//         })
//         return Promise.all(peopleData)
//     })
// }

export const getCharacters = characterUrls => {
    const charactersInfo = [];
     const maybe = characterUrls.map(url => {
        fetch(url)
        .then(response => response.json())
        .then(person => {
                const { name, films, species, homeworld } = person
    
                const homeWorldInfo = getHomeworld(homeworld).then(world => world)
    
                // return homeWorld
                const speciesDetail =  getSpecies(species).then(info => info)
    
                const personData = Promise.all([speciesDetail, homeWorldInfo]).then(data => ({ 
                    name, 
                    films, 
                    species: data[0].name, 
                    homeWorld: data[1].name,
                    homeWorldPopulation: data[1].population
                }))
                // charactersInfo.push(personData)
                return personData
        }).then(response => {
            console.log("responding:", response);
            charactersInfo.push(response);
            console.log("infoAfter", charactersInfo)
            // console.log("MaybeAfter", maybe)
            return response

        })
    })
        // .then(resp => console.log("inside get char:", resp))
        // console.log("1", charactersInfo)
    return Promise.all(maybe)

}

// export const getCharacter = characterUrl => {
//     const array = []
//     return fetch(characterUrl)
//     .then(response => response.json())
//     .then(character => {
//         console.log("CHARACTER", character )
//         // const characterData = character.results.map(person => { //"NEXT" SHOWS MORE CHARACTERS, BUT IT'S OUTSIDE OF RESULTS ON THE SAME LEVEL
//             const { name, films, species, homeworld} = character;

//             const homeWorldInfo = getHomeworld(homeworld).then(world => world)

//         //     // return homeWorld
//             const speciesDetail =  getSpecies(species).then(info => info)

//             const characterData = Promise.all([speciesDetail, homeWorldInfo]).then(data => ({ 
//                 name, 
//                 films, 
//                 species: data[0].name, 
//                 homeWorld: data[1].name,
//                 homeWorldPopulation: data[1].population
//             }))
//             array.push(characterData)

//             // return characterData
//         return Promise.all(array)

//         })
//         .then(hmm => {
//             console.log("array", array.length)
//             return hmm
//         })

        // .then(characterInfo => characterInfo).then(maybe => console.log("?", maybe))
    // }

const getHomeworld = homeworldUrl => {
    return fetch(homeworldUrl)
        .then(response => response.json())
        .then(homeworlds => {
            const { name, population } = homeworlds;
            return ({ name, population })
        })
}


export const getSpecies = speciesUrl => {
    return fetch(speciesUrl)
            .then(response => response.json())
            .then(species => {
                const { name, language} = species
                return ({name, language})
            })
}
export const getMovies = filmsUrl => {
    return fetch(filmsUrl)
        .then(response => response.json())
        .then(films => films.results.map(film => {
            const { title, episode_id, opening_crawl, release_date, characters } = film;
            return ({ title, episode_id, opening_crawl, release_date, characters })
        }))
}