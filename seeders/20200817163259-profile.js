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
    await queryInterface.bulkInsert('Profiles', 
    [{
      UserId: 1,
      name: "sad sad",
      city: "sad",
      country: "sad",
      education: "SMA",
      phoneNumber: "+6289012345678",
      email: "demo@demo.com",
      about: "about",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 2,
      name: "zxc zxc",
      city: "zxc",
      country: "zxc",
      education: "SMA",
      phoneNumber: "+6289012345678",
      email: "demo@demo.com",
      about: "about",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      UserId: 3,
      name: "qwe qwe",
      city: "qwe",
      country: "qwe",
      education: "SMA",
      phoneNumber: "+6289012345678",
      email: "demo@demo.com",
      about: "about",
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
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
