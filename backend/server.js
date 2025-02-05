const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

app.use(express.json());

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Admin login route
app.post('/admin-login', (req, res) => {
  const { username, password } = req.body;
  // Handle admin login logic
  if (username === 'admin' && password === 'password') {
    res.status(200).send({ message: 'Login successful' });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Admin control APIs
app.get('/admin/users', (req, res) => {
  // Fetch and return user data
});

app.get('/admin/rooms', (req, res) => {
  // Fetch and return room data
});

// Socket.io for real-time communication
io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  // ...handle other events...
});

const PORT = process.env.PORT || 3000;
http.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
