import React, { Fragment } from 'react';
import mainPage from './mainPage.css';

import Cinematography from './Cinematography';
import DirectorOfTheDay from '../../components/DirectorOfTheDay/DirectorOfTheDay';

const MainPage = () => (
    <Fragment>
       <Cinematography />
        <DirectorOfTheDay />
    </Fragment>
);

export default MainPage;