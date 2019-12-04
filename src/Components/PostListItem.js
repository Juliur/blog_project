import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './PostListItem.css';

const PostListItem = ({
    id,
    image,
    category,
    title,
    short_description,
    author,
    date,
    isLiked,
    removeLike,
    addLike,
}) =>{
    return(
        <div className="post-item">
            <div className="post-header">
                <img className="post-img" src={image} alt=""/>
            </div>
            <div className="post-body">
                <p className="category post-category">{category}</p>
                <h3 className="post-title">{title}</h3>
                <div className="info">
                    <p className="author"><i className="fa fa-pencil" aria-hidden="true"></i>By {author}</p>
                    <p className="publication-date"><i className="fa fa-calendar" aria-hidden="true"></i>{date}</p>
                </div>
                <div className="text-box">
                    <div>
                        <p className="text-content">{short_description}</p>
                    </div>
                </div>
            </div>
            <div className="post-footer">
                <button onClick={()=>{(isLiked) ? removeLike(id): addLike(id)}}> {isLiked ? <span className="fa fa-heart" aria-hidden="true"></span> : <span className="fa fa-heart-o" aria-hidden="true"></span>} </button>
                <Link to={`/article/${id}`} className="read-more-link">Read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></Link>
            </div>
        </div>
    )
}

const mapStateToProps = (state,props) => ({
    isLiked: state.postsLikeState[props.id]
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
)(PostListItem)