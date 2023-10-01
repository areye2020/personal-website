import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume';
import PersonalJourney from './components/PersonalJourney';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
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
      </div>
    </Router>
  );
}

export default App;
