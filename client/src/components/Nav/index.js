import React, { Component } from 'react'; 
import "./nav.css";


function clearData(){localStorage.clear()}


const Nav = props => (
  <header className="toolbar">
    <nav className="nav_toolbar">
      <div></div>
      <div className="navLogo"><a></a></div>
      <img src={require('../Assets/images/logo.png')}/>
      <div className="spacer"/>
      <div className="navItem">
        <ul>
          <li><a href="/Login">Member Login |</a></li>
          <li><a href="/resume">Resume |</a></li>
          <li><a href="/profile">Profile |</a></li>
          <li><a href="/" onClick={clearData}>Logout</a></li>
        </ul>
      </div>
    </nav>
  </header>
)



export default Nav;
