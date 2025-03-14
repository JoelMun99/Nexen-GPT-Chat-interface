import React, { useCallback } from 'react';
import { ChatQuestion } from './ChatQuestion';
import { ChatInput } from './ChatInput';
import { ChatMessages } from './ChatMessages';
import { useChatContext } from '../../context/ChatContext';
import { sendMessage } from '../../services/api';

const PREDEFINED_QUESTIONS = [
  {
    id: 1,
    text: "Why can I not see my marks on My Students portal?"
  },
  {
    id: 2,
    text: "I am very close to a first class. Can I get it rounded up?"
  },
  {
    id: 3,
    text: "I failed my exams.What do I do?"
  }
];

export const ChatContainer: React.FC = () => {
  const { state, showWelcome, addMessage, setShowWelcome, setTyping } = useChatContext();

  const handleBotResponse = useCallback(async (userMessage: string) => {
    try {
      setTyping(true);
      const response = await sendMessage(userMessage);
      console.log("Bot Response:", response); // Debugging line
      if (!response || !response.message) throw new Error("Empty response from server");

      addMessage(response.message, "bot");
    } catch (error) {
      console.error("Error getting bot response:", error);
      addMessage("I apologize, but I'm having trouble connecting to the server. Please try again later.", "bot");
    } finally {
      setTyping(false);
    }
  }, [addMessage, setTyping]);


  const handleQuestionClick = useCallback(async (text: string) => {
    setShowWelcome(false);
    addMessage(text, 'user');
    await handleBotResponse(text);
  }, [setShowWelcome, addMessage, handleBotResponse]);

  const handleSendMessage = useCallback(async (message: string) => {
    setShowWelcome(false);
    addMessage(message, 'user');
    await handleBotResponse(message);
  }, [setShowWelcome, addMessage, handleBotResponse]);

  return (
    <div className="flex flex-col h-full">
      {showWelcome ? (
        <div className="flex-1">
          <div className="text-center py-12">
            <h1 className="text-5xl font-Jaldi font-bold text-primary mb-4">Hello Charles</h1>
            <p className="text-2xl text-primary/80">How can I help you today?</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 mb-8">
            {PREDEFINED_QUESTIONS.map((question) => (
              <ChatQuestion
                key={question.id}
                text={question.text}
                onClick={() => handleQuestionClick(question.text)}
              />
            ))}
          </div>
        </div>
      ) : (
        <ChatMessages messages={state.messages} />
      )}

      <div className="sticky bottom-0 pb-4 px-4 bg-gradient-to-t from-white via-white">
        <ChatInput onSend={handleSendMessage} />
        {state.isTyping && (
          <div className="text-sm text-gray-500 ml-4">NexenGPT is Responding...</div>
        )}
      </div>
    </div>
  );
};