import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.scss';
import './variables.scss'
import { getPeople, getSpecies } from './apiCalls/apiCalls'
import CardContainer from './CardContainer/CardContainer'

import WelcomeForm from './WelcomeForm/WelcomeForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: []
    }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => {
        const {people} = data;
        getPeople(people).then(people => this.setState({people:people}))
      })

}

  

  render() {
    console.log('STATE', this.state.people)
    return (
      <main className="app">
        <WelcomeForm/>
        <CardContainer data={this.state.people}/>
      </main>
    )
  }
}

export default App;
