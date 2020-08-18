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
    await queryInterface.bulkInsert('OrgExperiences', [{
      ProfileId: 1,
      title: "Unit Kesenian Mahasiswa Universitas Negeri Jakarta",
      at: "Daily Staff",
      period_begin: "December 2015",
      period_end: "July 2019",
      description: "I'm oftenly volunteered to be part of a crew in many events that held by this organization.",
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
    await queryInterface.bulkDelete('OrgExperiences', null, {});
  }
};
