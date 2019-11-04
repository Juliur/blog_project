import React from 'react';

const CarouselPostItem = ({
    category,
    title,
    image,
    date,
}) =>{
    return(
        <div className="slider-item">
            <div className="category slide-category">
                <p>{category}</p>
            </div>
            <div className="slider-title-wrapper">
            <p>{date}</p>
                <h2 className="slider-title">{title}
            </h2>
            </div>
            <img className="slider-img" src={image}/>
        </div>
    ) 
}
export default CarouselPostItem