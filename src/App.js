import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.scss';
import './variables.scss'

import { getMovies, getCharacters } from './apiCalls/apiCalls'

import CardContainer from './CardContainer/CardContainer'

import WelcomeForm from './WelcomeForm/WelcomeForm'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';


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
        const { films } = data;
        getMovies(films).then(movies => {
          // console.log("MOVIES", movies.sort((a,b) => a.episode_id - b.episode_id))
          const moviesByEpisode = movies.sort((a,b) => a.episode_id - b.episode_id)
          this.setState({movies: [...moviesByEpisode]})
        })
      })
}

getMovieCharacters = (characterUrls) => {
  const charactersInfo = getCharacters(characterUrls)
  .then(characters => this.setState({currentCharacters: characters}))

  return charactersInfo
}

  render() {
    console.log('STATE', this.state)
    return (
      <Router>
        <main className="app">
          <nav>

          </nav>
          <Switch>
          <Route exact path='/' render={(props) => <WelcomeForm {...props} getMovieCharacters={this.getMovieCharacters}/>} />
          </Switch>
        {/* <WelcomeForm/>
        <CardContainer data={this.state.movies} findCharacters={this.getMovieCharacters}/> */}
        </main>
      </Router>
    )
  }
}

export default App;
