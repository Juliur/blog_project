import React from 'react';
import PostList from '../../Components/PostList';
import Carousel from '../Carousel/Carousel';
import Aside from '../Aside/Aside';

const HomePage = () => {
    return(
        <div id="home-page">
            <PostList/>
            <Carousel/>
            <Aside/>
        </div>
    )
}

export default HomePage