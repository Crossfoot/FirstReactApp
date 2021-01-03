import React, { Component } from 'react'
import Table from './Table.js'

class App extends Component {
   state = { 
     characters: [
      {
          name: 'Charlie',
          job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring Actress', // Shouldn't this be Aspiring?
      },
      {
        name: 'Dennis',
        job: 'Pretzel Man',
      },
    ],
   }

  removeCharacter = index => {
    const { characters } = this.state

    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      })
    })
  }

  render() {
    const { characters } = this.state;

    return (
      <div className="Container">
        <Table characterData={characters} removeCharacter={this.removeCharacter}/>
        <h1>Hello, React!</h1>
      </div>
    )
  }
}



export default App;
