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
    await queryInterface.bulkInsert('UserRoles', 
    [{
      RoleId: 3,
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RoleId: 3,
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RoleId: 3,
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RoleId: 2,
      UserId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RoleId: 2,
      UserId: 5,
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
    await queryInterface.bulkDelete('UserRoles', null, {});
  }
};
