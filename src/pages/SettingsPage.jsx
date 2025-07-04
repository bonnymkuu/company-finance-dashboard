import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import './SettingsPage.css';

const SettingsPage = () => {
  const { theme, toggleTheme } = useTheme();

  // Initialize settings from localStorage or with defaults
  const [settings, setSettings] = useState(() => {
    try {
      const savedSettings = localStorage.getItem('appSettings');
      return savedSettings ? JSON.parse(savedSettings) : {
        themeMode: theme,
        notifications: true,
        emailAlerts: true,
        twoFactorAuth: false,
        language: 'en',
        timezone: 'UTC',
        dateFormat: 'MM/DD/YYYY',
        dashboardLayout: 'standard',
        dataRefreshRate: 30,
        exportFormat: 'csv',
        fontSize: 'medium',
        enableAnimations: true,
        autoSave: true,
        privacyMode: false,
        defaultCurrency: 'USD'
      };
    } catch (error) {
      console.error("Failed to parse settings from localStorage:", error);
      return {
        themeMode: theme,
        notifications: true,
        emailAlerts: true,
        twoFactorAuth: false,
        language: 'en',
        timezone: 'UTC',
        dateFormat: 'MM/DD/YYYY',
        dashboardLayout: 'standard',
        dataRefreshRate: 30,
        exportFormat: 'csv',
        fontSize: 'medium',
        enableAnimations: true,
        autoSave: true,
        privacyMode: false,
        defaultCurrency: 'USD'
      };
    }
  });

  // Update themeMode in settings if the global theme changes
  useEffect(() => {
    setSettings(prev => ({
      ...prev,
      themeMode: theme
    }));
  }, [theme]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const saveSettings = async () => {
    // --- Mock Backend Interaction ---
    console.log("Saving settings to backend...", settings);
    try {
      // Simulate an API call
      // In a real application, you would use fetch or axios here:
      // await fetch('/api/settings', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(settings)
      // });

      // For demonstration, we'll just use localStorage
      localStorage.setItem('appSettings', JSON.stringify(settings));

      if (settings.themeMode !== theme) {
        toggleTheme();
      }
      alert('Settings saved successfully!');
    } catch (error) {
      console.error("Failed to save settings:", error);
      alert('Failed to save settings. Please try again.');
    }
  };

  const resetSettings = () => {
    const defaultSettings = {
      themeMode: theme, // Reset to current global theme
      notifications: true,
      emailAlerts: true,
      twoFactorAuth: false,
      language: 'en',
      timezone: 'UTC',
      dateFormat: 'MM/DD/YYYY',
      dashboardLayout: 'standard',
      dataRefreshRate: 30,
      exportFormat: 'csv',
      fontSize: 'medium',
      enableAnimations: true,
      autoSave: true,
      privacyMode: false,
      defaultCurrency: 'USD'
    };
    setSettings(defaultSettings);
    localStorage.removeItem('appSettings'); // Clear from local storage
    alert('Settings reset to defaults!');
  };

  return (
    <div className={`settings-container ${theme === 'dark' ? 'dark' : 'light'}`}>
      <h2 className="settings-header">
        <i className="bi bi-gear-fill me-2"></i>
        Application Settings
      </h2>
      
      <div className="settings-grid">
        {/* Theme Settings */}
        <div className="setting-card">
          <label>
            <i className="bi bi-palette me-2"></i>
            Theme Mode
          </label>
          <select 
            name="themeMode" 
            value={settings.themeMode} 
            onChange={handleChange}
            className="form-select"
          >
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
        </div>

        {/* Notifications */}
        <div className="setting-card">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="notifications"
              checked={settings.notifications}
              onChange={handleChange}
            />
            <label className="form-check-label">
              <i className="bi bi-bell-fill me-2"></i>
              Enable Notifications
            </label>
          </div>
        </div>

        {/* Email Alerts */}
        <div className="setting-card">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="emailAlerts"
              checked={settings.emailAlerts}
              onChange={handleChange}
            />
            <label className="form-check-label">
              <i className="bi bi-envelope-fill me-2"></i>
              Email Alerts
            </label>
          </div>
        </div>

        {/* Two-Factor Auth */}
        <div className="setting-card">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="twoFactorAuth"
              checked={settings.twoFactorAuth}
              onChange={handleChange}
            />
            <label className="form-check-label">
              <i className="bi bi-shield-lock-fill me-2"></i>
              Two-Factor Authentication
            </label>
          </div>
        </div>

        {/* Language */}
        <div className="setting-card">
          <label>
            <i className="bi bi-translate me-2"></i>
            Language
          </label>
          <select 
            name="language" 
            value={settings.language} 
            onChange={handleChange}
            className="form-select"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>

        {/* Timezone */}
        <div className="setting-card">
          <label>
            <i className="bi bi-globe me-2"></i>
            Timezone
          </label>
          <select 
            name="timezone" 
            value={settings.timezone} 
            onChange={handleChange}
            className="form-select"
          >
            <option value="UTC">UTC</option>
            <option value="EST">Eastern Time (EST)</option>
            <option value="PST">Pacific Time (PST)</option>
            <option value="CET">Central European Time (CET)</option>
          </select>
        </div>

        {/* Date Format */}
        <div className="setting-card">
          <label>
            <i className="bi bi-calendar me-2"></i>
            Date Format
          </label>
          <select 
            name="dateFormat" 
            value={settings.dateFormat} 
            onChange={handleChange}
            className="form-select"
          >
            <option value="MM/DD/YYYY">MM/DD/YYYY</option>
            <option value="DD/MM/YYYY">DD/MM/YYYY</option>
            <option value="YYYY-MM-DD">YYYY-MM-DD</option>
          </select>
        </div>

        {/* Dashboard Layout */}
        <div className="setting-card">
          <label>
            <i className="bi bi-layout-wtf me-2"></i>
            Dashboard Layout
          </label>
          <select 
            name="dashboardLayout" 
            value={settings.dashboardLayout} 
            onChange={handleChange}
            className="form-select"
          >
            <option value="standard">Standard</option>
            <option value="compact">Compact</option>
            <option value="detailed">Detailed</option>
          </select>
        </div>

        {/* Data Refresh Rate */}
        <div className="setting-card">
          <label>
            <i className="bi bi-arrow-clockwise me-2"></i>
            Data Refresh (seconds)
          </label>
          <input
            type="range"
            name="dataRefreshRate"
            min="10"
            max="60"
            step="5"
            value={settings.dataRefreshRate}
            onChange={handleChange}
            className="form-range"
          />
          <span className="refresh-value">{settings.dataRefreshRate}s</span>
        </div>

        {/* Export Format */}
        <div className="setting-card">
          <label>
            <i className="bi bi-download me-2"></i>
            Default Export Format
          </label>
          <select 
            name="exportFormat" 
            value={settings.exportFormat} 
            onChange={handleChange}
            className="form-select"
          >
            <option value="csv">CSV</option>
            <option value="excel">Excel</option>
            <option value="pdf">PDF</option>
          </select>
        </div>

        {/* Font Size */}
        <div className="setting-card">
          <label>
            <i className="bi bi-fonts me-2"></i>
            Font Size
          </label>
          <select 
            name="fontSize" 
            value={settings.fontSize} 
            onChange={handleChange}
            className="form-select"
          >
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>

        {/* Animations */}
        <div className="setting-card">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="enableAnimations"
              checked={settings.enableAnimations}
              onChange={handleChange}
            />
            <label className="form-check-label">
              <i className="bi bi-magic me-2"></i>
              Enable Animations
            </label>
          </div>
        </div>

        {/* Auto Save */}
        <div className="setting-card">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="autoSave"
              checked={settings.autoSave}
              onChange={handleChange}
            />
            <label className="form-check-label">
              <i className="bi bi-save-fill me-2"></i>
              Auto Save Changes
            </label>
          </div>
        </div>

        {/* Privacy Mode */}
        <div className="setting-card">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="privacyMode"
              checked={settings.privacyMode}
              onChange={handleChange}
            />
            <label className="form-check-label">
              <i className="bi bi-eye-slash-fill me-2"></i>
              Privacy Mode
            </label>
          </div>
        </div>

        {/* Default Currency */}
        <div className="setting-card">
          <label>
            <i className="bi bi-currency-dollar me-2"></i>
            Default Currency
          </label>
          <select 
            name="defaultCurrency" 
            value={settings.defaultCurrency} 
            onChange={handleChange}
            className="form-select"
          >
            <option value="USD">USD ($)</option>
            <option value="EUR">EUR (€)</option>
            <option value="GBP">GBP (£)</option>
            <option value="JPY">JPY (¥)</option>
          </select>
        </div>
      </div>

      <div className="settings-footer">
        <button 
          onClick={saveSettings}
          className="btn btn-primary save-btn"
        >
          <i className="bi bi-check-circle me-2"></i>
          Save Settings
        </button>
        <button 
          onClick={resetSettings} // Added reset handler
          className="btn btn-outline-secondary reset-btn ms-2"
        >
          <i className="bi bi-arrow-counterclockwise me-2"></i>
          Reset to Defaults
        </button>
      </div>
    </div>
  );
};

export default SettingsPage;