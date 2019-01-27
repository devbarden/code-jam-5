import React from 'react'
import ModalVideo from 'react-modal-video'
import { Button } from 'reactstrap'

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
    this.setState({ isOpen: true })
  }

  render () {
    return (
      <div
        style={{
          display: `flex`,
          margin: `3rem 0`
        }}
      >
        <ModalVideo
          channel='youtube'
          isOpen={this.state.isOpen}
          videoId={this.state.videoSrc.videoSrc}
          onClose={() => this.setState({ isOpen: false })}
        />
        <Button
          color='outline-danger'
          onClick={this.openModal}
          style={{ margin: '0 auto' }}
        >Посмотеть видео</Button>
      </div>
    )
  }
}

// How to use
// <Vidoe videoSrc={videoSrc}/> videoSrc === 'String'

export default Video
