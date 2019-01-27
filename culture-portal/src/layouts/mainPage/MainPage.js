import React, { Fragment } from 'react'
import './mainPage.css'
import Cinematography from './Cinematography'
// eslint-disable-next-line max-len
import DirectorOfTheDay from '../../components/DirectorOfTheDay/DirectorOfTheDay'

const MainPage = () => (
  <Fragment>
    <Cinematography />
    <DirectorOfTheDay />
  </Fragment>
)

export default MainPage
