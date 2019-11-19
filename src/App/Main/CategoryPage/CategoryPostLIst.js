import React from 'react';
import posts from '../Posts/posts';
import PostListItem from '../Posts/PostListItem';
import Banner from './Banner';
import Aside from '../../Aside/Aside';

const CategoryPostList = () => {
    return(
        <div id="category-page">
            <Banner/>
            <div id="posts-area">
            {
                posts.filter((item)=>item.category==="Science").map(({
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

export default CategoryPostList