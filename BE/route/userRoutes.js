const express = require("express");
const {
  signupController,
  loginController,
  autoLoginController,
  LogOutController,
  verify,
} = require("../controller/userController");
const authMiddleware = require("./../middleware/authMiddleware");
const router = express.Router();

// Signup endpoint
router.post("/signup", signupController);
// Login endpoint
router.post("/login", loginController);
router.post("/logout", LogOutController);
router.get("/autologin", authMiddleware, autoLoginController);
router.get("/verify", verify);
module.exports = router;
