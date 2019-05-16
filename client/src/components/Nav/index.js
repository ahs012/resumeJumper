import React, { Component } from 'react'; 
import "./nav.css";





const Nav = props => (
  <header className="toolbar">
    <nav className="nav_toolbar">
      <div></div>
      <div className="navLogo"><a></a></div>
      <img src={require('../Assets/images/logo.png')}/>
      <div className="spacer"/>
      <div className="navItem">
        <ul>
          <li><a href="/Login">Member Login</a></li>
          <li><a href="/"></a></li>
          <li><a href="/Blog">Blog</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </div>
    </nav>
  </header>
)



export default Nav;
