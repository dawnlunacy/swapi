import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';


describe('App', () => {
  let wrapper;

  it('should update state when userInfo is called', () => {
    const wrapper= shallow(<App/>)
    const mockUserInfo = {
      name: "Lacy",
      quote:" There is no try, only do or do not",
      level:"Padawan"
    }
    const expected = mockUserInfo

    wrapper.instance().userInfo(mockUserInfo);
    expect(wrapper.state('name', 'quote', 'level')).toEqual(expected)
  })

  // it('should update state when getMovieCharacters is called', () => {
  //   const wrapper= shallow(<App/>)
  //   const mockUrls = ["https://swapi.co/api/people/1/",
  //   "https://swapi.co/api/people/2/"];

  //   const mockGetMovieCharacters = jest.fn()

  //   const mock = [{
  //     name: "Lacy", 
  //     films: [],
  //     species: 'human',
  //     homeWorld: 'Earth',
  //     homeWorldPopulation: 80000000000},{
  //     name: "Jessie", 
  //     films: [],
  //     species: 'human',
  //     homeWorld: 'Venus',
  //     homeWorldPopulation: 80000000001}]

  // wrapper.instance().getMovieCharacters(mockUrls)
  // expect(wrapper.state('currentCharacters')).toEqual(mock)
  // })

})



