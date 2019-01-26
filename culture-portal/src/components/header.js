import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = () => (
  <header
    style={{
      background: `#38393d`,
      fontFamily: `Segoe UI, sans-serif`
    }}
  >
    <div className='container'>
      <div className='header__inner'>
        <nav className='nav'>
          <ul className='nav__list'>
            <li className='nav__item'>
              <Link className='nav__link'
                to="/"
                style={{
                  textDecoration: `none`,
                }}
              >
                Домой
              </Link>
            </li>
            <li className='nav__item'>
              <Link className='nav__link'
                to="/page-2"
                style={{
                  textDecoration: `none`,
                }}
              >
                Список режисерова
              </Link>
            </li>
          </ul>
          <ul className='language__list'>
            <li className='language__item'>
              <img src='https://image.flaticon.com/icons/svg/197/197408.svg' className='language__image'></img>
            </li>
            <li className='language__item'>
              <img src='https://image.flaticon.com/icons/svg/197/197374.svg' className='language__image'></img>
            </li>
            <li className='language__item'>
              <img src='https://image.flaticon.com/icons/svg/197/197527.svg' className='language__image'></img>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header