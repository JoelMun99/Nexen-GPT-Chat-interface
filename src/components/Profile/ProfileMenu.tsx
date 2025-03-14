import React from 'react';
import { useUserContext } from '../../context/UserContext';
import { UserIcon, SettingsIcon, LogoutIcon } from '../Icons';
import { SettingsDialog } from '../Settings/SettingsDialog';

export const ProfileMenu: React.FC = () => {
  const { isProfileMenuOpen, toggleProfileMenu, logout } = useUserContext();
  const [isSettingsOpen, setIsSettingsOpen] = React.useState(false);

  return (
    <div className="relative">
      <button
        onClick={toggleProfileMenu}
        className="btn bg-primary text-white hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center"
      >
        Ch
      </button>

      {isProfileMenuOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={toggleProfileMenu}
          />
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-20">
            <div className="p-4 border-b border-gray-100">
              <p className="font-semibold text-gray-800">Charles Harrison</p>
              <p className="text-sm text-gray-500">charles@nexen.edu</p>
            </div>
            
            <div className="py-2">
              <button className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2">
                <UserIcon className="w-5 h-5" />
                <span>Profile</span>
              </button>
              
              <button 
                onClick={() => {
                  setIsSettingsOpen(true);
                  toggleProfileMenu();
                }}
                className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 flex items-center space-x-2"
              >
                <SettingsIcon className="w-5 h-5" />
                <span>Settings</span>
              </button>
              
              <button
                onClick={logout}
                className="w-full px-4 py-2 text-left text-red-600 hover:bg-red-50 flex items-center space-x-2"
              >
                <LogoutIcon className="w-5 h-5" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </>
      )}

      <SettingsDialog 
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />
    </div>
  );
};