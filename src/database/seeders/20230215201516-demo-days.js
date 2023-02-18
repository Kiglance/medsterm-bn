'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Days',
      [
        {
          day_id: 70,
          day_name: 'Mon',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 71,
          day_name: 'Tue',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 72,
          day_name: 'Wed',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 73,
          day_name: 'Thu',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 74,
          day_name: 'Fri',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 75,
          day_name: 'Sat',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 76,
          day_name: 'Sun',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Days', null, {});
  }
};
