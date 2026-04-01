import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <nav className="navbar">
      <div className="navbar-top">
        <div className="container navbar-top-inner">
          <div className="navbar-logo">
            <Link to="/">
              <span className="logo-text">shaadi</span>
              <span className="logo-dot">.com</span>
            </Link>
          </div>
          <div className="navbar-actions">
            <Link to="/login" className="nav-login-btn">Login</Link>
            <Link to="/register" className="btn-primary nav-register-btn">Register Free</Link>
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar-bottom">
        <div className="container navbar-bottom-inner">
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li
              className="nav-item has-dropdown"
              onMouseEnter={() => setActiveDropdown('matches')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/matches">Matches <span className="chevron">▾</span></Link>
              {activeDropdown === 'matches' && (
                <div className="dropdown">
                  <Link to="/matches/new">New Matches</Link>
                  <Link to="/matches/today">Today's Matches</Link>
                  <Link to="/matches/nearby">Nearby Matches</Link>
                  <Link to="/matches/premium">Premium Matches</Link>
                </div>
              )}
            </li>
            <li
              className="nav-item has-dropdown"
              onMouseEnter={() => setActiveDropdown('search')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/search">Search <span className="chevron">▾</span></Link>
              {activeDropdown === 'search' && (
                <div className="dropdown">
                  <Link to="/search/basic">Basic Search</Link>
                  <Link to="/search/advanced">Advanced Search</Link>
                  <Link to="/search/id">Search by ID</Link>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link to="/inbox">Inbox</Link>
            </li>
            <li
              className="nav-item has-dropdown"
              onMouseEnter={() => setActiveDropdown('upgrade')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/upgrade" className="upgrade-link">Upgrade <span className="chevron">▾</span></Link>
              {activeDropdown === 'upgrade' && (
                <div className="dropdown">
                  <Link to="/upgrade/gold">Gold Membership</Link>
                  <Link to="/upgrade/platinum">Platinum Membership</Link>
                  <Link to="/upgrade/elite">Elite Membership</Link>
                </div>
              )}
            </li>
            <li className="nav-item">
              <Link to="/community">Community</Link>
            </li>
            <li className="nav-item">
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
