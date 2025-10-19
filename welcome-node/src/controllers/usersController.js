const usersModel = require("../models/usersModel");

const getAllUsers = async (req, res) => {
try {
 const data = await usersModel.getUsers();
 res.json(data);
} catch (e) {
 console.log(e);
}
};

module.exports = { getAllUsers };