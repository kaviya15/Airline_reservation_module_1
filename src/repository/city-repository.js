const { City } = require("../models/index");

class CityRepository {
  async createCity(data) { // data = {name : "chennai"}
    try {
      let new_city = await City.create(data);
      return new_city;
    } catch (err) {
      console.log("Error in the creation of city at repo", err);
      throw { err };
    }
  }

  async deleteCity(city_id) {
    try {
      let delete_city = await City.destroy({ where: { id: city_id } });
      return delete_city;
    } catch (err) {
      console.log("Error in the deleting city at repo", err);
      throw { err };
    }
  }

  async updateCity(city_id, data) {
    // data = {name : "chennai"}
    try {
      let update_city = await City.update(data, {
        where: {
          id: city_id,
        },
      });
      return update_city;
    } catch (err) {
      console.log("Error in updating city at repo", err);
    }
  }

  async getCity(city_id) {
    try {
      let get_city = await City.findByPk(city_id);
      console.log("Fetched data at repo",get_city)
      return get_city;
    } catch (err) {
      console.log("Error in fetching the city at repo", err);
    }
  }
}

module.exports = CityRepository;
