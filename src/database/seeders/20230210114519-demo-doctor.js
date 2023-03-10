'use strict';
const bcrypt = require('bcryptjs');
const { generateNumber } = require('../../utils/generateNumber');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Doctors',
      [
        {
          doctor_id: '202b2bfa-b290-4030-aba2-e66d153069b9',
          doctor_number: generateNumber('00', 8),
          first_name: 'Admin',
          last_name: 'One',
          email: 'admin_1@ms.com',
          password: await bcrypt.hash('Admin1@ms', 12),
          role_id: 1,
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          doctor_id: '202b2bfa-b278-4099-aba2-e66d159969c0',
          doctor_number: generateNumber('00', 8),
          first_name: 'Admin',
          last_name: 'Two',
          email: 'admin_2@ms.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 1,
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          doctor_id: '64ff1279-8b59-4143-8e6c-a0c8f38bf9d5',
          doctor_number: generateNumber('00', 8),
          first_name: 'Kim',
          last_name: 'Foster',
          email: 'rutayisiregerard2002@gmail.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 2,
          picture:
            'https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png',
          phone_number: '0789922604',
          id_number: '32236322363627',
          gender: 'female',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'single',
          experience_years: 23,
          cost_per_appointment: 34,
          salary: 332,
          education:
            "MD, University of Ottawa Faculty of Medecine Residency, Children's Hospital of Eastern Ontario",
          category: 'General practitioner',
          about:
            "My extensive orthopedics experience has taught me two things. Keep up with the most recent developments in orthopedic treatment, and spend time getting to know your patients' individual needs.",
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          doctor_id: '5542b45b-530e-4d7f-bdd4-2322633f591f',
          doctor_number: generateNumber('00', 8),
          first_name: 'Micheal',
          last_name: 'Edell',
          email: 'edellmic@med.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 2,
          picture:
            'https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png',
          phone_number: '0789922604',
          id_number: '32236322363627',
          gender: 'male',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'single',
          experience_years: 40,
          cost_per_appointment: 55,
          salary: 332,
          education:
            "MD, University of Ottawa Faculty of Medecine Residency, Children's Hospital of Eastern Ontario",
          category: 'Specialist doctor',
          about:
            "My extensive orthopedics experience has taught me two things. Keep up with the most recent developments in orthopedic treatment, and spend time getting to know your patients' individual needs.",
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          doctor_id: 'aa9a40f9-de74-41e2-9ac7-5af88f2ecf98',
          doctor_number: generateNumber('00', 8),
          first_name: 'John',
          last_name: 'Brown',
          email: 'johnbr@med.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 2,
          picture:
            'https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png',
          phone_number: '0789922604',
          id_number: '32236322363627',
          gender: 'male',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'single',
          experience_years: 15,
          cost_per_appointment: 45,
          salary: 332,
          education:
            "MD, University of Ottawa Faculty of Medecine Residency, Children's Hospital of Eastern Ontario",
          category: 'Medical student',
          about:
            "My extensive orthopedics experience has taught me two things. Keep up with the most recent developments in orthopedic treatment, and spend time getting to know your patients' individual needs.",
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          doctor_id: '33f41511-880b-4b44-97ca-df6ea0a746cb',
          doctor_number: generateNumber('00', 8),
          first_name: 'Chris',
          last_name: 'Damon',
          email: 'chridam@med.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 2,
          picture:
            'https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png',
          phone_number: '0789922604',
          id_number: '32236322363627',
          gender: 'male',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'single',
          experience_years: 25,
          cost_per_appointment: 70,
          salary: 332,
          education:
            "MD, University of Ottawa Faculty of Medecine Residency, Children's Hospital of Eastern Ontario",
          category: 'Academic doctor',
          about:
            "My extensive orthopedics experience has taught me two things. Keep up with the most recent developments in orthopedic treatment, and spend time getting to know your patients' individual needs.",
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          doctor_id: '9d0867d3-4fd3-482a-b423-3c1c508b6c69',
          doctor_number: generateNumber('00', 8),
          first_name: 'Tina',
          last_name: 'Ellis',
          email: 'tinelli@med.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 2,
          picture:
            'https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png',
          phone_number: '0789922604',
          id_number: '32236322363627',
          gender: 'female',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'single',
          experience_years: 23,
          cost_per_appointment: 20,
          salary: 332,
          education:
            "MD, University of Ottawa Faculty of Medecine Residency, Children's Hospital of Eastern Ontario",
          category: 'Medical director',
          about:
            "My extensive orthopedics experience has taught me two things. Keep up with the most recent developments in orthopedic treatment, and spend time getting to know your patients' individual needs.",
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Doctors', null, {});
  }
};
