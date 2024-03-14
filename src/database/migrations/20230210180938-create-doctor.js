'use strict';
const { generateNumber } = require('../../utils/generateNumber');

module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.sequelize.query(
    //   'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";'
    // );
    await queryInterface.createTable('Doctors', {
      doctor_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        // defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false
      },
      doctor_number: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue() {
          return generateNumber('00', 8);
        }
      },
      role_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        defaultValue: 2,
        onDelete: 'SET DEFAULT',
        onUpdate: 'CASCADE',
        references: {
          model: 'Roles',
          key: 'role_id',
          as: 'Role'
        }
      },
      first_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      last_name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      email: {
        type: Sequelize.STRING,
        validate: {
          isEmail: true
        },
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false
      },
      isVerified: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      picture: {
        type: Sequelize.STRING,
        defaultValue:
          'https://s.pngkit.com/png/small/128-1280585_user-icon-fa-fa-user-circle.png',
        allowNull: true
      },
      phone_number: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      id_number: {
        type: Sequelize.BIGINT,
        allowNull: true
      },
      gender: {
        type: Sequelize.ENUM('male', 'female'),
        allowNull: true
      },
      birth_date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      marital_status: {
        type: Sequelize.STRING,
        allowNull: true
      },
      experience_years: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      cost_per_appointment: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      salary: {
        type: Sequelize.STRING,
        allowNull: true
      },
      education: {
        type: Sequelize.STRING,
        allowNull: true
      },
      category: {
        type: Sequelize.STRING,
        allowNull: true
      },
      about: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Doctors');
  }
};
