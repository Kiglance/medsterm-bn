'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Clients',
      [
        {
          client_id: '64fc1233-8b59-5643-8e9a-c9a8f38bf6b6',
          first_name: 'Debby',
          last_name: 'Allison',
          email: 'rmgerard1309@gmail.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 3,
          picture:
            'http://res.cloudinary.com/rutagerard/image/upload/v1676206231/tnk8e7nucmloy9ae1o7s.png',
          phone_number: '0783799713',
          id_number: '32236322363627',
          gender: 'male',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'married',
          country: 'Rwanda',
          address_1: 'Kigali',
          address_2: 'Gasabo',
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clients', null, {});
  }
};
