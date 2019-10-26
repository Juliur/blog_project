import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Spaceship from './images/spacex.jpg';
import Prague from './images/Prague.jpg';
import Art from './images/p076x7tm.jpg';
import Eyes from './images/eyes.jpg';
import FB from './images/fb.jpg';
import './Carousel.css'

 
const Carousel = () => {
    return (
      <CarouselProvider
        naturalSlideWidth={450}
        naturalSlideHeight={300}
        totalSlides={5}
        visibleSlides={3}
        infinite="true"
      >
        <Slider>
          <Slide index={0}>
                <div className="slider-item">
                        <button className="category slide-category">Science</button>
                    <div className="slider-title-wrapper">
                        <a href="#"><h2 className="slider-title">SpaceX has unveiled the rocket it hopes will one day carry humans to Mars</h2></a>
                    </div>
                    <img className="slider-img"
                        src={Spaceship} alt=""/>
                </div>
          </Slide>
          <Slide index={1}>
            <div className="slider-item">
                        <button className="category slide-category">Travel</button>
                    <div className="slider-title-wrapper">
                        <a href="#"><h2 className="slider-title">What’s it like to live in an over-touristed city?</h2></a>
                    </div>
                    <img className="slider-img" src={Prague} alt=""/>
                </div>
          </Slide>
          <Slide index={2}>
            <div className="slider-item">
                    <button className="category slide-category">Art</button>
                    <div className="slider-title-wrapper">
                        <a href="#"><h2 className="slider-title">What will art look like in 20 years</h2></a>
                    </div>
                    <img className="slider-img"
                        src={Art} alt=""/>
                </div>
          </Slide>
          <Slide index={3}>
            <div className="slider-item">
                  <button className="category slide-category">Health</button>
                  <div className="slider-title-wrapper">
                  <a href="#"><h2 className="slider-title">Why aren't we living longer?</h2></a>
                  </div>
                  <img className="slider-img" src={Eyes} alt="" />
              </div>
          </Slide>
          <Slide index={4}>
            <div className="slider-item">
                  <button className="category slide-category">Tech</button>
                  <div className="slider-title-wrapper">
                    <a href="#"><h2 className="slider-title">Facebook removes hundreds of 'inauthentic accounts'</h2></a>
                  </div>
                  <img className="slider-img" src={FB} alt=""/>
              </div>
          </Slide>
        </Slider>
        <ButtonBack className="btn-prev"></ButtonBack>
        <ButtonNext className="btn-next"></ButtonNext>
      </CarouselProvider>
    );
}

export default Carousel

