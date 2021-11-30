import React from 'react'
import "./Hero.scss";
import slider1 from '../../assets/np1.jpeg'
import slider2 from '../../assets/np2.jpg'
import slider3 from '../../assets/np3.jpeg'
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
        showIndicators={false}
        interval={3000}>
        <div>
          <img src={slider1} />
        </div>
        <div>
          <img src={slider2} />
        </div>
        <div>
          <img src={slider3} />
        </div>
      </Carousel>
    </div>
  )
}
