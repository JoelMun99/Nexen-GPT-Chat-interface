import React, { useState, useRef, useEffect } from "react";
import { CustomSendIcon } from "../Icons/CustomSendIcon";

interface ChatInputProps {
    onSend: (message: string) => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({ onSend }) => {
    const [message, setMessage] = useState("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const maxHeight = 120; // Set the max height for the textarea

    // Auto-expand textarea up to maxHeight
    useEffect(() => {
        if (textAreaRef.current) {
            textAreaRef.current.style.height = "40px"; // Reset height to default
            const scrollHeight = textAreaRef.current.scrollHeight;

            if (scrollHeight < maxHeight) {
                textAreaRef.current.style.height = `${scrollHeight}px`; // Expand up to maxHeight
            } else {
                textAreaRef.current.style.height = `${maxHeight}px`; // Lock at maxHeight and enable scrolling
            }
        }
    }, [message]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedMessage = message.trim();
        if (trimmedMessage) {
            onSend(trimmedMessage);
            setMessage("");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="relative max-w-3xl mx-auto">
        <textarea
            ref={textAreaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message NexenGPT..."
            rows={1}
            className="w-full bg-secondary px-4 py-4 pr-12 rounded-2xl resize-none h-auto
                     focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-shadow"
            style={{
                maxHeight: `${maxHeight}px`,
                overflowY: "auto", // Enable scrolling when content exceeds maxHeight
            }}
        />
                <button type="submit" disabled={!message.trim()}>
                    <CustomSendIcon className="absolute right-10 bottom-6 disabled:opacity-50 w-5 h-5" />
                </button>
            </div>
        </form>
    );
};
