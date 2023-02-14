'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Roles',
      [
        {
          role_id: 1,
          role: 'admin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 2,
          role: 'doctor',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          role_id: 3,
          role: 'client',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
