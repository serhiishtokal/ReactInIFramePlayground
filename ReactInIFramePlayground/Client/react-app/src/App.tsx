import React from 'react';
import logo from './logo.svg';
import './App.css';
import Frame from 'react-frame-component';

function App() {
  return (
    <div>
        <p>React App without frame. Have to be black regular font (as usual without styles) but it's overriden by website styles</p>
        <Frame style={{border: "0px"}}>
            <p style={{color: 'green'}}>Frame inside react App. Have to be green</p>
        </Frame>
    </div>
  );
}

export default App;
