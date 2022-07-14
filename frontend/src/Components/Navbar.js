import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/argentBankLogo.png'

function Navbar() {
  return (
    <nav className="main-nav">
      <Link 
        className="main-nav-logo" 
        to={"/"}>
        <img
          className="main-nav-logo-image"
          src={Logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
     <Button />
    </nav>
  )
}

export default Navbar
