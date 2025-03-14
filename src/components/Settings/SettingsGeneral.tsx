import React from 'react';
import { TrashIcon } from '../Icons';

export const SettingsGeneral: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Theme</h3>
        <select className="w-full p-2 border rounded-lg">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System</option>
        </select>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Language</h3>
        <select className="w-full p-2 border rounded-lg">
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
        </select>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="space-y-4">
          <button className="w-full text-left p-2 hover:bg-gray-50 rounded-lg">
            Archived Chats
          </button>
          <button className="w-full text-left p-2 hover:bg-gray-50 rounded-lg">
            Archive All Chats
          </button>
          <button className="flex items-center space-x-2 text-red-600 p-2 hover:bg-red-50 rounded-lg">
            <TrashIcon className="w-5 h-5" />
            <span>Delete All Chats</span>
          </button>
        </div>
      </div>
    </div>
  );
};