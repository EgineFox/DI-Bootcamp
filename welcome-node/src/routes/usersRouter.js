const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

// Define routes
router.get("/", userController.getAllUsers);

module.exports = router;
