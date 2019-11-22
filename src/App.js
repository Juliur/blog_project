import React from 'react';

import './common/Style/reset.css';
import './common/Style/base.css';
import './common/Style/adaptivity.css';

import Header from './App/Header/Header';
import Main from './App/Main/Main';
import Footer from './App/Footer/Footer';


function App() {
  return (
    <div id="grid">
      <Header/>
      <Main/>
      <Footer/>
     </div>
  )
}

export default App;
