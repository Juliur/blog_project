import React from 'react';
import SmallPost from './SmallPost';

const FavouritePostItem = ({
    post,
}) => {
    return (
        <div>
            <SmallPost
                title={post.title}
                id={post.id}
                image={post.image}
                date={post.date}
                author={post.author}
                category={post.category}
            />
        </div>
    )
}

export default FavouritePostItem
