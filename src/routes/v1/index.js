const {
  create,
  destory,
  get,
  update,
} = require("../../controllers/city-controller");

const express = require("express");
const router = express.Router();
console.log("create", create.toString());
router.post("/create", create);
router.post("/update/:id", update);
router.get("/delete/:id", destory);
router.get("/get/:id", get);
module.exports = router;
