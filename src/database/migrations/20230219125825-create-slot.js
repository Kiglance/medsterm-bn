'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Slots', {
      slot_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: Sequelize.literal('uuid_generate_v4()'),
        allowNull: false
      },
      // _id: {
      //   type: Sequelize.UUID,
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      //   references: {
      //     model: 'Work_Days',
      //     key: '_id',
      //     as: 'work_day'
      //   }
      // },
      start_hour: {
        type: Sequelize.TIME
      },
      end_hour: {
        type: Sequelize.TIME
      },
      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
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
    await queryInterface.dropTable('Slots');
  }
};
