'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment_Dept extends Model {
    static associate(models) {}
  }
  Appointment_Dept.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      department_id: {
        type: DataTypes.UUID
      },
      appointment_id: {
        type: DataTypes.UUID
      }
    },
    {
      sequelize,
      modelName: 'Appointment_Dept'
    }
  );
  return Appointment_Dept;
};
