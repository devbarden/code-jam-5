import React from 'react';
import { Link } from 'gatsby-plugin-i18next';

import LanguageSwitcher from './languageSwitcher';

const Header = ({ siteTitle, navLink1, navLink2, navLink3 }) => (
  <div
    style={{
      background: `#38393d`,
      fontFamily: `Segoe UI, sans-serif`,
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <nav className='nav'>
    <ul className='nav__list'>
      <li className='nav__item'>
        <Link className='nav__link'
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          <div>{navLink1}</div>
        </Link>
      </li>
      <li className='nav__item'>
        <Link className='nav__link'
          to="/directors-list"
          style={{
            textDecoration: `none`,
          }}
        >
          <div>{navLink2}</div>
        </Link>
      </li>
      <li className='nav__item'>
        <Link
          className='nav__link'
          to="/team"
          style={{
            textDecoration: `none`,
          }}
        >
          <div>{navLink3}</div>
        </Link>
      </li>
    </ul>
  </nav>
    </div>
    <div
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
      }}
    >
      <LanguageSwitcher />
    </div>
  </div>
);

export default Header;

