const { CityService } = require("../services/index");

/**instance of city service class */
const cityService = new CityService();
/**
 * 1. Create Controllers
 */

async function create(req, res) {
  try {
    console.log("req body" , req.body)
    const response = await cityService.createCity(req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully created the city ",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "failed to create the city",
      error: err,
    });
  }
}

/**Delete function uses get method id will be passed in the params /city/:id*/
async function destory(req, res) {
  try {
    const response = await cityService.deleteCity(req.params.id);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully deleted the city ",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "failed to delete the city",
      error: err,
    });
  }
}
async function getAll(req, res) {
  try {
    console.log(req.query, "req.query.name");
    const response = await cityService.getAllCities(req.query);
    console.log("response at controller level");
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully fetched the  cities",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "failed to fetch the cities",
      error: err,
    });
  }
}

async function get(req, res) {
  try {
    const response = await cityService.getCity(req.params.id);
    console.log("response at controller level")
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully fetched the city ",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "failed to fetch the city",
      error: err,
    });
  }
}

async function update(req, res) {
  try {
    const response = await cityService.updateCity(req.params.id, req.body);
    return res.status(201).json({
      data: response,
      success: true,
      message: "successfully updated the city ",
      error: {},
    });
  } catch (err) {
    return res.status(500).json({
      data: {},
      success: true,
      message: "failed to update the city",
      error: err,
    });
  }
}

module.exports = {
  create,
  destory,
  get,
  update,
  getAll
};