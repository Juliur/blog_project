import React from 'react';

import './common/Style/reset.css'
import './common/Style/base.css'

import Header from './App/Header/Header'
import Main from './App/Main/Main'
import Preview from './App/Preview/Preview'

function App() {
  return (
    <div id="grid">
      <Header/>
      <Preview/>
      <Main/>
     </div>
  )
}

export default App;
