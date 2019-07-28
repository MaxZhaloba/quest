import React from 'react';
import 'aframe';
import {Entity, Scene} from 'aframe-react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>3D content</h1>
        <a-scene>
            <a-box color="teal" position="5 5 -20" rotation="0 45 45"/>
        </a-scene>
    </div>
  );
}

export default App;
