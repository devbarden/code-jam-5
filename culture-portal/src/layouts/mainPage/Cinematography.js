import React from 'react'
import { withNamespaces } from 'react-i18next'

const Cinematography = props => {
  const { t } = props

  return (
    <section className='about__portal'>
      <h1>{t('headers.mainPage')}</h1>
      <p>Добро пожаловать на портал белорусского кинематографа.
        <br/>Здесь вы найдёте информацию о белорусских режиссеров,
      их биографию и галерею работ.
      </p>
    </section>
  )
}

export default withNamespaces('translation')(Cinematography)
