import Persons from '../../data/person_content'
import React, { Component } from 'react'

class ListOfWorks extends Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [...Persons],
      id: '',
      index: ''
    }
  }

  componentDidMount () {
    this.setState({
      id: window.localStorage.getItem('id'),
      index: parseInt(window.localStorage.getItem('id'), 10)
    })
  }

  render () {
    return (
      <ul>
        {this.state.index
          ? this.state.persons[this.state.index].works.map((txt, id) => (
            <li key={id.toString()} style={{ listStyle: 'circle' }}>
              {txt}
            </li>
          ))
          : <div></div>}
      </ul>
    )
  }
}

export default ListOfWorks