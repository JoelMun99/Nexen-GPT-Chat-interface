import React from 'react';

interface IconProps {
  className?: string;
}

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
    <svg
        className={className}
        width="46"
        height="27"
        viewBox="0 0 46 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          d="M3.5 1H42.5C42.5 1 45.5 1 45.5 2.46484V3.92969C45.5 3.92969 45.5 5.39453 42.5 5.39453H3.5C3.5 5.39453 0.5 5.39453 0.5 3.92969V2.46484C0.5 2.46484 0.5 1 3.5 1Z"
          fill="white"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
      <path
          d="M3.5 11.5469H42.5C42.5 11.5469 45.5 11.5469 45.5 13.0118V14.4766C45.5 14.4766 45.5 15.9414 42.5 15.9414H3.5C3.5 15.9414 0.5 15.9414 0.5 14.4766V13.0118C0.5 13.0118 0.5 11.5469 3.5 11.5469Z"
          fill="white"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
      <path
          d="M3.5 22H42.5C42.5 22 45.5 22 45.5 23.4648V24.9297C45.5 24.9297 45.5 26.3945 42.5 26.3945H3.5C3.5 26.3945 0.5 26.3945 0.5 24.9297V23.4648C0.5 23.4648 0.5 22 3.5 22Z"
          fill="white"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
      />
    </svg>
);

