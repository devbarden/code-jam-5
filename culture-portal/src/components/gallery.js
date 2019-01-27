import React, { Component } from "react"
import Slider from "react-slick"

import '../../node_modules/slick-carousel/slick/slick.css'
import '../../node_modules/slick-carousel/slick/slick-theme.css'



class Gallery extends Component {
  constructor(props){
    super(props);
    this.state = {
      slides: props.gallery
    };
  }


  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div
        style={{
          padding: `0 1rem 2rem`
        }}
      >
        <h2
          style={{
            textAlign: `center`
          }}
        > Галерея </h2>
        <Slider {...settings}>
          {this.state.slides.map((slide) => {
            return(
              <div key={slide}
                style={{
                  width: `100px`,
                  height: `100%`
                }}
              >
                <img src={slide}></img>
              </div>
            )
          })}
        </Slider>
      </div>
    );
  }
}

export default Gallery;


// How to use
// <Gallery gallery={gallery}/> gallery array with images