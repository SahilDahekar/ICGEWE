import React, { useState } from 'react';
import { HiX, HiMenuAlt4 } from "react-icons/hi";
import '../index.css';

const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleToggle = () => {
    setNav(prev => !prev);
  }

  return (
    <>
        <nav className={ nav ? "nav" : "nav active"}>
            <a className="nav-link" onClick={handleToggle} href="/" data-text="home">Home</a>
            <a className="nav-link" onClick={handleToggle} href="#about" data-text="about">About</a>
            <a className="nav-link" onClick={handleToggle} href="/organiser" data-text="organiser">Organiser</a>
            <a className="nav-link" onClick={handleToggle} href="#topics" data-text="topics">Topics</a>
            <a className="nav-link" onClick={handleToggle} href="#timeline" data-text="timeline">Timeline</a>
        </nav>

        <div className={nav ? "menu-btn" : "menu-btn xmark"} onClick={handleToggle}>
          {nav ? <HiMenuAlt4 /> : <HiX/>}
        </div>
    </>
  )
}

export default Navbar