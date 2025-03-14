import React from 'react';

interface LogoProps {
  src: string;
  alt: string;
}

export const Logo: React.FC<LogoProps> = ({ src, alt }) => (
  <img src={src} alt={alt} className="h-12 w-12" />
);