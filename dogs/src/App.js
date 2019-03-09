import React, { Component } from 'react';
import Dogs from './components/dogs/dogs'
import './reset.css'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }
  componentDidMount() {
    this.getCharacters('https://dog.ceo/api/breed/hound/images/random/10000');
  }
  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ dogs: data.message });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  render() {
    return (
      <div className="App">
        <Dogs dogs={this.state.dogs}/>
      </div>
    );
  }
}

export default App;
