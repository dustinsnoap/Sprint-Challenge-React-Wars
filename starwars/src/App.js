import React, { Component } from 'react';
import CharacterCards from './components/character-cards/cards'
import './reset.css'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }
  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  render() {
    console.log(this.state)    
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterCards characters={this.state.starwarsChars}/>
      </div>
    );
  }
}

export default App;
