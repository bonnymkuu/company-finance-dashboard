import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const menuItems = [
    { path: "/dashboard", icon: "bi-speedometer2", label: "Dashboard" },
    { path: "/employees", icon: "bi-people-fill", label: "Employees" },
    {
      path: "/add-employee",
      icon: "bi-person-plus-fill",
      label: "Add Employee",
    },
    { path: "/projects", icon: "bi-kanban-fill", label: "Projects" },
    { path: "/sales", icon: "bi-graph-up", label: "Sales" },
    { path: "/inventory", icon: "bi-box-seam", label: "Inventory" },
    { path: "/expenses", icon: "bi-currency-exchange", label: "Expenses" },
    { path: "/income", icon: "bi-cash-coin", label: "Income" },
    { path: "/marketing", icon: "bi-megaphone-fill", label: "Marketing" },
    { path: "/reports", icon: "bi-file-earmark-text", label: "Reports" },
    { path: "/faqs", icon: "bi-question-circle", label: "FAQs" },
    { path: "/legal", icon: "bi-shield-check", label: "Legal" },
    { path: "/about", icon: "bi-info-circle", label: "About Us" },
    { path: "/settings", icon: "bi-gear-fill", label: "Settings" }, // Added Settings page
  ];

  // Close mobile sidebar when route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        className="btn d-lg-none position-fixed"
        onClick={() => setMobileOpen(!mobileOpen)}
        style={{
          zIndex: 1100,
          top: "15px",
          left: "15px",
          background: "transparent",
          border: "none",
          fontSize: "1.75rem",
          color: theme === "dark" ? "white" : "#212529", // Keep this for the toggle icon
          padding: "0.25rem",
          lineHeight: "1",
        }}
        aria-label="Toggle menu"
      >
        <i className="bi bi-list"></i>
      </button>

      {/* Desktop Sidebar */}
      <div
        className={`d-none d-lg-flex flex-column sidebar bg-${
          theme === "dark" ? "dark" : "light"
        } text-${theme === "dark" ? "white" : "dark"}`}
        style={{
          width: "280px",
          height: "100vh",
          position: "fixed",
          left: 0,
          top: 0,
          zIndex: 1000,
          paddingTop: "56px", // Account for topbar height
        }}
      >
        <div className="p-3 border-bottom border-secondary">
          <h5 className="text-center mb-0">
            <i className="bi bi-building me-2" ></i>
            Business Company
          </h5>
        </div>

        <div className="flex-grow-1 overflow-auto p-3">
          <ul className="nav flex-column gap-2">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.path}>
                <Link
                  className={`nav-link rounded p-3 d-flex align-items-center ${
                    location.pathname === item.path
                      ? `bg-${theme === "dark" ? "primary" : "info"} text-white`
                      : "" // No text-white here for non-active links to allow color change
                  }`}
                  to={item.path}
                >
                  <i
                    className={`bi ${item.icon} me-3 fs-5`}
                    style={{ 
                      minWidth: "24px",
                      // Apply dark color to icon when in light theme and not active
                      color: theme === "light" && location.pathname !== item.path ? "#212529" : "" 
                    }}
                  ></i>
                  <span className="fs-6" style={{ color: theme === "light" && location.pathname !== item.path ? "#212529" : "" }}>{item.label}</span>
                  {location.pathname === item.path && (
                    <i className="bi bi-chevron-right ms-auto"></i>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-3 border-top border-secondary">
          <button
            onClick={toggleTheme}
            className={`btn btn-sm w-100 d-flex align-items-center justify-content-center ${
              theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
            }`}
          >
            <i
              className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon"} me-2`}
            ></i>
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`d-lg-none offcanvas offcanvas-start ${
          mobileOpen ? "show" : ""
        }`}
        style={{
          width: "280px",
          visibility: mobileOpen ? "visible" : "hidden",
          backgroundColor: theme === "dark" ? "#212529" : "#f8f9fa",
        }}
      >
        <div className="offcanvas-body p-0 d-flex flex-column">
          <div className="p-3 border-bottom border-secondary">
            <h5 className="text-center mb-0">
              <i className="bi bi-building me-2"></i>
              Business Company
            </h5>
          </div>

          <div className="flex-grow-1 overflow-auto p-3">
            <ul className="nav flex-column gap-2">
              {menuItems.map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link
                    className={`nav-link rounded p-3 d-flex align-items-center ${
                      location.pathname === item.path
                        ? `bg-${
                            theme === "dark" ? "primary" : "info"
                          } text-white`
                        : "" // No text-white here for non-active links to allow color change
                    }`}
                    to={item.path}
                  >
                    <i
                      className={`bi ${item.icon} me-3 fs-5`}
                      style={{ 
                        minWidth: "24px",
                        // Apply dark color to icon when in light theme and not active
                        color: theme === "light" && location.pathname !== item.path ? "#212529" : "" 
                      }}
                    ></i>
                    <span className="fs-6" style={{ color: theme === "light" && location.pathname !== item.path ? "#212529" : "" }}>{item.label}</span>
                    {location.pathname === item.path && (
                      <i className="bi bi-chevron-right ms-auto"></i>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-3 border-top border-secondary">
            <button
              onClick={toggleTheme}
              className={`btn btn-sm w-100 d-flex align-items-center justify-content-center ${
                theme === "dark" ? "btn-outline-light" : "btn-outline-dark"
              }`}
            >
              <i
                className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon"} me-2`}
              ></i>
              {theme === "dark" ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;