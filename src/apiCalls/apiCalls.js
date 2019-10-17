
export const getCharacters = characterUrls => {
    const firstTenCharacters = characterUrls.slice(0,10)
      const charactersInfo = firstTenCharacters.map(url => {
        return fetch(url)
        .then(response => response.json())
        .then(person => {
                const { name, films, species, homeworld } = person
    
                const homeWorldInfo = getHomeworld(homeworld).then(world => world)
    
                const speciesDetail =  getSpecies(species).then(info => info)

                const characterFilmInfo =  getFilms(films).then(info => info)
                const personData = Promise.all([speciesDetail, homeWorldInfo, characterFilmInfo])
                .then(data => ({ 
                    name, 
                    films: data[2],
                    species: data[0].name, 
                    homeWorld: data[1].name,
                    homeWorldPopulation: data[1].population
                }))
                return personData
        })
        .then(response => {
            return response
        })

    })
    return Promise.all(charactersInfo)
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

export const getMovies = filmsUrl => { //DONE
    return fetch('https://swapi.co/api/films')
        .then(response => response.json())
        .then(films => films.results.map(film => {
            const { title, episode_id, opening_crawl, release_date, characters } = film;
            return ({ title, episode_id, opening_crawl, release_date, characters })
        })).then(films => films.sort((a,b) => a.episode_id - b.episode_id))
}

export const getFilms = filmsUrls => {
    const filmInfo = filmsUrls.map(url => {

        return fetch(url)
        .then(response => response.json())
        .then(film => {
            const { title } = film;
            return ({ title })
        })
    })
    return Promise.all(filmInfo)
}