import React from 'react';
import { graphql } from 'gatsby';
import { withNamespaces } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import Layout from '../components/layout';

import Cinematography from '../components/cinematography';
import DirectorOfTheDayContainer from '../components/directorOfTheDayContainer';

const IndexPage = ({ t }) => (
  <Layout>
    <Cinematography 
      headerMainPage={t('headerMainPage')}
      welcomeMain={t('welcomeMain')}
    />
    <DirectorOfTheDayContainer
      mainDirectorDayTitle={t('mainDirectorDayTitle')}
      mainDirectorDayBornPlace={t('mainDirectorDayBornPlace')}
      mainDirectorDayBornData={t('mainDirectorDayBornData')}
      mainDirectorDatDeathDate={t('mainDirectorDatDeathDate')}
    />
  </Layout>
);

export default withI18next()(withNamespaces()(IndexPage));

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;

