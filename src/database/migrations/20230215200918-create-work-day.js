'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Work_Days', {
      _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      schedule_id: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Schedules',
          key: 'schedule_id',
          as: 'schedule'
        }
      },
      day: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'inactive'
      },
      from: {
        type: Sequelize.TIME,
        defaultValue: '08:00'
      },
      to: {
        type: Sequelize.TIME,
        defaultValue: '18:00'
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
    await queryInterface.dropTable('Work_Days');
  }
};
