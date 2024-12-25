'use client'
import React, { useState } from 'react';

interface Tab {
  id: string;
  label: string;
  content: () => React.JSX.Element;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab, className = '' }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  return (
    <div className={`w-full ${className}`}>
      {/* Tab Headers */}
      <div className="flex justify-center items-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`p-5 text-[16px] font-[600] leading-[24px] transition-colors duration-200
              ${activeTab === tab.id
                ? 'border-b-[3px] border-[#009444] text-[#009444]'
                : 'text-[#949494] hover:text-[#009444]'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Tab Content */}
      <div className="py-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`${activeTab === tab.id ? 'block' : 'hidden'}`}
          >
            {tab.content()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;