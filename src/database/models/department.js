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

      this.belongsToMany(models.Appointment, {
        foreignKey: 'department_id',
        through: 'Appointment_Dept',
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
      speciality_name: {
        type: DataTypes.STRING
      },
      picture: {
        type: DataTypes.STRING,
        defaultValue:
          'https://www.pngkit.com/png/detail/135-1357744_medical-report-healthcare-description-policy-graph-medical-report.png'
      }
    },
    {
      sequelize,
      modelName: 'Department'
    }
  );
  return Department;
};
