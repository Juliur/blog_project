import React from 'react';
import FullPostItem from './FullPostItem';
import posts from '../Posts/posts';

const FullPostPage = () => {
    return (
        <div>
            {
                posts.map(({
                        id,
                        category,
                        title,
                        date,
                        author,
                        image,
                    })=> <div key={id}>
                            <FullPostItem
                            id={id}
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