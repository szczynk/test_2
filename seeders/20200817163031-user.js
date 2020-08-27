'use strict';
var bcrypt = require("bcrypt");

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
    await queryInterface.bulkInsert('Users', 
    [{
      email: 'user1@user.com',
      password: bcrypt.hashSync('123456', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'user2@user.com',
      password: bcrypt.hashSync('123456', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'user3@user.com',
      password: bcrypt.hashSync('123456', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'hunter1@hunter.com',
      password: bcrypt.hashSync('123456', 10),
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      email: 'hunter2@hunter.com',
      password: bcrypt.hashSync('123456', 10),
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
