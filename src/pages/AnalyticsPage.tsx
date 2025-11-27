import { TrendingUp, DollarSign, Users, Package, Sparkles, BarChart3, PieChart as PieChartIcon, Activity } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StatsCard } from '../components/StatsCard';

export function AnalyticsPage() {
  const stats = [
    { label: 'Total Spend (YTD)', value: 'SAR 89.4M', change: '+12% vs last year', icon: DollarSign, color: 'green' as const, trend: 'up' as const },
    { label: 'Cost Savings', value: 'SAR 3.2M', change: '+28% improvement', icon: TrendingUp, color: 'cyan' as const, trend: 'up' as const },
    { label: 'Active Vendors', value: '127', change: '+8 this quarter', icon: Users, color: 'purple' as const, trend: 'up' as const },
    { label: 'Avg Processing Time', value: '2.3 days', change: '-15% faster', icon: Activity, color: 'pink' as const, trend: 'up' as const },
  ];

  const spendData = [
    { month: 'Jul', spend: 8.2, budget: 9.0 },
    { month: 'Aug', spend: 9.1, budget: 9.0 },
    { month: 'Sep', spend: 7.8, budget: 9.0 },
    { month: 'Oct', spend: 10.2, budget: 9.0 },
    { month: 'Nov', spend: 9.5, budget: 9.0 },
    { month: 'Dec', spend: 0, budget: 9.0 },
  ];

  const categoryData = [
    { name: 'Consulting', value: 35, color: '#3b82f6' },
    { name: 'IT Services', value: 28, color: '#06b6d4' },
    { name: 'Logistics', value: 18, color: '#8b5cf6' },
    { name: 'Materials', value: 12, color: '#10b981' },
    { name: 'Other', value: 7, color: '#f59e0b' },
  ];

  const vendorPerformance = [
    { vendor: 'Deloitte', score: 98 },
    { vendor: 'TechVision', score: 94 },
    { vendor: 'Global Freight', score: 96 },
    { vendor: 'Al Faisal', score: 82 },
    { vendor: 'Eastern Supply', score: 89 },
  ];

  const insights = [
    {
      title: 'Budget Optimization Opportunity',
      description: 'AI identified potential savings of SAR 1.2M by consolidating IT vendor contracts',
      impact: 'High',
      action: 'Review Recommendation'
    },
    {
      title: 'Seasonal Trend Detected',
      description: 'Logistics spend increases 23% in Q4. Consider negotiating volume discounts',
      impact: 'Medium',
      action: 'View Analysis'
    },
    {
      title: 'Vendor Concentration Risk',
      description: '72% of consulting spend with single vendor. Diversification recommended',
      impact: 'High',
      action: 'See Alternatives'
    },
  ];

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl text-gray-900 mb-1">Analytics & AI Insights</h1>
          <p className="text-sm text-gray-500">AI-powered procurement analytics and predictive insights</p>
        </div>
        <div className="flex gap-2">
          <button className="px-3 py-2 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-sm">
            Export Report
          </button>
          <button className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-sm">
            Ask AI
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <StatsCard key={idx} label={stat.label} value={stat.value} change={stat.change} icon={stat.icon} color={stat.color} trend={stat.trend} />
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-12 gap-4">
        {/* Spend Trend - 8 columns */}
        <div className="col-span-8 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-gray-900">Spend Trend vs Budget</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-gray-100 rounded-lg text-xs">6M</button>
              <button className="px-3 py-1 bg-blue-500 text-white rounded-lg text-xs">YTD</button>
              <button className="px-3 py-1 bg-gray-100 rounded-lg text-xs">12M</button>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={spendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="month" tick={{ fontSize: 12 }} />
              <YAxis tick={{ fontSize: 12 }} />
              <Tooltip />
              <Legend />
              <Bar dataKey="budget" fill="#d1d5db" name="Budget (SAR M)" />
              <Bar dataKey="spend" fill="#3b82f6" name="Actual Spend (SAR M)" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution - 4 columns */}
        <div className="col-span-4 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <h2 className="text-gray-900 mb-4">Spend by Category</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-2 mt-4">
            {categoryData.map((cat, idx) => (
              <div key={idx} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded" style={{ backgroundColor: cat.color }}></div>
                  <span className="text-gray-600">{cat.name}</span>
                </div>
                <span className="text-gray-900">{cat.value}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vendor Performance - 6 columns */}
        <div className="col-span-6 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-500" strokeWidth={1.5} />
            <h2 className="text-gray-900">Top Vendor Performance</h2>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={vendorPerformance} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 12 }} />
              <YAxis dataKey="vendor" type="category" tick={{ fontSize: 12 }} width={100} />
              <Tooltip />
              <Bar dataKey="score" fill="#06b6d4" name="Performance Score" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* AI Insights - 6 columns */}
        <div className="col-span-6 bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="w-4 h-4 text-blue-500" strokeWidth={1.5} />
            <h2 className="text-gray-900">AI-Generated Insights</h2>
          </div>
          <div className="space-y-3">
            {insights.map((insight, idx) => (
              <div key={idx} className="p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-sm text-gray-900">{insight.title}</h3>
                  <span className={`px-2 py-0.5 text-xs rounded ${
                    insight.impact === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                  }`}>{insight.impact} Impact</span>
                </div>
                <p className="text-xs text-gray-600 mb-2">{insight.description}</p>
                <button className="text-xs text-blue-600 hover:text-blue-700 hover:underline">
                  {insight.action} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}