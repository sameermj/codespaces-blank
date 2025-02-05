import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h2>Welcome to the Singing and Chat Room Website!</h2>
      <p>Join us and enjoy singing and chatting with friends.</p>
      <Link to="/signup" className="btn">Get Started</Link>
    </div>
  );
}

export default Home;