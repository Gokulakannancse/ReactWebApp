import React, { useState } from 'react';
import '../../styles/components/sidebar.css';

const Sidebar = ({ isOpen, onClose, activeItem, onItemClick }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const menuSections = [
    {
      title: 'Main Menu',
      items: [
        { id: 'dashboard', label: 'Dashboard', icon: '📊', path: '/' },
        { id: 'analytics', label: 'Analytics', icon: '📈', path: '/analytics' },
        { id: 'projects', label: 'Projects', icon: '📁', path: '/projects', badge: 12 },
        { id: 'tasks', label: 'Tasks', icon: '✅', path: '/tasks', badge: 5 }
      ]
    },
    {
      title: 'Management',
      items: [
        { id: 'calendar', label: 'Calendar', icon: '📅', path: '/calendar' },
        { id: 'messages', label: 'Messages', icon: '💬', path: '/messages', badge: 3 },
        { id: 'team', label: 'Team', icon: '👥', path: '/team' }
      ]
    },
    {
      title: 'Settings',
      items: [
        { id: 'profile', label: 'Profile', icon: '👤', path: '/profile' },
        { id: 'settings', label: 'Settings', icon: '⚙️', path: '/settings' },
        { id: 'help', label: 'Help & Support', icon: '❓', path: '/help' }
      ]
    }
  ];

  const filteredSections = menuSections.map(section => ({
    ...section,
    items: section.items.filter(item => 
      item.label.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(section => section.items.length > 0);

  const handleItemClick = (item) => {
    console.log('Menu item clicked:', item.id);
    onItemClick && onItemClick(item.id);
    // Close sidebar on mobile
    if (window.innerWidth <= 768 && onClose) {
      onClose();
    }
  };

  const handleBackdropClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onClose && onClose();
  };

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div 
          className="sidebar-overlay show" 
          onClick={handleBackdropClick}
        />
      )}
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {/* Search */}
          <div className="sidebar-search-container">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search menu..."
                className="sidebar-search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="search-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" stroke="currentColor" strokeWidth="2" fill="none"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Menu Sections */}
          {filteredSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="sidebar-section">
              <h3 className="sidebar-section-title">{section.title}</h3>
              <ul className="sidebar-menu">
                {section.items.map((item) => (
                  <li key={item.id} className="sidebar-menu-item">
                    <a
                      href={item.path}
                      className={`sidebar-menu-link ${activeItem === item.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleItemClick(item);
                      }}
                    >
                      <span className="sidebar-menu-icon">{item.icon}</span>
                      <span className="sidebar-menu-text">{item.label}</span>
                      {item.badge && (
                        <span className="sidebar-menu-badge">{item.badge}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* No Results */}
          {searchTerm && filteredSections.length === 0 && (
            <div className="sidebar-no-results">
              <div className="text-center p-4">
                <div className="text-lg mb-2">🔍</div>
                <div className="text-sm text-secondary">No results found</div>
                <div className="text-xs text-light">Try a different search term</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
