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
    await queryInterface.bulkInsert('Jobs', 
    [{
      RecruiterId: 1,
      title: "sales manager",
      description: "sales manager",
      requirement: "sales manager",
      skill: "sales manager",
      locationTag: "Jakarta",
      educationTag: "Sarjana",
      experienceTag: "Entry",
      careerTag: "sales manager",
      salaryTag: "10000000",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RecruiterId: 1,
      title: "sales",
      description: "sales",
      requirement: "sales",
      skill: "sales",
      locationTag: "Jakarta",
      educationTag: "SMA",
      experienceTag: "Entry",
      careerTag: "sales",
      salaryTag: "2500000",
      isActive: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RecruiterId: 2,
      title: "ceo manager",
      description: "ceo manager",
      requirement: "ceo manager",
      skill: "ceo manager",
      locationTag: "Bandung",
      educationTag: "Sarjana",
      experienceTag: "Mid",
      careerTag: "ceo manager",
      salaryTag: "25000000",
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      RecruiterId: 2,
      title: "ceo",
      description: "ceo",
      requirement: "ceo",
      skill: "ceo",
      locationTag: "Jakarta",
      educationTag: "Sarjana",
      experienceTag: "Entry",
      careerTag: "ceo",
      salaryTag: "50000000",
      isActive: true,
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
    await queryInterface.bulkDelete('Jobs', null, {});
  }
};
