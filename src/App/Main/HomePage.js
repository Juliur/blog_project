import React from 'react';
import {Route} from 'react-router-dom';
import PostList from './Posts/PostList';
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