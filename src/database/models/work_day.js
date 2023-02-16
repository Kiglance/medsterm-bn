'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work_Day extends Model {
    static associate(models) {
      this.belongsToMany(models.Doctor, {
        foreignKey: 'day_id',
        through: 'Doctor_Workday',
        as: 'available_doctors'
      });
    }
  }
  Work_Day.init(
    {
      day_name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Work_Day'
    }
  );
  return Work_Day;
};
