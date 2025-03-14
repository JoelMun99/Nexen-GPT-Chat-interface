import React, { createContext, useContext, useState } from 'react';

interface UserContextType {
  isProfileMenuOpen: boolean;
  toggleProfileMenu: () => void;
  closeProfileMenu: () => void;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

  const toggleProfileMenu = () => setIsProfileMenuOpen(prev => !prev);
  const closeProfileMenu = () => setIsProfileMenuOpen(false);
  
  const logout = () => {
    // Implement logout logic here
    console.log('User logged out');
    closeProfileMenu();
  };

  return (
    <UserContext.Provider value={{
      isProfileMenuOpen,
      toggleProfileMenu,
      closeProfileMenu,
      logout
    }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};