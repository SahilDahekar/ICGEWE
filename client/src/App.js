import React from 'react';
import Home from './pages/Home';
import Organiser from './pages/Organiser';
import { Routes , Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import FloatingNav from './components/FloatingNav';

function App() {
  return (
    <>
      <Navbar/>
      {/* <FloatingNav/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/organiser' element={<Organiser/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
