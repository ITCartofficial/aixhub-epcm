import { useState } from 'react';
import { AIWorkbench } from '../components/AIWorkbench';
import { AIAssistant } from '../components/AIAssistant';
import { SpendRiskInsights } from '../components/SpendRiskInsights';
import { VendorSpotlight } from '../components/VendorSpotlight';
import { DocumentIntelligence } from '../components/DocumentIntelligence';
import { ActivityTimeline } from '../components/ActivityTimeline';
import { StatsCard } from '../components/StatsCard';
import { TrendingUp, Users, FileCheck, Zap, Sparkles, ArrowUpRight } from 'lucide-react';

export function HomePage() {
  const [selectedPersona, setSelectedPersona] = useState('Procurement');

  const quickStats = [
    { label: 'Tasks Completed', value: '23', change: '+12%', icon: FileCheck, color: 'green' as const, trend: 'up' as const },
    { label: 'Active Workflows', value: '8', change: 'In progress', icon: Zap, color: 'blue' as const, trend: 'neutral' as const },
    { label: 'Productivity', value: '94%', change: '+5%', icon: TrendingUp, color: 'purple' as const, trend: 'up' as const },
    { label: 'Pending Reviews', value: '15', change: '3 urgent', icon: Users, color: 'orange' as const, trend: 'neutral' as const },
  ];

  const aiRecommendations = [
    {
      title: 'Optimize Vendor Contracts',
      description: 'AI identified 3 contracts eligible for consolidation, potential savings: SAR 450K',
      priority: 'High',
      action: 'Review Now'
    },
    {
      title: 'Budget Reallocation Suggested',
      description: 'Reallocate unused IT budget (SAR 230K) to high-demand categories',
      priority: 'Medium',
      action: 'View Details'
    },
    {
      title: 'Automate Approval Process',
      description: 'Enable auto-approval for low-risk PRs under SAR 10K to save 2 days/request',
      priority: 'Low',
      action: 'Configure'
    }
  ];

  return (
    <>
      {/* Quick Stats at Top */}
      <div className="mb-3 sm:mb-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {quickStats.map((stat, idx) => (
            <StatsCard key={idx} {...stat} />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 sm:gap-3 lg:gap-4">
        {/* Center Pane - 8 columns */}
        <div className="lg:col-span-8 space-y-2 sm:space-y-3">
          <AIWorkbench 
            selectedPersona={selectedPersona}
            setSelectedPersona={setSelectedPersona}
          />
          <AIAssistant />
          <ActivityTimeline />
          
          {/* AI Recommendations Below Activity */}
          <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-3 shadow-sm">
            <div className="flex items-center justify-between mb-2 sm:mb-3">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" strokeWidth={1.5} />
                <h3 className="text-xs sm:text-sm text-gray-900">AI Strategic Recommendations</h3>
              </div>
              <button className="text-[10px] sm:text-xs text-blue-600 hover:text-blue-700 hover:underline">View All</button>
            </div>
            
            <div className="space-y-2">
              {aiRecommendations.map((rec, idx) => (
                <div key={idx} className="p-2 sm:p-3 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200 hover:border-blue-300 hover:shadow-sm transition-all">
                  <div className="flex items-start justify-between mb-1 sm:mb-1.5">
                    <h4 className="text-xs sm:text-sm text-gray-900 flex-1">{rec.title}</h4>
                    <span className={`px-1.5 sm:px-2 py-0.5 text-[9px] sm:text-[10px] rounded ${
                      rec.priority === 'High' ? 'bg-red-100 text-red-700' :
                      rec.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-green-100 text-green-700'
                    }`}>{rec.priority}</span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-600 mb-2">{rec.description}</p>
                  <button className="flex items-center gap-1 text-[10px] sm:text-xs text-blue-600 hover:text-blue-700">
                    {rec.action} <ArrowUpRight className="w-3 h-3" strokeWidth={1.5} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Pane - 4 columns */}
        <div className="lg:col-span-4 space-y-2 sm:space-y-3">
          <SpendRiskInsights />
          <VendorSpotlight />
          <DocumentIntelligence />
        </div>
      </div>
    </>
  );
}