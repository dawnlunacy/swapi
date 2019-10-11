export const getPeople = peopleUrl => {
    return fetch(peopleUrl)
    .then(response => response.json())
    .then(people => {
        const peopleData = people.results.map(person => { //"NEXT" SHOWS MORE CHARACTERS, BUT IT'S OUTSIDE OF RESULTS ON THE SAME LEVEL
            // console.log('homie',person.homeworld)
            const { name, films} = person
            // console.log('person species', person.species)
            const homeworldData = getHomeworld(person.homeworld)
            const speciesData = getSpecies(person.species)
            // console.log('homeworld data', homeworldData)

            return Promise.all([homeworldData, speciesData]).then(([homeworlds, species])=> { //"slick way of destructuring"
                    console.log("yo", homeworlds)
                    // const homeworlds = fetchedData[0]
                    // const species = fetchedData[1]
                    return { name, films, species, homeworlds}
                    
                })

        })
        return Promise.all(peopleData)
    })
    
}

const getHomeworld = homeworldUrl => {
    return fetch(homeworldUrl)
        .then(response => response.json())
        // .then(homeworlds => {
        //     // console.log('HOLMES', homeworlds);
        //     const { name, population } = homeworlds;
        //     return ({ name, population })
        // })
}

const getSpecies = speciesUrl => {
    return fetch(speciesUrl)
            .then(response => response.json())
            .then(species => {
                // console.log('species', species)
                const { name, language} = species
                return ({name, language})
            })
}