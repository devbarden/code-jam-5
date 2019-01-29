import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import Persons from './../../data/person_content'
import React, { Component } from 'react'

class TimelinePerson extends Component {
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
    let listItems = this.state.index
      ? this.state.persons[this.state.index].timelineBiography.map((d, ind) => (
        <TimelineItem key={String(ind)} dateText={d.date}>
          <p key={String(ind)}>{d.event}</p>
        </TimelineItem>
      ))
      : null

    return <Timeline lineColor={'#ddd'}>{listItems}</Timeline>
  }
}

export default TimelinePerson
