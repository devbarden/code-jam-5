import React from 'react'
import PropTypes from 'prop-types'

// eslint-disable-next-line max-len
const DirectorOfTheDayContainer = ({ photo, name, placeOfBirth, dateOfBirth, dateOfDeath, shortInfo }) => (
  <section className="director-of-the-day">
    <div className="director-info">
      <div className="director-photo">
        <img src={photo} alt={name}/>
      </div>
      <div className="director-biography">
        <h2 className='director-of-the-day-heading'>Режиссёр дня</h2>
        <h2>{name}</h2>
        <p>Место Рождения:<span>{placeOfBirth}</span></p>
        <p>Дата Рождения:<span>{dateOfBirth}</span> г.</p>
        <p>Дата Смерти:<span>{dateOfDeath}</span> г.</p>
        <p className='short-info'>{shortInfo}</p>
      </div>
    </div>
  </section>
)

DirectorOfTheDayContainer.propTypes = {
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeOfBirth: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  dateOfDeath: PropTypes.string.isRequired,
  shortInfo: PropTypes.string.isRequired
}

export default DirectorOfTheDayContainer
