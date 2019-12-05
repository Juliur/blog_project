import React from 'react';
import SmallPost from './SmallPost';

const LikedPostItem = ({
    post,
}) => {
    return (
        <div>
            <SmallPost
                id={post.id}
                key={post.id}
                title={post.title}
                image={post.image}
                date={post.date}
                author={post.author}
                category={post.category}
            />
        </div>
    )
}

export default LikedPostItem
