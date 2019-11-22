import React from 'react';

const FullPostItem = ({
    image,
    title,
    text,
    author,
    date,
    }) => {
    return (
        <div className="post-item">
            <div className="post-header">
                <img className="post-img" src={image} alt=""/>
            </div>
            <div className="post-body">
                <h3 className="post-title">{title}</h3>
                <div className="info">
                    <p className="author"><i className="fa fa-pencil" aria-hidden="true"></i>By {author}</p>
                    <p className="publication-date"><i className="fa fa-calendar" aria-hidden="true"></i>{date}</p>
                </div>
                <p className="text-content">{text}</p>
            </div> 
    </div> 
    )
}


export default FullPostItem