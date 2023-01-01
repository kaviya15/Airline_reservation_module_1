const { CityRepository } = require("../repository/index");

class CityService {
  constructor() {
    this.cityRepository = new CityRepository();
  }
  async createCity(data) {
    try {
      return await this.cityRepository.createCity({ name: data.name });
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
      let resp = await this.cityRepository.getCity(city_id);
      console.log("received at the service level", resp);
      return resp;
    } catch (err) {
      console.log("Error at fetching city service level", err);
      throw { err };
    }
  }
  async getAllCities(filter) {
    try {
      let resp = await this.cityRepository.getAllCities(filter);
      console.log("received at the service level", resp);
      return resp;
    } catch (err) {
      console.log("Error at fetching city service level", err);
      throw { err };
    }
  }
}

module.exports = {
  CityService
};
