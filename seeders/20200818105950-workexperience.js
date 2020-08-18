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
    await queryInterface.bulkInsert('WorkExperiences', [{
      ProfileId: 1,
      title: "Fresh Graduate Academy - Machine Learning Trainee (2019)",
      at: "Digital Talent Scholarship (KOMINFO)",
      period_begin: "September 2019",
      period_end: "November 2019",
      description: "This training is a collaboration between the Indonesia Ministry of Communication and Information (KOMINFO).",
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
    await queryInterface.bulkDelete('WorkExperiences', null, {});
  }
};
