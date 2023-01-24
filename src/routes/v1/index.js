const {
  create,
  destory,
  get,
  update,
  getAll,createCities,
  getAllAirportsByCityid,
} = require("../../controllers/city-controller");
const { FlightMiddlewares } = require("../../middlewares/index");

const express = require("express");
const router = express.Router();
const AirportController = require("../../controllers/airport-controller");
const FlightController = require("../../controllers/flight-controller");

router.post("/city", create);
router.post("/mulitple_city", createCities);
router.patch("/city/:id", update);
router.delete("/city/:id", destory);
router.get("/city/:id", get);
router.get("/city/:id/airports", getAllAirportsByCityid);
router.get("/city", getAll);
router.post("/airports", AirportController.create);


router.post(
  "/flights",
  FlightMiddlewares.validateCreateFlight,
  FlightController.create
);
router.get("/flights", FlightController.getAll);
router.get("/flights/:id", FlightController.get);
module.exports = router;
