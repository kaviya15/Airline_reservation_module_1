const { City , Airport} = require("../models/index");
const {Op} = require("sequelize");
const db = require("../models/index");

class CityRepository {
  async createCity(data) {
    // data = {name : "chennai"}
    try {
      let new_city = await City.create(data);
      return new_city;
    } catch (err) {
      console.log("Error in the creation of city at repo", err);
      throw { err };
    }
  }
  async createCities(data) {
    // data = {name : "chennai"}
    try {
      let new_city = await City.bulkCreate(data);
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
      console.log("Fetched data at repo", get_city);
      return get_city;
    } catch (err) {
      console.log("Error in fetching the city at repo", err);
    }
  }

  async getAllAirportsByCityid(city_id) {
    /**get the airport table as well as the data from city table
     * using the foreign key as primary key
     */
    try {
      const [results, metadata] = await db.sequelize.query(
        `SELECT cities.name as city_name , airports.name as airport_name ,airports.id as airport_id , cities.id as city_id FROM CITIES INNER JOIN AIRPORTS ON airports.cityId = cities.id where cities.id = ${city_id}`
      );
      console.log("Fetched data at repo", results);
      return results;
    } catch (err) {
      console.log("Error in fetching the city and table at repo", err);
    }
  }

  async getAllCities(data) {
    try {
      if (data.name) {
        let get_city = await City.findAll({
          where: {
            name: {
              [Op.like]: data.name + "%",
            },
          },
        });
        return get_city;
      }
      let get_city = await City.findAll();
      console.log("Fetched data at repo", get_city);
      return get_city;
    } catch (err) {
      console.log("Error in fetching the city at repo", err);
    }
  }
}

module.exports = CityRepository;
