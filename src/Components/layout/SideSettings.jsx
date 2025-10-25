import React from 'react';
import { useLayout } from './Layout';
import '../../styles/components/side-settings.css';

const SideSettings = ({ isOpen, onClose }) => {
  const { settings, updateSettings } = useLayout();

  const handleSettingChange = (key, value) => {
    console.log(`Setting ${key} to ${value}`); // Debug log
    updateSettings({ [key]: value });
  };

  const handleToggle = (key) => {
    const newValue = !settings[key];
    console.log(`Toggling ${key} to ${newValue}`); // Debug log
    handleSettingChange(key, newValue);
  };

  const colorOptions = [
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Purple', value: '#8b5cf6' },
    { name: 'Green', value: '#10b981' },
    { name: 'Orange', value: '#f59e0b' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Indigo', value: '#6366f1' }
  ];

  const fontFamilies = [
    { name: 'Inter', value: 'Inter' },
    { name: 'Roboto', value: 'Roboto' },
    { name: 'Open Sans', value: 'Open Sans' },
    { name: 'Lato', value: 'Lato' },
    { name: 'Poppins', value: 'Poppins' }
  ];

  const navigationStyles = [
    { name: 'Sidebar', value: 'side', description: 'Traditional side navigation' },
    { name: 'Top Bar', value: 'top', description: 'Horizontal top navigation' },
    { name: 'Minimal', value: 'minimal', description: 'Collapsible minimal sidebar' }
  ];

  const themes = [
    { name: 'Light', value: 'light' },
    { name: 'Dark', value: 'dark' },
    { name: 'System', value: 'system' }
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="settings-overlay show" 
          onClick={(e) => {
            e.preventDefault();
            onClose && onClose();
          }}
        />
      )}
      
      <div className={`side-settings ${isOpen ? 'open' : ''}`}>
        <div className="settings-header">
          <h3 className="settings-title">Settings</h3>
          <button 
            className="settings-close btn-ghost" 
            onClick={(e) => {
              e.preventDefault();
              console.log('Close settings clicked'); // Debug log
              onClose && onClose();
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        
        <div className="settings-content">
          {/* Navigation Style */}
          <div className="settings-group">
            <div className="settings-group-title">Navigation Style</div>
            <div className="navigation-options">
              {navigationStyles.map((nav) => (
                <button
                  key={nav.value}
                  className={`navigation-option ${settings.navigationStyle === nav.value ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSettingChange('navigationStyle', nav.value);
                  }}
                >
                  <div className="navigation-option-title">{nav.name}</div>
                  <div className="navigation-option-desc">{nav.description}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Theme */}
          <div className="settings-group">
            <div className="settings-group-title flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
              Theme
            </div>
            
            <div className="settings-item">
              <div>
                <div className="settings-item-label font-medium text-primary">Dark Mode</div>
                <div className="text-xs text-secondary">Switch to dark theme</div>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  className="toggle-input"
                  checked={settings.darkMode || false}
                  onChange={(e) => {
                    e.preventDefault();
                    handleToggle('darkMode');
                  }}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          {/* Layout */}
          <div className="settings-group">
            <div className="settings-group-title flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M4 4h16v2H4V4zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"/>
              </svg>
              Layout
            </div>
            
            <div className="settings-item">
              <div>
                <div className="settings-item-label font-medium text-primary">Fluid Layout</div>
                <div className="text-xs text-secondary">Make layout width 100%</div>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  className="toggle-input"
                  checked={settings.fluidLayout || false}
                  onChange={(e) => {
                    e.preventDefault();
                    handleToggle('fluidLayout');
                  }}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          {/* Colors */}
          <div className="settings-group">
            <div className="settings-group-title flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.15-.59-1.56-.36-.41-.59-.96-.59-1.56 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-5.52-4.48-10-10-10z"/>
              </svg>
              Primary Color
            </div>
            
            <div className="color-picker" style={{ padding: '0.75rem 0' }}>
              {colorOptions.map((color, index) => (
                <button
                  key={index}
                  className={`color-option ${settings.primaryColor === color.value ? 'active' : ''}`}
                  style={{ backgroundColor: color.value }}
                  onClick={(e) => {
                    e.preventDefault();
                    handleSettingChange('primaryColor', color.value);
                  }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Typography */}
          <div className="settings-group">
            <div className="settings-group-title flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.93 13.5h4.14L12 7.98 9.93 13.5zM12 2l7.5 18h-2.85L15.1 16H8.9l-1.55 4H4.5L12 2z"/>
              </svg>
              Typography
            </div>
            
            <div className="settings-item">
              <label className="settings-item-label">Font Family</label>
              <select
                value={settings.fontFamily || 'Inter'}
                onChange={(e) => handleSettingChange('fontFamily', e.target.value)}
                className="form-select"
              >
                {fontFamilies.map((font) => (
                  <option key={font.value} value={font.value}>{font.name}</option>
                ))}
              </select>
            </div>

            <div className="settings-item">
              <label className="settings-item-label">Font Size: {settings.fontSize || 16}px</label>
              <input
                type="range"
                min="12"
                max="20"
                value={settings.fontSize || 16}
                onChange={(e) => handleSettingChange('fontSize', parseInt(e.target.value))}
                className="font-size-slider w-full"
              />
            </div>
          </div>

          {/* Integrations */}
          <div className="settings-group">
            <div className="settings-group-title flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0016.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 002 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z"/>
              </svg>
              Integrations
            </div>
            
            <div className="settings-item">
              <div>
                <div className="settings-item-label font-medium text-primary">Notifications</div>
                <div className="text-xs text-secondary">Enable push notifications</div>
              </div>
              <label className="toggle">
                <input
                  type="checkbox"
                  className="toggle-input"
                  checked={settings.notifications || false}
                  onChange={(e) => {
                    e.preventDefault();
                    handleToggle('notifications');
                  }}
                />
                <span className="toggle-slider"></span>
              </label>
            </div>
          </div>

          {/* Reset Button */}
          <div className="settings-group">
            <button
              className="btn btn-secondary w-full"
              onClick={(e) => {
                e.preventDefault();
                if (confirm('Reset all settings to defaults?')) {
                  localStorage.removeItem('app-layout-settings');
                  window.location.reload();
                }
              }}
            >
              Reset to Defaults
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideSettings;
