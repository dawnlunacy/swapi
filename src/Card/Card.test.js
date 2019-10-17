import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Card/Card';

describe('Card', () => {
    let wrapper
    const mockFindCharacters = jest.fn()
    beforeEach(() => {
        wrapper = shallow(<Card
            className="movie-card"
            key={2}
            data={{title: 'Attack of the Clones', episode_id: 2, opening_crawl: 'There is unrest in the Galactic...', release_date: '2002-05-16', characters: ["URL", "URL"]}}
            findCharacters={mockFindCharacters}
            />)
    });
    it('should match snapshot with all the correct data passing through', () => {
        expect(wrapper).toMatchSnapshot()
    });
    it('should run findCharacters when View Characters is clicked', () => {
        wrapper.find('button').simulate('click')
        expect(mockFindCharacters).toHaveBeenCalledWith(["URL", "URL"]);
    });
})