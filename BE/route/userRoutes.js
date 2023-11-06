const express = require("express");
const {
  signupController,
  loginController,
} = require("../controller/userController");

const router = express.Router();

// Signup endpoint
router.post("/signup", signupController);
// Login endpoint
router.post("/login", loginController);

module.exports = router;
