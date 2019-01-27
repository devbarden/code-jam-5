import Persons from '../../data/person_content'
import React, { Component } from 'react'

class PersonTimeline extends Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [...Persons],
      id: localStorage.getItem('id'),
      index: parseInt(localStorage.getItem('id'), 10)
    }
  }

  render () {
    return (
      <ul>
        {this.state.persons[this.state.index].works.map(txt => <li>{txt}</li>)}
      </ul>
    )
  }
}

export default PersonTimeline
