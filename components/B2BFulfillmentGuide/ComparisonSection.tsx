import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Comparison } from './types';

const ComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'b2b' | 'dtc'>('b2b');

  const comparisons: Comparison = {
    b2b: [
      'Larger order volumes',
      'Specialized packaging requirements',
      'EDI integration needed',
      'Strict compliance guidelines',
      'Bulk shipping methods',
      'Complex routing guides'
    ],
    dtc: [
      'Individual orders',
      'Standard packaging',
      'Simple integrations',
      'Flexible shipping options',
      'Direct customer communication',
      'Quick turnaround times'
    ]
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200 mb-8">
      <div className="flex gap-4 mb-6">
        {['b2b', 'dtc'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab as 'b2b' | 'dtc')}
            className={`px-4 py-2 rounded-lg transition-all duration-300 ${
              activeTab === tab
                ? 'bg-[#00204E] text-white'
                : 'bg-gray-100 text-[#00204E] hover:bg-gray-200'
            }`}
          >
            {tab.toUpperCase()} Fulfillment
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 gap-4">
        {comparisons[activeTab].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg transform transition-all duration-300 hover:translate-x-2"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="text-sky-400">
              <ArrowRight className="h-5 w-5" />
            </div>
            <span className="text-[#00204E]">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonSection;
