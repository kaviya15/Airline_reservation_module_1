const {
  create,
  destory,
  get,
  update,
} = require("../../controllers/city-controller");

const express = require("express");
const router = express.Router();

router.post("/city", create);
router.put("/city/:id", update);
router.delete("/city/:id", destory);
router.get("/city/:id", get);

module.exports = router;
