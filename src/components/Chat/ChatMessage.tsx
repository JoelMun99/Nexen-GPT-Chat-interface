import React, { useState } from 'react';
import { Message } from './types';
import { clsx } from 'clsx';
import { EditIcon, UserIcon, BotIcon } from '../Icons';
import { useChatContext } from '../../context/ChatContext';

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(message.text);
  const { updateMessage } = useChatContext();
  
  const isUser = message.sender === 'user';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editedText.trim() !== '') {
      updateMessage(message.id, editedText);
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(message.text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleCancel();
    }
  };
  
  return (
    <div 
      className={clsx(
        'flex w-full mb-4 items-start space-x-2',
        isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={clsx(
        'w-8 h-8 rounded-full flex items-center justify-center',
        isUser ? 'bg-primary text-white' : 'bg-gray-100'
      )}>
        {isUser ? <UserIcon className="w-5 h-5" /> : <BotIcon className="w-5 h-5 text-primary" />}
      </div>

      <div className={clsx(
        'max-w-[80%] rounded-2xl px-4 py-2 relative group',
        isUser ? 'bg-primary text-white' : 'text-gray-800'
      )}>
        {isEditing ? (
          <form onSubmit={handleSubmit} className="min-w-[200px]">
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onKeyDown={handleKeyDown}
              className="w-full p-1 rounded border text-gray-800 bg-white"
              autoFocus
            />
            <div className="flex justify-end space-x-2 mt-2">
              <button
                type="button"
                onClick={handleCancel}
                className="px-2 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-2 py-1 text-sm bg-primary text-white rounded hover:bg-primary/90"
              >
                Save
              </button>
            </div>
          </form>
        ) : (
          <>
            <p className="text-sm">{message.text}</p>
            <span className="text-xs opacity-70">
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
            
            {isUser && isHovered && !isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="absolute -left-8 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-gray-100 transition-colors"
              >
                <EditIcon className="w-6 h-6 text-primary" />
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
};