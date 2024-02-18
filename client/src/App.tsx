import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import NavBar from './components/NavBar';
import Icons from './components/Icons';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className='icons-cont'>
        <Icons/>
      </div>
      <Presentation/>
      <Skills/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
