import React, { createContext, useContext, useState } from 'react';
import { ChatState, Message } from '../components/Chat/types';

interface ChatContextType {
  state: ChatState;
  showWelcome: boolean;
  addMessage: (text: string, sender: 'user' | 'bot') => void;
  updateMessage: (id: string, text: string) => void;
  resetChat: () => void;
  setShowWelcome: (show: boolean) => void;
  setTyping: (isTyping: boolean) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

const INITIAL_STATE: ChatState = {
  messages: [],
  isTyping: false
};

export const ChatProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<ChatState>(INITIAL_STATE);
  const [showWelcome, setShowWelcome] = useState(true);

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      sender,
      timestamp: new Date()
    };

    setState(prev => ({
      ...prev,
      messages: [...prev.messages, newMessage]
    }));
  };

  const updateMessage = (id: string, text: string) => {
    setState(prev => ({
      ...prev,
      messages: prev.messages.map(message =>
        message.id === id ? { ...message, text } : message
      )
    }));
  };

  const resetChat = () => {
    setState(INITIAL_STATE);
    setShowWelcome(true);
  };

  const setTyping = (isTyping: boolean) => {
    setState(prev => ({ ...prev, isTyping }));
  };

  return (
    <ChatContext.Provider value={{
      state,
      showWelcome,
      addMessage,
      updateMessage,
      resetChat,
      setShowWelcome,
      setTyping
    }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChatContext = () => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error('useChatContext must be used within a ChatProvider');
  }
  return context;
};