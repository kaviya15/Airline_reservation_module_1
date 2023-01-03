'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert(
      "Airports",
      [
        {
          name: "Chennai International Airport",
          address: "Airport Rd, Meenambakkam, Chennai, Tamil Nadu 600027",
          cityId: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: " Indira Gandhi International Airport",
          address: "New Delhi, Delhi 110037",
          cityId: 14,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Safdarjung Airport",
          address: "New Delhi, Delhi 110037",
          cityId: 14,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
