import React from 'react'
import { Link } from 'gatsby'

import ListOfWorks from '../components/listOfWorks/listOfWorks'
import TimelinePerson from '../components/timeline/timeline'

import Layout from '../layouts/Layout'
// import SEO from '../components/seo'

import Persons from '../data/person_content'

// const IND = 0
if (!localStorage.getItem('id')){
    localStorage.setItem('id','0')
}

const index = parseInt(localStorage.getItem('id'))
const personName = Persons[index].name
const dateOfBirth = Persons[index].dateOfBirth
const dateOfDeath = Persons[index].dateOfDeath
const placeOfDeath = Persons[index].placeOfBirth
const shortInfo = Persons[index].shortInfo
const works = Persons[index].works
const personPhoto = Persons[index].photo

const PersonPage = () => (
  <Layout>
    <h1 style={{ textAlign: 'center' }}>{personName}</h1>
    <p>{personName} родился {dateOfBirth}
    в городе {placeOfDeath}. {shortInfo}</p>
    <p style={{ textAlign: 'center' }}>
      <img src={personPhoto} alt={personName} height="300"/>
    </p>
    <TimelinePerson/>
    <h3>Работы</h3>
    <ListOfWorks/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PersonPage
