/* eslint-disable max-len */
import React, { Component } from 'react'
import director from '../../data/person_content'
import DirectorOfTheDayContainer from '../../layouts/mainPage/DirectorOfTheDayContainer'

class DirectorOfTheDay extends Component {
  state = {
    director: director[Math.floor(Math.random() * director.length)]
  };

  render () {
    const { director } = this.state
    return (
      <DirectorOfTheDayContainer
        photo={director.photo}
        name={director.name}
        placeOfBirth={director.placeOfBirth}
        dateOfBirth={director.dateOfBirth}
        dateOfDeath={director.dateOfDeath}
        shortInfo={director.shortInfo}
      />
    )
  }
};

export default DirectorOfTheDay
