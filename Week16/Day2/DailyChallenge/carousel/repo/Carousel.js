import React, { Component } from 'react';
import { createRoot } from 'react-dom/client';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './carousel.css'

class DemoCarousel extends Component {
  render() {
    return (
      <Carousel className='carousel-wrapper'>
  <div>
    <img src="/hongkong.jpg" alt="Legend 1" />
    <p className="legend">Hong Kong</p>
  </div>
  <div>
    <img src="/japan.webp" alt="Legend 2" />
    <p className="legend">Macao</p>
  </div>
  <div>
    <img src="/lasvegas.webp" alt="Legend 3" />
    <p className="legend">japan</p>
  </div>
  <div>
    <img src="/makao.webp" alt="Legend 4" />
    <p className="legend">Las Vagas</p>
  </div>
</Carousel>
    );
  }
}



export default DemoCarousel;