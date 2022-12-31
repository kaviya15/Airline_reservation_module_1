import  {City} from '../models/index';

class CityRepository {
  async createCity({ name }) {
    try {
      await City.create({ name: name });
    } catch (err) {
      throw { err };
    }
  }
  async deleteCity({ city_id }) {
    try {
      await City.destroy({ where: { id: city_id } });
    } catch (err) {
      throw { err };
    }
  }
}

module.exports = CityRepository;