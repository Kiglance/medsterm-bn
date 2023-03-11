'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recommendation extends Model {
    static associate(models) {}
  }
  Recommendation.init(
    {
      recommendation_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      recommendation_name: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Recommendation'
    }
  );
  return Recommendation;
};
