import { useState } from 'react';
import { Sparkles, TrendingUp, AlertTriangle, DollarSign } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function SpendRiskInsights() {
  const [period, setPeriod] = useState('This month');
  const periods = ['This month', 'Quarter', 'Year'];

  const chartData = [
    { month: 'Jan', budget: 100, actual: 95, forecast: 98 },
    { month: 'Feb', budget: 100, actual: 102, forecast: 105 },
    { month: 'Mar', budget: 100, actual: 98, forecast: 103 },
    { month: 'Apr', budget: 100, actual: 105, forecast: 107 },
    { month: 'May', budget: 100, actual: 103, forecast: 110 },
    { month: 'Jun', budget: 100, actual: 0, forecast: 112 }
  ];

  const risks = [
    {
      icon: AlertTriangle,
      title: 'Supplier concentration risk',
      category: 'Category: Logistics',
      description: '72% of category spend concentrated in 1 vendor',
      chips: ['View vendors', 'Simulate diversification']
    },
    {
      icon: AlertTriangle,
      title: 'Contract renewal risk',
      category: '3 major contracts expiring in 30 days',
      chips: ['Open contracts', 'Start renewal workflow']
    },
    {
      icon: DollarSign,
      title: 'Price variability',
      category: 'Steel components',
      description: 'AI suggests negotiating indexed pricing to reduce volatility',
      chips: []
    }
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-3 lg:p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" strokeWidth={1.5} />
          <h3 className="text-xs sm:text-sm text-gray-900">AI Spend & Risk Insights</h3>
        </div>
        <div className="flex gap-0.5 sm:gap-1">
          {periods.map((p) => (
            <button
              key={p}
              onClick={() => setPeriod(p)}
              className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[11px] transition-all ${
                period === p
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="mb-2 sm:mb-3 lg:mb-4">
        <ResponsiveContainer width="100%" height={80}>
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" tick={{ fontSize: 9 }} stroke="#999" />
            <YAxis tick={{ fontSize: 9 }} stroke="#999" />
            <Tooltip />
            <Line type="monotone" dataKey="budget" stroke="#d1d5db" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="actual" stroke="#3b82f6" strokeWidth={1.5} dot={false} />
            <Line type="monotone" dataKey="forecast" stroke="#06b6d4" strokeWidth={1.5} strokeDasharray="5 5" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary */}
      <div className="p-3 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg border border-orange-200 mb-3">
        <div className="flex items-start gap-2">
          <TrendingUp className="w-4 h-4 text-orange-600 mt-0.5" strokeWidth={1.5} />
          <div>
            <div className="text-xs text-gray-900 mb-1.5">
              AiXHub forecasts a <strong>7% overspend</strong> in the Consulting category by Q4.
              Top driver: increased SOW extensions with strategic partners.
            </div>
            <button className="text-xs text-orange-600 hover:text-orange-700 hover:underline">
              Ask AI why →
            </button>
          </div>
        </div>
      </div>

      {/* Risk Watchlist */}
      <div>
        <div className="text-xs text-gray-500 mb-2">AI Risk Watchlist</div>
        <div className="space-y-2">
          {risks.map((risk, idx) => {
            const Icon = risk.icon;
            return (
              <div key={idx} className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 hover:border-yellow-200 hover:shadow-sm transition-all">
                <div className="flex gap-2 mb-1.5">
                  <Icon className="w-3.5 h-3.5 text-yellow-600 mt-0.5" strokeWidth={1.5} />
                  <div className="flex-1">
                    <div className="text-xs text-gray-900">{risk.title}</div>
                    <div className="text-[10px] text-gray-500">{risk.category}</div>
                    {risk.description && (
                      <div className="text-[10px] text-gray-600 mt-0.5">{risk.description}</div>
                    )}
                  </div>
                </div>
                {risk.chips.length > 0 && (
                  <div className="flex gap-1.5 mt-1.5">
                    {risk.chips.map((chip, i) => (
                      <button
                        key={i}
                        className="px-2 py-0.5 bg-white text-[10px] text-gray-600 rounded border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}