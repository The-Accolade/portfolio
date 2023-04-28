import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <div className='navbar__links-container'>
          <p><a className='active' style={{'--i': 1}} href='#home'>Home</a></p>
          <p><a style={{'--i': 2}} href='#about'>About</a></p>
          <p><a style={{'--i': 3}} href='#skills'>Skills</a></p>
          <p><a style={{'--i': 4}} href='#portfolio'>Portfolio</a></p>
          <p><a style={{'--i': 5}} href='#contact'>Contact</a></p>
        </div>
      </div>
    </div>
  )
}

export default Navbar;