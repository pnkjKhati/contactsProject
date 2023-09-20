const express = require("express");
const {
  registerUser,
  loginUser,
  getUser,
} = require("../controller/userController");
const validateToken = require("../middleware/validateTokenHandler");

const router = express.Router();

router.route("/register").post(registerUser);

router.route("/login").post(loginUser);

router.get("/current", validateToken, getUser);

// router.route("/current").get(validateToken, getUser);

module.exports = router;
