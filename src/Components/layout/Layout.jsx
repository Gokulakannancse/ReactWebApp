import React, { useState, createContext, useContext, useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import SideSettings from './SideSettings';

const LayoutContext = createContext();

export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within Layout component');
  }
  return context;   
};
          
const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false); 
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('dashboard');
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('app-layout-settings');
    return saved ? JSON.parse(saved) : {
      navigationStyle: 'side',
      theme: 'light',
      fluidLayout: false,
      fontSize: 16,
      fontFamily: 'Inter',
      primaryColor: '#3b82f6',
      darkMode: false,
      notifications: true
    };
  });

  // Apply settings on change
  useEffect(() => {
    const root = document.documentElement;
    
    // Theme
    root.setAttribute('data-theme', settings.theme);
    if (settings.darkMode) {
      root.setAttribute('data-theme', 'dark');
    }
    
    // Font size
    root.style.setProperty('--base-font-size', `${settings.fontSize}px`);
    
    // Font family
    root.style.setProperty('--font-family', settings.fontFamily);
    
    // Primary color
    root.style.setProperty('--primary-color', settings.primaryColor);
    
    // Save to localStorage
    localStorage.setItem('app-layout-settings', JSON.stringify(settings));
  }, [settings]);

  const toggleSidebar = () => {
    console.log('Toggling sidebar'); // Debug log
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const toggleSettings = () => {
    console.log('Toggling settings'); // Debug log
    setSettingsOpen(!settingsOpen);
  };

  const closeSettings = () => {
    setSettingsOpen(false);
  };

  const handleMenuItemClick = (itemId) => {
    setActiveMenuItem(itemId);
    if (window.innerWidth <= 768) {
      closeSidebar();
    }
  };

  const updateSettings = (newSettings) => {
    setSettings(prev => ({ ...prev, ...newSettings }));
  };

  const contextValue = {
    sidebarOpen,
    settingsOpen,
    activeMenuItem,
    settings,
    toggleSidebar,
    closeSidebar,
    toggleSettings,
    closeSettings,
    handleMenuItemClick,
    updateSettings
  };

  return (
    <LayoutContext.Provider value={contextValue}>
      <div className="app-layout">
        {/* Navbar */}
        <Navbar 
          onToggleSidebar={toggleSidebar}
          onToggleSettings={toggleSettings}
        />
        
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen}
          onClose={closeSidebar}
          activeItem={activeMenuItem}
          onItemClick={handleMenuItemClick}
        />
        
        {/* Main content */}
        <main className={`main-content ${sidebarOpen ? '' : 'sidebar-collapsed'} ${settingsOpen ? 'settings-open' : ''}`}>
          <div className="content-area">
            {children}
          </div>
        </main>
        
        {/* Side Settings */}
        <SideSettings 
          isOpen={settingsOpen}
          onClose={closeSettings}
        />
        
        {/* Backdrop for mobile */}
        {(sidebarOpen || settingsOpen) && (
          <div 
            className="backdrop active"
            onClick={() => {
              closeSidebar();
              closeSettings();
            }}
          />
        )}
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
