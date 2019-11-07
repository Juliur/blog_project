import React from 'react';

const CarouselPostItem = ({
    category,
    title,
    image,
}) =>{
    return(
        <a href="#">
            <div className="slider-item">
                <div className="category-title">
                    <div className="category slide-category">
                        <p>{category}</p>
                    </div>
                    <div className="slider-title-wrapper">
                        <h2 className="slider-title">{title}</h2>
                    </div>
                </div>    
                <img className="slider-img" src={image}/>    
            </div>
         </a>
    ) 
}
export default CarouselPostItem