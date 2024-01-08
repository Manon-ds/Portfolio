import React from 'react';
import './App.css';
import Presentation from './components/Presentation';
import NavBar from './components/NavBar';
import Icons from './components/Icons';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Icons/>
      <Presentation/>
    </div>
  );
}

export default App;
