'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Appointment_Depts extends Model {
    static associate(models) {}
  }
  Appointment_Depts.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false
      },
      department_id: {
        type: DataTypes.UUID
      },
      doctor_id: {
        type: DataTypes.UUID
      }
    },
    {
      sequelize,
      modelName: 'Appointment_Depts'
    }
  );
  return Appointment_Depts;
};
