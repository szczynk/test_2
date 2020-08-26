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
      latestCareer: "sad sad",
      educationTag: "SMA",
      experienceTag: "Entry",
      careerTag: "Front End Developer",
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
      latestCareer: "zxc zxc",
      educationTag: "SMA",
      experienceTag: "Entry",
      careerTag: "Back End Developer",
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
      latestCareer: "qwe qwe",
      educationTag: "Sarjana",
      experienceTag: "Fresh Graduate",
      careerTag: "Back End Developer",
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
