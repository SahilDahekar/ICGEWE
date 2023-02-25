import React, { useState } from 'react';
import { HashLink } from "react-router-hash-link"
import { HiX, HiMenuAlt4 } from "react-icons/hi";

const Navbar = () => {

  const [nav, setNav] = useState(true);

  const handleToggle = () => {
    setNav(prev => !prev);
  }

  return (
    <>
        <nav className={ nav ? "nav" : "nav active"}>
            <a className="nav-link" onClick={handleToggle} href="/" data-text="home"><HashLink to="/#">Home</HashLink></a>
            <a className="nav-link" onClick={handleToggle} href="/#about" data-text="about"><HashLink to="/#about">About</HashLink></a>
            <a className="nav-link" onClick={handleToggle} href="/organiser" data-text="organiser">Organiser</a>
            <a className="nav-link" onClick={handleToggle} href="/#topics" data-text="topics"><HashLink to="/#topics">Topics</HashLink></a>
            <a className="nav-link" onClick={handleToggle} href="/#timeline" data-text="timeline"><HashLink to="/#timeline">Timeline</HashLink></a>
            <a className="nav-link" onClick={handleToggle} href="/#contactUs" data-text="contactus"><HashLink to="/#contactUs">Contact Us</HashLink></a>
        </nav>

        <div className={nav ? "menu-btn" : "menu-btn xmark"} onClick={handleToggle}>
          {nav ? <HiMenuAlt4 /> : <HiX/>}
        </div>
    </>
  )
}

export default Navbar