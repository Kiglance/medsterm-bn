'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {}
  }
  Department.init(
    {
      department_name: {
        type: DataTypes.STRING
      },
      patient_visit: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Department'
    }
  );
  return Department;
};
