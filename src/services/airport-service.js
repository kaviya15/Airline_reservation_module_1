const CrudServiceAirport = require('./crud-service-airport');
const { AirportRespository } = require('../repository/index');

class AirportService extends CrudServiceAirport {
  constructor() {
    const airportRespository = new AirportRespository();
    super(airportRespository);
  }
}

module.exports = AirportService;