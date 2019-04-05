import React from 'react';
import { Fade } from 'react-slideshow-image';

const fadeImages = [
    's4.jpg',
    's2.jpg',
    's3.jpg',
    's5.jpg'
  ];
   
  const fadeProperties = {
    duration: 1000,
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
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt ="first" />
          </div>
          </div>
          <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt ="first" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[3]} alt ="first"/>
          </div>
        </div>
      </Fade>
    )
  }