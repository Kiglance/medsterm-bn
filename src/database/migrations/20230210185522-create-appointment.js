'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      appointment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      appointment_date: {
        type: Sequelize.STRING,
        allowNull: false
      },
      client_id: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Clients',
          key: 'client_id',
          as: 'client'
        }
      },
      doctor_id: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Doctors',
          key: 'doctor_id',
          as: 'doctor'
        }
      },
      is_checked: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      is_canceled: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      cancel_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('Appointments');
  }
};
