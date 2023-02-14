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

      this.belongsTo(models.Client, {
        foreignKey: {
          name: 'client_id',
          allowNull: true
        },
        constraints: false,
        hooks: true,
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
      appointment_date: {
        type: DataTypes.STRING,
        allowNull: false
      },
      client_id: {
        type: DataTypes.UUID
      },
      doctor_id: {
        type: DataTypes.UUID
      },
      is_checked: {
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
