'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Drugs',
      [
        {
          drug_id: 'f5a5761f-09b3-4890-bbcf-2c59667dd828',
          drug_name: 'Paracetamol',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          drug_id: 'c107ce86-533d-4f38-94fc-3b9095ae3a73',
          drug_name: 'Ibuprofen',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          drug_id: '17eabc49-2327-4f05-a884-70fea256a6ae',
          drug_name: 'Amoxicillin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          drug_id: '62b626bb-de99-479f-9f00-09778fd1d149',
          drug_name: 'Loratadine',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          drug_id: 'db4af080-bd91-4973-adb4-a114df71e162',
          drug_name: 'Omeprazole',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          drug_id: '9340b2f3-2da7-445c-bf7e-6fd102ee9601',
          drug_name: 'Metformin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          drug_id: 'b36e50e9-72a4-445c-ba0f-e09f431a6999',
          drug_name: 'Atorvastatin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          drug_id: 'f96f4fb6-8c18-4ddc-82dd-5d86641f59c9',
          drug_name: 'Furosemide',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          drug_id: '20985cba-80e9-437e-9789-863e3eb03f43',
          drug_name: 'Aspirin',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          drug_id: '0d4cdc04-e345-46c6-a267-a41b0c0511ec',
          drug_name: 'Losartan',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Drugs', null, {});
  }
};

// 6ace0041-49f0-4341-85b2-e834e33816d4
// 6c7becd4-fe19-41e9-8b6c-85c6e5f52de7
// 537d2cf5-6cdc-45a8-9199-23fc3e54f683
// 75c5ed64-b02f-48d8-9184-eb9ec06c8824
// e426b0e8-a481-4c89-8162-d311975cf3a
