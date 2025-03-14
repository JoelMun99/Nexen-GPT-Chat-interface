import React from 'react';
import { SettingsIcon, LanguageIcon, SecurityIcon } from '../Icons';
import { Dialog } from '../Common/Dialog';
import { SettingsGeneral } from './SettingsGeneral';

type Tab = 'general' | 'speech' | 'security';

interface SettingsDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SettingsDialog: React.FC<SettingsDialogProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = React.useState<Tab>('general');

  const tabs = [
    { id: 'general', label: 'General', icon: <SettingsIcon className="w-5 h-5" /> },
    { id: 'speech', label: 'Speech', icon: <LanguageIcon className="w-5 h-5" /> },
    { id: 'security', label: 'Security', icon: <SecurityIcon className="w-5 h-5" /> },
  ];

  return (
    <Dialog isOpen={isOpen} onClose={onClose} title="Settings">
      <div className="flex h-[400px]">
        {/* Sidebar */}
        <div className="w-48 p-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Tab)}
              className={`w-full flex items-center space-x-2 p-2 rounded-lg mb-2 ${
                activeTab === tab.id ? 'bg-gray-100' : 'hover:bg-gray-50'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 p-6">
          {activeTab === 'general' && <SettingsGeneral />}
          {/* Add other tab contents as needed */}
        </div>
      </div>
    </Dialog>
  );
};