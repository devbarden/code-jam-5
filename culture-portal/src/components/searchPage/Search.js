import React, { Component } from 'react'

import './Search.css'
import data from '../../../../person_content.json'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [...data],
      search: '',
      order: '',
    }
    this.searchByName = this.searchByName.bind(this)
    this.setSort = this.setSort.bind(this)
  }

  searchByName(e) {
    let value = e.target.value

    this.setState({ search: value })
  }

  setSort(e) {
    let value = e.target.value

    this.setState({ order: value })
  }

  render() {
    let copyArray = [...this.state.persons]

    if (this.state.order) {
      let check = this.state.order === 'az' ? 1 : -1
      copyArray.sort((a, b) => {
        if (a.name > b.name) {
          return check
        } else {
          return -check
        }
      })
    }

    if (this.state.search) {
      copyArray = copyArray.filter(person => {
        return person.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      })
    }

    return (
      <div className="App">
        <input placeholder="Поиск по имени" onChange={this.searchByName} />
        <select onChange={this.setSort}>
          <option value="az">Сортировать по имени: A-Z</option>
          <option value="za">Сортировать по имени: Z-A</option>
        </select>
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
