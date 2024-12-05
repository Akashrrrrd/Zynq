import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import "./AI.css";

const AI = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      type: "bot",
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputMessage,
      type: "user",
    };

    // Add bot response (simulated)
    const botResponse = {
      id: messages.length + 2,
      text: generateBotResponse(inputMessage),
      type: "bot",
    };

    setMessages((prevMessages) => [...prevMessages, userMessage, botResponse]);
    setInputMessage("");
  };

  const generateBotResponse = (userInput) => {
    // Simple response generation logic
    const lowerInput = userInput.toLowerCase();
    if (lowerInput.includes("help")) {
      return "I'd be happy to assist you. What specific help do you need?";
    } else if (lowerInput.includes("hi") || lowerInput.includes("hello")) {
      return "Hello! How are you doing today?";
    } else if (lowerInput.includes("thank")) {
      return "You're welcome! Is there anything else I can help you with?";
    }
    return "I'm processing your request. Could you provide more details?";
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="ai-container">
      <header className="ai-header">
        <Sparkles className="ai-icon" />
        <h1>AI Assistant</h1>
        <p>Intelligent conversation at your fingertips</p>
      </header>

      <div className="chat-interface">
        <div className="messages-container">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.type}-message`}>
              {message.type === "bot" ? (
                <Bot className="message-icon" />
              ) : (
                <User className="message-icon" />
              )}
              <div className="message-content">{message.text}</div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="input-area">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="message-input"
          />
          <button onClick={handleSendMessage} className="send-button">
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AI;
