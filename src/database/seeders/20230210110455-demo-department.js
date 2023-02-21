'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Departments',
      [
        {
          department_id: '1dd1712f-64f5-4e65-a0b3-00e014c7557b',
          department_name: 'Allergy and Immunology',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: 'b416477d-7802-4a56-8686-35a0f3f04fbc',
          department_name: 'Dermatology',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '12c50277-e015-45d1-9bd4-f0d2103a2733',
          department_name: 'Rheumatology',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '2ee50d93-43b9-44c3-a656-16bbc9c1f88d',
          department_name: 'Geriatric Medecine',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '65477b6e-0f80-4045-a2c5-26def429614a',
          department_name: 'Neurology',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: 'edb7bc66-05e9-4dfe-8fff-7e7e956c7c22',
          department_name: 'Psychiatry',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: 'e99d51a6-60da-4519-8e6e-8741d8ad6aed',
          department_name: 'Cardiology',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '04525180-4192-4d71-9d35-90a042fc044b',
          department_name: 'Endocrinology',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '318173b2-3628-4293-9a99-7b8cd98840ac',
          department_name: 'Pulmonology',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '70162fd4-f0d0-4e3a-b766-1071380af52e',
          department_name: 'Otolaryngology',
          patient_visit: null,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Departments', null, {});
  }
};
