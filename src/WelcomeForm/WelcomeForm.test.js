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
    it('should update the state of name when handleChange is being called', () => {
    
        const mockEvent = {target: {name: 'name', value: 'Sausage'}}

        const expected = 'Sausage'


        wrapper.instance().handleChange(mockEvent);

        expect(wrapper.state('name')).toEqual(expected);
    });
    it('should update the state of quote when handleChange is being called', () => {
    
        const mockEvent = {target: {name: 'quote', value: 'I am Spicy'}}

        const expected = 'I am Spicy'


        wrapper.instance().handleChange(mockEvent);

        expect(wrapper.state('quote')).toEqual(expected);
    });
    it('should update the state of quote when handleChange is being called', () => {
    
        const mockEvent = {target: {name: 'level', value: 'Master'}}

        const expected = 'Master'


        wrapper.instance().handleChange(mockEvent);

        expect(wrapper.state('level')).toEqual(expected);
    });
    it('should run displayUserInfo when the button is clicked', () => {
        wrapper.instance().displayUserInfo = jest.fn();
        wrapper.find('button').simulate('click')

        expect(mockUserInfo).toHaveBeenCalled()
    })
})