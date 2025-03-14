import React from 'react';

interface IconProps {
  className?: string;
}

export const PlusIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className} // Allows external styling via Tailwind or CSS
    >
      <circle cx="22.5" cy="22.5" r="22.5" fill="#9BAAB6"/> {/* Background Circle */}
      <path d="M22 10V34" stroke="#13202D" strokeWidth="4"/> {/* Vertical Line */}
      <path d="M10 22H34" stroke="#13202D" strokeWidth="4"/> {/* Horizontal Line */}
    </svg>
);
