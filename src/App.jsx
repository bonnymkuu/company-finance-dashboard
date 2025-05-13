import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './pages/Dashboard';
import Expenses from './pages/Expenses';
import Income from './pages/Income';
import Marketing from './pages/Marketing';
import Reports from './pages/Reports';
import EmployeePage from './pages/EmployeePage';
import ProjectPage from './pages/ProjectPage';
import SalesPage from './pages/SalesPage';
import InventoryPage from './pages/InventoryPage';
import FAQPage from './pages/FAQPage';
import LegalPage from './pages/LegalPage';
import AddEmployee from './pages/AddEmployee';
import AboutPage from './pages/AboutPage';
import './App.css';
 
const App = () => {
  return (
    <Router>
       <div className="app">
        <Topbar />
        <div className="main-content">
          <Sidebar />
          <div className="page-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/employees" element={<EmployeePage />} />
            <Route path="/projects" element={<ProjectPage />} />
            <Route path="/sales" element={<SalesPage />} />
            <Route path="/inventory" element={<InventoryPage />} />
            <Route path="/add-employee" element={<AddEmployee />} />
            <Route path="/faqs" element={<FAQPage />} />
            <Route path="/legal" element={<LegalPage />} />
            <Route path="/about" element={<AboutPage />} />        
            <Route path="/expenses" element={<Expenses />} />
            <Route path="/income" element={<Income />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/reports" element={<Reports />} />
          </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
