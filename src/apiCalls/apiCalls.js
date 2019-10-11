export const getPeople = peopleUrl => {
    return fetch(peopleUrl)
    .then(response => response.json())
    .then(people => {
        const peopleData = people.results.map(person => { //"NEXT" SHOWS MORE CHARACTERS, BUT IT'S OUTSIDE OF RESULTS ON THE SAME LEVEL
            // console.log('homie',person.homeworld)
            const { name, films, species} = person
            // console.log('person species', person.species)

            // const homeWorld = getHomeworld(person.homeworld).then(world => ({name, films, species, world})).then(foo1 => console.log("foo1",foo1))
            const homeWorld = getHomeworld(person.homeworld).then(world => ({name, films, species, world})).then(foo1 => foo1)

            // return homeWorld
            // const speciesDetail =  getSpecies(person.species).then(fool => console.log("chicken", fool ))
            const speciesDetail =  getSpecies(person.species).then(fool => fool)

            return ({ name, films, species: speciesDetail, homeWorld: homeWorld })
            // return getSpecies(person.species).then(species => ({name, height, species}))
        })
        console.log("HEHE", peopleData)
        // console.log("HEHE666", [[{...peopleData[0].name}], [{...peopleData[0].films}], [{...peopleData[0].species}], [{...peopleData[0].world}]])


        // peopleData.map(person => console.log("RES", person.homeWorld.then(hi => console.log("hi", hi))))
        // const peopleDataResolve = peopleData.map(person => person.then(personData => personData))
        // console.log("RESOLVE?", peopleDataResolve)

        // console.log("HEHE2", peopleData.map(person => person.species).then(res1 => res1))


        // let arrayToResolve = [...peopleData.homeWorld, ...peopleData.species]
        // console.log("WHAT", Promise.all(arrayToResolve))
        // .then(moooose => console.log("moooose", moooose))
        // const answer = Promise.all([[peopleData[0].homeWorld.then(res => res)], [peopleData[1].homeWorld.then(res => res)], [peopleData[2].homeWorld.then(res => res)], [peopleData[3].homeWorld.then(res => res)]]).then(please => please)
        console.log("ANSWER", answer)

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