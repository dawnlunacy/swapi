export const getPeople = peopleUrl => {
    return fetch(peopleUrl)
    .then(response => response.json())
    .then(people => {
        const peopleData = people.results.map(person => { //"NEXT" SHOWS MORE CHARACTERS, BUT IT'S OUTSIDE OF RESULTS ON THE SAME LEVEL
            // console.log('homie',person.homeworld)
            const { name, films, species} = person
            // console.log('person species', person.species)

            return getHomeworld(person.homeworld).then(world => ({name, films, species, world}))
            // return getSpecies(person.species).then(species => ({name, height, species}))
        })
        return Promise.all(peopleData)
    })
    
}

const getHomeworld = homeworldUrl => {
    return fetch(homeworldUrl)
        .then(response => response.json())
        .then(homeworlds => {
            console.log('HOLMES', homeworlds);
            const { name, population } = homeworlds;
            return ({ name, population })
        })
}

const getSpecies = speciesUrl => {
    return fetch(speciesUrl)
            .then(species => {
                console.log('species', species)
                const { name, language} = species
                return ({name, language})
            })
}