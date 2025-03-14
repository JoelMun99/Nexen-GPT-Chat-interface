import React from 'react';
import { clsx } from 'clsx';

interface ChatQuestionProps {
  text: string;
  onClick: () => void;
  className?: string;
}

export const ChatQuestion: React.FC<ChatQuestionProps> = ({ text, onClick, className }) => (
  <button
    onClick={onClick}
    className={clsx(
      'p-6 border-2 border-primary rounded-lg text-left hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md w-full',
      className
    )}
  >
    <p className="text-primary text-lg font-medium">{text}</p>
  </button>
);