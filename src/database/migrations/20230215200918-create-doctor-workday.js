'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Doctor_Workdays', {
      _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      doctor_id: {
        type: Sequelize.UUID
      },
      day_id: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Doctor_Workdays');
  }
};
