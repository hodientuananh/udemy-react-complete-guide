import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Hi, I am learning React</h1>
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   <h1>Hello World</h1>
    // </div>
    // React.createElement('div', {className: 'App'}, 'Hello World')
      <div className='App'>
        <h1>Hi, this is React App</h1>
        <Person/>
      </div>
  );
}

export default App;
