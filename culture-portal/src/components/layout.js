import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { Head } from 'gatsby-plugin-i18next';

import Header from './header';
import Footer from './footer';

import './layout.css';

const Layout = ({ children, data, t }) => (
  <>
    <Head hreflang>
      <title>{t('Gatsby I18next')}</title>
      <meta name="description" content="Example Gatsby site with i18next" />
      <meta name="keywords" content="gatsby, react, i18next" />
    </Head>
    <Header 
      siteTitle={t('This is Gatsby with I18next')}
      navLink1={t('navLink1')}
      navLink2={t('navLink2')}
      navLink3={t('navLink3')}
    />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
        minHeight: `100vh`
      }}
    >
      {children}
    </div>
    <Footer
      footerDescr={t('footerDescr')}
      footerC={t('footerC')}
      footerBtn={t('footerBtn')}
      footerPlacholder={t('footerPlacholder')}
    />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withNamespaces()(Layout);

