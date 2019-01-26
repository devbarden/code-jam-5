import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Persons from '../data/person_content'

// const IND = 0
const name = Persons[0].name
const dateOfBirth = Persons[0].dateOfBirth
// const dateOfDeath = Persons[0].dateOfDeath
const placeOfDeath = Persons[0].placeOfBirth
const shortInfo = Persons[0].shortInfo

const PersonPage = () => (
  <Layout>
    <SEO title={name} />
    <h1>{name}</h1>
    <p>{name} родился {dateOfBirth} в {placeOfDeath}. {shortInfo}</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default PersonPage
