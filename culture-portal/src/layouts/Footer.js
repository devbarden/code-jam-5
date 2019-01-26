import React from 'react'
import { FaVk, FaFacebookSquare, FaTwitterSquare } from "react-icons/fa";

const Footer = () => (
  <footer className='footer'
    style={{
      background: `#37383b`,
      fontFamily: `Segoe UI, sans-serif`
    }}
  >
    <div className='container'>
      <div className='footer__inner'>
        
      
      <div className='footer__about'>
        <p
          style={{
            color: `#ffffff`,
            fontSize: `0.9rem`,
            marginBottom: `0px`
          }}
        >«Культура.РБ» — гуманитарный просветительский проект, посвященный культуре Беларуси. Мы рассказываем об интересных и значимых событиях и людях в истории кино, а также о народных традициях и памятниках нашей природы в формате просветительских статей, заметок, интервью, новостей и в любых современных интернет-форматах.</p>
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
            <input type='text' placeholder='Введите E-mail' className='footer__input'
              style={{
                background: `#47474b`,
                fontSize: `0.9rem`,
                paddingLeft: `1rem`,
                border: `none`,
                color: `#ffffff`
              }}
            ></input>
            <button className='footer__button'
              style={{
                background: `#ed2324`,
                border: `none`,
                color: `#ffffff`,
                fontSize: `0.8rem`,
                height: `100%`,
                right: `0`
              }}
            >
            Отправить</button>
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
        >© 2013–2019, Все права защищены</span>
        <ul className='social__list'>
          <li className='social__item'>
            <a href='https://social.com' className='social__link'><FaVk /></a>
          </li>
          <li className='social__item'>
            <a href='https://social.com' className='social__link'><FaFacebookSquare /></a>
          </li>
          <li className='social__item'>
            <a href='https://social.com' className='social__link'><FaTwitterSquare /></a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </footer>
)


export default Footer;