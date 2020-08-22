'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Recruiters', 
    [{
      UserId: 4,
      name: "das das",
      jobTitle: "das",
      company: "das.inc",
      city: "sad",
      country: "sad",
      phoneNumber: "+6289012345678",
      website: "das.inc.com",
      email: "das@das.com",
      about: "about",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 5,
      name: "rty rty",
      jobTitle: "rty",
      company: "rty.inc",
      city: "rty",
      country: "rty",
      phoneNumber: "+6289012345678",
      website: "rty.inc.com",
      email: "rty@rty.com",
      about: "about",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Recruiters', null, {});
  }
};
