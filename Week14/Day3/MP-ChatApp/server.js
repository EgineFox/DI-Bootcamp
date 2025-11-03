const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));
// Serve index.html on root path
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Store user data
const users = {};        // socket.id -> username
const usernames = {};    // username -> socket.id
const userRooms = {};    // socket.id -> room name

io.on('connection', socket => {
  // Handle user joining a room
  socket.on('joinRoom', ({ username, room }) => {
    if (usernames[username]) {
      socket.emit('error', 'Username already taken');
      return;
    }

    users[socket.id] = username;
    usernames[username] = socket.id;
    userRooms[socket.id] = room;

    socket.join(room);

    socket.emit('roomInfo', {
      room,
      message: `You joined the room "${room}"`
    });

    updateRoomUserList(room);

    socket.broadcast.to(room).emit('chatMessage', {
      username: 'System',
      message: `${username} joined the room "${room}"`
    });
  });

  // Handle public chat messages
  socket.on('chatMessage', msg => {
    const username = users[socket.id] || 'Anonymous';
    const room = userRooms[socket.id];
    if (room) {
      io.to(room).emit('chatMessage', { username, message: msg });
    }
  });

  // Handle private messages
  socket.on('privateMessage', ({ target, message }) => {
    const from = users[socket.id] || 'Anonymous';
    const targetSocketId = usernames[target];

    if (targetSocketId) {
      io.to(targetSocketId).emit('privateMessage', { from, message });
    } else {
      socket.emit('privateMessage', {
        from: 'System',
        message: `User "${target}" not found.`
      });
    }
  });

  // Handle user leaving a room
  socket.on('leaveRoom', () => {
    const username = users[socket.id];
    const room = userRooms[socket.id];

    if (room) {
      socket.leave(room);
      delete userRooms[socket.id];

      socket.broadcast.to(room).emit('chatMessage', {
        username: 'System',
        message: `${username} left the room "${room}"`
      });

      updateRoomUserList(room);
    }
  });

  // Handle user disconnecting
  socket.on('disconnect', () => {
    const username = users[socket.id];
    const room = userRooms[socket.id];

    if (username) {
      delete usernames[username];
    }
    delete users[socket.id];
    delete userRooms[socket.id];

    if (room) {
      socket.broadcast.to(room).emit('chatMessage', {
        username: 'System',
        message: `${username || 'A user'} disconnected from room "${room}"`
      });

      updateRoomUserList(room);
    }
  });

  // Send list of all active rooms
  socket.on('getRooms', () => {
    const rooms = new Set(Object.values(userRooms));
    socket.emit('roomList', Array.from(rooms));
  });

  // Send list of users in current room
  socket.on('getUsersInRoom', () => {
    const room = userRooms[socket.id];
    if (!room) return;

     const userList = Object.entries(users)
    .filter(([_, u]) => u.room === room)
    .map(([name, u]) => ({ username: name, avatar: u.avatar }));
     socket.emit('userList', userList);


  });

  // Helper function to update user list in a room
  function updateRoomUserList(room) {
    const roomUsers = Object.entries(userRooms)
      .filter(([id, r]) => r === room)
      .map(([id]) => users[id]);

    io.to(room).emit('userList', roomUsers);
  }
});

socket.on('setAvatar', ({ username, avatar}) => {
  if (users[username]) {
    users[username].avatar = avatar;
  }
});


// Start the server
server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
