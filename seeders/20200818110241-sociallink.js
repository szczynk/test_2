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
    await queryInterface.bulkInsert('SocialLinks', [{
      ProfileId: 1,
      title: "Github",
      link: "https://github.com/Ilham-Fauzi02",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      ProfileId: 1,
      title: "Linkedin",
      link: "https://www.linkedin.com/in/ilham--fauzi02/",
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
    await queryInterface.bulkDelete('SocialLinks', null, {});
  }
};
