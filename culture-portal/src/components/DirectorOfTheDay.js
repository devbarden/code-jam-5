/* eslint-disable max-len */
import React, { Component } from 'react'
import director from './../data/person_content'
import DirectorOfTheDayContainer from './directorOfTheDayContainer.js'

class DirectorOfTheDay extends Component {
  state = {
    director: director[Math.floor(Math.random() * director.length)]
  };

  render () {
    const { director } = this.state
    console.log(director);
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
