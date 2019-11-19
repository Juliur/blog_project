import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage';
import SciencePostList from './CategoryPages/SciencePostList';
import TechPostList from './CategoryPages/TechPostList';

const Main = () =>{
    return(
        <main id="main">
            <Route path="/" exact component={HomePage}/>
            <Route path="/science" component={SciencePostList}/>
            <Route path="/tech" component={TechPostList}/>
        </main>    
    )
}

export default Main