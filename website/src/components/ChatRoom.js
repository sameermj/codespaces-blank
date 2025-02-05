import React, { useState } from 'react';
import './ChatRoom.css';

function ChatRoom() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle chat room logic
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div className="chat-room">
      <h2>Chat Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit" className="btn">Send</button>
      </form>
      <div className="messages">
        {messages.map((msg, index) => (
          <div key={index} className="message">
            {msg}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatRoom;