'use client';

import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Store, 
  ArrowRight,
  Boxes,
  Building2,
  Truck,
  Settings,
  Database,
  Network,
  PackageCheck,
  Users,
  FileCheck,
  BarChart
} from 'lucide-react';

interface CapabilityProps {
  title: string;
  icon: React.ElementType;
  content: string;
  features: string[];
  isVisible: boolean;
}

const CapabilityCard: React.FC<CapabilityProps> = ({ title, icon: Icon, content, features, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className={`transform transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`bg-white rounded-lg p-6 shadow-lg border border-gray-200 h-full transition-all duration-300 ${
          isHovered ? 'transform scale-102' : ''
        }`}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className={`bg-[#00204E] p-2 rounded-lg transform transition-all duration-300 ${
            isHovered ? 'rotate-12' : ''
          }`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-[#00204E]">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{content}</p>
        <div className="space-y-2">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className={`flex items-center gap-2 text-gray-600 transition-all duration-300 ${
                isHovered ? 'translate-x-2' : ''
              }`}
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <ArrowRight className="h-4 w-4 text-sky-400" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ComparisonSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'b2b' | 'dtc'>('b2b');

  const comparisons = {
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

const B2BFulfillmentGuide: React.FC = () => {
  const [visibleCapabilities, setVisibleCapabilities] = useState<boolean[]>([]);

  const capabilities = [
    {
      title: 'Order Processing',
      icon: PackageCheck,
      content: 'Efficient handling of B2B orders with specialized requirements.',
      features: [
        'Order verification',
        'Bulk order management',
        'Specialized processing workflows',
        'Order tracking systems'
      ]
    },
    {
      title: 'Inventory Management',
      icon: Database,
      content: 'Advanced inventory control for B2B operations.',
      features: [
        'Real-time stock monitoring',
        'Automated reordering',
        'Inventory forecasting',
        'Stock level optimization'
      ]
    },
    {
      title: 'Warehousing',
      icon: Building2,
      content: 'Specialized warehousing solutions for B2B fulfillment.',
      features: [
        'Secure storage facilities',
        'Organized inventory systems',
        'Efficient picking processes',
        'Special handling capabilities'
      ]
    },
    {
      title: 'Technology Integration',
      icon: Settings,
      content: 'Seamless integration with various business systems.',
      features: [
        'EDI compatibility',
        'WMS integration',
        'Marketplace connectivity',
        'Real-time data exchange'
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: Truck,
      content: 'Comprehensive shipping solutions for B2B needs.',
      features: [
        'Carrier management',
        'Route optimization',
        'Delivery scheduling',
        'Shipping documentation'
      ]
    },
    {
      title: 'Compliance & VAS',
      icon: FileCheck,
      content: 'Meeting strict B2B compliance requirements.',
      features: [
        'Retailer compliance',
        'Custom labeling',
        'Special packaging',
        'Documentation management'
      ]
    }
  ];

  useEffect(() => {
    const timeouts = capabilities.map((_, index) => {
      return setTimeout(() => {
        setVisibleCapabilities(prev => [...prev, true]);
      }, index * 200);
    });

    return () => timeouts.forEach(timeout => clearTimeout(timeout));
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="relative">
              <Box className="h-12 w-12 text-[#00204E] animate-pulse" />
              <div className="absolute inset-0 bg-[#00204E] rounded-full opacity-20 animate-ping" />
            </div>
            <h2 className="text-3xl font-bold text-[#00204E]">
              B2B Fulfillment Guide
            </h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the key differences and capabilities in B2B warehouse fulfillment
          </p>
        </div>

        <ComparisonSection />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {capabilities.map((capability, index) => (
            <CapabilityCard
              key={index}
              {...capability}
              isVisible={visibleCapabilities[index]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default B2BFulfillmentGuide;
