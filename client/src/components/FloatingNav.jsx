import React, { useEffect, useState } from 'react';
import { HashLink } from 'react-router-hash-link';

const FloatingNav = () => {
  
  const [nav, setNav] = useState(false);
  // const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== 'undefined') { 
      if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
        if(window.scrollY >= 80 && window.scrollY <=1000){
          setNav(true); 
        }
        else{
          setNav(false);
        } 
      } else { // if scroll up show the navbar
        if(window.scrollY >= 80){
          setNav(true);
        }
        else{
          setNav(false);
        }  
      }
      
      // remember current page location to use in the next move
      setLastScrollY(window.scrollY); 
    }
  };

  // const ShowNav = () => {
  //     if(window.scrollY >= 80){
  //       setNav(true);
  //     }
  //     else{
  //       setNav(false);
  //     }
  //   }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  // useEffect(() => {
  //   window.addEventListener('scroll', ShowNav);
  //   return () => {
  //     window.removeEventListener('scroll', ShowNav);
  //   }
  // }, []);


  return (
    <nav className={ nav ? "floating-nav active" : "floating-nav"}>
        <ul className="floating-nav-list">
            <li className="floating-nav-link" ><HashLink className="item" to="/#">Home</HashLink></li>
            <li className="floating-nav-link" ><HashLink className="item" to="/#about">About</HashLink></li>
            <li className="floating-nav-link" ><HashLink className="item" to="/organiser#">Organiser</HashLink></li>
            <li className="floating-nav-link" ><HashLink className="item" to="/#topics">Topics</HashLink></li>
            <li className="floating-nav-link" ><HashLink className="item" to="/#timeline">Timeline</HashLink></li>
            <li className="floating-nav-link" ><HashLink className="item" to="/#contactUs">Contact Us</HashLink></li>
        </ul>
    </nav>
  )
}

export default FloatingNav;