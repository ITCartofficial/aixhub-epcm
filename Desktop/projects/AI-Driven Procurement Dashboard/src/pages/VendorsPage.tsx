import { Search, Filter, Star, TrendingUp, TrendingDown, AlertTriangle, Users, Award, DollarSign, BarChart3, X, Mail, Phone, MapPin, Calendar, FileText, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { StatsCard } from '../components/StatsCard';

interface Vendor {
  name: string;
  category: string;
  rating: number;
  performance: number;
  spend: string;
  contracts: number;
  status: string;
  risk: string;
  trend: string;
  contact: {
    email: string;
    phone: string;
    address: string;
  };
  details: {
    established: string;
    certifications: string[];
    totalContracts: number;
    activeProjects: number;
  };
  performanceMetrics: {
    onTimeDelivery: number;
    qualityScore: number;
    responseTime: string;
    complianceRate: number;
    costEfficiency: number;
    innovationScore: number;
  };
  recentActivity: {
    date: string;
    action: string;
    status: string;
  }[];
}

export function VendorsPage() {
  const [selectedStat, setSelectedStat] = useState<string | null>(null);
  const [selectedVendorProfile, setSelectedVendorProfile] = useState<Vendor | null>(null);
  const [selectedVendorPerformance, setSelectedVendorPerformance] = useState<Vendor | null>(null);

  const vendors: Vendor[] = [
    { 
      name: 'Deloitte', 
      category: 'Consulting', 
      rating: 4.7, 
      performance: 98, 
      spend: 'SAR 12.5M',
      contracts: 3,
      status: 'Strategic Partner',
      risk: 'Low',
      trend: 'up',
      contact: {
        email: 'partners@deloitte.sa',
        phone: '+966 11 282 8400',
        address: 'King Fahad Road, Riyadh, Saudi Arabia'
      },
      details: {
        established: '2010',
        certifications: ['ISO 9001', 'ISO 27001', 'CMMI Level 5'],
        totalContracts: 8,
        activeProjects: 5
      },
      performanceMetrics: {
        onTimeDelivery: 98,
        qualityScore: 96,
        responseTime: '< 2 hours',
        complianceRate: 100,
        costEfficiency: 94,
        innovationScore: 92
      },
      recentActivity: [
        { date: '2025-11-20', action: 'Contract Renewal - Digital Transformation', status: 'Completed' },
        { date: '2025-11-15', action: 'Performance Review Q4', status: 'Passed' },
        { date: '2025-11-01', action: 'New Project Proposal Submitted', status: 'Under Review' }
      ]
    },
    { 
      name: 'Al Faisal Logistics', 
      category: 'Logistics', 
      rating: 4.2, 
      performance: 82, 
      spend: 'SAR 3.2M',
      contracts: 5,
      status: 'Active',
      risk: 'High',
      trend: 'down',
      contact: {
        email: 'info@alfaisallogistics.sa',
        phone: '+966 11 456 7890',
        address: 'Industrial Area, Jeddah, Saudi Arabia'
      },
      details: {
        established: '2015',
        certifications: ['ISO 9001', 'OHSAS 18001'],
        totalContracts: 12,
        activeProjects: 7
      },
      performanceMetrics: {
        onTimeDelivery: 82,
        qualityScore: 78,
        responseTime: '4-6 hours',
        complianceRate: 88,
        costEfficiency: 85,
        innovationScore: 70
      },
      recentActivity: [
        { date: '2025-11-18', action: 'Delayed Shipment - Order #4521', status: 'Issue' },
        { date: '2025-11-10', action: 'Compliance Audit', status: 'Warning' },
        { date: '2025-10-28', action: 'Route Optimization Implemented', status: 'Completed' }
      ]
    },
    { 
      name: 'TechVision Solutions', 
      category: 'IT Services', 
      rating: 4.5, 
      performance: 94, 
      spend: 'SAR 8.9M',
      contracts: 7,
      status: 'Preferred',
      risk: 'Low',
      trend: 'up',
      contact: {
        email: 'contact@techvision.sa',
        phone: '+966 12 345 6789',
        address: 'Technology Park, Riyadh, Saudi Arabia'
      },
      details: {
        established: '2012',
        certifications: ['ISO 27001', 'AWS Partner', 'Microsoft Gold Partner'],
        totalContracts: 15,
        activeProjects: 9
      },
      performanceMetrics: {
        onTimeDelivery: 94,
        qualityScore: 93,
        responseTime: '< 1 hour',
        complianceRate: 97,
        costEfficiency: 91,
        innovationScore: 95
      },
      recentActivity: [
        { date: '2025-11-22', action: 'Cloud Migration Phase 3', status: 'In Progress' },
        { date: '2025-11-12', action: 'Security Assessment Passed', status: 'Completed' },
        { date: '2025-11-05', action: 'SLA Review Meeting', status: 'Completed' }
      ]
    },
    { 
      name: 'Global Freight Systems', 
      category: 'Logistics', 
      rating: 4.8, 
      performance: 96, 
      spend: 'SAR 2.1M',
      contracts: 2,
      status: 'Active',
      risk: 'Low',
      trend: 'up',
      contact: {
        email: 'operations@globalfreight.sa',
        phone: '+966 13 789 0123',
        address: 'Port Area, Dammam, Saudi Arabia'
      },
      details: {
        established: '2008',
        certifications: ['ISO 9001', 'ISO 14001', 'C-TPAT'],
        totalContracts: 6,
        activeProjects: 3
      },
      performanceMetrics: {
        onTimeDelivery: 96,
        qualityScore: 94,
        responseTime: '2-3 hours',
        complianceRate: 98,
        costEfficiency: 93,
        innovationScore: 88
      },
      recentActivity: [
        { date: '2025-11-21', action: 'International Shipment Delivered', status: 'Completed' },
        { date: '2025-11-14', action: 'Quarterly Business Review', status: 'Completed' },
        { date: '2025-11-08', action: 'New Route Approval', status: 'Approved' }
      ]
    },
    { 
      name: 'Eastern Supply Co.', 
      category: 'Materials', 
      rating: 4.4, 
      performance: 89, 
      spend: 'SAR 5.4M',
      contracts: 4,
      status: 'Active',
      risk: 'Medium',
      trend: 'up',
      contact: {
        email: 'sales@easternsupply.sa',
        phone: '+966 13 456 7890',
        address: 'Industrial District, Al Khobar, Saudi Arabia'
      },
      details: {
        established: '2013',
        certifications: ['ISO 9001', 'ISO 14001'],
        totalContracts: 10,
        activeProjects: 6
      },
      performanceMetrics: {
        onTimeDelivery: 89,
        qualityScore: 87,
        responseTime: '3-4 hours',
        complianceRate: 92,
        costEfficiency: 88,
        innovationScore: 82
      },
      recentActivity: [
        { date: '2025-11-19', action: 'Material Quality Inspection', status: 'Passed' },
        { date: '2025-11-11', action: 'Bulk Order Delivered', status: 'Completed' },
        { date: '2025-11-03', action: 'Price Negotiation', status: 'Ongoing' }
      ]
    },
    { 
      name: 'Arabian Construction Ltd.', 
      category: 'Construction', 
      rating: 4.1, 
      performance: 85, 
      spend: 'SAR 15.7M',
      contracts: 2,
      status: 'Active',
      risk: 'Medium',
      trend: 'down',
      contact: {
        email: 'projects@arabianconstruction.sa',
        phone: '+966 11 567 8901',
        address: 'Construction Zone, Riyadh, Saudi Arabia'
      },
      details: {
        established: '2005',
        certifications: ['ISO 9001', 'OHSAS 18001', 'Saudi Contractor License'],
        totalContracts: 5,
        activeProjects: 3
      },
      performanceMetrics: {
        onTimeDelivery: 85,
        qualityScore: 83,
        responseTime: '6-8 hours',
        complianceRate: 90,
        costEfficiency: 86,
        innovationScore: 75
      },
      recentActivity: [
        { date: '2025-11-17', action: 'Project Milestone Delayed', status: 'Issue' },
        { date: '2025-11-09', action: 'Safety Inspection', status: 'Passed' },
        { date: '2025-10-30', action: 'Contract Amendment Request', status: 'Under Review' }
      ]
    },
  ];

  const stats = [
    { 
      id: 'total',
      label: 'Total Active Vendors', 
      value: '127', 
      change: '+8 this quarter',
      icon: Users,
      color: 'blue' as const,
      trend: 'up' as const,
      details: {
        title: 'Total Active Vendors Breakdown',
        metrics: [
          { label: 'Strategic Partners', value: '12', percentage: '9.4%' },
          { label: 'Preferred Vendors', value: '28', percentage: '22.0%' },
          { label: 'Active Vendors', value: '67', percentage: '52.8%' },
          { label: 'New This Quarter', value: '8', percentage: '6.3%' },
          { label: 'Under Review', value: '12', percentage: '9.4%' }
        ]
      }
    },
    { 
      id: 'strategic',
      label: 'Strategic Partners', 
      value: '12', 
      change: 'Tier 1 status',
      icon: Award,
      color: 'purple' as const,
      trend: 'neutral' as const,
      details: {
        title: 'Strategic Partners Overview',
        metrics: [
          { label: 'Average Rating', value: '4.6/5', percentage: '92%' },
          { label: 'Combined Spend', value: 'SAR 48M', percentage: '54% of total' },
          { label: 'Active Contracts', value: '45', percentage: '38% of total' },
          { label: 'Performance Score', value: '96%', percentage: '+4% YoY' },
          { label: 'Contract Renewals', value: '11', percentage: '92% renewal rate' }
        ]
      }
    },
    { 
      id: 'spend',
      label: 'Total Spend (YTD)', 
      value: 'SAR 89.4M', 
      change: '+12% vs last year',
      icon: DollarSign,
      color: 'green' as const,
      trend: 'up' as const,
      details: {
        title: 'Spend Analysis YTD',
        metrics: [
          { label: 'Consulting', value: 'SAR 31.3M', percentage: '35%' },
          { label: 'IT Services', value: 'SAR 25.0M', percentage: '28%' },
          { label: 'Logistics', value: 'SAR 16.1M', percentage: '18%' },
          { label: 'Materials', value: 'SAR 10.7M', percentage: '12%' },
          { label: 'Other', value: 'SAR 6.3M', percentage: '7%' }
        ]
      }
    },
    { 
      id: 'rating',
      label: 'Avg Vendor Rating', 
      value: '4.5/5', 
      change: '+0.3 improvement',
      icon: BarChart3,
      color: 'orange' as const,
      trend: 'up' as const,
      details: {
        title: 'Vendor Rating Distribution',
        metrics: [
          { label: '5 Stars (Excellent)', value: '23', percentage: '18.1%' },
          { label: '4-4.9 Stars (Good)', value: '78', percentage: '61.4%' },
          { label: '3-3.9 Stars (Average)', value: '19', percentage: '15.0%' },
          { label: '2-2.9 Stars (Below Average)', value: '5', percentage: '3.9%' },
          { label: 'Under 2 Stars (Poor)', value: '2', percentage: '1.6%' }
        ]
      }
    },
  ];

  return (
    <div className="space-y-2 sm:space-y-3 lg:space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-lg sm:text-xl text-gray-900 mb-1">Vendors & Partners</h1>
          <p className="text-xs sm:text-sm text-gray-500">Manage vendor relationships, performance, and compliance</p>
        </div>
        <button className="px-3 sm:px-4 py-1.5 sm:py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-sm text-xs sm:text-sm">
          + Add Vendor
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 lg:gap-4">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            onClick={() => setSelectedStat(stat.id)}
          >
            <StatsCard {...stat} />
          </div>
        ))}
      </div>

      {/* Detailed Metrics Modal */}
      {selectedStat && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedStat(null)}>
          <div className="bg-white rounded-xl max-w-2xl w-full p-4 sm:p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg text-gray-900">
                {stats.find(s => s.id === selectedStat)?.details.title}
              </h3>
              <button 
                onClick={() => setSelectedStat(null)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
              </button>
            </div>
            
            <div className="space-y-3">
              {stats.find(s => s.id === selectedStat)?.details.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">{metric.label}</span>
                    <span className="text-sm text-gray-900 font-medium">{metric.value}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full bg-${stats.find(s => s.id === selectedStat)?.color}-500`}
                        style={{ width: metric.percentage }}
                      ></div>
                    </div>
                    <span className="text-xs text-gray-500 min-w-[60px] text-right">{metric.percentage}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 flex justify-end">
              <button 
                onClick={() => setSelectedStat(null)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Filters and Search */}
      <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-3 lg:p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
            <input
              type="text"
              placeholder="Search vendors by name, category, or status..."
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-200 rounded-lg outline-none focus:border-blue-500 transition-colors"
            />
          </div>
          <button className="flex items-center gap-2 px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
            <span className="text-sm">Filters</span>
          </button>
        </div>
      </div>

      {/* Vendors Grid */}
      <div className="grid grid-cols-2 gap-4">
        {vendors.map((vendor, idx) => {
          const TrendIcon = vendor.trend === 'up' ? TrendingUp : TrendingDown;
          return (
            <div key={idx} className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="text-gray-900 mb-1">{vendor.name}</h3>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">{vendor.category}</span>
                    <span className={`px-2 py-0.5 text-xs rounded ${
                      vendor.status === 'Strategic Partner' ? 'bg-purple-100 text-purple-700' :
                      vendor.status === 'Preferred' ? 'bg-green-100 text-green-700' :
                      'bg-gray-100 text-gray-700'
                    }`}>{vendor.status}</span>
                  </div>
                </div>
                <div className={`flex items-center gap-1 px-2 py-1 rounded-lg ${
                  vendor.risk === 'Low' ? 'bg-green-50 text-green-700' :
                  vendor.risk === 'Medium' ? 'bg-yellow-50 text-yellow-700' :
                  'bg-red-50 text-red-700'
                }`}>
                  <AlertTriangle className="w-3 h-3" strokeWidth={1.5} />
                  <span className="text-xs">{vendor.risk}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-3 pb-3 border-b border-gray-200">
                <div>
                  <div className="text-xs text-gray-500 mb-1">Rating</div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" strokeWidth={1.5} />
                    <span className="text-sm text-gray-900">{vendor.rating}</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Performance</div>
                  <div className="flex items-center gap-1">
                    <span className="text-sm text-gray-900">{vendor.performance}%</span>
                    <TrendIcon className={`w-3 h-3 ${vendor.trend === 'up' ? 'text-green-600' : 'text-red-600'}`} strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500 mb-1">Contracts</div>
                  <span className="text-sm text-gray-900">{vendor.contracts}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Total Spend</div>
                  <div className="text-sm text-gray-900">{vendor.spend}</div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVendorProfile(vendor);
                    }}
                    className="text-xs text-blue-600 hover:text-blue-700 px-3 py-1 bg-blue-50 rounded-md border border-blue-200 hover:border-blue-300 transition-colors"
                  >
                    View Profile
                  </button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedVendorPerformance(vendor);
                    }}
                    className="text-xs text-gray-600 hover:text-gray-700 px-3 py-1 bg-gray-50 rounded-md border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    Performance
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Vendor Profile Modal */}
      {selectedVendorProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedVendorProfile(null)}>
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg sm:text-xl text-gray-900 mb-1">{selectedVendorProfile.name}</h3>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded">{selectedVendorProfile.category}</span>
                  <span className={`px-2 py-0.5 text-xs rounded ${
                    selectedVendorProfile.status === 'Strategic Partner' ? 'bg-purple-100 text-purple-700' :
                    selectedVendorProfile.status === 'Preferred' ? 'bg-green-100 text-green-700' :
                    'bg-gray-100 text-gray-700'
                  }`}>{selectedVendorProfile.status}</span>
                  <div className={`flex items-center gap-1 px-2 py-0.5 rounded ${
                    selectedVendorProfile.risk === 'Low' ? 'bg-green-50 text-green-700' :
                    selectedVendorProfile.risk === 'Medium' ? 'bg-yellow-50 text-yellow-700' :
                    'bg-red-50 text-red-700'
                  }`}>
                    <AlertTriangle className="w-3 h-3" strokeWidth={1.5} />
                    <span className="text-xs">{selectedVendorProfile.risk} Risk</span>
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setSelectedVendorProfile(null)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
              </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-4 gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-1 mb-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" strokeWidth={1.5} />
                  <span className="text-xs text-gray-600">Rating</span>
                </div>
                <div className="text-lg text-gray-900">{selectedVendorProfile.rating}/5</div>
              </div>
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-1 mb-1">
                  <TrendingUp className="w-4 h-4 text-green-600" strokeWidth={1.5} />
                  <span className="text-xs text-gray-600">Performance</span>
                </div>
                <div className="text-lg text-gray-900">{selectedVendorProfile.performance}%</div>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-1 mb-1">
                  <FileText className="w-4 h-4 text-purple-600" strokeWidth={1.5} />
                  <span className="text-xs text-gray-600">Contracts</span>
                </div>
                <div className="text-lg text-gray-900">{selectedVendorProfile.details.totalContracts}</div>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg border border-orange-200">
                <div className="flex items-center gap-1 mb-1">
                  <DollarSign className="w-4 h-4 text-orange-600" strokeWidth={1.5} />
                  <span className="text-xs text-gray-600">Total Spend</span>
                </div>
                <div className="text-sm text-gray-900">{selectedVendorProfile.spend}</div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-sm text-gray-900 mb-3">Contact Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-start gap-2">
                  <Mail className="w-4 h-4 text-blue-600 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs text-gray-500">Email</div>
                    <div className="text-sm text-gray-900">{selectedVendorProfile.contact.email}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-blue-600 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs text-gray-500">Phone</div>
                    <div className="text-sm text-gray-900">{selectedVendorProfile.contact.phone}</div>
                  </div>
                </div>
                <div className="flex items-start gap-2 sm:col-span-2">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs text-gray-500">Address</div>
                    <div className="text-sm text-gray-900">{selectedVendorProfile.contact.address}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Details */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-sm text-gray-900 mb-3">Company Details</h4>
              <div className="grid grid-cols-2 gap-4 mb-3">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs text-gray-500">Established</div>
                    <div className="text-sm text-gray-900">{selectedVendorProfile.details.established}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs text-gray-500">Active Projects</div>
                    <div className="text-sm text-gray-900">{selectedVendorProfile.details.activeProjects}</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="text-xs text-gray-500 mb-2">Certifications</div>
                <div className="flex flex-wrap gap-2">
                  {selectedVendorProfile.details.certifications.map((cert, idx) => (
                    <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded border border-blue-200">
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h4 className="text-sm text-gray-900 mb-3">Recent Activity</h4>
              <div className="space-y-2">
                {selectedVendorProfile.recentActivity.map((activity, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg border border-gray-200">
                    <div className={`p-1.5 rounded-lg ${
                      activity.status === 'Completed' ? 'bg-green-50' :
                      activity.status === 'Passed' ? 'bg-green-50' :
                      activity.status === 'Approved' ? 'bg-green-50' :
                      activity.status === 'In Progress' ? 'bg-blue-50' :
                      activity.status === 'Ongoing' ? 'bg-blue-50' :
                      activity.status === 'Under Review' ? 'bg-yellow-50' :
                      'bg-red-50'
                    }`}>
                      {activity.status === 'Completed' || activity.status === 'Passed' || activity.status === 'Approved' ? (
                        <CheckCircle className={`w-4 h-4 text-green-600`} strokeWidth={1.5} />
                      ) : activity.status === 'In Progress' || activity.status === 'Ongoing' ? (
                        <Clock className={`w-4 h-4 text-blue-600`} strokeWidth={1.5} />
                      ) : activity.status === 'Under Review' ? (
                        <Clock className={`w-4 h-4 text-yellow-600`} strokeWidth={1.5} />
                      ) : (
                        <AlertCircle className={`w-4 h-4 text-red-600`} strokeWidth={1.5} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900 mb-0.5">{activity.action}</div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500">{activity.date}</span>
                        <span className={`px-2 py-0.5 text-xs rounded ${
                          activity.status === 'Completed' || activity.status === 'Passed' || activity.status === 'Approved' ? 'bg-green-100 text-green-700' :
                          activity.status === 'In Progress' || activity.status === 'Ongoing' ? 'bg-blue-100 text-blue-700' :
                          activity.status === 'Under Review' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-red-100 text-red-700'
                        }`}>{activity.status}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button 
                onClick={() => setSelectedVendorProfile(null)}
                className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Vendor Performance Modal */}
      {selectedVendorPerformance && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedVendorPerformance(null)}>
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-4 sm:p-6 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-lg sm:text-xl text-gray-900 mb-1">Performance Analysis: {selectedVendorPerformance.name}</h3>
                <p className="text-sm text-gray-500">Comprehensive performance metrics and KPIs</p>
              </div>
              <button 
                onClick={() => setSelectedVendorPerformance(null)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-gray-500" strokeWidth={1.5} />
              </button>
            </div>

            {/* Overall Performance Score */}
            <div className="mb-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Overall Performance Score</div>
                  <div className="text-3xl text-gray-900">{selectedVendorPerformance.performance}%</div>
                </div>
                <div className={`p-3 rounded-lg ${
                  selectedVendorPerformance.performance >= 90 ? 'bg-green-100' :
                  selectedVendorPerformance.performance >= 75 ? 'bg-yellow-100' :
                  'bg-red-100'
                }`}>
                  {selectedVendorPerformance.trend === 'up' ? (
                    <TrendingUp className={`w-8 h-8 ${
                      selectedVendorPerformance.performance >= 90 ? 'text-green-600' :
                      selectedVendorPerformance.performance >= 75 ? 'text-yellow-600' :
                      'text-red-600'
                    }`} strokeWidth={1.5} />
                  ) : (
                    <TrendingDown className="w-8 h-8 text-red-600" strokeWidth={1.5} />
                  )}
                </div>
              </div>
              <div className="mt-2 flex items-center gap-2">
                <span className={`px-2 py-1 text-xs rounded ${
                  selectedVendorPerformance.performance >= 90 ? 'bg-green-100 text-green-700' :
                  selectedVendorPerformance.performance >= 75 ? 'bg-yellow-100 text-yellow-700' :
                  'bg-red-100 text-red-700'
                }`}>
                  {selectedVendorPerformance.performance >= 90 ? 'Excellent' :
                   selectedVendorPerformance.performance >= 75 ? 'Good' : 'Needs Improvement'}
                </span>
                <span className="text-xs text-gray-600">
                  Trend: {selectedVendorPerformance.trend === 'up' ? '↑ Improving' : '↓ Declining'}
                </span>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="mb-4">
              <h4 className="text-sm text-gray-900 mb-3">Key Performance Indicators</h4>
              <div className="space-y-3">
                {/* On-Time Delivery */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">On-Time Delivery</span>
                    <span className="text-sm text-gray-900">{selectedVendorPerformance.performanceMetrics.onTimeDelivery}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          selectedVendorPerformance.performanceMetrics.onTimeDelivery >= 90 ? 'bg-green-500' :
                          selectedVendorPerformance.performanceMetrics.onTimeDelivery >= 75 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${selectedVendorPerformance.performanceMetrics.onTimeDelivery}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Quality Score */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Quality Score</span>
                    <span className="text-sm text-gray-900">{selectedVendorPerformance.performanceMetrics.qualityScore}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          selectedVendorPerformance.performanceMetrics.qualityScore >= 90 ? 'bg-green-500' :
                          selectedVendorPerformance.performanceMetrics.qualityScore >= 75 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${selectedVendorPerformance.performanceMetrics.qualityScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Compliance Rate */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Compliance Rate</span>
                    <span className="text-sm text-gray-900">{selectedVendorPerformance.performanceMetrics.complianceRate}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          selectedVendorPerformance.performanceMetrics.complianceRate >= 90 ? 'bg-green-500' :
                          selectedVendorPerformance.performanceMetrics.complianceRate >= 75 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${selectedVendorPerformance.performanceMetrics.complianceRate}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Cost Efficiency */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Cost Efficiency</span>
                    <span className="text-sm text-gray-900">{selectedVendorPerformance.performanceMetrics.costEfficiency}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          selectedVendorPerformance.performanceMetrics.costEfficiency >= 90 ? 'bg-green-500' :
                          selectedVendorPerformance.performanceMetrics.costEfficiency >= 75 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${selectedVendorPerformance.performanceMetrics.costEfficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Innovation Score */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Innovation Score</span>
                    <span className="text-sm text-gray-900">{selectedVendorPerformance.performanceMetrics.innovationScore}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${
                          selectedVendorPerformance.performanceMetrics.innovationScore >= 90 ? 'bg-green-500' :
                          selectedVendorPerformance.performanceMetrics.innovationScore >= 75 ? 'bg-yellow-500' :
                          'bg-red-500'
                        }`}
                        style={{ width: `${selectedVendorPerformance.performanceMetrics.innovationScore}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="p-3 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Average Response Time</span>
                    <span className="text-sm text-gray-900">{selectedVendorPerformance.performanceMetrics.responseTime}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button 
                onClick={() => setSelectedVendorPerformance(null)}
                className="px-4 py-2 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
                Export Report
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}