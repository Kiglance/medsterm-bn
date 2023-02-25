'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      this.belongsToMany(models.Doctor, {
        foreignKey: 'department_id',
        through: 'Doctor_Dept',
        as: 'doctors'
      });

      this.hasMany(models.Appointment, {
        foreignKey: 'department_id',
        onDelete: 'CASCADE',
        as: 'appointments'
      });
    }
  }
  Department.init(
    {
      department_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
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
