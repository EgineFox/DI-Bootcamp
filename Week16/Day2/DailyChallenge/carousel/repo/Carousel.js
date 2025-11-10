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
    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" alt="Legend 1" />
    <p className="legend">Hong Kong</p>
  </div>
  <div>
    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Legend 2" />
    <p className="legend">Macao</p>
  </div>
  <div>
    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" alt="Legend 3" />
    <p className="legend">Japan</p>
  </div>
  <div>
    <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" alt="Legend 4" />
    <p className="legend">Las Vagas</p>
  </div>
</Carousel>
    );
  }
}



export default DemoCarousel;