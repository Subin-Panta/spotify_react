import React from 'react';
import logo from './logo.svg';

import './App.scss';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <div className="navBar">
           <div className="logo">
             <img src={logo}/>
            </div>
            <ul>
              <li>Home</li>
              <li>Search</li>
              <li>Your Library</li>
            </ul> 
        </div>   
      </div>
      <div className="musicControls">
        music musicControls
      </div>
    </div>
  );
}

export default App;
