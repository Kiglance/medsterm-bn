'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    static associate(models) {}
  }
  Day.init(
    {
      day_name: DataTypes.STRING
    },
    {
      sequelize,
      modelName: 'Day'
    }
  );
  return Day;
};
