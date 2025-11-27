import { Users, Settings, Shield, Database, Bell, Zap, Activity, Server } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';

export function AdminPage() {
  const stats = [
    { label: 'Active Users', value: '234', change: '+12 this month', icon: Users, color: 'blue' as const, trend: 'up' as const },
    { label: 'System Uptime', value: '99.98%', change: 'Excellent', icon: Activity, color: 'green' as const, trend: 'neutral' as const },
    { label: 'API Response', value: '145ms', change: 'Optimal', icon: Zap, color: 'cyan' as const, trend: 'neutral' as const },
    { label: 'Database Size', value: '2.4 TB', change: '+180GB growth', icon: Database, color: 'orange' as const, trend: 'up' as const },
  ];

  const users = [
    { name: 'Aisha Al-Sayed', role: 'Procurement Manager', department: 'Corporate', status: 'Active', lastLogin: '2024-11-26 09:15' },
    { name: 'Mohammed Al-Rashid', role: 'Vendor Manager', department: 'Supply Chain', status: 'Active', lastLogin: '2024-11-26 08:45' },
    { name: 'Sara Al-Qahtani', role: 'Contract Specialist', department: 'Legal', status: 'Active', lastLogin: '2024-11-25 16:30' },
    { name: 'Ahmed Al-Dosari', role: 'Procurement Analyst', department: 'Finance', status: 'Inactive', lastLogin: '2024-11-20 14:20' },
  ];

  const recentActivities = [
    { user: 'System Admin', action: 'Updated approval workflow rules', time: '2 hours ago' },
    { user: 'Aisha Al-Sayed', action: 'Modified procurement policy settings', time: '5 hours ago' },
    { user: 'System', action: 'Automated backup completed successfully', time: '12 hours ago' },
    { user: 'IT Admin', action: 'Updated security certificates', time: '1 day ago' },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl text-gray-900 mb-1">System Administration</h1>
          <p className="text-sm text-gray-500">Manage users, system settings, and configurations</p>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            System Logs
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm text-sm">
            + Add User
          </button>
        </div>
      </div>

      {/* System Metrics */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} label={stat.label} value={stat.value} change={stat.change} icon={stat.icon} color={stat.color} trend={stat.trend} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4">
        {/* Users Management - 8 columns */}
        <div className="col-span-8 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <h2 className="text-gray-900 mb-4">User Management</h2>
          <div className="space-y-2">
            {users.map((user, idx) => (
              <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white text-xs">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="text-sm text-gray-900">{user.name}</div>
                      <div className="text-xs text-gray-500">{user.role} · {user.department}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      user.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                    }`}>{user.status}</span>
                    <div className="text-xs text-gray-500">Last login: {user.lastLogin}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs text-blue-600 hover:text-blue-700 px-3 py-1 bg-white rounded-md border border-blue-200 hover:border-blue-300 transition-colors">
                    Edit User
                  </button>
                  <button className="text-xs text-gray-600 hover:text-gray-700 px-3 py-1 bg-white rounded-md border border-gray-200 hover:border-gray-300 transition-colors">
                    Permissions
                  </button>
                  <button className="text-xs text-gray-600 hover:text-gray-700 px-3 py-1 bg-white rounded-md border border-gray-200 hover:border-gray-300 transition-colors">
                    Activity Log
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* System Settings - 4 columns */}
        <div className="col-span-4 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <h2 className="text-gray-900 mb-3">System Settings</h2>
            <div className="space-y-2">
              <button className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all text-left">
                <div className="flex items-center gap-3">
                  <Settings className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-gray-900">General Settings</div>
                    <div className="text-xs text-gray-500">System configuration</div>
                  </div>
                </div>
              </button>
              <button className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all text-left">
                <div className="flex items-center gap-3">
                  <Shield className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-gray-900">Security & Access</div>
                    <div className="text-xs text-gray-500">Authentication, roles</div>
                  </div>
                </div>
              </button>
              <button className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all text-left">
                <div className="flex items-center gap-3">
                  <Database className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-gray-900">Data Management</div>
                    <div className="text-xs text-gray-500">Backup, archiving</div>
                  </div>
                </div>
              </button>
              <button className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all text-left">
                <div className="flex items-center gap-3">
                  <Bell className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-gray-900">Notifications</div>
                    <div className="text-xs text-gray-500">Alerts, preferences</div>
                  </div>
                </div>
              </button>
              <button className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all text-left">
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-gray-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-gray-900">AI Configuration</div>
                    <div className="text-xs text-gray-500">AI models, training</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <h2 className="text-gray-900 mb-3">Recent Activity</h2>
            <div className="space-y-3">
              {recentActivities.map((activity, idx) => (
                <div key={idx} className="pb-3 border-b border-gray-200 last:border-0 last:pb-0">
                  <div className="text-xs text-gray-900 mb-1">{activity.user}</div>
                  <div className="text-xs text-gray-600 mb-1">{activity.action}</div>
                  <div className="text-xs text-gray-400">{activity.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}