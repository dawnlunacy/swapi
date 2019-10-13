import React, { Component } from 'react';
import './WelcomeForm.scss';

class WelcomeForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            quote: '',
            level: 'select'
        }
    }

    validate = ({ name, quote, level }) => {
        console.log("level", level)
        console.log("Statey",this.state)

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
        };
    };

    handleChange = event => {
        console.log("EVENT-NAME:", event.target.name)
        console.log("EVENT-OPTION:", event.target.value)

        this.setState({[event.target.name]: event.target.value})
        console.log("Statey",this.state)
    }
    render() {
        const errors = this.validate(this.state)
        console.log("errors", errors)
        return (
            <div className="welcome-form-container">
                <h1>Welcome Jedi</h1>
                <form>
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


                    <label>Select Rank</label>
                    <select onChange={this.handleChange.bind(this)} name="level" value={this.state.level}>
                        <option value="select">Select a Rank</option>
                        <option value="Padawan">Padawan</option>
                        <option value="Knight">Knight</option>
                        <option value="Master">Master</option>
                    </select>
                    {errors && <span className="error"> { errors.level } </span>}

                    <button>Submit I Will</button>
                </form>
            </div>
        )
    }
}

export default WelcomeForm;