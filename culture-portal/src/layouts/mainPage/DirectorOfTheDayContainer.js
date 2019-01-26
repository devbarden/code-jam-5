import React from 'react'
import PropTypes from 'prop-types'
import director from '../../data/person_content.json'

const DirectorOfTheDay = ({director}) => (
    <section className="director-of-the-day">
        <h1 style={{
            marginLeft: '160px'
        }}>Director of the day</h1>
        <div className="director-info">
            <div className="director-photo">
                <img src={director.photo} alt="Владимир Корш-Саблин"/>
            </div>
            <div className="director-biography">
                <h2>{director[0].name}</h2>
                <p>Место Рождения:
                    <span style={{
                        fontWeight : 'bold',
                        marginLeft: '3px'
                    }}>{director[0].placeOfBirth}
                    </span></p>
                <p>Дата Рождения:
                    <span style={{
                    fontWeight : 'bold',
                    marginLeft: '3px'
                }}>{director[0].dateOfBirth}</span> г.
                </p>
                <p>Дата Смерти:
                    <span style={{
                        fontWeight : 'bold',
                        marginLeft: '3px'
                    }}>{director[0].dateOfDeath}</span> г.
                </p>
                <p style={{
                    maxWidth: '500px'
                }}>{director[0].shortInfo}</p>

            </div>
        </div>
    </section>
)

DirectorOfTheDay.propTypes = {
    director: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default DirectorOfTheDay