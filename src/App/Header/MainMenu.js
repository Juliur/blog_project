import React from 'react';
import {Link} from 'react-router-dom';
import './MainMenu.css'

const MainMenu = () =>{
    return (
        <div className="main-menu">
            <Link to= "/" className="nav-item link-effect">Home</Link>
            <Link to= "/science" className="nav-item link-effect">Science</Link>
            <Link to= "/tech" className="nav-item link-effect">Tech</Link>
            <Link to= "/travel" className="nav-item link-effect">Travel</Link>
            <Link to= "/health" className="nav-item link-effect">Health</Link>
            <Link to= "/liked" className="nav-item"><i className="fa fa-heart-o" aria-hidden="true"></i></Link>
        </div>
    )
}

export default MainMenu