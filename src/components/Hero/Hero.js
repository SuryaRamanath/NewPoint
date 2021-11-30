import React from 'react'
import "./Hero.scss";
import slider1 from '../../assets/slider.jpg'
import slider2 from '../../assets/slider2.jpg'
import slider5 from '../../assets/slider5.jpg'
import slider4 from '../../assets/slider4.jpeg'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Hero() {
  return (
    <div className="slider-container">
      <Carousel showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={2000}>
        <div>
          <img src={slider2} />
        </div>
        <div>
          <img src={slider5} />
        </div>
        <div>
          <img src={slider4} />
        </div>
      </Carousel>
    </div>
  )
}
