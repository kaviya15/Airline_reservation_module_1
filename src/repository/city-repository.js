const { City } = require("../models/index");

class CityRepository {
  async createCity({ name }) {
    try {
      let new_city = await City.create({ name: name });
      return new_city;
    } catch (err) {
      console.log("Error in the creation of city", err);
      throw { err };
    }
  }

  async deleteCity(city_id) {
    try {
      let delete_city = await City.destroy({ where: { id: city_id } });
      return delete_city;
    } catch (err) {
      console.log("Error in the deleting city", err);
      throw { err };
    }
  }

  async updateCity(city_id, data) {
    try {
      let update_city = await City.update(data, {
        where: {
          id: city_id,
        }
      });
      return update_city;
    } catch (err) {
      console.log("Error in updating city", err);
    }
  }

  async getCity(city_id) {
    try {
      let get_city = await City.findByPk(city_id);
      return get_city;
    } catch (err) {
      console.log("Error in fetching the city", err);
    }
  }
}

module.exports = CityRepository;
