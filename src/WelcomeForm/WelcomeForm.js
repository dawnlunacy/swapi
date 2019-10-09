import React, { Component } from 'react';
import './WelcomeForm.scss';

class WelcomeForm extends Component {
    constructor() {
        super()
    }
    render() {
        return(
            <div className="welcome-form-container">
                <h1>Welcome Jedi</h1>
                <form>
                    <label>Name:</label>
                    <input/>
                    <label>Favorite Quote:</label>
                    <input/>
                    <label>Select Rank</label>
                    <select>
                        <option>Padawan</option>
                        <option>Knight</option>
                        <option>Master</option>
                    </select>
                </form>
                    <button>submit</button>
            </div>
        )
    }
}

export default WelcomeForm;