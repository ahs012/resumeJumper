import React, { Component } from 'react'; 
import "./nav.css";

const Nav = props => (
  <header className="toolbar">
    <nav className="nav_toolbar">
      <div></div>
      <div className="navLogo"><a href="">Logo</a></div>
      <div className="navItem">
        <ul>
          <li><a href="/">Member Login</a></li>
          <li><a href="/">Home</a></li>
          <li><a href="/">Blog</a></li>

        </ul>
      </div>
    </nav>
  </header>
)



export default Nav;
