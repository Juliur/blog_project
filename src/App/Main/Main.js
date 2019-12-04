import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from './HomePage';
import SciencePostList from './CategoryPages/SciencePostList';
import TechPostList from './CategoryPages/TechPostList';
import TravelPostList from './CategoryPages/TravelPostList';
import HealthPostList from './CategoryPages/HealthPostList';
import FullPostPage from '../../Components/FullPostPage';
import FavouritedPostsPage from './FavouritedPosts/FavouritedPostsPage';

const Main = () =>{
    return(
        <main id="main">
            <Route path="/" exact component={HomePage}/>
            <Route path="/science" component={SciencePostList}/>
            <Route path="/tech" component={TechPostList}/>
            <Route path="/travel" component={TravelPostList}/>
            <Route path="/health" component={HealthPostList}/>
            <Route path="/article/:id" 
                  render= {(props)=> <FullPostPage
									    id={props.match.params.id}										
                                    />}                  
			/>
            <Route path="/favourited" component={FavouritedPostsPage}/>
        
        </main>    
    )
}

export default Main