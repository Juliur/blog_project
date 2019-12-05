import React from 'react';
import posts from '../Main/Posts/posts';
import SmallPost from '../../Components/SmallPost';


const RandomPost = () =>{
    let randomId = Math.floor(Math.random() * posts.length);
    return(
        <div className="random-post-wrap">
            {
              [posts[randomId]].map(({
									image,
									title,
									category,
									author,
									date,
                    			})=> <SmallPost
										key={randomId}
										id={randomId}
										image={image}
										title={title}
										category={category}
										author={author}
										date={date}
								/>
              ) 
            }
        </div>
    )
}

export default RandomPost