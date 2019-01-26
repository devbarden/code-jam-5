import React, { Component } from 'react'

import './Search.css'
import data from '../../data/person_content.json'

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
      <div className="search">
        <div className="search__block__input">
          <input placeholder="Поиск по имени" onChange={this.searchByName} />
          <div>
            <label className="select-label">Сортировать по имени:</label>
            <select
              onChange={this.setSort}
              className="cs-select cs-skin-rotate"
            >
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
        </div>
        <div className="search__block__list">
          {copyArray.map(person => (
            <div className="search__block__one" key={person.dateOfDeath}>
              <div>
                <div>
                  <span>Имя:</span> {person.name}
                </div>
                <div>
                  <span>Место рождения:</span> {person.placeOfBirth}
                </div>
                <div>
                  <span> Дата рождения:</span> {person.dateOfDeath}
                </div>
              </div>
              <div>
                <img
                  src={person.photo}
                  alt={person.name}
                  width="100px"
                  height="100px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default Search
