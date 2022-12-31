const { CityRepository } = require("../repository/index");

class cityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      return await this.cityRepository.createCity(data);
    } catch (err) {
      console.log("Error at creating city service level", err);
      throw { err };
    }
  }
  async deleteCity(city_id) {
    try {
      return await this.cityRepository.deleteCity(city_id);
    } catch (err) {
      console.log("Error at deleting city service level", err);
      throw { err };
    }
  }

  async updateCity(city_id, data) {
    try {
      return await this.cityRepository.deleteCity(city_id, data);
    } catch (err) {
      console.log("Error at updating city service level", err);
      throw { err };
    }
  }
  async getCity(city_id) {
    try {
      return await this.cityRepository.getCity(city_id);
    } catch (err) {
      console.log("Error at fetching city service level", err);
      throw { err };
    }
  }
}

module.exports = {
  cityService,
};
