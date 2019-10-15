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
      level: '',
      error: ''
    }
  }
  componentDidMount() {
    fetch('https://swapi.co/api/')
      .then(response => response.json())
      .then(data => {
        const { films } = data;
        getMovies(films).then(movies => {
          const moviesByEpisode = movies.sort((a,b) => a.episode_id - b.episode_id)
         
          this.setState({movies: [...moviesByEpisode], isLoading: false})
          
        })
      })
}

userInfo = (name, quote, level) => {
  this.setState({ name: name, quote: quote, level: level})
}

getMovieCharacters = (characterUrls) => {
  this.setState({isLoading: true})
  getCharacters(characterUrls)
  .then(characters => this.setState({currentCharacters: characters, isLoading: false}))
}

setCurrentMovie = () => {

}

handleSubmit = (event) => {
  console.log("INSIDE CARD", event.target)
}

  render() {
    console.log('STATE', this.state)
    console.log('user method', this.userInfo)
    const { movies, name, quote, level, currentCharacters, isLoading } = this.state 
    return (
      <Router>
        <main className="app">
          <Route exact path='/' render={() => 
          <WelcomeForm {...this.state} userInfo={this.userInfo}/>} 
          />
          <Route exact path='/movies' render={() => 
          <CardContainer 
            data={ movies } 
            getMovieCharacters={this.getMovieCharacters} 
            name={ name } 
            quote={ quote } 
            level={ level } 
            isLoading= { isLoading }/> }/>
          <Route exact path='/movies/:id' render={({ match }) => {
            const selectedMovie = movies.find(movie => movie.episode_id === parseInt(match.params.id))
           return (
            <CardContainer 
            data={ currentCharacters}  
            movie={ selectedMovie } 
            name={ name } 
            quote={ quote } 
           level={ level }/> )}
          }/>
        </main>
      </Router>
    )
  }
}

export default App;
