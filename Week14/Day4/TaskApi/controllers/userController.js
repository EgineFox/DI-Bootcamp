const fs = require('fs');
const bcrypt = require('bcrypt');
const path = require('path');
const usersPath = path.join(__dirname, '../models/users.json');


const readUsers = () => JSON.parse(fs.readFileSync(usersPath));
const writeUsers = (data) => fs.writeFileSync(usersPath, JSON.stringify(data, null, 2));

exports.registerUser = async (req, res) => {
  const { name, lastName, email, username, password } = req.body;
  if (!username || !password) return res.send('error1');

  const users = readUsers();
  if (users.find(u => u.username === username || u.password === password)) {
    return res.send('error1');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = {
    id: Date.now(),
    name,
    lastName,
    email,
    username,
    password: hashedPassword
  };

  users.push(newUser);
  writeUsers(users);
  res.send('register');
};

exports.loginUser = async (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  const user = users.find(u => u.username === username);
  if (!user) return res.send('error');

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.send('error');

  res.send('login');
};

exports.getAllUsers = (req, res) => {
  const users = readUsers();
  res.json(users);
};

exports.getUserById = (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.id == req.params.id);
  if (!user) return res.status(404).send('User not found');
  res.json(user);
};

exports.updateUserById = (req, res) => {
  const users = readUsers();
  const index = users.findIndex(u => u.id == req.params.id);
  if (index === -1) return res.status(404).send('User not found');

  users[index] = { ...users[index], ...req.body };
  writeUsers(users);
  res.send('User updated');
};

exports.deleteUser = (req, res) => {
  const { id } = req.params;
  const filePath = path.join(__dirname, '../models/users.json');

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('File read error:', err);
      return res.status(500).send('server error');
    }

    let users;
    try {
      users = JSON.parse(data);
    } catch (parseErr) {
      console.error('JSON parse error:', parseErr);
      return res.status(500).send('server error');
    }

    const userIndex = users.findIndex(user => String(user.id) === String(id));
    if (userIndex === -1) {
      return res.status(404).send('user not found');
    }

    users.splice(userIndex, 1);

    fs.writeFile(filePath, JSON.stringify(users, null, 2), 'utf8', (writeErr) => {
      if (writeErr) {
        console.error('File write error:', writeErr);
        return res.status(500).send('server error');
      }

      res.send('delete');
    });
  });
};
