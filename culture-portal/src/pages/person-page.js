import React from 'react'
import { Link } from 'gatsby'

import ListOfWorks from '../components/listOfWorks/listOfWorks'
import TimelinePerson from '../components/timeline/timeline'

import Layout from '../layouts/Layout'
// import SEO from '../components/seo'

import Persons from '../data/person_content'
import Video from '../components/Video/video'
// import Gallery from '../components/Gallery/gallery'
//
// import '../../node_modules/slick-carousel/slick/slick.css'
// import '../../node_modules/slick-carousel/slick/slick-theme.css'

// const IND = 0
if (!window.localStorage.getItem('id')) {
  window.localStorage.setItem('id', '0')
}

const index = parseInt(window.localStorage.getItem('id'))
const personName = Persons[index].name
const dateOfBirth = Persons[index].dateOfBirth
const dateOfDeath = Persons[index].dateOfDeath
const placeOfDeath = Persons[index].placeOfBirth
const shortInfo = Persons[index].shortInfo
const works = Persons[index].works
const personPhoto = Persons[index].photo
const personGallery = Persons[index].gallery
const personVideo = Persons[index].video

const PersonPage = () => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>{personName}</h1>
    <p>{personName} родился {dateOfBirth}
    в городе {placeOfDeath}. {shortInfo}</p>
    <p style={{ textAlign: 'center' }}>
      <img src={personPhoto} alt={personName} height="300"/>
    </p>
    <TimelinePerson/>
    <Video videoSrc={personVideo}/>
    <h3>Работы</h3>
    <ListOfWorks/>
    <Link to="/">Вернуться на главную страницу</Link>
  </Layout>
)

export default PersonPage

// {/*<Gallery gallery={personGallery}/>*/}
// <Video videoSrc={personVideo}/>
