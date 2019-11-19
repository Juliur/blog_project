import React from 'react';

import './common/Style/reset.css';
import './common/Style/base.css';
import './common/Style/adaptivity.css';

import Header from './App/Header/Header';
import Main from './App/Main/Main';
import Carousel from './App/Carousel/Carousel';
import Aside from './App/Aside/Aside';
import Footer from './App/Footer/Footer';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div id="grid">
      <Header/>
      <Route path="/" exact component={Carousel}/>
      <Route path="/" exact component={Main}/>
      <Aside/>
      <Footer/>
     </div>
  )
}

export default App;
