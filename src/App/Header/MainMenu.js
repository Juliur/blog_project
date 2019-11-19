import React from 'react';
import {Link} from 'react-router-dom';
import './MainMenu.css'

const MainMenu = () =>{
    return (
        <div className="main-menu">
            <Link to= "/" className="nav-item link-effect">Home</Link>
            <Link to= "/category-page" className="nav-item link-effect">Science</Link>
            <Link to= "/" className="nav-item link-effect">Tech</Link>
            <Link to= "/" className="nav-item link-effect">Travel</Link>
            <Link to= "/" className="nav-item link-effect">Health</Link>
            <Link to= "/" className="nav-item link-effect">Art</Link>
        </div>
    )
}

export default MainMenu