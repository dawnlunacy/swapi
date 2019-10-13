import React, { Component } from 'react';
import './WelcomeForm.scss';

class WelcomeForm extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            quote: '',
            level: []
        }
    }

    validate = ({ name, quote, level }) => {
        console.log("name", name)
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
            !level || level.length === 0
              ? "* Level is required *"
              : false
        };
    };

    handleChange = event => {
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
                    <select>
                        <option>Padawan</option>
                        <option>Knight</option>
                        <option>Master</option>
                    </select>
                    <button>Submit I Will</button>
                </form>
            </div>
        )
    }
}

export default WelcomeForm;