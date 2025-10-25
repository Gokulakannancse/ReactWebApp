import React from 'react';
import '../../styles/components/navbar.css';

const Navbar = ({ onToggleSidebar, onToggleSettings }) => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button 
          className="navbar-toggle btn-ghost" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Menu button clicked'); // Debug log
            onToggleSidebar && onToggleSidebar();
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        <a href="/" className="navbar-logo">
          Dashboard App
        </a>
      </div>

      <div className="navbar-right">
        <div className="navbar-search">
          <input
            type="text"
            placeholder="Search..."
          />
          <div className="search-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>

        <button 
          className="btn-ghost relative" 
          title="Notifications"
          onClick={(e) => {
            e.preventDefault();
            console.log('Notifications clicked');
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
          </svg>
          <span className="notification-badge">3</span>
        </button>

        <div className="navbar-user">
          <div className="user-avatar">U</div>
          <span className="text-sm font-medium">User</span>
        </div>

        <button 
          className="btn-ghost" 
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Settings button clicked'); // Debug log
            onToggleSettings && onToggleSettings();
          }}
          title="Settings"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 15.5A3.5 3.5 0 018.5 12 3.5 3.5 0 0112 8.5a3.5 3.5 0 013.5 3.5 3.5 3.5 0 01-3.5 3.5zM19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65z"/>
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
