import React from 'react';
import PostListItem from './PostListItem';
import posts from './posts';

const PostList = () =>{
	let visiblePosts = 8;
    return(
        <div id="posts-area">
            {
				posts.slice(0,visiblePosts).map(({
					id,
					image,
					category,
					text,
					title,
					author,
					date,
				})=> (
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
    )
}

export default PostList