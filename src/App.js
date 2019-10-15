import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.scss';
import './variables.scss'

import { getMovies, getCharacters } from './apiCalls/apiCalls'

import CardContainer from './CardContainer/CardContainer'

import WelcomeForm from './WelcomeForm/WelcomeForm'
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      movies:[],
      currentCharacters: [],
      userData: this.props.userData,
      isLoading: true,
      name: '',
      quote: '',
      level: ''

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

userInfo = (name, quote, level) => {
  this.setState({ name: name, quote: quote, level: level})
  // console.log("NAME", name)
  // console.log("QUOTE", quote)
  // console.log("LEVEL", level)

}


getMovieCharacters = (characterUrls) => {
  const charactersInfo = getCharacters(characterUrls)
  // console.log("I HAVE FETCHED CHARACTERS")
  .then(characters => this.setState({currentCharacters: characters}))

  return charactersInfo
}

  render() {
    console.log('STATE', this.state)
    console.log('user method', this.userInfo)
    return (
      <Router>
        <main className="app">
          <Switch>
          <Route exact path='/' render={() => <WelcomeForm {...this.state} getMovieCharacters={this.getMovieCharacters} userInfo={this.userInfo}/>} />
          </Switch>
          <Switch>
          <Route exact path='/movies' render={() => <CardContainer data={this.state.movies} getMovieCharacters={this.getMovieCharacters} name={this.state.name} quote={this.state.quote} level={this.state.level}/> } />
          </Switch>
          <Switch>
          <Route exact path='/movies/moose' render={() => <CardContainer data={this.state.currentCharacters}  getMovieCharacters={this.getMovieCharacters} name={this.state.name} quote={this.state.quote} level={this.state.level}/>} />
          </Switch>
        </main>
      </Router>
    )
  }
}

export default App;
