import React from 'react';
import { Message } from './types';
import { ChatMessage } from './ChatMessage';

interface ChatMessagesProps {
  messages: Message[];
}

export const ChatMessages: React.FC<ChatMessagesProps> = ({ messages }) => {
  const messagesEndRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-8">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};