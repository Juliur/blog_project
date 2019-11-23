import React from 'react';
import FullPostItem from './FullPostItem';
import './FullPostPage.css'
import posts from '../Posts/posts';

const FullPostPage = ({
    id,
  }) => {
    return (
        <div>
            { 
                posts.filter(post=>post.id == id)
                    .map(({
                        image,
                        category,
                        title,
                        text,
                        author,
                        date,
                    }) => <div className="full-post" key={id}>
                            <FullPostItem
                                image={image}
                                category={category}
                                title={title}
                                text={text}
                                author={author}
                                date={date}
                        />
                    </div>
                )
            }
        </div>
    )
}

export default FullPostPage