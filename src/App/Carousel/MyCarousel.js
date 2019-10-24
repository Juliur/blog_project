import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import Spaceship from './Carousel-images/spacex.jpg'
import Prague from './Carousel-images/Prague.jpg'
import Art from './Carousel-images/p076x7tm.jpg'
import './Carousel.css'

 
export default class MyCarousel extends React.Component {
  render() {
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
                    <div className="category">
                        <p>Science</p>
                    </div>
                    <div className="slider-title-wrapper">
                        <h2 className="slider-title">SpaceX has unveiled the rocket it hopes will one day carry humans to Mars
                        </h2>
                    </div>
                    <img className="slider-img"
                        src={Spaceship}/>
                </div>
          </Slide>
          <Slide index={1}>
            <div className="slider-item">
                    <div className="category">
                        <p>Travel</p>
                    </div>
                    <div className="slider-title-wrapper">
                        <h2 className="slider-title">What’s it like to live in an over-touristed city?</h2>
                    </div>
                    <img className="slider-img" src={Prague}/>
                </div>
          </Slide>
          <Slide index={2}>
            <div className="slider-item">
                    <div className="category">
                        <p>Art</p>
                    </div>
                    <div className="slider-title-wrapper">
                        <h2 className="slider-title">What will art look like in 20 years</h2>
                    </div>
                    <img className="slider-img"
                        src={Art}/>
                </div>
          </Slide>
        </Slider>
        <ButtonBack className="btn-prev"></ButtonBack>
        <ButtonNext className="btn-next"></ButtonNext>
      </CarouselProvider>
    );
  }
}

