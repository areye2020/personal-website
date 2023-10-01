<<<<<<< HEAD
import React from 'react';
import { Route, Routes } from 'react-router-dom'; // Updated import
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import PersonalJourney from './components/PersonalJourney';
import Contact from './components/Contact';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes> {/* Updated to use Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/personal-journey" element={<PersonalJourney />} />
        <Route path="/contact" element={<Contact />} />
        {/* Add the following route to ensure Home is rendered when first loaded */}
        <Route path="*" element={<Home />} />
      </Routes>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> parent of 4e4672a (first try)
    </div>
  );
}

export default App;
