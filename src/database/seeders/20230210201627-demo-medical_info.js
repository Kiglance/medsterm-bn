'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Medical_Infos',
      [
        {
          info_id: '202b2bfa-b290-4085-aba2-e66d158569f4',
          info_name: 'Recurrent headache and migraine?',
          info_description: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          info_id: '4e3320b7-8d51-41ec-b946-b18ae2ec1fe7',
          info_name: 'Raised or low blood pressure?',
          info_description: 'gerard',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          info_id: '42b130fd-41f7-45db-ad2f-50e3eec363d3',
          info_name: 'Any blood disorder?',
          info_description: 'Patrick',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          info_id: '74f21682-2ba4-4818-b838-7f5dcf35d2ff',
          info_name: 'Asthma, Bronchitis',
          info_description: 'Alain',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          info_id: '1d6ca114-9a21-49ef-8e04-e733b357153c',
          info_name: 'Any kidney or bladder conditions',
          info_description: 'Deo',
          createdAt: new Date(),
          updatedAt: new Date()
        },

        {
          info_id: '49710ec2-a533-42ba-b190-247fd023e98c',
          info_name: 'Heart problems?',
          info_description: 'Adele',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Medical_Infos', null, {});
  }
};
