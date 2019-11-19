import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage';
import CategoryPostList from './CategoryPage/CategoryPostLIst';

const Main = () =>{
    return(
        <main id="main">
            <Route path="/" exact component={HomePage}/>
            <Route path="/category-page" component={CategoryPostList}/>
        </main>    
    )
}

export default Main