import React from 'react';
import popularPosts from './popularPosts';
import PopularPostItem from './PopularPostItem';

const PopularPostLIst = () =>{
    return(
        <div>
            {
                popularPosts.map(({
                    id,
                    image,
                    title
                })=> <div key={id}>
                      <PopularPostItem 
                      image={image}
                      title={title}
                    />
                </div>)
            }    
        </div>
    )
}

export default PopularPostLIst
