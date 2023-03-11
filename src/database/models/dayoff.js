'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Dayoff extends Model {
    static associate(models) {
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
  Dayoff.init(
    {
      dayoff_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false
      },
      doctor_id: {
        type: DataTypes.UUID
      },
      dayoff_date: {
        type: DataTypes.DATE
      },
      description: {
        type: DataTypes.TEXT
      }
    },
    {
      sequelize,
      modelName: 'Dayoff'
    }
  );
  return Dayoff;
};
