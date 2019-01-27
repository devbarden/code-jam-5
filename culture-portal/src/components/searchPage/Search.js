import React, { Component } from 'react'

import './Search.css'
import data from '../../data/person_content.json'

class Search extends Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [...data],
      search: '',
      order: '',
      orderInput: 'name'
    }

    this.searchByName = this.searchByName.bind(this)
    this.setSort = this.setSort.bind(this)
    this.setInputSort = this.setInputSort.bind(this)
    this.linkToPersonPage = this.linkToPersonPage.bind(this)
  }

  searchByName (e) {
    let value = e.target.value

    this.setState({ search: value })
  }

  setSort (e) {
    let value = e.target.value

    this.setState({ order: value })
  }

  setInputSort (e) {
    let value = e.target.value

    this.setState({ orderInput: value })
  }

  linkToPersonPage (id) {
    window.localStorage.setItem('id', id)
    window.location.assign('/person-page')
  }

  render () {
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
      let checkInput
      if (this.state.orderInput) {
        checkInput = this.state.orderInput === 'name' ? 'name' : 'placeOfBirth'
      }

      copyArray = copyArray.filter(person => {
        return person[checkInput]
          .toLowerCase()
          .includes(this.state.search.toLowerCase())
      })
    }

    return (
      <div className="search">
        <div className="search__block">
          <div className="search__block__cnt">
            <input placeholder="Поиск по:" onChange={this.searchByName} />
            <select onChange={this.setInputSort} className="">
              <option value="name">имени</option>
              <option value="place">локации</option>
            </select>
          </div>
          <div>
            <label className="select-label">Сортировать по имени:</label>
            <select onChange={this.setSort}>
              <option value="az">A-Z</option>
              <option value="za">Z-A</option>
            </select>
          </div>
        </div>
        <div className="search__block__list">
          {copyArray.map(person => (
            <div
              className="search__block__one"
              key={person.id}
              onClick={() => this.linkToPersonPage(person.id)}
            >
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
