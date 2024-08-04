const express = require("express");
const router = express.Router();

const funcController = require("../controller/funcController");
const authorization = require("../middlewares/autozicaoJwt")

router.post("/",authorization, funcController.CreateTask);
router.get("/",authorization,  funcController.ListTask);
router.delete("/",authorization, funcController.DeleteTask);
router.put("/",authorization,  funcController.atualizarTask);

module.exports = router;