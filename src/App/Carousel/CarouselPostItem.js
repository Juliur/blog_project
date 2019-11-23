import React from 'react';
import {Link} from 'react-router-dom';

const CarouselPostItem = ({
    id,
    category,
    title,
    image,
}) =>{
    return(
        <Link to={`/article/${id}`}>
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
        </Link>
    ) 
}
export default CarouselPostItem