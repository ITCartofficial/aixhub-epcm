import { useState } from 'react';
import { Sparkles, Send, Paperclip, ToggleLeft } from 'lucide-react';

export function AIAssistant() {
  const [activeMode, setActiveMode] = useState('Chat');
  const [activeTab, setActiveTab] = useState('Vendors');
  const modes = ['Chat', 'Compose', 'Explain'];
  const tabs = ['Vendors', 'PRs & POs', 'Contracts'];

  const conversation = [
    {
      type: 'user',
      text: 'Show me vendors supporting Deloitte projects with late deliveries in the last 60 days.'
    },
    {
      type: 'ai',
      text: 'Found 3 vendors. One shows a significant increase in late deliveries.',
      chips: ['View details', 'Generate email', 'Create improvement action']
    },
    {
      type: 'user',
      text: 'Draft a message asking for a corrective action plan.'
    },
    {
      type: 'ai',
      isEmail: true
    }
  ];

  const vendors = [
    { name: 'Al Faisal Logistics', risk: 'High', onTime: '82%', quality: '4.2', spend: 'SAR 1.2M' },
    { name: 'Eastern Supply Co.', risk: 'Medium', onTime: '89%', quality: '4.5', spend: 'SAR 890K' },
    { name: 'Global Freight Systems', risk: 'Low', onTime: '95%', quality: '4.8', spend: 'SAR 650K' }
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-3 lg:p-4 shadow-sm">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 sm:mb-3 lg:mb-4 gap-2">
        <div>
          <div className="flex items-center gap-1.5 sm:gap-2 mb-0.5">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" strokeWidth={1.5} />
            <h2 className="text-sm sm:text-base text-gray-900">AiXHub Assistant</h2>
          </div>
          <div className="text-[10px] sm:text-xs text-gray-500">Ask in natural language. AiXHub understands your data & policies.</div>
        </div>
        <div className="flex gap-1 sm:gap-1.5">
          {modes.map((mode) => (
            <button
              key={mode}
              onClick={() => setActiveMode(mode)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-[10px] sm:text-xs transition-all ${
                activeMode === mode
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
        {/* Left - Conversation (2 columns) */}
        <div className="lg:col-span-2 flex flex-col h-[350px] sm:h-[400px] lg:h-[450px]">
          <div className="flex-1 overflow-y-auto mb-3 space-y-3 pr-2">
            {conversation.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-xl p-3 ${
                  msg.type === 'user' 
                    ? 'bg-gray-100 text-gray-900' 
                    : 'bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-100'
                }`}>
                  {msg.isEmail ? (
                    <div>
                      <div className="text-[11px] text-gray-500 mb-2">Generated email draft</div>
                      <textarea
                        className="w-full p-2 bg-white border border-gray-200 rounded-lg text-xs text-gray-900 resize-none"
                        rows={9}
                        defaultValue="Subject: Request for Corrective Action Plan - Late Deliveries

Dear Al Faisal Logistics Team,

We have noticed a significant decline in on-time delivery performance over the past 60 days, dropping from 96% to 82%. As a valued partner supporting our Deloitte projects, we would like to schedule a meeting to discuss this trend and develop a corrective action plan.

Could you please provide:
1. Root cause analysis of recent delays
2. Proposed corrective actions
3. Timeline for improvement

Best regards,
Aisha Al-Sayed"
                      />
                      <button className="mt-2 text-xs text-gray-400 px-3 py-1 bg-gray-100 rounded-md border border-gray-200 cursor-not-allowed">
                        Send via Outlook (Preview only)
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-sm text-gray-900">{msg.text}</div>
                      {msg.chips && (
                        <div className="flex gap-1.5 mt-2 flex-wrap">
                          {msg.chips.map((chip, i) => (
                            <button
                              key={i}
                              className="px-2.5 py-1 bg-white text-[11px] text-blue-600 rounded-md border border-blue-200 hover:border-blue-300 hover:shadow-sm transition-all"
                            >
                              {chip}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div className="border-t border-gray-200 pt-3">
            <div className="flex items-center gap-2 bg-gray-50 rounded-lg p-2 border border-gray-200 focus-within:border-blue-500 focus-within:shadow-sm transition-all">
              <Paperclip className="w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 transition-colors" strokeWidth={1.5} />
              <input
                type="text"
                placeholder="Type or paste a question…"
                className="flex-1 bg-transparent outline-none text-sm text-gray-900 placeholder:text-gray-400"
              />
              <button className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 transition-colors">
                <ToggleLeft className="w-4 h-4" strokeWidth={1.5} />
                <span className="text-[11px]">Context</span>
              </button>
              <button className="p-1.5 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors shadow-sm">
                <Send className="w-4 h-4 text-white" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>

        {/* Right - Context (1 column) */}
        <div className="lg:col-span-1 border-l border-gray-200 pl-4">
          <div className="flex gap-1.5 mb-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-2 py-1 rounded-md text-[11px] transition-all ${
                  activeTab === tab
                    ? 'bg-gray-100 text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="space-y-2 max-h-[410px] overflow-y-auto pr-1">
            {vendors.map((vendor, idx) => (
              <div key={idx} className="p-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all">
                <div className="text-xs text-gray-900 mb-1.5">{vendor.name}</div>
                <div className="grid grid-cols-2 gap-1 text-[10px] text-gray-600 mb-1.5">
                  <div>Risk: <span className={`${vendor.risk === 'High' ? 'text-red-600' : vendor.risk === 'Medium' ? 'text-yellow-600' : 'text-green-600'}`}>{vendor.risk}</span></div>
                  <div>On-time: {vendor.onTime}</div>
                  <div>Quality: {vendor.quality}</div>
                  <div>Spend: {vendor.spend}</div>
                </div>
                <button className="text-[10px] text-blue-600 hover:text-blue-700">Explain risk →</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}