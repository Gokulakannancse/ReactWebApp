// src/data/NavigationData.js
export const navigationItems = [
    {
      id: 'overview',
      section: 'Overview',
      items: [
        { id: 'app', label: 'App', icon: '📱', path: '/' },
        { id: 'ecommerce', label: 'Ecommerce', icon: '🛒', path: '/ecommerce' },
        { id: 'analytics', label: 'Analytics', icon: '📊', path: '/analytics' },
        { id: 'banking', label: 'Banking', icon: '🏦', path: '/banking' },
        { id: 'booking', label: 'Booking', icon: '📅', path: '/booking' },
        { id: 'file', label: 'File', icon: '📁', path: '/file' },
        { id: 'course', label: 'Course', icon: '🎓', path: '/course' }
      ]
    },

    
    {
      id: 'management',
      section: 'Management',    
      items: [
        { 
          id: 'user', 
          label: 'User', 
          icon: '👤', 
          path: '/user',
          subItems: [
            { id: 'profile', label: 'Profile', path: '/user/profile' },
            { id: 'cards', label: 'Cards', path: '/user/cards' },
            { id: 'list', label: 'List', path: '/user/list' },
            { id: 'create', label: 'Create', path: '/user/create' },
            { id: 'edit', label: 'Edit', path: '/user/edit' },
            { id: 'account', label: 'Account', path: '/user/account' }
          ]
        },
        { id: 'product', label: 'Product', icon: '📦', path: '/product' },
        { id: 'order', label: 'Order', icon: '📋', path: '/order' },
        { id: 'invoice', label: 'Invoice', icon: '🧾', path: '/invoice' },
        { id: 'blog', label: 'Blog', icon: '📝', path: '/blog' },
        { id: 'job', label: 'Job', icon: '💼', path: '/job' }
      ]
    }
  ];
  
  export const topNavItems = [
    { id: 'dashboard', label: 'Dashboard', path: '/' },
    { id: 'analytics', label: 'Analytics', path: '/analytics' },
    { id: 'projects', label: 'Projects', path: '/projects' },
    { id: 'users', label: 'Users', path: '/users' },
    { id: 'settings', label: 'Settings', path: '/settings' }
  ];
  
  export const minimalNavItems = [
    { id: 'app', icon: '📱', path: '/', tooltip: 'App' },
    { id: 'ecommerce', icon: '🛒', path: '/ecommerce', tooltip: 'Ecommerce' },
    { id: 'analytics', icon: '📊', path: '/analytics', tooltip: 'Analytics' },
    { id: 'user', icon: '👤', path: '/user', tooltip: 'User' },
    { id: 'settings', icon: '⚙️', path: '/settings', tooltip: 'Settings' }
  ];
  