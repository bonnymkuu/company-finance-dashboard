import React from 'react';
import { useTheme } from '../context/ThemeContext';
import './Topbar.css';

const Topbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav 
      className={`navbar navbar-expand-lg fixed-top ${theme === 'dark' ? 'navbar-dark' : 'navbar-light'}`}
      style={{
        background: theme === 'dark' 
          ? 'linear-gradient(90deg, #1a1a2e 0%, #16213e 50%, #1a1a2e 100%)'
          : 'linear-gradient(90deg, #4b6cb7 0%, #182848 50%, #4b6cb7 100%)',
        padding: '0.5rem 1rem',
        height: '56px' // Fixed height for consistency
      }}
    >
      <div className="container-fluid h-100">
        {/* Centered Company Name */}
        <div className="d-flex justify-content-center align-items-center h-100 w-100 position-absolute start-0">
          <h5 className="mb-0 company-title">
            <span className="me-2">📊</span>
            <span>Business Management System</span>
            <span className="ms-2">🚀</span>
          </h5>
        </div>

        {/* Right-aligned icons */}
        <div className="d-flex align-items-center h-100 ms-auto">
          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme}
            className="btn btn-link nav-link"
            aria-label="Toggle theme"
          >
            <i className={`bi ${theme === 'dark' ? 'bi-sun' : 'bi-moon'} fs-5`}></i>
          </button>
          
          {/* Notifications */}
          <div className="dropdown mx-2">
            <button 
              className="btn btn-link nav-link position-relative"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              aria-label="Notifications"
            >
              <i className="bi bi-bell fs-5"></i>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                3
              </span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><h6 className="dropdown-header">Notifications</h6></li>
              <li><a className="dropdown-item" href="#">New message from John</a></li>
              <li><a className="dropdown-item" href="#">System update available</a></li>
              <li><a className="dropdown-item" href="#">Payment received</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#">View all notifications</a></li>
            </ul>
          </div>
          
          {/* Profile */}
          <div className="dropdown">
            <button 
              className="btn btn-link nav-link dropdown-toggle d-flex align-items-center"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i className="bi bi-person-circle fs-4 me-1"></i>
              <span className="d-none d-md-inline">Admin</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              <li><a className="dropdown-item" href="#"><i className="bi bi-person me-2"></i>Profile</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i>Settings</a></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-envelope me-2"></i>Messages</a></li>
              <li><hr className="dropdown-divider" /></li>
              <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right me-2"></i>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;