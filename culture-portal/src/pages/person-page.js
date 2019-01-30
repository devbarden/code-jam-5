import React, { Component } from 'react'
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

class PersonPage extends Component {
    constructor (props) {
        super(props)
        this.state = {
            connect: false
        }
    }

    componentDidMount () {
        this.setState({
            connect: true,
        })
    }

    render () {
        if (this.state.connect) {
            if (!window.localStorage.getItem('id')) {
                window.localStorage.setItem('id', '0')
            }

            var index = parseInt(window.localStorage.getItem('id'))
            var personName = Persons[index].name
            var dateOfBirth = Persons[index].dateOfBirth
            var placeOfDeath = Persons[index].placeOfBirth
            var shortInfo = Persons[index].shortInfo
            var personPhoto = Persons[index].photo
            var personGallery = Persons[index].gallery
            var personVideo = Persons[index].video
            var personMap = Persons[index].map
        }

        return (this.state.connect?<Layout>
            <h1 style={{ textAlign: 'center' }}>{personName}</h1>
            <p>
                {personName} родился {dateOfBirth} в городе {placeOfDeath}. {shortInfo}.
            </p>
            <p style={{ textAlign: 'center' }}>
                <img src={personPhoto} alt={personName} height="300"/>
            </p>
            <TimelinePerson/>
            <Gallery gallery={personGallery}/>
            <Video videoSrc={personVideo}/>
            <MapContainer markers={personMap}/>
            <h3>Режиссерские Работы</h3>
            <ListOfWorks/>
            <Link to="/">Вернуться на главную страницу</Link>
        </Layout>:<div></div>)
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
