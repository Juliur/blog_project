import React from 'react';
import {connect} from 'react-redux';
import LikedPostList from '../../../Components/LikedPostsList';
import './LikedPostsPage.css';

const FavouritedPostsPage = ({
    postsLikeState
}) => {
    return(
        <div className="fav-post-page">
            <h2 className="page-title">Liked Posts</h2>
            <LikedPostList
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