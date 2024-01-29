import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import NavBar from './components/NavBar';
import Icons from './components/Icons';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Icons/>
      <Presentation/>
      <Skills/>
      <Experience/>
    </div>
  );
}

export default App;
