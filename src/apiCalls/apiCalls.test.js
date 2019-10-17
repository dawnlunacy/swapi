import { getCharacters, getHomeworld, getSpecies, getMovies, getFilms } from '../apiCalls/apiCalls';



describe('apiCalls', () => {
    getCharacters.mockImplementation(() => {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve()
        })
      })
      describe('getCharacters', () => {
        it('should call fetch with the correct url', () => {
            const mockUrls = ["https://swapi.co/api/people/1/",
            "https://swapi.co/api/people/2/",
            "https://swapi.co/api/people/3/",
            "https://swapi.co/api/people/4/",
            "https://swapi.co/api/people/5/",
            "https://swapi.co/api/people/6/",
            "https://swapi.co/api/people/7/",
            "https://swapi.co/api/people/8/",
            "https://swapi.co/api/people/9/",
            "https://swapi.co/api/people/10/",
            "https://swapi.co/api/people/12/",
            "https://swapi.co/api/people/13/"]
    
            getCharacters(mockUrls)
            expect(window.fetch).toHaveBeenCalledWith(mockUrls)
        })
    
        it.skip('should return the first ten characters', () => {
    
        })
    })
})
