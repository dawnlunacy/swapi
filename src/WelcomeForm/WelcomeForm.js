import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WelcomeForm.scss';
import {  Link } from 'react-router-dom';
import App from '../App'



class WelcomeForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            quote: '',
            level:'select',
            formReady: false,
            buttonText: 'Submit I Shall Not'
        }
    }

    validate = ({ name, quote, level }) => {

        return {
          name:
            !name || name.trim().length === 0
              ? "* Name is required *"
              : false,
          quote:
            !quote || quote.trim().length === 0
              ? "* Quote is required *"
              : false,
          level:
            !level || level === 'select'
              ? "* Rank is required *"
              : false
        //  formReady:
            
        };
    };

    displayUserInfo = () => {
        const { userInfo } = this.props
        userInfo(this.state.name, this.state.quote, this.state.level)
    }
    
    handleChange = event => {
        this.setState({[event.target.name]: event.target.value})

        if ( this.state.name !== ''  && this.state.quote !== '' && this.state.level !== 'select' ) {
            this.setState({buttonText:"Submit I Shall"});
            this.setState({formReady: true}) 
        }
    }

    render() {
        const errors = this.validate(this.state)
    
        return (
            <div className="welcome-form-container">
                <form>
                    <h1>Welcome Jedi</h1>
                    <label>Name:</label>
                    <input
                    type="text"
                    placeholder="Enter Name"
                    name="name"
                    value={this.state.name}
                    onChange= { this.handleChange }
                    />
                    {errors && <span className="error"> { errors.name } </span>}

                    <label>Favorite Quote:</label>
                    <input
                     type="text"
                     placeholder="Enter Quote"
                     name="quote"
                     value={this.state.quote}
                     onChange= { this.handleChange }
                     />
                    {errors && <span className="error"> { errors.quote } </span>}

                    <label>Select Rank:</label>
                    <select onChange={this.handleChange.bind(this)} name="level" value={this.state.level}>
                        <option  value="select">Select a Rank</option>
                        <option  value="Padawan">Padawan</option>
                        <option  value="Knight">Knight</option>
                        <option  value="Master">Master</option>
                    </select>
                    {errors && <span className="error"> { errors.level } </span>}
                    <Link to='/movies' className='nav'> <button onClick={this.displayUserInfo} disabled={!this.state.formReady}> {this.state.buttonText}</button> </Link>
                </form>
            </div>
        )
    }
}

export default WelcomeForm;

WelcomeForm.propTypes = {
    movies: PropTypes.array.isRequired,
  }