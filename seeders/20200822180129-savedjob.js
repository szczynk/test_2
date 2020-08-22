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
    await queryInterface.bulkInsert('SavedJobs', 
    [{
      JobId: 1,
      ProfileId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JobId: 3,
      ProfileId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      JobId: 4,
      ProfileId: 3,
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
    await queryInterface.bulkDelete('SavedJobs', null, {});
  }
};
