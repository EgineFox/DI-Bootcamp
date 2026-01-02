let users = [];

const getUsers = () => users;

const addUser = (user) => {
  users.push(user);
  return user;
};

const findUserByUsername = (username) => {
  return users.find(user => user.username === username);
};

module.exports = {
  getUsers,
  addUser,
  findUserByUsername
};