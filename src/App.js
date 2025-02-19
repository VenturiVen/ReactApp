import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Projects from './pages/Projects.js';
import Blog from './pages/Blog.js';


function App() {
  console.log(window.location)

  let Component
  switch(window.location.pathname) {
  case "/":
    Component = App
    break
    case "/Home":
      Component = Home
      break
      case "/About":
        Component = About
        break
        case "/Projects":
          Component = Projects
          break
          case "/Blog":
            Component = Blog
            break
  }

  return (
    <div className="App">
      <header className="App-header">
        <>
          <Navbar /> 
          <Component />
        </>
      </header>
    </div>
  );
}

export default App;

/* 
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);

  function handleSubmit(e) {
    const enteredPassword = e.target.querySelector(
      'input[type="password"]').value;
    const auth = enteredPassword == password;
    setAuthorized(auth)
  }

// action="#" prevents redirects
  const login = (
    <form action="#" onSubmit={handleSubmit}>
    <input type="password" placeholder="password" />
    <input type="submit" / >
    </form>
  );

  const contactInfo = (
    <ul>
      <li>
        client@example.com
      </li>
      <li>
        555.555.5555
      </li>
    </ul>
  );
*/
