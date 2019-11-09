import React from 'react';
import PopularPostList from './PopularPostList';
import RandomPost from './RandomPost';
import './Aside.css';

const Aside = () =>{
    return(
        <aside id="sidebar">
            <div className="popular-posts">
                <div className="popular-posts-header">
                    <h4>Popular posts</h4>
                </div>
                <PopularPostList/>
                <div className="popular-posts-header">
                    <h4>Random post</h4>
                </div>
                <RandomPost/>
            </div>
        </aside>    
    )
}

export default Aside