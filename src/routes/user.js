const express = require("express");
const router = express.Router();

const UserController = require("../controller/userController");

router.get("/", UserController.CreateUser);

module.exports = router;