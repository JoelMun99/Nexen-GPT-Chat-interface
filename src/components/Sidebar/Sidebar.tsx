import React from 'react';
import { NewChatButton } from './NewChatButton';
import { SidebarHeader } from './SidebarHeader';
import { clsx } from 'clsx';

interface SidebarProps {
  isExpanded: boolean;
  onToggle: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ isExpanded, onToggle }) => {
  return (
    <aside 
      className={clsx(
        'bg-primary text-white h-screen fixed left-0',
        'transition-all duration-300 ease-in-out',
        isExpanded ? 'w-64' : 'w-16'
      )}
    >
      <div className="p-4 flex flex-col h-full">
        <SidebarHeader onMenuClick={onToggle} isExpanded={isExpanded} />
        <NewChatButton isExpanded={isExpanded} />
      </div>
    </aside>
  );
};