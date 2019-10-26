import React from 'react';

import './common/Style/reset.css'
import './common/Style/base.css'

import Header from './App/Header/Header'
import Main from './App/Main/Main'
import Carousel from './App/Carousel/Carousel'
function App() {
  return (
    <div id="grid">
      <Header/>
      <Carousel/>
      <Main/>
     </div>
  )
}

export default App;
