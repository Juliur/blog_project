import React from 'react';
import posts from '../Main/Posts/posts';
import {Link} from 'react-router-dom';


const RandomPost = () =>{
    let randomId = Math.floor(Math.random() * posts.length);
    return(
        <div className="random-post-wrap">
            {
              [posts[randomId]].map(({
									id,
									image,
									title,
									category,
									author,
									date,
                    			})=> <div className="post-item" key={randomId}>
										<div className="post-header">
												<img className="post-img" src={image} alt=""/>
										</div>
										<div className="post-body">
												<button className="category post-category">{category}</button>
												<h3 className="post-title">{title}</h3>
												<div className="info">
													<p className="author"><i className="fa fa-pencil" aria-hidden="true"></i>By {author}</p>
													<p className="publication-date"><i className="fa fa-calendar" aria-hidden="true"></i>{date}</p>
												</div>
										</div>
										<div className="post-footer">
										<Link to={`/article/${id}`} className="read-more-link">Read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
										</div>
								</div>
              ) 
            }
        </div>
    )
}

export default RandomPost