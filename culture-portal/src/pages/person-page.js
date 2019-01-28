import React from 'react'
import { Link } from 'gatsby'

import ListOfWorks from '../components/listOfWorks/listOfWorks'
import TimelinePerson from '../components/timeline/timeline'
import Layout from '../layouts/Layout'

import Persons from '../data/person_content'
import Video from '../components/Video/video'
import Gallery from '../components/Gallery/gallery'
import MapContainer from '../components/Map/map'

if (!window.localStorage.getItem('id')) {
  window.localStorage.setItem('id', '0')
}

const index = parseInt(window.localStorage.getItem('id'))
const personName = Persons[index].name
const dateOfBirth = Persons[index].dateOfBirth
const placeOfDeath = Persons[index].placeOfBirth
const shortInfo = Persons[index].shortInfo
const personPhoto = Persons[index].photo
const personGallery = Persons[index].gallery
const personVideo = Persons[index].video
const personMap = Persons[index].map

const PersonPage = () => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>{personName}</h1>
    <p>
      {personName} родился {dateOfBirth} в городе {placeOfDeath}. {shortInfo}
    </p>
    <p style={{ textAlign: 'center' }}>
      <img src={personPhoto} alt={personName} height="300"/>
    </p>
    <TimelinePerson/>
    <Gallery gallery={personGallery}/>
    <Video videoSrc={personVideo}/>
    <MapContainer markers={personMap}/>
    <h3>Работы</h3>
    <ListOfWorks/>
    <Link to="/">Вернуться на главную страницу</Link>
  </Layout>
)

export default PersonPage
