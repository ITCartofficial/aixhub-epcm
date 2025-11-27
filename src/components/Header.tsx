import { useState, useRef, useEffect } from 'react';
import { Sparkles, Mic, Globe, Bell } from 'lucide-react';

export function Header() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [hasNotifications, setHasNotifications] = useState(true);
  const searchRef = useRef<HTMLDivElement>(null);

  const suggestions = [
    'Pending PRs over budget',
    'Vendors at high delivery risk',
    'Summarize last week\'s procurement activity',
    'Explain NDMO requirements for vendor data'
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setSearchFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 h-[60px] sm:h-[72px] bg-white border-b border-gray-200 z-50">
      <div className="h-full px-2 sm:px-4 flex items-center justify-between max-w-full mx-auto">
        {/* Logo + Product */}
        <div className="flex items-center gap-1 sm:gap-2 min-w-[120px] sm:min-w-[180px] lg:min-w-[240px]">
          <div>
            <div className="text-base sm:text-lg text-gray-900">AiXHub</div>
            <div className="text-[9px] sm:text-[11px] text-gray-500 hidden sm:block">Cognitive Procurement & Services Hub</div>
          </div>
        </div>

        {/* AI Universal Search / Command Bar */}
        <div className="flex-1 max-w-md lg:max-w-xl mx-2 sm:mx-4 lg:mx-6 relative" ref={searchRef}>
          <div className={`relative bg-gray-50 border rounded-full transition-all ${
            searchFocused ? 'border-blue-500 shadow-lg shadow-blue-100' : 'border-gray-200'
          }`}>
            <div className="flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-1.5 sm:py-2">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Ask AiXHub anything..."
                className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-gray-900 placeholder:text-gray-400"
                onFocus={() => setSearchFocused(true)}
              />
              <div className="flex items-center gap-1 sm:gap-2">
                <Mic className="w-3 h-3 sm:w-4 sm:h-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors flex-shrink-0" strokeWidth={1.5} />
                <div className="text-[10px] sm:text-[11px] text-gray-400 bg-white px-1 sm:px-1.5 py-0.5 rounded border border-gray-200 hidden sm:block">/</div>
              </div>
            </div>
          </div>

          {/* AI Suggestions Panel */}
          {searchFocused && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl p-3 z-50">
              <div className="text-xs text-gray-500 mb-2">AI Suggestions</div>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, idx) => (
                  <button
                    key={idx}
                    className="px-2 sm:px-3 py-1 sm:py-1.5 bg-gray-50 hover:bg-gray-100 rounded-full text-[10px] sm:text-xs text-gray-700 transition-colors border border-gray-200"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right-side controls */}
        <div className="flex items-center gap-1 sm:gap-2 lg:gap-3 min-w-[100px] sm:min-w-[200px] lg:min-w-[280px] justify-end">
          <button className="hidden md:flex items-center gap-1.5 text-gray-600 hover:text-gray-900 transition-colors">
            <Globe className="w-3 h-3 sm:w-4 sm:h-4" strokeWidth={1.5} />
            <span className="text-[10px] sm:text-xs hidden lg:inline">عربى | EN</span>
          </button>

          <button className="relative p-1.5 sm:p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" strokeWidth={1.5} />
            {hasNotifications && (
              <div className="absolute top-1 right-1 sm:top-1.5 sm:right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
            )}
          </button>

          <div className="flex items-center gap-1 sm:gap-2 pl-1 sm:pl-3 border-l border-gray-200">
            <div className="text-right hidden md:block">
              <div className="text-[10px] sm:text-xs text-gray-900">Aisha Al-Sayed</div>
              <div className="text-[8px] sm:text-[10px] text-gray-500">Procurement Manager</div>
            </div>
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-[10px] sm:text-xs flex-shrink-0">
              AA
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}