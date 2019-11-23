import React, {Component} from 'react';
import Slider from "react-slick";
import CarouselPostItem from './CarouselPostItem'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';
import posts from '../Main/Posts/posts';


class Carousel extends Component {
    render() {
      var settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 575,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      }
    return (
        <div id="carousel">
            <Slider {...settings}>
                { 
                    posts.slice().sort((a,b)=>{
                        let dateA = new Date (a.date),
                            dateB = new Date (b.date)
                            return dateB - dateA    
                    })
                        .slice(0,5)
                        .map(({
                            id,
                            title,
                            image,
                            category,
                            date
                        })=> <CarouselPostItem
                                key={id}
                                id={id}
                                title={title}
                                category={category}
                                image={image}
                                date={date}
                            />
                    )
                }
            </Slider>
        </div>      
        )
    }
  }

  export default Carousel