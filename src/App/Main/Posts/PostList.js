import React from 'react';
import PostListItem from './PostListItem';
import posts from './posts';

const PostList = () =>{
    return(
        <div>
            {
				posts.slice(6, posts.length).map(({
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