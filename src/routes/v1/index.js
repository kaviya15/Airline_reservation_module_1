const {
  create,
  destory,
  get,
  update,
  getAll,createCities,
  getAllAirportsByCityid,
} = require("../../controllers/city-controller");

const express = require("express");
const router = express.Router();
const AirportController = require("../../controllers/airport-controller");

router.post("/city", create);
router.post("/mulitple_city", createCities);
router.patch("/city/:id", update);
router.delete("/city/:id", destory);
router.get("/city/:id", get);
router.get("/city/:id/airports", getAllAirportsByCityid);
router.get("/city", getAll);
router.post("/airports", AirportController.create);
module.exports = router;
