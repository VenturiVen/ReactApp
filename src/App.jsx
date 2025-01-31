import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';

function App() {
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

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello :3
        </p>
        <div id="authorization">
          <h2>{authorized? 'Contact' : 'Enter the Password'}</h2>
          {authorized? contactInfo : login}
        </div>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
