'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Doctors',
      [
        {
          doctor_id: '202b2bfa-b290-4030-aba2-e66d153069b9',
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
          first_name: 'Kim',
          last_name: 'Foster',
          email: 'rutayisiregerard2002@gmail.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 2,
          picture:
            'http://res.cloudinary.com/rutagerard/image/upload/v1676206231/tnk8e7nucmloy9ae1o7s.png',
          phone_number: '0789922604',
          id_number: '32236322363627',
          gender: 'male',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'single',
          experience_years: 23,
          speciality: 'Endocrinology',
          cost_per_appointment: 34,
          salary: 332,
          department: 'Uber',
          education: 'University',
          about: 'Lorem ipsum ...',
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
