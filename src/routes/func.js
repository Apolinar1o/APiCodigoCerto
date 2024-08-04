const express = require("express");
const router = express.Router();

const funcController = require("../controller/funcController");

router.post("/", funcController.CreateTask);

module.exports = router;