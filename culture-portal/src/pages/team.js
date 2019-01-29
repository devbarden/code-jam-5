import React from 'react'
import * as FontAwesome from 'react-icons/fa'
import { graphql } from 'gatsby';

import { withNamespaces } from 'react-i18next'
import { withI18next } from 'gatsby-plugin-i18next'

import Layout from '../components/layout';

const TeamPage = ({ t }) => (
    <Layout>
      <h2
        className="text-center"
        style={{ margin: '30px' }}>
        {t('headerTeamPage')}
      </h2>
      <div className="row">
        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars0.githubusercontent.com/u/42998223?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">{t('developerName1')}</p>
          <a href="https://github.com/devbarden" className="icons-developer">
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>

        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars2.githubusercontent.com/u/40957866?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">{t('developerName2')}</p>
          <a href="https://github.com/VicRodzko" className="icons-developer">
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>

        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars3.githubusercontent.com/u/27624545?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">{t('developerName3')}</p>
          <a href="https://github.com/Heat98" className="icons-developer">
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>

        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars2.githubusercontent.com/u/29536981?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">{t('developerName4')}</p>
          <a href="https://github.com/sokol147" className="icons-developer">
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>

        <div className="col-sm">
          <img
            className="rounded-circle developer-img"
            src="https://avatars0.githubusercontent.com/u/22434682?s=460&v=4"
            alt="developer"
          />
          <p className="text-center">{t('developerName5')}</p>
          <a
            href="https://github.com/mikhailnakanechny"
            className="icons-developer"
          >
            <FontAwesome.FaGithub className="icons-developer" />
          </a>
        </div>
      </div>
    </Layout>
  )

export default withI18next()(withNamespaces()(TeamPage));

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...TranslationFragment
    }
  }
`;
