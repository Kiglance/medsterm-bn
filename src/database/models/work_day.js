'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work_Day extends Model {
    static associate(models) {
      this.belongsTo(models.Schedule, {
        foreignKey: {
          name: 'schedule_id',
          allowNull: true
        },
        onDelete: 'CASCADE',
        as: 'schedule'
      });
    }
  }
  Work_Day.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      schedule_id: {
        type: DataTypes.UUID
      },
      day: {
        type: DataTypes.STRING
      },
      date: {
        type: DataTypes.DATE
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive'),
        defaultValue: 'inactive'
      },
      from: {
        type: DataTypes.TIME,
        defaultValue: '08:00'
      },
      to: {
        type: DataTypes.TIME,
        defaultValue: '18:00'
      }
    },
    {
      sequelize,
      modelName: 'Work_Day'
    }
  );
  return Work_Day;
};
