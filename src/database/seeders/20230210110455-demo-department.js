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
          speciality_name: 'Immunologist',
          picture: 'https://i.postimg.cc/30vbXFKw/immunity-1.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: 'b416477d-7802-4a56-8686-35a0f3f04fbc',
          department_name: 'Dermatology',
          speciality_name: 'Dermatologist',
          picture: 'https://i.postimg.cc/G4WNpNr5/magnifying-glass-1.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '12c50277-e015-45d1-9bd4-f0d2103a2733',
          department_name: 'Rheumatology',
          speciality_name: 'Rheumatologist',
          picture: 'https://i.postimg.cc/YG3ybCF5/x-ray-1-1.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '2ee50d93-43b9-44c3-a656-16bbc9c1f88d',
          department_name: 'Geriatric Medecine',
          speciality_name: 'Geriatrician',
          picture: 'https://i.postimg.cc/BLyVPVfy/geriatrics-1.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '65477b6e-0f80-4045-a2c5-26def429614a',
          department_name: 'Neurology',
          speciality_name: 'Neurologist',
          picture: 'https://i.postimg.cc/HJbN82ks/neurology-1.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // {
        //   department_id: 'edb7bc66-05e9-4dfe-8fff-7e7e956c7c22',
        //   department_name: 'Psychiatry',
        //   speciality_name: 'Psychiatric',
        //   picture: 'Psychiatric',
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // },
        {
          department_id: 'e99d51a6-60da-4519-8e6e-8741d8ad6aed',
          department_name: 'Cardiology',
          speciality_name: 'Cardiologist',
          picture: 'https://i.postimg.cc/2VWPhr6x/cardiology-1-1.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        // {
        //   department_id: '04525180-4192-4d71-9d35-90a042fc044b',
        //   department_name: 'Endocrinology',
        //   speciality_name: 'Endocrinologist',
        //   picture: 'Endocrinologist',
        //   createdAt: new Date(),
        //   updatedAt: new Date()
        // },
        {
          department_id: '318173b2-3628-4293-9a99-7b8cd98840ac',
          department_name: 'Pulmonology',
          speciality_name: 'Pulmonologist',
          picture: 'https://i.postimg.cc/jwKFH7D6/pulmonology-1.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: '70162fd4-f0d0-4e3a-b766-1071380af52e',
          department_name: 'Otolaryngology',
          speciality_name: 'Otolaryngologist',
          picture: 'https://i.postimg.cc/B6CfmSCY/ear-1.png',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          department_id: 'edb7bc66-05e9-4dfe-8fff-7e7e956c7c22',
          department_name: 'Gastroenterology',
          speciality_name: 'Gastroenterologist',
          picture: 'https://i.postimg.cc/t1BfpgS9/gastroenterology-1.png',
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
