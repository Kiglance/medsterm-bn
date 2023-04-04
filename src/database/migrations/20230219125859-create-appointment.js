'use strict';
const { generateNumber } = require('../../utils/generateNumber');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      appointment_id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false
      },
      appointment_number: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue() {
          return generateNumber('AP', 8);
        }
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
      _id: {
        type: Sequelize.UUID,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references: {
          model: 'Work_Days',
          key: '_id',
          as: 'work_day'
        }
      },
      appointment_period: {
        type: Sequelize.STRING
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
      drugs: {
        type: Sequelize.STRING(2000),
        get() {
          const rawValue = this.getDataValue('drugs');
          return rawValue ? JSON.parse(rawValue) : JSON.parse(`[]`);
        },
        set(value) {
          this.setDataValue('drugs', JSON.stringify(value));
        }
      },
      recommendations: {
        type: Sequelize.STRING(1000),
        get() {
          const rawValue = this.getDataValue('recommendations');
          return rawValue ? JSON.parse(rawValue) : JSON.parse(`[]`);
        },
        set(value) {
          this.setDataValue('recommendations', JSON.stringify(value));
        }
      },
      complaints: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      diagnosis: {
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
    await queryInterface.dropTable('Appointments');
  }
};
