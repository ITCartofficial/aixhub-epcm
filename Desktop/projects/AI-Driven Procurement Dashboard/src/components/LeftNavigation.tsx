import { Home, ShoppingCart, Users, FileText, BarChart3, Laptop, Settings, HelpCircle, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface LeftNavigationProps {
  activeNav: string;
  setActiveNav: (nav: string) => void;
}

export function LeftNavigation({ activeNav, setActiveNav }: LeftNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'procurement', icon: ShoppingCart, label: 'Procurement Hub' },
    { id: 'vendors', icon: Users, label: 'Vendors & Partners' },
    { id: 'contracts', icon: FileText, label: 'Contracts & Documents' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics & AI Insights' },
    { id: 'it', icon: Laptop, label: 'IT & Services' },
    { id: 'admin', icon: Settings, label: 'Admin' }
  ];

  return (
    <nav 
      className={`fixed left-0 top-[72px] bottom-0 bg-white border-r border-gray-200 flex flex-col py-4 z-40 transition-all duration-300 ${
        isExpanded ? 'w-56' : 'w-16'
      }`}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      {/* Expand indicator */}
      <div className={`absolute -right-3 top-6 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center transition-transform duration-300 ${
        isExpanded ? 'rotate-180' : ''
      }`}>
        <ChevronRight className="w-3 h-3 text-gray-400" strokeWidth={2} />
      </div>

      <div className="flex-1 flex flex-col gap-1 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setActiveNav(item.id)}
              className={`group relative flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all ${
                isActive 
                  ? 'bg-blue-500 text-white' 
                  : 'text-gray-400 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
              <span className={`text-sm whitespace-nowrap transition-all duration-300 ${
                isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 absolute'
              }`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Bottom controls */}
      <div className="flex flex-col gap-1 px-2 pt-4 border-t border-gray-200">
        <button 
          className="group flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 rounded-xl transition-all"
        >
          <Settings className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
          <span className={`text-sm whitespace-nowrap transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 absolute'
          }`}>
            Settings
          </span>
        </button>
        <button 
          className="group flex items-center gap-3 px-3 py-2.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 rounded-xl transition-all"
        >
          <HelpCircle className="w-5 h-5 flex-shrink-0" strokeWidth={1.5} />
          <span className={`text-sm whitespace-nowrap transition-all duration-300 ${
            isExpanded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 absolute'
          }`}>
            AI Guide
          </span>
        </button>
      </div>
    </nav>
  );
}