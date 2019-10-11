export const getPeople = peopleUrl => {
    return fetch(peopleUrl)
    .then(response => response.json())
    .then(people => {
        const peopleData = people.results.map(person => { //"NEXT" SHOWS MORE CHARACTERS, BUT IT'S OUTSIDE OF RESULTS ON THE SAME LEVEL
            // console.log('homie',person.homeworld)
            const { name, films, species, homeworld} = person
            // console.log('person species', person.species)

            // const homeWorld = getHomeworld(person.homeworld).then(world => ({name, films, species, world})).then(foo1 => console.log("foo1",foo1))
            const homeWorldInfo = getHomeworld(homeworld).then(world => world)

            // return homeWorld
            // const speciesDetail =  getSpecies(person.species).then(fool => console.log("chicken", fool ))
            const speciesDetail =  getSpecies(species).then(info => info)

            // return ({ name, films, species: speciesDetail, homeWorld: homeWorld })
            const personData = Promise.all([speciesDetail, homeWorldInfo]).then(data => ({ 
                name, 
                films, 
                species: data[0].name, 
                homeWorld: data[1].name,
                homeWorldPopulation: data[1].population
            }))
            return personData
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

export const getSpecies = speciesUrl => {
    console.log("duh", speciesUrl)
    return fetch(speciesUrl)
            .then(response => response.json())
            .then(species => {
                console.log('species', species)
                const { name, language} = species
                return ({name, language})
            })
}