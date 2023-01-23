const { Airplane } = require("../models/index");

class AirplaneRepository {
  async getAirplane(id) {
    
    try {
      const airplane = await Airplane.findByPk(id);
      console.log("worked");
      return airplane;
    } catch (error) {
      console.log("Something went wrong in the repository layer,airplane repo");
      throw { error };
    }
  }
}

module.exports = AirplaneRepository;
