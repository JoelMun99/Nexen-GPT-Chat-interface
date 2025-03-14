import React from 'react';
import { MenuIcon } from '../Icons';

interface SidebarHeaderProps {
  onMenuClick: () => void;
  isExpanded: boolean;
}

export const SidebarHeader: React.FC<SidebarHeaderProps> = ({ onMenuClick, isExpanded }) => (
  <div className="mb-4">
    <button 
      onClick={onMenuClick}
      className={`p-2 hover:bg-white/10 rounded-lg transition-colors duration-200 ${
        isExpanded ? 'w-full flex items-center space-x-2' : 'w-full flex justify-center'
      }`}
    >
      <MenuIcon className="w-6 h-6 text-white" />
      {isExpanded && <span className="text-white">Close Menu</span>}
    </button>
  </div>
);