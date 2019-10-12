export const getCharacters = characterUrls => {
      const charactersInfo = characterUrls.map(url => {
        return fetch(url)
        .then(response => response.json())
        .then(person => {
                const { name, films, species, homeworld } = person
    
                const homeWorldInfo = getHomeworld(homeworld).then(world => world)
    
                const speciesDetail =  getSpecies(species).then(info => info)

                const characterFilmInfo =  getFilms(films).then(info => {
                    return info})
                const personData = Promise.all([speciesDetail, homeWorldInfo, characterFilmInfo]).then(data => ({ 
                    name, 
                    films: characterFilmInfo,
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

export const getMovies = filmsUrl => {
    return fetch(filmsUrl)
        .then(response => response.json())
        .then(films => films.results.map(film => {
            const { title, episode_id, opening_crawl, release_date, characters } = film;
            return ({ title, episode_id, opening_crawl, release_date, characters })
        }))
}

export const getFilms = filmsUrl => {
    console.log("length", filmsUrl.length)
    const filmInfo = filmsUrl.map(url => {
        return fetch(url)
        .then(response => response.json())
        .then(film => {
            const { title } = film;
            return ({ title })
        })
        .then(resp => resp)
    })
    return Promise.all(filmInfo)
}