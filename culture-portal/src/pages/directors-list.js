import React from 'react'
import { Link } from 'gatsby'

import Search from '../components/searchPage/Search'
import Layout from '../layouts/Layout'

const DirectorsList = () => (
  <Layout>
    <Search />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DirectorsList
