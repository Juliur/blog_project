import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './MainMenu.css';


const MainMenu = ({value}) =>{
    return (
        <div className="main-menu">
            <Link to= "/" className="nav-item link-effect">Home</Link>
            <Link to= "/science" className="nav-item link-effect">Science</Link>
            <Link to= "/tech" className="nav-item link-effect">Tech</Link>
            <Link to= "/travel" className="nav-item link-effect">Travel</Link>
            <Link to= "/health" className="nav-item link-effect">Health</Link>
            <div className="likes-counter">
                <Link to= "/liked"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
                <p className="counter">{(value>=1) ? value : "0"}</p>
            </div>
        </div>
    )
}

const mapStateToProps = function(state) {
    return { value : state.postsLikeState.length}
}
export default connect(mapStateToProps)(MainMenu)