import React from 'react';
import {includes} from 'lodash';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const FullPostItem = ({
    image,
    title,
    content,
    author,
    date,
    isLiked,
    removeLike,
    addLike,
    id,
    }) => {
    return (
        <div className="post-item">
            <div className="post-header">
                <img className="post-img" src={image} alt=""/>
            </div>
            <div className="post-body">
                <h3 className="title">{title}</h3>
                <div className="info">
                    <p className="author"><i className="fa fa-pencil" aria-hidden="true"></i>By {author}</p>
                    <p className="publication-date"><i className="fa fa-calendar" aria-hidden="true"></i>{date}</p>
                </div>
                <p className="text-content" dangerouslySetInnerHTML={{__html:content}}></p>
                <div className="post-footer">
                <button className="like-btn" onClick={()=>{(isLiked) ? removeLike(id): addLike(id)}}> Like{isLiked ? <span className="fa fa-heart" aria-hidden="true"></span> : <span className="fa fa-heart-o" aria-hidden="true"></span>} </button>
                <Link to="/liked" className="read-more-link">All Liked Posts</Link>
            </div>
            </div> 
    </div> 
    )
}

const mapStateToProps = (state,props) => ({
    isLiked: includes(state.postsLikeState, props.id)
})

const MapDispatchToProps = (dispatch) => ({
    addLike: (id)=> dispatch({
        type: "LIKE",
        id: id,
    }),
    removeLike: (id)=> dispatch({
        type: "DISLIKE",
        id: id,
    }),
})

export default connect(
    mapStateToProps,
    MapDispatchToProps,
)(FullPostItem)