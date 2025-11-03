const socket = io();
let username = '';
let room = '';

// DOM elements
const form = document.getElementById('form');
const input = document.getElementById('input');
const messages = document.getElementById('messages');

const loginForm = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const roomSelect = document.getElementById('room');
const loginContainer = document.getElementById('login-container');
const chatContainer = document.getElementById('chat-container');
const userList = document.getElementById('user-list');

let activeNotification = null;

// Handle login form submission
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  username = usernameInput.value.trim();
  room = roomSelect.value;

  if (username && room) {
    socket.emit('joinRoom', { username, room });
    loginContainer.style.display = 'none';
    chatContainer.style.display = 'block';
  }
});

// Handle public message form submission
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const msg = input.value.trim();
  if (msg) {
    if (msg.startsWith('/pm')) {
      const parts = msg.split(' ');
      const target = parts[1];
      const privateMsg = parts.slice(2).join(' ');
      socket.emit('privateMessage', { target, message: privateMsg });
    } else {
      socket.emit('chatMessage', msg);
    }
    input.value = '';
  }
});

// Receive public messages
socket.on('chatMessage', (data) => {
  const item = document.createElement('li');
  item.textContent = `${data.username}: ${data.message}`;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});

// Receive system messages
socket.on('message', (data) => {
  const item = document.createElement('li');
  item.textContent = `${data.username}: ${data.message}`;
  item.style.fontStyle = 'italic';
  messages.appendChild(item);
});

// Receive private messages
socket.on('privateMessage', (data) => {
  const item = document.createElement('li');
  item.textContent = `(Private) ${data.from} → you: ${data.message}`;
  item.style.fontStyle = 'italic';
  item.style.color = 'purple';
  messages.appendChild(item);

  const notifications = document.getElementById('private-notifications');
  const note = document.createElement('div');
  note.classList.add('notification');
  note.textContent = `New private message from ${data.from}`;
  notifications.appendChild(note);

  note.onclick = () => {
  document.getElementById('private-message-content').textContent =
    `(Private) ${data.from} → you: ${data.message}`;
  document.getElementById('private-modal').style.display = 'flex';
  activeNotification = note; // save notification

  };
});

// Update user list
socket.on('userList', (users) => {
  userList.innerHTML = '';
  users.forEach((user) => {
    const li = document.createElement('li');
    li.textContent = user;
    userList.appendChild(li);
  });
});

// Room info
socket.on('roomInfo', ({ room, message }) => {
  document.getElementById('room-name').textContent = `Room: ${room}`;
  console.log(message);
});

// Leave room
document.getElementById('leave-room').addEventListener('click', () => {
  socket.emit('leaveRoom');
  chatContainer.style.display = 'none';
  loginContainer.style.display = 'block';
});

// Запросить список комнат
document.getElementById('refresh-rooms').addEventListener('click', () => {
  socket.emit('getRooms');
});

socket.on('roomList', rooms => {
  const list = document.getElementById('room-list');
  list.innerHTML = rooms.map(r => `<li>${r}</li>`).join('');
});

// Запросить пользователей в комнате
document.getElementById('refresh-users').addEventListener('click', () => {
  socket.emit('getUsersInRoom');
});

// Close modal
document.getElementById('close-modal').onclick = () => {
  document.getElementById('private-modal').style.display = 'none';
  if (activeNotification) {
    activeNotification.remove(); // delete notification
    activeNotification = null;
  }
};

const avatarForm = document.getElementById('avatar-form');
const avatarInput = document.getElementById('avatar');
const profilePreview = document.getElementById('profile-preview');

let avatarData = null;

avatarInput.addEventListener('change', () => {
  const file = avatarInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = () => {
      avatarData = reader.result; // base64 image
      profilePreview.src = avatarData;
      profilePreview.style.display = 'block';
    };
    reader.readAsDataURL(file);
  }
});

socket.on('userList', (users) => {
  userList.innerHTML = '';
  users.forEach((user)=>{
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar || 'default.png';
    img.style.width = '30px';
    img.style.borderRadius = '50%';
    li.appendChild(img);
    li.appendChild(document.createTextNode(` ${user.username}`));
    userList.appendChild(li);
  });
})

avatarForm.addEventListener('submit', (e) => {
  e.preventDefault();
  if (avatarData) {
    socket.emit('setAvatar', { username, avatar: avatarData });
  }
});