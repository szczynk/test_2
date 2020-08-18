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
    await queryInterface.bulkInsert('Achievements', [{
      ProfileId: 1,
      title: "Festival Teater Jakarta Timur",
      subtitle: "1st Winner of 'Naskah Terbaik'",
      period: "2019",
      description: "Created a theatrical play scenario that placed 1st as the best play scenario, representating Castra Mardika Theatre Group.",
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
    await queryInterface.bulkDelete('Achievements', null, {});
  }
};
