let users = [];

const getUsers = () => users;

const addUser = (user) => {
  users.push(user);
  return user;
};

const findUserByUsername = (username) => {
  return users.find(user => user.username === username);
};

const findUserById = (userId) => {
  return users.find(user => user.id === userId);
};

const updateUser = (userId, updates) => {
  const userIndex = users.findIndex(user => user.id === userId);
  
  if (userIndex === -1) {
    return null;
  }
  const allowedUpdates = ['email', 'fullName', 'bio', 'avatar'];
  
  Object.keys(updates).forEach(key => {
    if (allowedUpdates.includes(key)) {
      users[userIndex][key] = updates[key];
    }
  });
  
  users[userIndex].updatedAt = new Date().toISOString();
  
  return users[userIndex];
};


module.exports = {
  getUsers,
  addUser,
  findUserByUsername,
  findUserById,
  updateUser

};