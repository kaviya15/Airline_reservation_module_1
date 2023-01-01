const {
  create,
  destory,
  get,
  update,
  getAll,
} = require("../../controllers/city-controller");

const express = require("express");
const router = express.Router();

router.post("/city", create);
router.patch("/city/:id", update);
router.delete("/city/:id", destory);
router.get("/city/:id", get);
router.get("/city", getAll);

module.exports = router;
