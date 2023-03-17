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
            'https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png',
          phone_number: '0783799713',
          id_number: '32236322363627',
          gender: 'female',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'married',
          country: 'Rwanda',
          city: 'Kigali',
          address_1: 'Gasabo',
          address_2: 'Kabeza',
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          client_id: '50a97e3c-33a2-49bc-84c6-caf393ec6ae0',
          first_name: 'Tim',
          last_name: 'Halland',
          email: 'timhalland@med.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 3,
          picture:
            'https://s.pngkit.com/png/small/225-2257356_this-could-be-you-user-male.png',
          phone_number: '0783799713',
          id_number: '32236322363627',
          gender: 'male',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'married',
          country: 'Rwanda',
          city: 'Kigali',
          address_1: 'Gasabo',
          address_2: 'Kabeza',
          isVerified: true,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          client_id: '74277506-dc9d-456e-b7ec-dbdc7e421295',
          first_name: 'Debra',
          last_name: 'Cole',
          email: 'debcole@med.com',
          password: await bcrypt.hash('Admin2@ms', 12),
          role_id: 3,
          picture:
            'https://s.pngkit.com/png/small/806-8066032_person-icon-black-female-user-icon-png.png',
          phone_number: '0783799713',
          id_number: '32236322363627',
          gender: 'female',
          birth_date: '2000-12-08T22:00:00.000Z',
          marital_status: 'single',
          country: 'Rwanda',
          city: 'Kigali',
          address_1: 'Gasabo',
          address_2: 'Kabeza',
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
