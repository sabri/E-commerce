import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    's1.jpg',
    's2.jpg',
    's3.jpg'
  ];
   
  const fadeProperties = {
    duration: 3000,
    transitionDuration: 500,
    infinite: false,
    indicators: true
  }
export const Slideshow = () => {
    return (
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt ="first"/>
          </div>
          <h2>First Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt ="first" />
          </div>
          <h2>Second Slide</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt ="first"/>
          </div>
          <h2>Third Slide</h2>
        </div>
      </Fade>
    )
  }