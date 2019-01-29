import React from 'react'
import { Link } from 'gatsby'

import { graphql } from 'gatsby';
import { withNamespaces } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import ListOfWorks from '../components/listOfWorks/listOfWorks'
import TimelinePerson from '../components/timeline/timeline'
import Layout from '../components/layout';

import Persons from './../data/person_content'
import Video from '../components/Video/video'
import Gallery from '../components/Gallery/gallery'
import MapContainer from '../components/Map/map'

class PersonPage extends React.Component {
  componentDidMount () {
    if (!window.localStorage.getItem('id')) {
      window.localStorage.setItem('id', '0')
      this.index = parseInt(window.localStorage.getItem('id'))
      this.personName = Persons[this.index].name
      this.dateOfBirth = Persons[this.index].dateOfBirth
      this.placeOfDeath = Persons[this.index].placeOfBirth
      this.shortInfo = Persons[this.index].shortInfo
      this.personPhoto = Persons[this.index].photo
      this.personGallery = Persons[this.index].gallery
      this.personVideo = Persons[this.index].video
      this.personMap = Persons[this.index].map
    }
  }

  render () {
    return (
      <Layout>
        <h1 style={{ textAlign: 'center' }}>{this.personName}</h1>
        <p>
          {this.personName}
          родился
          {this.dateOfBirth} в городе {this.placeOfDeath}. {this.shortInfo}
        </p>
        <p style={{ textAlign: 'center' }}>
          <img src={this.personPhoto} alt={this.personName} height="300"/>
        </p>
        {/* <TimelinePerson/> */}
        {/* <Gallery gallery={this.personGallery}/> */}
        <Video videoSrc={this.personVideo}/>
        {/* <MapContainer markers={this.personMap}/> */}
        <h3>Работы</h3>
        <ListOfWorks/>
        <Link to="/">Вернуться на главную страницу</Link>
      </Layout>
    )
  }
}

export default withI18next()(withNamespaces()(PersonPage));

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
