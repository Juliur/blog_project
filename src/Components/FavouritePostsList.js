import React from 'react';
import posts, {getPostsMap} from '../App/Main/Posts/posts';
import FavouritePostItem from './FavouritePostItem';
import {connect} from 'react-redux';

const FavouritePostsList = ({
    postsMap = getPostsMap(posts),
    postsLikeState,
}) => {
    return(
        <div>
            {
               postsLikeState.map((id)=>
                    <FavouritePostItem
                    post={postsMap[id]}
                    key={id}
                    />
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        postsLikeState: state.postsLikeState
  }}

export default connect(mapStateToProps)(FavouritePostsList) 