import React from 'react';
import PopularPostList from './PopularPostList';
import './Aside.css';

const Aside = () =>{
    return(
        <aside id="sidebar">
            <div className="popular-posts">
                <div className="popular-posts-header">
                    <h4>Popular posts</h4>
                </div>
                <PopularPostList/>
            </div>
        </aside>    
    )
}

export default Aside