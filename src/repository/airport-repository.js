const CrudRespositoryAirport = require("./crud-repository-airport");
const { Airport } = require("../models/index");
class AirportRespository extends CrudRespositoryAirport {
  constructor() {
    super(Airport);
  }
}

module.exports = AirportRespository;
