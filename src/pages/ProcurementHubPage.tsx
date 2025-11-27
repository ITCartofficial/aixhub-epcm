import { Search, Filter, Plus, TrendingUp, Clock, AlertCircle, CheckCircle, ShoppingCart, DollarSign } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';

export function ProcurementHubPage() {
  const requisitions = [
    { id: 'PR-2024-1523', title: 'Laptop Purchase - IT Department', amount: 'SAR 125,000', status: 'Pending Approval', priority: 'High', date: '2024-11-25' },
    { id: 'PR-2024-1522', title: 'Office Furniture - Corporate Floor 3', amount: 'SAR 45,000', status: 'In Review', priority: 'Medium', date: '2024-11-24' },
    { id: 'PR-2024-1521', title: 'Consulting Services - Q1 2025', amount: 'SAR 890,000', status: 'Approved', priority: 'High', date: '2024-11-23' },
    { id: 'PR-2024-1520', title: 'Marketing Materials', amount: 'SAR 12,500', status: 'Draft', priority: 'Low', date: '2024-11-23' },
    { id: 'PR-2024-1519', title: 'Software Licenses - Annual Renewal', amount: 'SAR 340,000', status: 'Pending Approval', priority: 'High', date: '2024-11-22' },
  ];

  const purchaseOrders = [
    { id: 'PO-2024-8934', vendor: 'Deloitte', amount: 'SAR 1,200,000', status: 'Active', delivery: '2024-12-15' },
    { id: 'PO-2024-8933', vendor: 'Al Faisal Logistics', amount: 'SAR 450,000', status: 'Active', delivery: '2024-12-01' },
    { id: 'PO-2024-8932', vendor: 'TechVision Solutions', amount: 'SAR 89,000', status: 'Completed', delivery: '2024-11-20' },
  ];

  const stats = [
    { label: 'Open Requisitions', value: '23', change: '+3 this week', icon: ShoppingCart, color: 'cyan' as const, trend: 'up' as const },
    { label: 'Pending Approvals', value: '8', change: 'Requires attention', icon: AlertCircle, color: 'orange' as const, trend: 'neutral' as const },
    { label: 'Active POs', value: '45', change: 'SAR 12.3M total', icon: CheckCircle, color: 'green' as const, trend: 'neutral' as const },
    { label: 'Avg Processing Time', value: '2.3 days', change: '-15% improvement', icon: Clock, color: 'purple' as const, trend: 'up' as const },
  ];

  return (
    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg sm:text-xl text-gray-900 mb-1">Procurement Hub</h1>
          <p className="text-xs sm:text-sm text-gray-500">Manage requisitions, purchase orders, and sourcing activities</p>
        </div>
        <button className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
          <Plus className="w-4 h-4" strokeWidth={1.5} />
          <span className="text-xs sm:text-sm">New Requisition</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} {...stat} />
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-12 gap-4">
        {/* Requisitions - 8 columns */}
        <div className="col-span-8 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900">Purchase Requisitions</h2>
            <div className="flex gap-2">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
                <input
                  type="text"
                  placeholder="Search requisitions..."
                  className="pl-9 pr-3 py-1.5 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              <button className="p-1.5 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div className="space-y-2">
            {requisitions.map((req) => (
              <div key={req.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs text-gray-500">{req.id}</span>
                      <span className={`px-2 py-0.5 rounded text-[10px] ${
                        req.priority === 'High' ? 'bg-red-100 text-red-700' :
                        req.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>{req.priority}</span>
                    </div>
                    <div className="text-sm text-gray-900 mb-1">{req.title}</div>
                    <div className="text-xs text-gray-500">{req.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-900 mb-1">{req.amount}</div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      req.status === 'Approved' ? 'bg-green-100 text-green-700' :
                      req.status === 'Pending Approval' ? 'bg-orange-100 text-orange-700' :
                      req.status === 'In Review' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>{req.status}</span>
                  </div>
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

        {/* Purchase Orders - 4 columns */}
        <div className="col-span-4 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <h2 className="text-gray-900 mb-4">Recent Purchase Orders</h2>
          <div className="space-y-3">
            {purchaseOrders.map((po) => (
              <div key={po.id} className="p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
                <div className="text-xs text-gray-500 mb-1">{po.id}</div>
                <div className="text-sm text-gray-900 mb-2">{po.vendor}</div>
                <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
                  <span>{po.amount}</span>
                  <span className={`px-2 py-0.5 rounded-full ${
                    po.status === 'Active' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                  }`}>{po.status}</span>
                </div>
                <div className="text-xs text-gray-500">Delivery: {po.delivery}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}