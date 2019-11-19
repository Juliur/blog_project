import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

import MainMenu from './MainMenu.js'

const Header = () =>{
    return (
        <header id="header">
            <div className="container">
                <nav>
                    <Link to="/" className="logo">Blog</Link>
                    <input type="checkbox" id="nav-toggle"/>
                    <label htmlFor="nav-toggle" className="burger-menu">
                        <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
                    </label>
                    <MainMenu/>
                </nav>
            </div>
        </header>
    )
}
export default Header