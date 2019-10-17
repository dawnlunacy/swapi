import { getCharacters, getHomeworld, getSpecies, getMovies, getFilms } from '../apiCalls/apiCalls';
import mockMovies from '../mockMovies'
import mockSpecies from '../mockSpecies'
import mockCharacters from '../mockCharacters'
import mockHomeworld from '../mockHomeworld'
import mockPeople from '../mockPeople'

describe('apiCalls', () => {
    
    
    describe('getCharacters', () => {
        const mockResponse1 = getCharacters
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
              ok: true,
              json: () => Promise.resolve(mockResponse1)
            })
          })
        it.skip('should call fetch with the correct url', () => {
    
            getCharacters()
            expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/people')
        });
    
        it.skip('should return the first ten characters', () => {
            expect(getCharacters()).resolves.toEqual(mockCharacters)
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
        const mockResponse = getSpecies
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            })
        })
        it('should call fetch with the correct url', () => {
            getSpecies()
            expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/species')
        })
        it('should return an array of species', () => { //DONE
            expect(getSpecies()).resolves.toEqual(mockSpecies)
        })
    })
    describe('getHomeworld', () => {
        const mockResponse = getHomeworld
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            })
        })
        it.skip('should call fetch with the correct URL', () => {
            getHomeworld();
            expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/planets')
        })
        it.skip('should return an array of homeworlds', () => {
            expect(getHomeworld()).resolves.toEqual(mockHomeworld)
        })

    })
    describe('getFilms', () => {
        const mockResponse = getFilms
        window.fetch = jest.fn().mockImplementation(() => {
            return Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockResponse)
            })
        })
        it.skip('should call fetch with the correct URL', () => {
            getFilms();
            expect(window.fetch).toHaveBeenCalledWith('https://swapi.co/api/films')
        })
        it.skip('should return an array of movies', () => { 
            expect(getFilms()).resolves.toEqual(mockMovies)
        })

    })
})
