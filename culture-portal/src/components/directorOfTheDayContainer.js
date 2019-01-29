import React from 'react'

const DirectorOfTheDayContainer = ({ photo, name, placeOfBirth, dateOfBirth, dateOfDeath, shortInfo, 
  mainDirectorDayTitle, mainDirectorDayBornPlace, mainDirectorDayBornData, mainDirectorDatDeathDate }) => (
  <section className="director-of-the-day">
    <div className="director-info">
      <div className="director-photo">
        <img src={photo} alt={name}/>
      </div>
      <div className="director-biography">
        <h2 className='director-of-the-day-heading'>{mainDirectorDayTitle}</h2>
        <h2>{name}</h2>
        <p>{mainDirectorDayBornPlace}<span>{placeOfBirth}</span></p>
        <p>{mainDirectorDayBornData}<span>{dateOfBirth}</span> г.</p>
        <p>{mainDirectorDatDeathDate}<span>{dateOfDeath}</span> г.</p>
        <p className='short-info'>{shortInfo}</p>
      </div>
    </div>
  </section>
)

export default DirectorOfTheDayContainer;