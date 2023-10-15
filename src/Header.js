import React from 'react';
import './Header.css';
import logo from './logo.svg'; 

function Header() {
  return (
    <header>
      <div className="navbar">
        <img src={logo} alt="Logo" className="logo" />
        <h1>About React JS</h1>
        <nav>
          <ul>
            <li>
              <a href="/">Beranda</a>
            </li>
            <li>
              <a href="/tentang">Tentang</a>
            </li>
            <li>
              <a href="/kontak">Kontak</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
