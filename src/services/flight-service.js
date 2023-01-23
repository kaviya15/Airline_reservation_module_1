const {
  FlightRespository,
  AirplaneRespository,
} = require("../repository/index");
const {compareTime} = require("../utils/helper")
class FlightService {
  constructor() {
    this.airplaneRespository = new AirplaneRespository();
    this.flightrespository = new FlightRespository();
  }
  async createFlight(data) {
    try {
      if (compareTime(data.arrivalTime, data.departureTime)) {
        const airplane = await this.airplaneRespository.getAirplane(
          data.airplaneId
        );
        const flight = await this.flightrespository.createFlight({
          ...data,
          totalSeats: airplane.capacity,
        });
        return flight;
      }
      throw { error: "Arrival time cannot be less than departure time" };
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getAllFlightData(data) {
    try {
      const flights = await this.flightrespository.getAllFlights(data);
      return flights;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  async getFlight(flightId) {
    try {
      const flight = await this.flightrespository.getFlight(flightId);
      return flight;
    } catch (error) {
      console.log("Something went wrong at service layer");
      throw { error };
    }
  }

  
}

module.exports = FlightService;