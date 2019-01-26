import React from 'react'
import { Link } from 'gatsby'

import Search from '../components/searchPage/Search'
import Layout from '../components/layout'
import SEO from '../components/seo'

const ThirdPage = () => (
  <Layout>
    <SEO title="Page three" />
    <Search />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ThirdPage
