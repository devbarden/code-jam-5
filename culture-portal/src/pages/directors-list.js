import React from 'react'
import { Link } from 'gatsby'

import Search from '../components/searchPage/Search'
import Layout from '../components/layout';

const DirectorsList = () => (
  <Layout>
    <Search />
    <Link to="/">Вернуться на главную страницу</Link>
  </Layout>
)

export default DirectorsList
