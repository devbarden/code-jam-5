import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import Persons from '../../data/person_content'
import React, { Component } from 'react'

class TimelinePerson extends Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [...Persons],
      id: localStorage.getItem('id'),
      index: parseInt(localStorage.getItem('id'), 10)
    }
  }

  render () {
    let listItems = this.state.persons[this.state.index].timelineBiography
      .map(d =>
        <TimelineItem key={this.state.id} dateText={d.date} >
          <p>{d.event}</p>
        </TimelineItem>
      )

    return (
      <Timeline lineColor={'#ddd'}>
        {listItems}
      </Timeline>
    )
  }
}

export default TimelinePerson
