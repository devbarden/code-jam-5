import React from 'react'
import { Link } from 'gatsby'

import ListOfWorks from '../components/listOfWorks/listOfWorks'
import TimelinePerson from '../components/timeline/timeline'

import Layout from '../components/layout'
import SEO from '../components/seo'

import Layout from '../layouts/Layout'
import Persons from '../data/person_content'

// const IND = 0
const personName = Persons[0].name
const dateOfBirth = Persons[0].dateOfBirth
// const dateOfDeath = Persons[0].dateOfDeath
const placeOfDeath = Persons[0].placeOfBirth
const shortInfo = Persons[0].shortInfo
const works = Persons[0].Works
const personPhoto = Persons[0].photo

const PersonPage = () => (
  <Layout>
    <SEO title={personName}/>
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
