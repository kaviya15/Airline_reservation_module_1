const express = require("express");
const router = express.Router();

const cityRoute = require("./v1/index")
router.use("/v1", cityRoute);
module.exports = router;