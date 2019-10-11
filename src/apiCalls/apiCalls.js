export const getPeople = peopleUrl => {
    return fetch(peopleUrl)
    .then(response => response.json())
    .then(people => {
        const peopleData = people.results.map(person => { //"NEXT" SHOWS MORE CHARACTERS, BUT IT'S OUTSIDE OF RESULTS ON THE SAME LEVEL
            const { name, films, species, homeworld} = person

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
            return personData
        })
        return Promise.all(peopleData)
    })
}

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