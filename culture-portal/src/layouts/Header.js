import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { withNamespaces } from 'react-i18next'

const Header = (props) => {
  const { t, i18n } = props

  const changeLanguage = lng => {
    i18n.changeLanguage(lng)
  };

  return(
    <header
      style={{
        background: `#38393d`,
        fontFamily: `Segoe UI, sans-serif`,
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
            <button onClick={() => changeLanguage('de')}>de</button>
            <button onClick={() => changeLanguage('en')}>en</button>
            <button onClick={() => changeLanguage('ru')}>rus</button>
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

export default withNamespaces('translation')(Header);
