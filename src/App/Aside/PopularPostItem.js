import React from 'react';
import {Link} from 'react-router-dom';

const PopularPostItem = ({
    id,
    title,
    image,
}) =>{
    return(
        <Link to={`/article/${id}`} className="popular-post-wrapper">
            <div className="popular-post">
                <div className="popular-post-img">
                    <img src={image}/>
                </div>
                <div className="popular-post-body">
                    <h5>{title}</h5>
                    <div className="state-link read-more-link">Read more<i className="fa fa-long-arrow-right" aria-hidden="true"></i></div>
                    <div className="appearing-link"></div> 
                </div>
            </div>
        </Link>    
    
    )
}

export default PopularPostItem