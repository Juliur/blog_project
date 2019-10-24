import React from 'react';
import VR from './Post-images/vr.jpg'
import './Main.css'

const Main = () =>{
    return(
        <main id="main">
            <div className="post">
                <div className="post-header">
                    <img className="post-img" src={VR}/>
                </div>
                <div className="post-body">
                    <div className="post-category">
                        <p>Tech</p>
                    </div>
                    <h3 className="post-title">Google and BBC scrap VR projects</h3>
                    <div className="info">
                        <p className="author"><i className="fa fa-pencil" aria-hidden="true"></i>By Author</p>
                        <p className="publication-date"><i className="fa fa-calendar" aria-hidden="true"></i>08.10.19</p>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere sequi magnam eum id reprehenderit
                        quisquam debitis assumenda eos minima, itaque consequatur voluptates, nihil quos repudiandae? Quia
                        necessitatibus perspiciatis consequatur veniam!
                    </p>
                </div>
                <div className="post-footer">
                    <a className="read-more-link" href="#">Read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </main>    
    )
}

export default Main