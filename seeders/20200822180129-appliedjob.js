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
    await queryInterface.bulkInsert('AppliedJobs', 
    [{
      JobId: 1,
      ProfileId: 1,
      status: "pending",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JobId: 3,
      ProfileId: 3,
      status: "failed",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JobId: 4,
      ProfileId: 2,
      status: "passed",
      createdAt: new Date(),
      updatedAt: new Date()
    },], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('AppliedJobs', null, {});
  }
};
