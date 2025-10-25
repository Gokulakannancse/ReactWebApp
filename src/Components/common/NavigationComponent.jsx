// src/components/common/NavigationComponent.jsx
import React, { useState } from 'react';
import { useLayout } from '../layout/Layout';
import { navigationItems, topNavItems, minimalNavItems } from '../../data/NavigationData';

const NavigationComponent = ({ type = 'sidebar', className = '', maxItems = null }) => {
  const { settings } = useLayout();
  const [activeItem, setActiveItem] = useState('app');
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }));
  };

  const handleItemClick = (item) => {
    setActiveItem(item.id);
  };

  const renderSidebarNavigation = () => (
    <div className="navigation-content">
      {navigationItems.map((section) => (
        <div key={section.id} className="nav-section">
          <h3 className="nav-section-title">{section.section}</h3>
          <ul className="nav-menu">
            {section.items.slice(0, maxItems || section.items.length).map((item) => (
              <li key={item.id} className="nav-item">
                <a
                  href={item.path}
                  className={`nav-link ${activeItem === item.id ? 'active' : ''}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleItemClick(item);
                    if (item.subItems) toggleExpanded(item.id);
                  }}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-text">{item.label}</span>
                  {item.subItems && (
                    <span className={`nav-arrow ${expandedItems[item.id] ? 'expanded' : ''}`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                      </svg>
                    </span>
                  )}
                </a>
                {item.subItems && expandedItems[item.id] && (
                  <ul className="nav-submenu">
                    {item.subItems.map((subItem) => (
                      <li key={subItem.id} className="nav-subitem">
                        <a
                          href={subItem.path}
                          className={`nav-sublink ${activeItem === subItem.id ? 'active' : ''}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleItemClick(subItem);
                          }}
                        >
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  const renderTopNavigation = () => (
    <ul className={`top-nav-menu ${className}`}>
      {topNavItems.slice(0, maxItems || topNavItems.length).map((item) => (
        <li key={item.id} className="top-nav-item">
          <a
            href={item.path}
            className={`top-nav-link ${activeItem === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick(item);
            }}
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );

  const renderMinimalNavigation = () => (
    <div className="minimal-nav-content">
      {minimalNavItems.slice(0, maxItems || minimalNavItems.length).map((item) => (
        <div key={item.id} className="minimal-nav-item" title={item.tooltip}>
          <a
            href={item.path}
            className={`minimal-nav-link ${activeItem === item.id ? 'active' : ''}`}
            onClick={(e) => {
              e.preventDefault();
              handleItemClick(item);
            }}
          >
            <span className="minimal-nav-icon">{item.icon}</span>
          </a>
        </div>
      ))}
    </div>
  );

  switch (type) {
    case 'top':
      return renderTopNavigation();
    case 'minimal':
      return renderMinimalNavigation();   
    case 'sidebar':
    default:
      return renderSidebarNavigation();
  }
};   

export default NavigationComponent;



//Teste
