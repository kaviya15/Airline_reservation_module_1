const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      return await this.cityRepository.createCity({name:data.name});
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
      return await this.cityRepository.updateCity(city_id, { name: data.name });
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
  CityService,
};
