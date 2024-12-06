import React, { useState, useEffect, useRef } from "react";
import { Send, Users, MessageCircle } from "lucide-react";
import io from "socket.io-client";
import "./ComRoom.css";

// Import community data
const communityData = [
  {
    id: 1,
    name: "Climate Solutions",
    members: 5420,
    category: "collaboration",
  },
  // ... other communities from the provided data
];

const ComRoom = ({ selectedCommunity = communityData[0] }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [isConnected, setIsConnected] = useState(false);
  const messagesEndRef = useRef(null);

  const socket = useRef(null);

  useEffect(() => {
    // Initialize socket connection
    socket.current = io("http://localhost:4000", {
      query: { community: selectedCommunity.id },
    });

    socket.current.on("connect", () => {
      console.log("Connected to chat server");
    });

    socket.current.on("newMessage", (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    return () => {
      socket.current.disconnect();
    };
  }, [selectedCommunity]);

  useEffect(() => {
    // Auto-scroll to bottom of messages
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (input.trim() && username.trim() && socket.current) {
      const message = {
        id: Date.now(),
        text: input,
        sender: username,
        timestamp: new Date().toISOString(),
        communityId: selectedCommunity.id,
      };

      socket.current.emit("sendMessage", message);
      setInput("");
    }
  };

  const renderUsernameStep = () => (
    <div className="cr-username-container">
      <h2 className="cr-username-title">Join {selectedCommunity.name}</h2>
      <input
        type="text"
        className="cr-username-input"
        placeholder="Your Name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        maxLength={20}
      />
      <button
        onClick={() => username.trim() && setIsConnected(true)}
        className="cr-submit-button"
        disabled={!username.trim()}
      >
        Join Community Chat
      </button>
    </div>
  );

  const renderChatRoom = () => (
    <div className="cr-chatroom">
      <div className="cr-chat-header">
        <h2>{selectedCommunity.name}</h2>
        <div className="cr-community-info">
          <Users size={16} /> {selectedCommunity.members} Members
        </div>
      </div>

      <div className="cr-messages">
        {messages.length === 0 && (
          <div className="cr-no-messages">
            <MessageCircle size={48} />
            <p>No messages yet. Start the conversation!</p>
          </div>
        )}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`cr-message ${
              message.sender === username ? "cr-message-self" : ""
            }`}
          >
            <div className="cr-message-header">
              <span className="cr-message-sender">{message.sender}</span>
              <span className="cr-message-timestamp">
                {new Date(message.timestamp).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            <p className="cr-message-text">{message.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="cr-input-container">
        <input
          type="text"
          className="cr-message-input"
          placeholder={`Message ${selectedCommunity.name}`}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          maxLength={500}
        />
        <button
          onClick={handleSendMessage}
          className="cr-send-button"
          disabled={!input.trim()}
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="cr-container">
      {!isConnected ? renderUsernameStep() : renderChatRoom()}
    </div>
  );
};

export default ComRoom;
