import React, { Component } from 'react'
import Table from './Table.js'

class App extends Component {
  render() {
    const characters = [
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
    ]

    return (
      <div className="Container">
        <Table characterData={characters}/>
        <h1>Hello, React!</h1>
      </div>
    )
  }
}



export default App;
