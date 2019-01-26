import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react'
import Persons from '../../data/person_content'
import React, { Component } from 'react'

class TimelinePerson extends Component {
  constructor (props) {
    super(props)
    this.state = {
      persons: [...Persons],
    }
  }

  render () {
    let listItems = this.state.persons[0].timelineBiography
      .map(d =>
        <TimelineItem key="001" dateText={d.date} >
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
