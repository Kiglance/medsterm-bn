'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Workday extends Model {
    static associate(models) {}
  }
  Doctor_Workday.init(
    {
      doctor_id: {
        type: DataTypes.UUID
      },
      day_id: {
        type: DataTypes.INTEGER
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
      modelName: 'Doctor_Workday'
    }
  );
  return Doctor_Workday;
};
