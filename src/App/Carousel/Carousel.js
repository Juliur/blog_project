import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import SpaceX from './images/spacex.jpg';

class Carousel extends React.Component {
    render() {
      var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      }
      return (
            <Slider {...settings}>
                <div className="slider-item">
                    <div className="category">
                        <p>Science</p>
                    </div>
                    <div className="slider-title-wrapper">
                        <h2 className="slider-title">SpaceX has unveiled the rocket it hopes will one day carry humans to Mars
                        </h2>
                    </div>
                    <img className="slider-img" src={SpaceX}/>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
                <div>
                    <h3>4</h3>
                </div>
                <div>
                    <h3>5</h3>
                </div>
            </Slider>  
        );
    }
  }

  export default Carousel