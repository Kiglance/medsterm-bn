'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Drugs', {
      drug_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      appointment_id: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Appointments',
          key: 'appointment_id',
          as: 'appointment'
        }
      },
      drug_name: {
        type: Sequelize.STRING
      },
      dosage: {
        type: Sequelize.STRING
      },
      frequency_per_week: {
        type: Sequelize.STRING
      },
      frequency_per_day: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      start_date: {
        type: Sequelize.DATE
      },
      end_date: {
        type: Sequelize.DATE
      },
      explanation: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Drugs');
  }
};
