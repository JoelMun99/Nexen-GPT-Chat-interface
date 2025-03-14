import React from 'react';
import { PlusIcon } from '../Icons';
import { clsx } from 'clsx';
import { useChatContext } from '../../context/ChatContext';

interface NewChatButtonProps {
  isExpanded: boolean;
}

export const NewChatButton: React.FC<NewChatButtonProps> = ({ isExpanded }) => {
  const { resetChat } = useChatContext();
  
  return (
    <button 
      onClick={resetChat}
      className={clsx(
        'flex items-center space-x-2  hover:bg-white/20 transition-colors duration-200 p-1 rounded-full mb-4',
        isExpanded ? 'w-full justify-start' : 'w-full justify-center'
      )}
    >
      <PlusIcon className="w-8 h-8" />
      {isExpanded && <span>New Chat</span>}
    </button>
  );
};