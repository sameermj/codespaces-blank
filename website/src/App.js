import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import SingingRoom from './components/SingingRoom';
import ChatRoom from './components/ChatRoom';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1>Welcome to the Singing and Chat Room Website!</h1>
        </header>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/singing-room" component={SingingRoom} />
          <Route path="/chat-room" component={ChatRoom} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;