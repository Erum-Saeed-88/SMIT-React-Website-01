import React from 'react'

const Header = () => {
  return (
   <header >
    <div className="container header-container">
      <h1 className="logo"><a href="#">SoftLand</a></h1>
      <nav>
        <ul className="main-links">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#">Dropdown</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
   </header>
  )
}

export default Header