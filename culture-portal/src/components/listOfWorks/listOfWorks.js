import Persons from '../../data/person_content'
import React, { Component } from 'react'

class PersonTimeline extends Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [...Persons],
    }
  }

  render () {
    return (
      <ul>
        {this.state.persons[0].Works.map(txt => <li>{txt}</li>)}
      </ul>
    )
  }
}

export default PersonTimeline
