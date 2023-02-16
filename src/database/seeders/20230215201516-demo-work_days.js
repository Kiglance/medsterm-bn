'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Work_Days',
      [
        {
          day_id: 71,
          day_name: 'Monday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 72,
          day_name: 'Tuesday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 73,
          day_name: 'Wednesday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 74,
          day_name: 'Thursday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 75,
          day_name: 'Friday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 76,
          day_name: 'Saturday',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          day_id: 77,
          day_name: 'Sunday',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Work_Days', null, {});
  }
};
