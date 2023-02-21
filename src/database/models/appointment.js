'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      this.belongsTo(models.Doctor, {
        foreignKey: {
          name: 'doctor_id',
          allowNull: true
        },
        onDelete: 'CASCADE',
        as: 'doctor'
      });

      this.belongsTo(models.Schedule, {
        foreignKey: {
          name: 'schedule_id',
          allowNull: true
        },
        onDelete: 'CASCADE',
        as: 'schedule'
      });

      this.belongsTo(models.Work_Day, {
        foreignKey: {
          name: '_id',
          allowNull: true
        },
        onDelete: 'CASCADE',
        as: 'work_day'
      });

      // this.belongsTo(models.Slot, {
      //   foreignKey: {
      //     name: 'slot_id',
      //     allowNull: true
      //   },
      //   onDelete: 'CASCADE',
      //   as: 'slot'
      // });

      this.belongsTo(models.Client, {
        foreignKey: {
          name: 'client_id',
          allowNull: true
        },
        onDelete: 'CASCADE',
        as: 'client'
      });
    }
  }
  Appointment.init(
    {
      appointment_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      client_id: {
        type: DataTypes.UUID
      },
      doctor_id: {
        type: DataTypes.UUID
      },
      schedule_id: {
        type: DataTypes.UUID
      },
      _id: {
        type: DataTypes.UUID
      },
      appointment_duration: {
        type: DataTypes.STRING
      },
      // slot_id: {
      //   type: DataTypes.UUID
      // },
      department: {
        type: DataTypes.STRING,
        allowNull: true
      },
      is_approved: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      is_canceled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      cancel_date: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Appointment'
    }
  );
  return Appointment;
};
