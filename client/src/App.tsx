import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import NavBar from './components/NavBar';
import Icons from './components/Icons';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Icons/>
      <Presentation/>
      <Skills/>
    </div>
  );
}

export default App;
