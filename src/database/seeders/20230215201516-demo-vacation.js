'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Vacations',
      [
        {
          vacation_id: '41c469bd-b88a-4aef-8b71-9dcae52dc2cf',
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          from_date: '2023-03-12T00:00:00.000Z',
          to_date: '2023-03-16T00:00:00.000Z',
          description: null,
          createdAt: '2023-03-11T18:38:09.144Z',
          updatedAt: '2023-03-11T18:38:09.144Z'
        },
        {
          vacation_id: '470f9db7-bcc4-4605-9989-788d572ed894',
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          from_date: '2023-04-18T00:00:00.000Z',
          to_date: '2023-04-21T00:00:00.000Z',
          description: null,
          createdAt: '2023-03-11T18:56:42.869Z',
          updatedAt: '2023-03-11T18:56:42.869Z'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Vacations', null, {});
  }
};
