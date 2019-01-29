import React from 'react'
import { Link } from 'gatsby'

import { graphql } from 'gatsby';
import { withNamespaces } from 'react-i18next';
import { withI18next } from 'gatsby-plugin-i18next';

import Search from '../components/searchPage/Search'
import Layout from '../components/layout';

const DirectorsList = ({ t }) => (
  <Layout>
    <Search />
  </Layout>
)

export default withI18next()(withNamespaces()(DirectorsList));

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
