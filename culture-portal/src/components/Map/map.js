import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react'

export class MapContainer extends Component {
  render () {
    const markers = this.props.markers
    return (
      <div
        style={{
          height: `300px`,
          position: `relative`,
          marginBottom: `1rem`
        }}
      >
        <Map
          google={this.props.google}
          zoom={6}
          initialCenter={{ lat: 54.322518, lng: 31.075582 }}
          style={{
            width: '90%',
            height: '100%',
            position: 'relative',
            left: `50%`,
            transform: `translateX(-50%)`
          }}
          onClick={this.onMapClicked}
        >
          {markers.map(point => {
            return (
              <Marker
                key={point.lat.toString()}
                position={{
                  lat: point.lat,
                  lng: point.lng
                }}
                title={point.title}
                name={point.name}
              />
            )
          })}
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: ('AIzaSyAlredggxm1SRQcekdfVsk6oqFr4Wj-JnM')
})(MapContainer)
