import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WelcomeForm.scss';
import { Route, NavLink, Link } from 'react-router-dom';
import App from '../App'



class WelcomeForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            quote: '',
            level: 'select',
            formReady: false,
            buttonText: 'Submit I Shall Not'
        }
    }

    validate = ({ name, quote, level }) => {
        // console.log("level", level)
        // console.log("Statey",this.state)

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
        console.log("PROPS FOR USER", this.props)
        userInfo(this.state.name, this.state.quote, this.state.level)
    }
    
    handleChange = event => {
        // console.log("EVENT-NAME:", event.target.name)
        // console.log("EVENT-OPTION:", event.target.value)

        this.setState({[event.target.name]: event.target.value})
        console.log("Statey",this.state)
    }

    handleClick = (event, errors) => {
        // console.log("CLICK:", event)
        // console.log("errorCLICk:", errors)
        event.preventDefault();
        const { name, quote, level } = errors;
        // console.log("nameClick:", name)
        // console.log("quoteClick:", quote)
        // console.log("levelClick:", level)

        if ( name === false  && quote === false && level === false ) {
            console.log("WIIIINNNNER");
            return <NavLink to='/movies' className='nav'> Movies </NavLink>

        }

    }
    render() {
        console.log('display', this.displayUserInfo)
        const errors = this.validate(this.state)
        // console.log("errors", errors)
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
                    <Link to='/movies' className='nav'> <button onClick={this.displayUserInfo} disabled={!this.state.name}> Submit I Shall </button> </Link>
                    {/* <button onClick={(event)=> this.handleClick(event, errors)}>Submit I Shall</button> */}
                </form>
            </div>

        )
    }
}

export default WelcomeForm;

WelcomeForm.propTypes = {
    movies: PropTypes.array.isRequired,
    currentCharacter: PropTypes.array.isRequired
  }