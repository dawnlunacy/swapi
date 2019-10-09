import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.scss';
import './variables.scss'

import WelcomeForm from './WelcomeForm/WelcomeForm'

class App extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <main className="app">
        <WelcomeForm/>
      </main>
    )
  }
}

export default App;
