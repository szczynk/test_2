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
    await queryInterface.bulkInsert('Education', [{
      ProfileId: 1,
      title: "Bachelor Degree, State University Of Jakarta",
      at: "Physics",
      period_begin: "September 2015",
      period_end: "Present",
      description: "Currently writing my final year’s thesis about sound analysis and classification using deep learning to gain a bachelor's degree.",
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
    await queryInterface.bulkDelete('Education', null, {});
  }
};
