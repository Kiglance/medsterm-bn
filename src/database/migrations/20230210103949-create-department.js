'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Departments', {
      department_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      department_name: {
        type: Sequelize.STRING
      },
      speciality_name: {
        type: Sequelize.STRING
      },
      picture: {
        type: Sequelize.STRING,
        defaultValue:
          'https://www.pngkit.com/png/detail/135-1357744_medical-report-healthcare-description-policy-graph-medical-report.png',
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
    await queryInterface.dropTable('Departments');
  }
};
