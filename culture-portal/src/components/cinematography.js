import React from 'react';

const Cinematography = ({headerMainPage, welcomeMain}) => (
  <section className='about__portal'
    style={{
      padding: `2rem 0`
    }}
  >
    <h1
      style={{
        textAlign: `center`
      }}
    >{headerMainPage}</h1>
    <p
      style={{
        textAlign: `center`,
        maxWidth: `510px`,
        margin: `0 auto`
      }}
    >{welcomeMain}</p>
  </section>
)

export default Cinematography;