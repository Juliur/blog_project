import React from 'react';
import {Link} from 'react-router-dom';
import posts from '../Posts/posts';
import './Banner.css';
import PostListItem from '../Posts/PostListItem';
import Aside from '../../Aside/Aside';

const TravelPostList = () => {
    return(
        <div id="category-page">
            <div id="banner">
            {
                posts.filter((item)=>item.category==="Travel")
                     .sort((a,b)=>{
                    let dateA = new Date (a.date),
                        dateB = new Date (b.date)
                        return dateA - dateB   
                })
                    .slice(0,1)
                    .map(({
                        id,
                        category,
                        title,
                        date,
                        author,
                        image,
                    })=> <div key={id} className="banner-wrap">
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
        		</div>
            <div id="posts-area">
            {
                posts.filter((item)=>item.category==="Travel").map(({
					id,
					image,
					category,
					text,
					title,
					author,
					date,
				})=>(
					<div key={id}>
						<PostListItem
                        id={id}
						image={image}
						category={category}
						title={title}
						text={text}
						author={author}
						date={date}
						/>
					</div>
				))
            }
            </div>
            <Aside/>
        </div>
    )
}

export default TravelPostList