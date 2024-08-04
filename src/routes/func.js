const express = require("express");
const router = express.Router();

const funcController = require("../controller/funcController");

router.post("/", funcController.CreateTask);
router.get("/", funcController.ListTask);
router.delete("/", funcController.DeleteTask);
router.put("/", funcController.atualizarTask);

module.exports = router;