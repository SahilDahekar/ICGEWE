import React from 'react';
import Home from './pages/Home';
import Organiser from './pages/Organiser';
import { Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/organiser' element={<Organiser/>}/>
    </Routes>
  );
}

export default App;
