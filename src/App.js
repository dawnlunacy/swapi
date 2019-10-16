import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.scss';
import './variables.scss'

import { getMovies, getCharacters } from './apiCalls/apiCalls'

import CardContainer from './CardContainer/CardContainer'

import WelcomeForm from './WelcomeForm/WelcomeForm'
import { BrowserRouter as Router, Route } from 'react-router-dom';



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
        getMovies().then(movies => {
          this.setState({movies, isLoading: false})
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

  render() {
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
           level={ level }
           isLoading= { isLoading }/> )}
          }/>
        </main>
      </Router>
    )
  }
}

export default App;
