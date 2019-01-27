import React from 'react'
import ModalVideo from 'react-modal-video'

import './video.css'

class Video extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      isOpen: false,
      videoSrc: props
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal () {
    this.setState({isOpen: true})
  }

  render () {
    return (
      <div
        style={{
          display: `flex`
        }}
      >
        <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId={this.state.videoSrc.videoSrc} onClose={() => this.setState({isOpen: false})} />
        <button onClick={this.openModal}
          style={{
            margin: `1rem auto`,
            cursor: `pointer`,
            border: `2px solid rgb(55, 56, 59)`,
            color: '#ffffff',
            background: `rgb(237, 35, 36)`,
            padding: `5px 10px`,
            borderRadius: `5px`,
            transition: `.3s`
          }}
        >Посмотеть видео</button>
      </div>
    )
  }
}

export default Video;

// How to use
// <Vidoe videoSrc={videoSrc}/> videoSrc === 'String'