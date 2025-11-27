import { Search, Filter, FileText, AlertCircle, Calendar, Upload, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { StatsCard } from '../components/StatsCard';

export function ContractsPage() {
  const stats = [
    { label: 'Active Contracts', value: '68', change: '+4 this month', icon: FileText, color: 'indigo' as const, trend: 'up' as const },
    { label: 'Expiring Soon', value: '12', change: 'Within 60 days', icon: AlertCircle, color: 'red' as const, trend: 'neutral' as const },
    { label: 'Total Value', value: 'SAR 45.8M', change: '+8% vs last year', icon: DollarSign, color: 'green' as const, trend: 'up' as const },
    { label: 'Pending Reviews', value: '9', change: '3 require action', icon: Clock, color: 'yellow' as const, trend: 'neutral' as const },
  ];

  const contracts = [
    {
      id: 'CNT-2024-0156',
      title: 'Master Services Agreement - Deloitte',
      vendor: 'Deloitte',
      type: 'MSA',
      value: 'SAR 12.5M',
      startDate: '2024-01-15',
      endDate: '2025-01-14',
      status: 'Active',
      daysToExpiry: 49,
      aiFlags: ['Renewal recommended']
    },
    {
      id: 'CNT-2024-0145',
      title: 'Logistics Services Contract',
      vendor: 'Al Faisal Logistics',
      type: 'Service Contract',
      value: 'SAR 3.2M',
      startDate: '2024-03-01',
      endDate: '2025-02-28',
      status: 'Active',
      daysToExpiry: 94,
      aiFlags: []
    },
    {
      id: 'CNT-2023-0892',
      title: 'IT Infrastructure Support',
      vendor: 'TechVision Solutions',
      type: 'Support Agreement',
      value: 'SAR 8.9M',
      startDate: '2023-06-01',
      endDate: '2024-12-15',
      status: 'Expiring Soon',
      daysToExpiry: 19,
      aiFlags: ['Action required', 'Missing renewal terms']
    },
    {
      id: 'CNT-2024-0198',
      title: 'Office Supplies Framework',
      vendor: 'Eastern Supply Co.',
      type: 'Framework Agreement',
      value: 'SAR 450K',
      startDate: '2024-07-01',
      endDate: '2026-06-30',
      status: 'Active',
      daysToExpiry: 581,
      aiFlags: []
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl text-gray-900 mb-1">Contracts & Documents</h1>
          <p className="text-sm text-gray-500">Manage contracts, agreements, and legal documents with AI intelligence</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm">
          <Upload className="w-4 h-4" strokeWidth={1.5} />
          <span className="text-sm">Upload Contract</span>
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} {...stat} />
        ))}
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search contracts by ID, vendor, or type..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
            <span className="text-sm">Filter by Status</span>
          </button>
          <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Expiring Soon
          </button>
        </div>
      </div>

      {/* Contracts List */}
      <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
        <h2 className="text-gray-900 mb-4">All Contracts</h2>
        <div className="space-y-3">
          {contracts.map((contract) => (
            <div key={contract.id} className="p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-4 h-4 text-gray-400" strokeWidth={1.5} />
                    <span className="text-xs text-gray-500">{contract.id}</span>
                    <span className={`px-2 py-0.5 rounded-full text-xs ${
                      contract.status === 'Active' ? 'bg-green-100 text-green-700' :
                      contract.status === 'Expiring Soon' ? 'bg-orange-100 text-orange-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>{contract.status}</span>
                    {contract.daysToExpiry < 45 && (
                      <span className="flex items-center gap-1 px-2 py-0.5 bg-red-50 text-red-700 rounded-full text-xs">
                        <AlertCircle className="w-3 h-3" strokeWidth={1.5} />
                        {contract.daysToExpiry} days left
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm text-gray-900 mb-1">{contract.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-gray-600">
                    <span>Vendor: {contract.vendor}</span>
                    <span>Type: {contract.type}</span>
                    <span>Value: {contract.value}</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-gray-200">
                <div className="flex items-center gap-4 text-xs text-gray-600">
                  <span>Start: {contract.startDate}</span>
                  <span>End: {contract.endDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  {contract.aiFlags.length > 0 && (
                    <div className="flex gap-1">
                      {contract.aiFlags.map((flag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-yellow-50 text-yellow-700 text-xs rounded border border-yellow-200">
                          AI: {flag}
                        </span>
                      ))}
                    </div>
                  )}
                  <button className="text-xs text-blue-600 hover:text-blue-700 px-3 py-1 bg-white rounded-md border border-blue-200 hover:border-blue-300 transition-colors">
                    View Contract
                  </button>
                  <button className="text-xs text-gray-600 hover:text-gray-700 px-3 py-1 bg-white rounded-md border border-gray-200 hover:border-gray-300 transition-colors">
                    AI Summary
                  </button>
                  {contract.daysToExpiry < 90 && (
                    <button className="text-xs text-green-600 hover:text-green-700 px-3 py-1 bg-white rounded-md border border-green-200 hover:border-green-300 transition-colors">
                      Start Renewal
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}