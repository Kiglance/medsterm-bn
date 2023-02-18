'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    static associate(models) {
      this.hasMany(models.Work_Day, {
        foreignKey: 'schedule_id',
        onDelete: 'CASCADE',
        as: 'work_days'
      });

      this.belongsTo(models.Doctor, {
        foreignKey: {
          name: 'doctor_id',
          allowNull: true
        },
        onDelete: 'CASCADE',
        as: 'doctor'
      });
    }
  }
  Schedule.init(
    {
      schedule_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      doctor_id: {
        type: DataTypes.UUID
      },
      start_date: {
        type: DataTypes.DATE,
        allowNull: false
      },
      end_date: {
        type: DataTypes.DATE,
        allowNull: false
      }
    },
    {
      sequelize,
      modelName: 'Schedule'
    }
  );
  return Schedule;
};
