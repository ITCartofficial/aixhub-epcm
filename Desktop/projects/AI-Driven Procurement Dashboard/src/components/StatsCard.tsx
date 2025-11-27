import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  label: string;
  value: string;
  change: string;
  icon: LucideIcon;
  color: 'blue' | 'purple' | 'green' | 'orange' | 'pink' | 'cyan' | 'indigo' | 'red' | 'yellow';
  trend?: 'up' | 'down' | 'neutral';
}

export function StatsCard({ label, value, change, icon: Icon, color, trend = 'neutral' }: StatsCardProps) {
  const colorClasses = {
    blue: {
      bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      lightBg: 'bg-blue-50',
      border: 'border-blue-200',
      text: 'text-blue-600',
      icon: 'text-white',
    },
    purple: {
      bg: 'bg-gradient-to-br from-purple-500 to-purple-600',
      lightBg: 'bg-purple-50',
      border: 'border-purple-200',
      text: 'text-purple-600',
      icon: 'text-white',
    },
    green: {
      bg: 'bg-gradient-to-br from-green-500 to-green-600',
      lightBg: 'bg-green-50',
      border: 'border-green-200',
      text: 'text-green-600',
      icon: 'text-white',
    },
    orange: {
      bg: 'bg-gradient-to-br from-orange-500 to-orange-600',
      lightBg: 'bg-orange-50',
      border: 'border-orange-200',
      text: 'text-orange-600',
      icon: 'text-white',
    },
    pink: {
      bg: 'bg-gradient-to-br from-pink-500 to-pink-600',
      lightBg: 'bg-pink-50',
      border: 'border-pink-200',
      text: 'text-pink-600',
      icon: 'text-white',
    },
    cyan: {
      bg: 'bg-gradient-to-br from-cyan-500 to-cyan-600',
      lightBg: 'bg-cyan-50',
      border: 'border-cyan-200',
      text: 'text-cyan-600',
      icon: 'text-white',
    },
    indigo: {
      bg: 'bg-gradient-to-br from-indigo-500 to-indigo-600',
      lightBg: 'bg-indigo-50',
      border: 'border-indigo-200',
      text: 'text-indigo-600',
      icon: 'text-white',
    },
    red: {
      bg: 'bg-gradient-to-br from-red-500 to-red-600',
      lightBg: 'bg-red-50',
      border: 'border-red-200',
      text: 'text-red-600',
      icon: 'text-white',
    },
    yellow: {
      bg: 'bg-gradient-to-br from-yellow-500 to-yellow-600',
      lightBg: 'bg-yellow-50',
      border: 'border-yellow-200',
      text: 'text-yellow-600',
      icon: 'text-white',
    },
  };

  const colors = colorClasses[color];

  return (
    <div className={`relative overflow-hidden rounded-lg sm:rounded-xl border ${colors.border} ${colors.lightBg} p-2 sm:p-3 shadow-sm hover:shadow-md transition-all cursor-pointer group`}>
      <div className="flex items-center justify-between mb-1.5 sm:mb-2">
        <div className={`p-1.5 sm:p-2 rounded-lg ${colors.bg} shadow-sm`}>
          <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${colors.icon}`} strokeWidth={1.5} />
        </div>
        <div className={`text-[9px] sm:text-[10px] ${colors.text} flex items-center gap-0.5`}>
          {trend === 'up' && '↑'}
          {trend === 'down' && '↓'}
          {change}
        </div>
      </div>
      <div className="text-xl sm:text-2xl text-gray-900 mb-0.5 sm:mb-1">{value}</div>
      <div className="text-[10px] sm:text-xs text-gray-600">{label}</div>
      
      {/* Decorative gradient overlay */}
      <div className={`absolute top-0 right-0 w-20 h-20 ${colors.bg} opacity-5 rounded-full blur-2xl -mr-10 -mt-10`}></div>
    </div>
  );
}
