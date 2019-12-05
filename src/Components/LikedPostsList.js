import React from 'react';
import posts, {getPostsMap} from '../App/Main/Posts/posts';
import LikedPostItem from './LikedPostItem';
import {connect} from 'react-redux';

const LikedPostsList = ({
    postsMap = getPostsMap(posts),
    postsLikeState,
}) => {
    return(
        <div>
            {
               postsLikeState.map((id)=>
                    <LikedPostItem
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

export default connect(mapStateToProps)(LikedPostsList) 