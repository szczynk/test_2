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
    await queryInterface.bulkInsert('Certificates', [{
      ProfileId: 1,
      title: "Convolutional Neural Networks",
      published_by: "Coursera",
      period_begin: "December 2019",
      period_end: "June 2023",
      certificate_number: "Credential ID KERZR822QPYV",
      certificate_link: "Credential ID KERZR822QPYV",
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
    await queryInterface.bulkDelete('Certificates', null, {});
  }
};
