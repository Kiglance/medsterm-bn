'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Client_MedicalInfos', {
      _id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      client_id: {
        type: Sequelize.UUID
      },
      info_id: {
        type: Sequelize.UUID
      },
      description: {
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
    await queryInterface.dropTable('Client_MedicalInfos');
  }
};
