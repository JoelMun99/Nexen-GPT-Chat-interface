import React from 'react';
import { Header } from '../Header/Header';
import { Sidebar } from '../Sidebar/Sidebar';
import { clsx } from 'clsx';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = React.useState(false);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className="h-screen flex">
      {/* Fixed sidebar */}
      <Sidebar isExpanded={isSidebarExpanded} onToggle={toggleSidebar} />
      
      {/* Main content area with margin to account for sidebar */}
      <div className={clsx(
        'flex-1 flex flex-col',
        isSidebarExpanded ? 'ml-64' : 'ml-16',
        'transition-all duration-300 ease-in-out'
      )}>
        <Header />
        <main className="flex-1 overflow-y-auto bg-white">
          {children}
        </main>
      </div>
    </div>
  );
};