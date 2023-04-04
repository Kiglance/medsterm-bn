'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vacation extends Model {
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
  Vacation.init(
    {
      vacation_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: true
      },
      doctor_id: {
        type: DataTypes.UUID
      },
      from_date: {
        type: DataTypes.DATE
      },
      to_date: {
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: 'Vacation'
    }
  );
  return Vacation;
};
