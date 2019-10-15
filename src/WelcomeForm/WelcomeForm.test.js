import React from 'react';
import { shallow } from 'enzyme';
import WelcomeForm from '../WelcomeForm/WelcomeForm';

describe('WelcomeForm', () => {
    let wrapper
    let state = {
        movies:[],
        currentCharacters:[],
        userData: '',
        isLoading: true,
        name: '',
        quote: '',
        level: ''
    }
    const mockGetMovieCharacters = jest.fn()
    const mockUserInfo = jest.fn()
    beforeEach(() => {
        wrapper = shallow(<WelcomeForm {...state} getMovieCharacters={mockGetMovieCharacters} userInfo={mockUserInfo}/>)
    })
    it('should match the snapshot with all the correct data passed through', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should update the state when handleChange is being called', () => {
    
        const mockEvent = {target: {name: 'name', value: 'Sausage'}}
        const expected = 'Sausage'

        wrapper.instance().handleChange(mockEvent);

        expect(wrapper.state('name')).toEqual(expected)
    });
    it('should run displayUserInfo when the button is clicked', () => {
        // const mockDisplayUserInfo = jest.fn();
        wrapper.instance().displayUserInfo = jest.fn();
        wrapper.find('button').simulate('click')

        expect(mockUserInfo).toHaveBeenCalled()
    })
})