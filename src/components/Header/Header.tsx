import React from 'react';
import { Logo } from './Logo';
import { ProfileMenu } from '../Profile/ProfileMenu';
import nexenLogo from '/nexen-logo.svg';

export const Header: React.FC = () => (
  <header className="flex items-center justify-between p-4 sticky top-0 z-10">
    <div className="flex items-center space-x-3">
      <Logo src={nexenLogo} alt="Nexen University Logo" />
      <div className="text-primary">
        <h1 className="text-xl font-bold">Nexen</h1>
        <h2 className="text-sm opacity-90">University</h2>
      </div>
    </div>
    <ProfileMenu />
  </header>
);