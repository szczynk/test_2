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
    await queryInterface.bulkInsert('Profiles', [{
      user_id: 1,
      name: "sad sad",
      city: "sad",
      education: "sad",
      phoneNumber: "123",
      email: "sad@sad.com",
      about_id: 1,
      experience_id: 1,
      skill_id: 1,
      certificate_id: 1,
      commendation_id: 1,
      link_id: 1,
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
    await queryInterface.bulkDelete('Profiles', null, {});
  }
};
