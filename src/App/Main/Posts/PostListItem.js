import React from 'react';
import {Link} from 'react-router-dom';
import './PostListItem.css';

const PostListItem = ({
    id,
    image,
    category,
    title,
    text,
    author,
    date,
}) =>{
    return(
        <div className="post-item">
            <div className="post-header">
                <img className="post-img" src={image} alt=""/>
            </div>
            <div className="post-body">
                <p className="category post-category">{category}</p>
                <h3 className="post-title">{title}</h3>
                <div className="info">
                    <p className="author"><i className="fa fa-pencil" aria-hidden="true"></i>By {author}</p>
                    <p className="publication-date"><i className="fa fa-calendar" aria-hidden="true"></i>{date}</p>
                </div>
                <div className="text-box">
                    <div>
                        <p className="text-content">{text}</p>
                    </div>
                </div>
            </div>
            <div className="post-footer">
                <Link to={`/article/${id}`} className="read-more-link">Read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            </div>
        </div>
    )
}

export default PostListItem