import React from 'react';

const Footer = ({footerDescr, footerC, footerBtn, footerPlacholder}) => (
  <footer className='footer'
      style={{
        background: `#37383b`,
        fontFamily: `Segoe UI, sans-serif`,
      }}
    >
      <div className='container'
        style={{
          maxWidth: `960px`,
          margin: `0 auto`,
          padding: `1rem`
        }}
      >
        <div className='footer__inner'>
          <div className='footer__about'>
            <p
              style={{
                color: `#ffffff`,
                fontSize: `0.9rem`,
                margin: `15px 0px 0px`
              }}
            >{footerDescr}
            </p>
          </div>
          <div className='footer__mail'>
            <form
              style={{
                marginBottom: `0`
              }}
            >
              <div
                style={{
                  display: `flex`,
                  position: `relative`
                }}
              >
                <input
                  type='text'
                  placeholder={footerPlacholder}
                  className='footer__input'
                  style={{
                    background: `#47474b`,
                    fontSize: `0.9rem`,
                    paddingLeft: `1rem`,
                    margin: `15px 0px 0px`,
                    border: `none`,
                    color: `#ffffff`
                  }}
                ></input>
                <button className='footer__button'
                  style={{
                    background: `#ed2324`,
                    border: `none`,
                    color: `#ffffff`,
                    fontSize: `0.9rem`,
                    margin: `15px 0px 0px`,
                    height: `100%`,
                    right: `0`
                  }}
                >{footerBtn}</button>
              </div>
            </form>
          </div>
          <div className='footer__copyright'
            style={{
              display: `flex`,
            }}
          >
            <span
              style={{
                color: `#ffffff`
              }}
            >© 2013–2019, {footerC}</span>
            {/* <ul className='social__list'>
              <li className='social__item'>
                <a
                  href='https://vk.com'
                  className='social__link'>
                  <FaVk />
                </a>
              </li>
              <li className='social__item'>
                <a
                  href='https://facebook.com'
                  className='social__link'>
                  <FaFacebookSquare />
                </a>
              </li>
              <li className='social__item'>
                <a
                  href='https://twitter.com'
                  className='social__link'>
                  <FaTwitterSquare />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </footer>
)

export default Footer;