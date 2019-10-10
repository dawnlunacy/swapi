export const getPeople = peopleUrl => {
    return fetch(peopleUrl)
    .then(response => response.json())
    .then(people => {
        const peopleData = people.results.map(person => {
            console.log('homie',person.homeworld)
            const { name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, films} = person
            // return getHomeworld(person.homeworld).then(worlds => console.log('WORLDS AYYY',worlds))

            return getHomeworld(person.homeworld).then(world => ({name, height, mass, hair_color, skin_color, eye_color, birth_year, gender, films, world}))
        })
        return Promise.all(peopleData)
    })
}

const getHomeworld = homeworldUrl => {
    return fetch(homeworldUrl)
        .then(response => response.json())
        .then(homeworlds => {
            console.log('HOMES', homeworlds);
            const { name, population } = homeworlds;
            return ({ name, population })
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