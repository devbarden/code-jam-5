import React from 'react';
import Layout from '../components/layout';
import { withI18next } from 'gatsby-plugin-i18next';
import { withNamespaces } from 'react-i18next';
import { graphql } from 'gatsby';

const NotFoundPage = ({ t }) => (
  <Layout>
    <h1>{t('NOT FOUND')}</h1>
    <p>{t('You just hit a route that doesn\'t exist... the sadness.')}</p>
  </Layout>
);

export default withI18next()(withNamespaces()(NotFoundPage));

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
