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
      appointment_duration: {
        type: Sequelize.STRING
      },
      // slot_id: {
      //   type: Sequelize.UUID,
      //   onDelete: 'CASCADE',
      //   onUpdate: 'CASCADE',
      //   references: {
      //     model: 'Slots',
      //     key: 'slot_id',
      //     as: 'slot'
      //   }
      // },
      department: {
        type: Sequelize.STRING,
        allowNull: true
      },
      is_approved: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      status: {
        type: Sequelize.ENUM('pending', 'approved', 'cancelled'),
        defaultValue: 'pending'
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
      cancel_reason: {
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
