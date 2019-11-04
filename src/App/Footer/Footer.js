import React from 'react';
import './Footer.css';

const Footer = () =>{
    return(
        <footer id="footer">
            <div id="logo">
                <a href="#" className="logo">Blog</a>
            </div>
            <div id="newsletter">
                <div className="newsletter-wrapper">
                    <h2>Subscribe to our newsletter</h2>
                    <input type="email" placeholder="Email adress"/>
                    <button>Subscribe</button>
                </div>
            </div>
            <div id="social">
                <div className="social-wrapper"> 
                    <h2>Follow us</h2>
                    <div className="icons-wrapper">
                        <a href="#"><i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-youtube fa-2x" aria-hidden="true"></i></a>
                    </div>
                </div>  
            </div>    
            <div id="contacts">
                <div className="contacts-wrapper">
                <h2>Contact us</h2>
                    <p><i className="fa fa-map-marker " aria-hidden="true"></i>25 Water Rd. 
                    Bronx, NY 10460</p>
                    <p><i className="fa fa-phone fa-lg" aria-hidden="true"></i>+1-202-555-0182</p>
                </div>    
            </div>
        </footer>    
    )
}
export default Footer