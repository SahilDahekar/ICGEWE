import React from 'react';
import Home from './pages/Home';
import Organiser from './pages/Organiser';
import { Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/organiser' element={<Organiser/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
