import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const { pathname } = location;

  // Function to determine if the current page is the main page
  const isMainPage = pathname === '/';
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const trigger = useRef(null);
  const mobileNav = useRef(null);

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target) || trigger.current.contains(target)) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  return (
    <header>
        <a href="/" className="logo"><i className="fab fa-python"></i> Isaac</a>

        <div id="menu" className="fas fa-bars"></div>
        <nav className="navbar">
            <ul>
              {isMainPage && (
                <>
                  <li><a className="active" href="#home">Home</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#skills">Skills</a></li>
                  <li><a href="#education">Education</a></li>
                  <li><a href="#work">Work</a></li>
                  <li><a href="/projects">Projects</a></li>
                  <li><a href="#contact">Contact</a></li>
                </>
              )}
              {!isMainPage && (
                <>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/#about">About</Link></li>
                  <li><Link to="/#contact">Contact</Link></li>
                  {/* Add other relevant links for non-main pages */}
                </>
              )}
            </ul>
        </nav>
    </header> 
  );
}

export default Header;
