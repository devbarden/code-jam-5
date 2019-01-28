import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { withNamespaces } from 'react-i18next'
import { withI18next } from 'gatsby-plugin-i18next'

const Header = props => {
  const { t, i18n } = props

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  }

  return (
    <header
      style={{
        background: `#38393d`,
        fontFamily: `Segoe UI, sans-serif`,
      }}
    >
      <div className='container'>
        <div className='header__inner'
          style={{
            display: `flex`,
            padding: `1rem 0`
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
                  <div>{t('navigation.part1')}</div>
                </Link>
              </li>
              <li className='nav__item'>
                <Link className='nav__link'
                  to="/directors-list"
                  style={{
                    textDecoration: `none`,
                  }}
                >
                  <div>{t('navigation.part2')}</div>
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
                  <div>{t('navigation.part3')}</div>
                </Link>
              </li>
            </ul>
          </nav>
          <div className='language__list'>
            <button
              onClick={() => changeLanguage('be')}
              className='language__item'>
              <img
                src='https://image.flaticon.com/icons/svg/197/197527.svg'
                alt='by language'
                className='language__image'></img>
            </button>
            <button
              onClick={() => changeLanguage('en')}
              className='language__item'>
              <img
                src='https://image.flaticon.com/icons/svg/197/197374.svg'
                alt='en language'
                className='language__image'></img>
            </button>
            <button
              onClick={() => changeLanguage('ru')}
              className='language__item'>
              <img
                src='https://image.flaticon.com/icons/svg/197/197408.svg'
                alt='ru language'
                className='language__image'></img>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withI18next()(withNamespaces()(Header))
