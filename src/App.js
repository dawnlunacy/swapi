import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.scss';
import './variables.scss'
import { getPeople, getMovies } from './apiCalls/apiCalls'
import CardContainer from './CardContainer/CardContainer'

import WelcomeForm from './WelcomeForm/WelcomeForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      movies:[]
    }
  }
  componentDidMount(){
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => {
        const {people, films} = data;
        getPeople(people).then(people => this.setState({people:people}))
        console.log("Data:", data)
        console.log("films", films)
        getMovies(films).then(movies => this.setState({movies:movies}))
      })
      // .then(console.log(this.state))
  }

  render() {
    console.log('STATE', this.state.movies)
    return (
      <main className="app">
        <WelcomeForm/>
        <CardContainer data={this.state.people}/>
      </main>
    )
  }
}

export default App;
