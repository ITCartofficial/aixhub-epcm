import { useState } from 'react';
import { Star, TrendingUp, ExternalLink } from 'lucide-react';

export function VendorSpotlight() {
  const [mode, setMode] = useState('Vendor');
  const modes = ['Vendor', 'Project'];

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-3 lg:p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
        <h3 className="text-xs sm:text-sm text-gray-900">Vendor / Project Spotlight</h3>
        <div className="flex gap-0.5 p-0.5 bg-gray-100 rounded-lg">
          {modes.map((m) => (
            <button
              key={m}
              onClick={() => setMode(m)}
              className={`px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded text-[9px] sm:text-[11px] transition-all ${
                mode === m
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Vendor Highlight */}
      <div className="mb-3">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h4 className="text-sm text-gray-900 mb-1.5">Deloitte – Strategic Advisor</h4>
            <div className="flex gap-1.5 flex-wrap">
              <span className="px-1.5 py-0.5 bg-purple-100 text-purple-700 text-[10px] rounded">Strategic Partner</span>
              <span className="px-1.5 py-0.5 bg-blue-100 text-blue-700 text-[10px] rounded">Consulting</span>
              <span className="px-1.5 py-0.5 bg-green-100 text-green-700 text-[10px] rounded">Active Projects: 4</span>
            </div>
          </div>
        </div>

        <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 mb-3">
          <div className="flex items-start gap-2">
            <Star className="w-4 h-4 text-green-600 mt-0.5" strokeWidth={1.5} />
            <div className="text-xs text-gray-900">
              <div className="mb-0.5">
                Performance: <strong>4.7/5</strong> · On-time deliverables: <strong>98%</strong>
              </div>
              <div className="text-[11px] text-gray-600">
                Key risk: None flagged · Opportunities: optimize SOW structure for upcoming projects.
              </div>
            </div>
          </div>
        </div>

        {/* AI Recommended Actions */}
        <div className="mb-3">
          <div className="flex items-center gap-1.5 mb-2">
            <div className="text-xs text-gray-500">AI Recommended Actions</div>
            <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse"></div>
          </div>
          <div className="space-y-1.5">
            <div className="p-2 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-900 hover:border-blue-200 hover:shadow-sm transition-all">
              Consolidate 2 smaller SOWs into master agreement
            </div>
            <div className="p-2 bg-gray-50 rounded-lg border border-gray-200 text-xs text-gray-900 hover:border-blue-200 hover:shadow-sm transition-all">
              Use Deloitte analytics team to benchmark vendor performance in Category X
            </div>
          </div>
          <button className="mt-2 text-xs text-blue-600 hover:text-blue-700 px-3 py-1 bg-white rounded-md border border-blue-200 hover:border-blue-300 hover:shadow-sm transition-all">
            Create joint initiative
          </button>
        </div>

        {/* Related Data */}
        <div>
          <div className="text-xs text-gray-500 mb-2">Related Data</div>
          <div className="grid grid-cols-3 gap-2 mb-2">
            <div className="p-2 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <div className="text-sm text-gray-900 mb-0.5">3</div>
              <div className="text-[10px] text-gray-500">Active contracts</div>
            </div>
            <div className="p-2 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <div className="text-sm text-gray-900 mb-0.5">2</div>
              <div className="text-[10px] text-gray-500">Open change requests</div>
            </div>
            <div className="p-2 bg-gray-50 rounded-lg text-center hover:bg-gray-100 transition-colors">
              <div className="text-sm text-gray-900 mb-0.5">1</div>
              <div className="text-[10px] text-gray-500">Pending invoices</div>
            </div>
          </div>
          <button className="text-xs text-gray-600 hover:text-gray-900 flex items-center gap-1 hover:underline">
            View in ERP <ExternalLink className="w-3 h-3" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}