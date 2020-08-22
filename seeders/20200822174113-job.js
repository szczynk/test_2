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
    await queryInterface.bulkInsert('Jobs', 
    [{
      RecruiterId: 1,
      title: "sales manager",
      description: "sales manager",
      requirement: "sales manager",
      skill: "sales manager",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RecruiterId: 1,
      title: "sales",
      description: "sales",
      requirement: "sales",
      skill: "sales",
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RecruiterId: 2,
      title: "ceo manager",
      description: "ceo manager",
      requirement: "ceo manager",
      skill: "ceo manager",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RecruiterId: 2,
      title: "ceo",
      description: "ceo",
      requirement: "ceo",
      skill: "ceo",
      isActive: true,
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
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
