import React from 'react';
import {connect} from 'react-redux';
import FavouritePostList from '../../../Components/FavouritePostsList';
import './FavouritedPostsPage.css';

const FavouritedPostsPage = ({
    postsLikeState
}) => {
    return(
        <div className="fav-post-deck">
            <h2 className="page-title">Favourited Posts</h2>
            <FavouritePostList
                postsLikeState={postsLikeState}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        postsLikeState: state.postsLikeState
    }
}

export default connect(mapStateToProps)(FavouritedPostsPage)