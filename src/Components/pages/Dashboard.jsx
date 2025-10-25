import React from 'react';

const Dashboard = () => {
  const stats = [
    { title: 'Total Users', value: '2,543', change: '+12%', color: 'primary' },
    { title: 'Revenue', value: '$45,210', change: '+8%', color: 'success' },
    { title: 'Orders', value: '1,423', change: '-3%', color: 'warning' },
    { title: 'Conversion', value: '3.24%', change: '+5%', color: 'primary' }
  ];

  return (
    <div className="dashboard">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-primary mb-2">Dashboard</h1>
        <p className="text-secondary">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="card">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-sm text-secondary mb-1">{stat.title}</p>
                <h3 className="text-2xl font-bold text-primary">{stat.value}</h3>
              </div>
              <div className={`text-sm font-medium ${
                stat.change.startsWith('+') ? 'text-success-color' : 'text-danger-color'
              }`}>
                {stat.change}
              </div>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className={`h-full bg-${stat.color}-color transition-all duration-300`}
                style={{ width: '60%' }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <div className="lg:col-span-2">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Recent Activity</h3>
            </div>
            <div className="space-y-4">
              {[
                { action: 'New user registered', time: '2 minutes ago', icon: '👤' },
                { action: 'Order #1234 completed', time: '5 minutes ago', icon: '✅' },
                { action: 'Payment received', time: '10 minutes ago', icon: '💰' },
                { action: 'New project created', time: '15 minutes ago', icon: '📁' },
                { action: 'Team member invited', time: '30 minutes ago', icon: '👥' }
              ].map((activity, index) => (
                <div key={index} className="flex items-center gap-3 p-3 bg-secondary rounded-lg">
                  <span className="text-lg">{activity.icon}</span>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary">{activity.action}</p>
                    <p className="text-xs text-secondary">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="space-y-6">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              <button className="btn btn-primary w-full">Create New Project</button>
              <button className="btn btn-secondary w-full">Add Team Member</button>
              <button className="btn btn-secondary w-full">Generate Report</button>
              <button className="btn btn-secondary w-full">View Analytics</button>
            </div>
          </div>

          <div className="card">
            <div className="card-header">
              <h3 className="card-title">System Status</h3>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">Server Status</span>
                <span className="flex items-center gap-1 text-xs text-success-color">
                  <div className="w-2 h-2 bg-success-color rounded-full"></div>
                  Online
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">Database</span>
                <span className="flex items-center gap-1 text-xs text-success-color">
                  <div className="w-2 h-2 bg-success-color rounded-full"></div>
                  Connected
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-secondary">API Status</span>
                <span className="flex items-center gap-1 text-xs text-warning-color">
                  <div className="w-2 h-2 bg-warning-color rounded-full"></div>
                  Maintenance
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
