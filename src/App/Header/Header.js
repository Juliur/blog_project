import React from 'react';

import './Header.css'

import MainMenu from './MainMenu.js'

const Header = () =>{
    return (
        <header id="header">
            <div className="container">
                <nav>
                    <a href="#" className="logo">News</a>
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