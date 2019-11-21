import React, {Component} from 'react';

class FullPostItem extends Component {
    render() {
        let id = this.props.match.params.id

        return (
            <div className="post-item">
                <div className="post-header">
                    <img className="post-img" src={this.image} alt=""/>
                </div>
                <div className="post-body">
                    <p className="category post-category">{this.category}</p>
                    <h3 className="post-title">{this.title}</h3>
                    <div className="info">
                        <p className="author"><i className="fa fa-pencil" aria-hidden="true"></i>By {this.author}</p>
                        <p className="publication-date"><i className="fa fa-calendar" aria-hidden="true"></i>{this.date}</p>
                    </div>
                    <p className="text-content">{this.text}</p>
                </div>
            </div> 
        )
    }
}

export default FullPostItem