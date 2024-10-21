import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About from './components/About';
import LiteratureReview from './components/LiteratureReview';
import Taxonomy from './components/Taxonomy';
import Members from './components/Members';
import References from './components/References';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // State to control mobile menu

  // Toggle the mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <Router>
      <div className="App">
        <header className="navbar">
          <div className="nav-container">
            <Link className="navbar-brand" to="/">DNS over HTTPS Survey</Link>

            {/* Hamburger icon for mobile */}
            <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>

            {/* Navbar links, toggling visibility based on menuOpen */}
            <ul className={`navbar-nav ${menuOpen ? 'open' : ''}`}>
              <li><Link className="nav-link" to="/" onClick={toggleMenu}>About</Link></li>
              <li><Link className="nav-link" to="/literature" onClick={toggleMenu}>Literature Review</Link></li>
              <li><Link className="nav-link" to="/taxonomy" onClick={toggleMenu}>Taxonomy</Link></li>
              <li><Link className="nav-link" to="/members" onClick={toggleMenu}>Group Members</Link></li>
              <li><Link className="nav-link" to="/references" onClick={toggleMenu}>References</Link></li>
            </ul>
          </div>
        </header>

        {/* Content for the app */}
        <div className="content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/literature" element={<LiteratureReview />} />
            <Route path="/taxonomy" element={<Taxonomy />} />
            <Route path="/members" element={<Members />} />
            <Route path="/references" element={<References />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
