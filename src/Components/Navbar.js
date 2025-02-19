// https://youtu.be/I2UBjN5ER4s?si=2b_xXrb9tgn_3aAo

import React, {useState} from 'react'
import './Navbar.css';
import logo from '../logo.svg';

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default function Navbar() {

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <img src={logo} className="App-logo" alt="logo" />
          <a className="site-title" href="/">Leo's Site</a> 

          <ul className='nav-menu'>
            <li>
              <a className="App-link" href="/Home">Home</a> 
            </li>
            <li>
              <a className="App-link" href="/About">About</a> 
            </li>
            <li>
              <a className="App-link" href="/Projects">Projects</a>
            </li>
            <li>
              <a className="App-link" href="/Blog">Blog</a>
            </li>
            <li>
              <a className="GitHub-repo-link" href="https://github.com/VenturiVen/ReactApp" target="_blank">
                GitHub Repository
              </a>
            </li>
          </ul>
            
        </div>
      </nav>
    </>
  )
}