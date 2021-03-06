import { getCharacters, getHomeworld, getSpecies, getMovies, getFilms } from '../apiCalls/apiCalls';
import mockMovies from '../mockMovies'
import mockSpecies from '../mockSpecies'
import mockCharactersUrls from '../mockCharacters';


describe('apiCalls', () => {
    
    
    describe('getCharacters', () => {
        const mockResponse = Promise.resolve({
            person: {
                name: "Susan",
                films: ["URL", "URL"],
                species: "MOOSE",
                homeworld: "MOON"
            }
        })
      
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
              ok: true,
              json: () => Promise.resolve(mockResponse)
            })
          })

        it('should call fetch with the correct url', () => {
            getCharacters(mockCharactersUrls.mockCharactersUrls)
            expect(window.fetch).toHaveBeenCalled()
        });
    
        it('should return the an array of the first ten characters', () => {
            expect(getCharacters(mockCharactersUrls.mockCharactersUrls)).resolves.toEqual(mockCharactersUrls.mockCharacters)
        })
    })

    describe('getMovies', () => {
        const mockResponse = getMovies
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            })
        })
        it('should call fetch with the correct URL', () => { //DONE
            getMovies();
            expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films')
        })
        it('should return an array of movies', () => { //DONE
            expect(getMovies()).resolves.toEqual(mockMovies)
        })

    })

    describe('getSpecies', () => {
        const mockResponse = Promise.resolve({
            species: {
                name: "Susan",
                species: "MOOSE"
            }
        })
        const mockReturnedAnswer = Promise.resolve({
                name: "Susan",
                species: "MOOSE"
        })
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            })
        })

        it('should return the correct object', () => {
            expect(getSpecies()).toEqual(mockReturnedAnswer)
        })

        it('should return an array of species', () => { //DONE
            expect(getSpecies()).resolves.toEqual(mockSpecies)
        })
    })
    describe('getHomeworld', () => {
        const mockResponse = Promise.resolve({
            homeworlds: {
                name: "Winner",
                population: 2
            }
        })
        const mockReturnedAnswer = Promise.resolve({
                name: "Winner",
                population: 2
        })
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            })
        })
        it('should call fetch with the correct URL', () => {
            getHomeworld('https://swapi.co/api/planets/1/');
            expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets/1/')
        })
        it('should return an object with name and population', () => {
            expect(getHomeworld('https://swapi.co/api/planets/1/')).resolves.toEqual(mockReturnedAnswer)
        })

    })
    describe('getFilms', () => {
        const mockResponse = Promise.resolve({
            film: {
                title: "Winning at Testing"
            }
        })
        const mockReturnedAnswer = Promise.resolve({
            title: "Winning at Testing"
        })
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            })
        })

        it('should return an array of movies', () => { 
            expect(getFilms([1,2])).resolves.toEqual(mockReturnedAnswer)
        })

    })
})
