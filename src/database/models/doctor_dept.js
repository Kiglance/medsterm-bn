'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Doctor_Dept extends Model {
    static associate(models) {}
  }
  Doctor_Dept.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
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
      modelName: 'Doctor_Dept'
    }
  );
  return Doctor_Dept;
};
