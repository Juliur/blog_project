import React from 'react';

import './common/Style/reset.css'
import './common/Style/base.css'

import Header from './App/Header/Header'
import Main from './App/Main/Main'
import MyCarousel from './App/Carousel/MyCarousel'
function App() {
  return (
    <div id="grid">
      <Header/>
      <MyCarousel/>
      <Main/>
     </div>
  )
}

export default App;
