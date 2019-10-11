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
      movies:[],
      currentCharacters: [],
    }
  }
  componentDidMount() {
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => {
        const {people, films} = data;
        // getPeople(people).then(people => this.setState({currentCharacters:people}))
        // console.log("Data:", data)
        getMovies(films).then(movies => this.setState({movies:movies}))
      })
}

getMovieCharacters(characterUrls) {
  console.log(characterUrls)
  
}

  render() {
    console.log('STATE', this.state.movies)
    return (
      <main className="app">
        <WelcomeForm/>
        <CardContainer data={this.state.movies} findCharacters={this.getMovieCharacters}/>
      </main>
    )
  }
}

export default App;
