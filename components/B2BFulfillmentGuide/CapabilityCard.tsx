import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { CapabilityProps } from './types';

const CapabilityCard: React.FC<CapabilityProps> = ({ 
  title, 
  icon: Icon, 
  content, 
  features, 
  isVisible 
}) => {
  const [isHovered, setIsHovered] = useState(false);

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

export default CapabilityCard;
