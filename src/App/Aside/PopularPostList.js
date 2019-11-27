import React from 'react';
import posts from '../Main/Posts/posts';
import PopularPostItem from './PopularPostItem';

const PopularPostList = () =>{
    return(
        <div>
            {
                posts.filter(post => post.views >=30).map(({
                    id,
                    image,
                    title,
                    views,
                })=> <PopularPostItem 
                      key={id}
                      id= {id}
                      image={image}
                      title={title}
                      views={views}
                    />
               )
            }    
        </div>
    )
}

export default PopularPostList
