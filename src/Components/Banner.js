import React from 'react';
import {Link} from 'react-router-dom';
import './Banner.css';

const Banner = ({
    id, 
    title,
    category,
    date,
    author,
    image,
}) => {
    return(
        <div key={id} className="banner-wrap">
            <div className="banner-title-wrap">
            <div className="post-category">
                <p>{category}</p>
            </div>
            <h1 className="banner-title"><Link to={`/article/${id}`}>{title}</Link></h1>
                <p>{date}</p>
                <p>By {author}</p>
            </div>
            <img className="banner-img" src={image} alt=""/>
        </div>     
    )
}

export default Banner