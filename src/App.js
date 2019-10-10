import React from 'react';
import './App.css';
import Contact from './compoments/Contact';

function App() {
  return (
    <div className="App">

      <Contact name = 'Julie Breton' avatar='https://randomuser.me/api/portraits/women/79.jpg' online={true}/> 
      <Contact name = 'Marco Gargon' avatar='https://randomuser.me/api/portraits/men/23.jpg' online={false}/> 
      <Contact name = 'Caro Moudrin' avatar='https://randomuser.me/api/portraits/women/21.jpg' online={true}/> 
  
    </div>
  );
}

export default App;

