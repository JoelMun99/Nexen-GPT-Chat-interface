import React from 'react';
import { ChatIcon } from '../Icons';
import { SettingsIcon } from '../Icons';
import { clsx } from 'clsx';

interface SidebarNavProps {
  isExpanded: boolean;
}

export const SidebarNav: React.FC<SidebarNavProps> = ({ isExpanded }) => {
  const navItems = [
    { icon: <ChatIcon className="w-5 h-5" />, label: 'Previous Chats', id: 'chats' },
    { icon: <SettingsIcon className="w-5 h-5" />, label: 'Settings', id: 'settings' },
  ];

  return (
    <nav className="space-y-2">
      {navItems.map((item) => (
        <button
          key={item.id}
          className={clsx(
            'flex items-center space-x-2 hover:bg-white/10 transition-colors duration-200 rounded-lg p-2',
            isExpanded ? 'w-full justify-start' : 'w-full justify-center'
          )}
        >
          {item.icon}
          {isExpanded && <span>{item.label}</span>}
        </button>
      ))}
    </nav>
  );
};