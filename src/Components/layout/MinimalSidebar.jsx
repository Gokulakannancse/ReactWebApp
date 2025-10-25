// src/components/layout/MinimalSidebar.jsx
import React from 'react';
import { useLayout } from './Layout';
import NavigationComponent from '../common/NavigationComponent';
import '../../styles/components/minimal-sidebar.css';

const MinimalSidebar = () => {
  const { settings, toggleSidebar } = useLayout();

  return (
    <div className={`minimal-sidebar ${settings.sidebarCollapsed ? 'collapsed' : 'expanded'}`}>
      <div className="minimal-sidebar-header">
        <button className="minimal-toggle-btn" onClick={toggleSidebar}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d={settings.sidebarCollapsed ? 
              "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" :
              "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            }/>
          </svg>
        </button>
      </div>
      
      <NavigationComponent type="minimal" />
      
      {!settings.sidebarCollapsed && (
        <div className="minimal-sidebar-expanded">
          <NavigationComponent type="sidebar" />
        </div>
      )}
    </div>
  );
};

export default MinimalSidebar;
