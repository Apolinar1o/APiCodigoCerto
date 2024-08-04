const express = require("express");
const router = express.Router();
const funcRoute = require("./func.js")
const userRoute = require("./user.js")


router.use("/func", funcRoute);
router.use("/user", userRoute);

module.exports = router;




