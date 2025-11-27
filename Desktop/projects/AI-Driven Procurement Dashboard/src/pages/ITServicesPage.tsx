import { Laptop, Key, HardDrive, Shield, CheckCircle, Clock, AlertCircle, TrendingUp } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';

export function ITServicesPage() {
  const serviceRequests = [
    { id: 'SR-2024-3421', type: 'Access Request', title: 'SharePoint access for new team member', status: 'Pending Approval', priority: 'High', date: '2024-11-25' },
    { id: 'SR-2024-3420', type: 'Software Request', title: 'Adobe Creative Cloud license', status: 'In Progress', priority: 'Medium', date: '2024-11-24' },
    { id: 'SR-2024-3419', type: 'Hardware Request', title: 'Laptop replacement - Finance Dept', status: 'Approved', priority: 'High', date: '2024-11-24' },
    { id: 'SR-2024-3418', type: 'Access Request', title: 'VPN access for remote work', status: 'Completed', priority: 'Medium', date: '2024-11-23' },
  ];

  const assets = [
    { name: 'Laptops', total: 245, inUse: 238, available: 7, maintenance: 0 },
    { name: 'Monitors', total: 412, inUse: 398, available: 14, maintenance: 0 },
    { name: 'Mobile Phones', total: 156, inUse: 152, available: 3, maintenance: 1 },
    { name: 'Tablets', total: 89, inUse: 82, available: 5, maintenance: 2 },
  ];

  const licenses = [
    { software: 'Microsoft 365', total: 500, used: 487, expiry: '2025-03-15', status: 'Active' },
    { software: 'Adobe Creative Cloud', total: 50, used: 48, expiry: '2024-12-20', status: 'Expiring Soon' },
    { software: 'AutoCAD', total: 25, used: 23, expiry: '2025-06-30', status: 'Active' },
    { software: 'Salesforce', total: 100, used: 94, expiry: '2025-01-10', status: 'Active' },
  ];

  const stats = [
    { label: 'Open Requests', value: '34', change: '+5 today', icon: Clock, color: 'blue' as const, trend: 'up' as const },
    { label: 'Pending Approvals', value: '12', change: '3 urgent', icon: AlertCircle, color: 'orange' as const, trend: 'neutral' as const },
    { label: 'Completed (Week)', value: '67', change: '+12% vs last week', icon: CheckCircle, color: 'green' as const, trend: 'up' as const },
    { label: 'Active Assets', value: '902', change: '97% utilization', icon: Laptop, color: 'purple' as const, trend: 'neutral' as const },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl text-gray-900 mb-1">IT & Services</h1>
          <p className="text-sm text-gray-500">Manage IT service requests, assets, and access control</p>
        </div>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm text-sm">
          + New Request
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <StatsCard key={idx} label={stat.label} value={stat.value} change={stat.change} icon={Icon} color={stat.color} trend={stat.trend} />
          );
        })}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4">
        {/* Service Requests - 7 columns */}
        <div className="col-span-7 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <h2 className="text-gray-900 mb-4">Recent Service Requests</h2>
          <div className="space-y-2">
            {serviceRequests.map((req) => (
              <div key={req.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-500">{req.id}</span>
                      <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded">{req.type}</span>
                      <span className={`px-2 py-0.5 text-[10px] rounded ${
                        req.priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                      }`}>{req.priority}</span>
                    </div>
                    <div className="text-sm text-gray-900 mb-1">{req.title}</div>
                    <div className="text-xs text-gray-500">{req.date}</div>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    req.status === 'Completed' ? 'bg-green-100 text-green-700' :
                    req.status === 'Approved' ? 'bg-green-100 text-green-700' :
                    req.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                    'bg-orange-100 text-orange-700'
                  }`}>{req.status}</span>
                </div>
                <div className="flex gap-2">
                  <button className="text-xs text-blue-600 hover:text-blue-700 px-3 py-1 bg-white rounded-md border border-blue-200 hover:border-blue-300 transition-colors">
                    View Details
                  </button>
                  {req.status === 'Pending Approval' && (
                    <button className="text-xs text-green-600 hover:text-green-700 px-3 py-1 bg-white rounded-md border border-green-200 hover:border-green-300 transition-colors">
                      Approve
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions - 5 columns */}
        <div className="col-span-5 space-y-4">
          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <h2 className="text-gray-900 mb-3">Quick Actions</h2>
            <div className="space-y-2">
              <button className="w-full p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 hover:border-blue-300 hover:shadow-sm transition-all text-left">
                <div className="flex items-center gap-3">
                  <Key className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-gray-900">Request Access</div>
                    <div className="text-xs text-gray-500">System or application access</div>
                  </div>
                </div>
              </button>
              <button className="w-full p-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg border border-purple-200 hover:border-purple-300 hover:shadow-sm transition-all text-left">
                <div className="flex items-center gap-3">
                  <Laptop className="w-5 h-5 text-purple-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-gray-900">Request Hardware</div>
                    <div className="text-xs text-gray-500">Laptops, monitors, peripherals</div>
                  </div>
                </div>
              </button>
              <button className="w-full p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:border-green-300 hover:shadow-sm transition-all text-left">
                <div className="flex items-center gap-3">
                  <HardDrive className="w-5 h-5 text-green-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-sm text-gray-900">Request Software</div>
                    <div className="text-xs text-gray-500">Licenses and applications</div>
                  </div>
                </div>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
            <h2 className="text-gray-900 mb-3">IT Assets Overview</h2>
            <div className="space-y-3">
              {assets.map((asset, idx) => (
                <div key={idx} className="p-2 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-900">{asset.name}</span>
                    <span className="text-xs text-gray-500">{asset.total} total</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    <div className="text-center p-1 bg-green-50 rounded">
                      <div className="text-green-700">{asset.inUse}</div>
                      <div className="text-gray-500">In Use</div>
                    </div>
                    <div className="text-center p-1 bg-blue-50 rounded">
                      <div className="text-blue-700">{asset.available}</div>
                      <div className="text-gray-500">Available</div>
                    </div>
                    <div className="text-center p-1 bg-orange-50 rounded">
                      <div className="text-orange-700">{asset.maintenance}</div>
                      <div className="text-gray-500">Maintenance</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Software Licenses */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <h2 className="text-gray-900 mb-4">Software Licenses</h2>
        <div className="grid grid-cols-4 gap-4">
          {licenses.map((license, idx) => (
            <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <Shield className="w-5 h-5 text-blue-600" strokeWidth={1.5} />
                <span className={`px-2 py-0.5 text-xs rounded ${
                  license.status === 'Expiring Soon' ? 'bg-orange-100 text-orange-700' : 'bg-green-100 text-green-700'
                }`}>{license.status}</span>
              </div>
              <div className="text-sm text-gray-900 mb-2">{license.software}</div>
              <div className="text-xs text-gray-600 mb-2">
                {license.used} / {license.total} used
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 mb-2">
                <div
                  className="bg-blue-600 h-1.5 rounded-full"
                  style={{ width: `${(license.used / license.total) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-500">Expires: {license.expiry}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}