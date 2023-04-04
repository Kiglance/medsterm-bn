'use strict';
const { Model } = require('sequelize');
const { generateNumber } = require('../../utils/generateNumber');
module.exports = (sequelize, DataTypes) => {
  class Appointment extends Model {
    static associate(models) {
      this.belongsToMany(models.Department, {
        foreignKey: 'appointment_id',
        through: 'Appointment_Dept',
        as: 'departments'
      });

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
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      appointment_number: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue() {
          return generateNumber('AP', 8);
        }
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
      appointment_period: {
        type: DataTypes.STRING
      },
      is_canceled: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      cancel_date: {
        type: DataTypes.DATE,
        allowNull: true
      },
      drugs: {
        type: DataTypes.STRING(2000),
        get() {
          const rawValue = this.getDataValue('drugs');
          return rawValue ? JSON.parse(rawValue) : JSON.parse('[]');
        },
        set(value) {
          this.setDataValue('drugs', JSON.stringify(value));
        }
      },
      recommendations: {
        type: DataTypes.STRING(1000),
        get() {
          const rawValue = this.getDataValue('recommendations');
          return rawValue ? JSON.parse(rawValue) : JSON.parse('[]');
        },
        set(value) {
          this.setDataValue('recommendations', JSON.stringify(value));
        }
      },
      complaints: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      diagnosis: {
        type: DataTypes.TEXT,
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
