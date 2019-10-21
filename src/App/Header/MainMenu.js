import React from 'react';

import './MainMenu.css'

const MainMenu = () =>{
    return (
        <div className="main-menu">
            <a href="#" className="nav-item current">Home</a>
            <a href="#" className="nav-item link-effect">Science</a>
            <a href="#" className="nav-item link-effect">Tech</a>
            <a href="#" className="nav-item link-effect">Travel</a>
            <a href="#" className="nav-item link-effect">Health</a>
            <a href="#" className="nav-item link-effect">Art</a>
        </div>
    )
}

export default MainMenu