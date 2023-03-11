'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Recommendations',
      [
        {
          recommendation_id: '6ace0041-49f0-4341-85b2-e834e33816d4',
          recommendation_name: 'Sleep not less than 7-8h/day',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recommendation_id: '6c7becd4-fe19-41e9-8b6c-85c6e5f52de7',
          recommendation_name: 'Control sugar consumption',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recommendation_id: '537d2cf5-6cdc-45a8-9199-23fc3e54f683',
          recommendation_name: 'Minimize stress',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          recommendation_id: '75c5ed64-b02f-48d8-9184-eb9ec06c8824',
          recommendation_name: 'Decrease alcohol consumption',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Recommendations', null, {});
  }
};
