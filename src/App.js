import React, { Component }from 'react';
// import logo from './logo.svg';
import './App.scss';
import './variables.scss'

import { getPeople, getMovies, getCharacters } from './apiCalls/apiCalls'

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

// getMovieCharacters(characterUrls) {
//   console.log("CLICK CKLICKDSK")
//   // console.log("INTAKE",characterUrls)
//   const firstTenCastMembers = characterUrls.splice(0, 10)
//   console.log("10?", firstTenCastMembers)
//   const firstTenCastInfo = firstTenCastMembers.map(url => getCharacter(url));
//   // this.setState({currentCharacters: firstTenCastInfo})
//   console.log("CastInfo", Promise.all(firstTenCastInfo).then(resp => console.log("AHH", resp)))
//   // Promise.all(firstTenCastInfo).then(characterData => this.setState({currentCharacters: characterData}))
//   // console.log("CastInfo", Promise.all(firstTenCastInfo))
// }

getMovieCharacters = (characterUrls) => {
  console.log("CLICK CKLICKDSK")
  // const charactersInfo = getCharacters(characterUrls)
  const charactersInfo = getCharacters(characterUrls)
  .then(characters => this.setState({currentCharacters: characters}))
  
  // return charactersInfo

  // const charactersInfo = getCharacters(characterUrls)
  // console.log("CHARACTERINFO", charactersInfo)

}

  render() {
    console.log('STATE', this.state)
    return (
      <main className="app">
        <WelcomeForm/>
        <CardContainer data={this.state.movies} findCharacters={this.getMovieCharacters}/>
      </main>
    )
  }
}

export default App;
