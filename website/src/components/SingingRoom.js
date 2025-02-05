import React, { useState } from 'react';
import './SingingRoom.css';

function SingingRoom() {
  const [song, setSong] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle singing room logic
  };

  return (
    <div className="singing-room">
      <h2>Singing Room</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter song name"
          value={song}
          onChange={(e) => setSong(e.target.value)}
        />
        <button type="submit" className="btn">Sing</button>
      </form>
      {/* Add singing room functionality here */}
    </div>
  );
}

export default SingingRoom;