import React from 'react';
import FullPostItem from './FullPostItem';
import './FullPostPage.css'
import posts from '../App/Main/Posts/posts';

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
						content,
						author,
						date,
						id,
                    }) => <div className="full-post" key={id}>
                            <FullPostItem
								id={id}
								image={image}
								category={category}
								title={title}
								content={content}
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