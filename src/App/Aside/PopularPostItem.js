import React from 'react';

const PopularPostItem = ({
    title,
    image,
    views,
}) =>{
    return(
        <div className="popular-post-wrapper">
            <div className="popular-post">
                <div className="popular-post-img">
                    <img src={image}/>
                </div>
                <div className="popular-post-body">
                    <h5>{title}</h5>
                        <a href="#" className="state-link read-more-link">Read more<i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href="#" className="appearing-link"></a> 
                </div>
            </div>
        </div>    
    
    )
}

export default PopularPostItem