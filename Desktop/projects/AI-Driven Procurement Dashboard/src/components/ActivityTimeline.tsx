import { Clock } from 'lucide-react';

export function ActivityTimeline() {
  const activities = [
    { time: '10:15', text: 'AI drafted vendor performance email', type: 'email' },
    { time: '09:40', text: 'AI flagged contract risk – Logistics', type: 'alert' },
    { time: '09:05', text: 'Forecast updated: Spend in IT Hardware', type: 'forecast' },
    { time: '08:30', text: 'AI detected anomaly in supplier delivery metrics', type: 'alert' },
    { time: '08:12', text: 'PO auto-approved: 3 requests under threshold', type: 'approval' },
    { time: '07:45', text: 'Price volatility alert: Steel components +15%', type: 'alert' }
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-3 shadow-sm">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Clock className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400" strokeWidth={1.5} />
          <h3 className="text-xs sm:text-sm text-gray-900">Recent AI-driven activity</h3>
        </div>
        <button className="text-[10px] sm:text-xs text-blue-600 hover:text-blue-700 hover:underline">View all</button>
      </div>
      
      <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 -mx-2 sm:-mx-3 px-2 sm:px-3">
        {activities.map((activity, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 px-2 sm:px-3 py-1.5 sm:py-2 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 min-w-[200px] sm:min-w-[240px] lg:min-w-[260px] hover:border-blue-300 hover:shadow-sm transition-all"
          >
            <div className="flex items-center justify-between mb-0.5 sm:mb-1">
              <div className="text-[9px] sm:text-[10px] text-blue-600">{activity.time}</div>
              <div className={`w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full ${
                activity.type === 'alert' ? 'bg-red-500' :
                activity.type === 'email' ? 'bg-green-500' :
                activity.type === 'approval' ? 'bg-blue-500' :
                'bg-purple-500'
              }`}></div>
            </div>
            <div className="text-[10px] sm:text-xs text-gray-900">{activity.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}