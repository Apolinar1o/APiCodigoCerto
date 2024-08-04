const express = require("express");
const router = express.Router();

const funcController = require("../controller/funcController");

router.get("/", funcController.CreateUser);
router.post("/", funcController.CreateUser);

module.exports = router;