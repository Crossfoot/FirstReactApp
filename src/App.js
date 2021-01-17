import React, { Component } from 'react'
import Table from './Table.js'
import Form from './Form.js';
import FetchDemo from './FetchDemo.js'
import axios from 'axios'

class App extends Component {
   state = { 
     characters: []
   };

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users')
      .then(res => {
        const characters = res.data.users_list;
        this.setState({ characters });
      })
      .catch(function (error) {
        //Not handling, just logging
        console.log(error);
      });
  }

  makePostCall(character) {
    return axios.post('http://localhost:5000/users', character)
      .then(function (response) {
        console.log(response);
        this.setstate(response.data);
        return (response.status == 201);
      })
      .catch(function (error) {
        console.log(error);
        return false;
      });
  }

  handleSubmit = character => {
    this.makePostCall(character).then( callResult => {
      if (callResult == true) {
        this.setState({characters: [...this.state.characters, character] });
      }
    });
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="Container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <Form handleSubmit={this.handleSubmit} />
        <FetchDemo subreddit={"calpoly"}/> 
      </div>
    )
  }
}



export default App;
