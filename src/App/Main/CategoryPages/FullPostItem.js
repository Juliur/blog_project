import React, {Component} from 'react';

class FullPostItem extends Component {
    render() {
        const {
            id,
            image,
            title,
            category,
            text,
            author,
            date,
        } = this.props
        return (
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
                    <p className="text-content">{text}</p>
                </div>
            </div> 
        )
    }
}

export default FullPostItem