import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(window.innerWidth >= 768);
  const location = useLocation();

  // Close sidebar on small screens when route changes
  useEffect(() => {
    if (window.innerWidth < 768) setIsOpen(false);
  }, [location.pathname]);

  const toggleSidebar = () => setIsOpen(prev => !prev);

  return (
    <>
      {/* Toggle icon (hamburger) */}
      <button
        className="btn btn-dark m-2 d-md-none"
        onClick={toggleSidebar}
        style={{ zIndex: 1100, position: 'fixed', top: 10, left: 10 }}
      >
        <i className="bi bi-list fs-3"></i>
      </button>

      {/* Sidebar */}
      <div className={`sidebar bg-dark text-white ${isOpen ? 'open' : 'collapsed'}`}>
        <h5 className="text-center py-3 border-bottom border-secondary">📊 Business Company </h5>
        <ul className="nav flex-column p-2">
          <li className="nav-item">
            <Link className="nav-link text-white" to="/dashboard">
              <i className="bi bi-speedometer2 me-2"></i> Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/employees">
                <i></i>Employees
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link text-white" to="/add-employees">
                <i></i>Add Employees
            </Link>
          </li>

        <li className="nav-item">
            <Link className="nav-link text-white" to="/projects">
                Projects
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to="/sales">
                <i></i>Sales
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to="/inventory">
                <i></i>Inventory
            </Link>
        </li>
        
          <li className="nav-item">
            <Link className="nav-link text-white" to="/expenses">
              <i className="bi bi-currency-exchange me-2"></i> Expenses
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/income">
              <i className="bi bi-cash-coin me-2"></i> Income
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/marketing">
              <i className="bi bi-megaphone-fill me-2"></i> Marketing
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/reports">
              <i className="bi bi-file-earmark-text me-2"></i> Reports
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link text-white" to="/faqs">
                <i></i>FAQs
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to="/legal">
                <i></i>Legal
            </Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link text-white" to="/about">
                <i></i>About Us
            </Link>
        </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
