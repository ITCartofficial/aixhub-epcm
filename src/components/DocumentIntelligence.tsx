import { useState } from 'react';
import { FileText, Sparkles, Upload, AlertCircle } from 'lucide-react';

export function DocumentIntelligence() {
  const [docType, setDocType] = useState('Contracts & NDAs');
  const docTypes = ['Contracts & NDAs', 'Policies', 'SOPs'];

  const documents = [
    {
      name: 'Master Services Agreement – Vendor X',
      classification: 'Confidential',
      retention: '10 years',
      aiFlag: 'Termination clause weaker than standard'
    },
    {
      name: 'Supply Agreement – Al Faisal Logistics',
      classification: 'Internal',
      retention: '7 years',
      aiFlag: 'Missing force majeure clause'
    },
    {
      name: 'NDA – Strategic Partner 2024',
      classification: 'Confidential',
      retention: '5 years',
      aiFlag: null
    },
    {
      name: 'Framework Agreement – IT Services',
      classification: 'Confidential',
      retention: '10 years',
      aiFlag: 'Non-standard payment terms detected'
    }
  ];

  return (
    <div className="bg-white rounded-lg sm:rounded-xl border border-gray-200 p-2 sm:p-3 lg:p-4 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-2 sm:mb-3 lg:mb-4">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-blue-500" strokeWidth={1.5} />
          <h3 className="text-xs sm:text-sm text-gray-900">AI Document Intelligence</h3>
        </div>
        <select
          value={docType}
          onChange={(e) => setDocType(e.target.value)}
          className="text-[9px] sm:text-[11px] text-gray-600 bg-gray-50 border border-gray-200 rounded-lg px-1.5 sm:px-2 py-0.5 sm:py-1 outline-none focus:border-blue-500 transition-colors cursor-pointer"
        >
          {docTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Summary Strip */}
      <div className="grid grid-cols-3 gap-1.5 sm:gap-2 mb-2 sm:mb-3 lg:mb-4">
        <div className="p-2 bg-blue-50 rounded-lg border border-blue-200 text-center">
          <div className="text-sm text-blue-900 mb-0.5">35</div>
          <div className="text-[10px] text-blue-600">Documents analyzed today</div>
        </div>
        <div className="p-2 bg-orange-50 rounded-lg border border-orange-200 text-center">
          <div className="text-sm text-orange-900 mb-0.5">7</div>
          <div className="text-[10px] text-orange-600">Missing mandatory clauses</div>
        </div>
        <div className="p-2 bg-purple-50 rounded-lg border border-purple-200 text-center">
          <div className="text-sm text-purple-900 mb-0.5">3</div>
          <div className="text-[10px] text-purple-600">Policies due for review</div>
        </div>
      </div>

      {/* Document List */}
      <div className="space-y-2 mb-3">
        {documents.map((doc, idx) => (
          <div key={idx} className="p-2.5 bg-gray-50 rounded-lg border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all">
            <div className="flex gap-2">
              <FileText className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-900 mb-1.5 truncate">{doc.name}</div>
                <div className="flex gap-1.5 mb-1.5 flex-wrap">
                  <span className="px-1.5 py-0.5 bg-red-100 text-red-700 text-[10px] rounded">
                    {doc.classification}
                  </span>
                  <span className="px-1.5 py-0.5 bg-gray-200 text-gray-700 text-[10px] rounded">
                    {doc.retention}
                  </span>
                </div>
                {doc.aiFlag && (
                  <div className="flex items-start gap-1.5 p-1.5 bg-yellow-50 rounded border border-yellow-200 mb-2">
                    <AlertCircle className="w-3 h-3 text-yellow-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div className="text-[10px] text-yellow-800">
                      <span className="text-yellow-600">AI flagged:</span> {doc.aiFlag}
                    </div>
                  </div>
                )}
                <div className="flex gap-1.5">
                  <button className="text-[10px] text-blue-600 hover:text-blue-700 px-2 py-1 bg-white rounded border border-blue-200 hover:border-blue-300 hover:shadow-sm transition-all">
                    View diff
                  </button>
                  <button className="text-[10px] text-blue-600 hover:text-blue-700 px-2 py-1 bg-white rounded border border-blue-200 hover:border-blue-300 hover:shadow-sm transition-all">
                    Summarize
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Upload */}
      <button className="w-full p-3 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-dashed border-blue-300 rounded-lg text-blue-600 hover:border-blue-400 hover:shadow-sm transition-all flex items-center justify-center gap-2">
        <Upload className="w-4 h-4" strokeWidth={1.5} />
        <span className="text-xs">Upload document for instant AI review</span>
      </button>
    </div>
  );
}