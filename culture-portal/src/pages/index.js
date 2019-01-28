import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../layouts/Layout'
import MainPage from '../layouts/mainPage/MainPage'
import { withNamespaces } from 'react-i18next'
import { withI18next } from 'gatsby-plugin-i18next'

const IndexPage = () => (
  <Layout>
    <MainPage/>
  </Layout>
)

export default withI18next()(withNamespaces()(IndexPage))
