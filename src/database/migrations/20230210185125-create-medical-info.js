'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Medical_Infos', {
      info_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      info_name: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      info_description: {
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
    await queryInterface.dropTable('Medical_Infos');
  }
};
