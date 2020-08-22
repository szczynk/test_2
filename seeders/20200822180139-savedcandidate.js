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
    await queryInterface.bulkInsert('SavedCandidates', 
    [{
      RecruiterId: 1,
      ProfileId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RecruiterId: 1,
      ProfileId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RecruiterId: 2,
      ProfileId: 1,
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
    await queryInterface.bulkDelete('SavedCandidates', null, {});
  }
};
