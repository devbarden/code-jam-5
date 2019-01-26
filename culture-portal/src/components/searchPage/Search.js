import React, { Component } from 'react'

import './Search.css'
import data from './person_content.json'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = { persons: [...data], search: '' }
    console.log(this.state)
    this.searchByName = this.searchByName.bind(this)
  }

  searchByName(e) {
    var value = e.target.value

    this.setState({ search: value })
  }

  render() {
    let copyArray = [...this.state.persons]

    if (this.state.search) {
      copyArray = copyArray.filter(person => {
        return person.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      })
    }

    return (
      <div className="App">
        <input placeholder="Поиск" onChange={this.searchByName} />
        <ul>
          {copyArray.map(person => (
            <li key={person.dateOfBirth}>{person.name}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default Search
