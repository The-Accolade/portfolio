import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isClicked, setIsClicked] = useState('');

  useEffect(() => {
    
    let sections = document.querySelectorAll('section');
    let navlinks = document.querySelectorAll('header nav a');

    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
      sections.forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
          navlinks.forEach(links => {
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
          });
        };
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  const toggleClass = () => {
    setIsClicked(!isClicked);
    }

    
  return (
      <header className={isSticky ? 'sticky' : ''}>
        <div className='logo'>Akolade.</div>
        <div onClick={toggleClass} className={isClicked ? 'bx bx-x' : 'bx bx-menu'} id='menu-icon'></div>
        <nav className={`navbar ${isClicked ? 'nav-active' : ''}`}>
            <div className='navbar__links'>
                <div className='navbar__links-container'>
                <p><a className='active' style={{'--i': 1}} href='#hero'>Home</a></p>
                <p><a style={{'--i': 2}} href='#about'>About</a></p>
                <p><a style={{'--i': 3}} href='#education'>Education</a></p>
                <p><a style={{'--i': 4}} href='#skills'>Skills</a></p>
                <p><a style={{'--i': 5}} href='#contact'>Contact</a></p>
                </div>
              </div>
              <span className="active-nav"></span>
        </nav>
      </header>
  )
}

export default Header