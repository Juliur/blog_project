import React from 'react';

import Spaceship from './images/spacex.jpg';
import Prague from './images/Prague.jpg';
import Art from './images/p076x7tm.jpg';
import Eyes from './images/eyes.jpg';
import FB from './images/fb.jpg';
import './Preview.css'

const Preview = () =>{
  return(
    <section id="preview">
      <div className="small1">
        <div className="slider-item">
                <div className="category">
                    <p>Science</p>
                </div>
                <div className="slider-title-wrapper">
                    <h2 className="slider-title">SpaceX has unveiled the rocket it hopes will one day carry humans to Mars
                    </h2>
                </div>
                <img className="preview-img"
                    src={Spaceship}/>
            </div>
          </div>
      <div className="small2"><img className="preview-img" src={Spaceship}/></div>
      <div className="small3"><img className="preview-img" src={Spaceship}/></div>
      <div className="small4"><img className="preview-img" src={Spaceship}/></div>
      <div className="big"><img className="preview-img" src={Spaceship}/></div>
    </section>
  )
}

export default Preview


