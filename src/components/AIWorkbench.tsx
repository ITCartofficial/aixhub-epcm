import { AlertCircle, TrendingDown, Calendar, Sparkles } from 'lucide-react';

interface AIWorkbenchProps {
  selectedPersona: string;
  setSelectedPersona: (persona: string) => void;
}

export function AIWorkbench({ selectedPersona, setSelectedPersona }: AIWorkbenchProps) {
  const personas = ['Procurement', 'Vendor Management', 'IT & Access', 'Executive'];

  const priorities = [
    {
      icon: AlertCircle,
      title: 'Approve 3 high-priority POs',
      subtext: 'Total SAR 2.1M · 1 above usual spend for this supplier',
      button: 'Review with AI'
    },
    {
      icon: TrendingDown,
      title: 'Vendor performance drop detected',
      subtext: 'Al Faisal Logistics · On-time delivery dropped from 96% to 82% in last 30 days',
      button: 'Analyze',
      tag: 'AI anomaly detection'
    },
    {
      icon: Calendar,
      title: '3 contracts expiring within 45 days',
      subtext: 'Suggest: start renewal with Deloitte-supported cost optimization',
      button: 'Start Renewal'
    },
    {
      icon: AlertCircle,
      title: 'Budget variance detected in IT category',
      subtext: 'SAR 450K variance · Review recommended before month-end',
      button: 'Investigate'
    }
  ];

  const suggestions = [
    'Bundle upcoming laptop purchases across departments to negotiate discount',
    'Switch two low-value ad-hoc POs to a blanket contract',
    'Automate approval for low-risk, low-value PRs under SAR 10K',
    'Consolidate freight vendors to reduce logistics costs by estimated 12%'
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-3 lg:p-4 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3 lg:mb-4 gap-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" strokeWidth={1.5} />
          <h2 className="text-sm sm:text-base text-gray-900">My AI Workbench</h2>
        </div>
        <div className="flex gap-1 sm:gap-1.5 flex-wrap">
          {personas.map((persona) => (
            <button
              key={persona}
              onClick={() => setSelectedPersona(persona)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs transition-all ${
                selectedPersona === persona
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {persona}
            </button>
          ))}
        </div>
      </div>

      {/* Content - Two columns */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-3">
        {/* Left - AI Prioritized Actions */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-[10px] sm:text-xs text-gray-500">AI Prioritized actions</div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-2">
            {priorities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative p-2 sm:p-3 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all">
                  {item.tag && (
                    <div className="absolute top-1.5 sm:top-2 right-1.5 sm:right-2 px-1.5 py-0.5 bg-blue-50 text-blue-600 text-[9px] sm:text-[10px] rounded border border-blue-200">
                      {item.tag}
                    </div>
                  )}
                  <div className="flex gap-2">
                    <div className="mt-0.5">
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <div className="text-xs sm:text-sm text-gray-900 mb-1">{item.title}</div>
                      <div className="text-[10px] sm:text-xs text-gray-500 mb-1.5 sm:mb-2">{item.subtext}</div>
                      <button className="text-[10px] sm:text-xs text-blue-600 hover:text-blue-700 px-2 sm:px-3 py-0.5 sm:py-1 bg-white rounded-md border border-blue-200 hover:border-blue-300 hover:shadow-sm transition-all">
                        {item.button}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right - AI Suggestions */}
        <div>
          <div className="flex items-center gap-2 mb-2">
            <div className="text-[10px] sm:text-xs text-gray-500">AI Suggestions</div>
            <Sparkles className="w-3 h-3 text-blue-400" strokeWidth={1.5} />
          </div>
          <div className="space-y-2">
            {suggestions.map((suggestion, idx) => (
              <div key={idx} className="p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-100 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="text-xs sm:text-sm text-gray-900 mb-1.5 sm:mb-2">{suggestion}</div>
                <button className="text-[10px] sm:text-xs text-blue-600 hover:text-blue-700 hover:underline">
                  Simulate impact →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}