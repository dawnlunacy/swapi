import React from 'react';
import { shallow } from 'enzyme';
import CardContainer from '../CardContainer/CardContainer'
import Card from '../Card/Card';

describe('CardContainer', () => {
    it('should match the snapshot with all the correct data passing through', () => {
    let mockGetMovieCharacters = jest.fn();
    let data = [{title: 'Attack of the Clones', episode_id: 2, opening_crawl: 'There is unrest in the Galactic...', release_date: '2002-05-16', characters: Array(2)}]
        let name = "Sausage";
        let quote = "I am Spicy";
        let level = "Master";


        const wrapper = shallow(<CardContainer data={data} getMovieCharacters={mockGetMovieCharacters} name={name} quote={quote} level={level}/>)
        expect(wrapper).toMatchSnapshot();
    })
})