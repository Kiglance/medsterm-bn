'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recommendation extends Model {
    static associate(models) {
      this.belongsTo(models.Appointment, {
        foreignKey: {
          name: 'appointment_id',
          allowNull: true
        },
        onDelete: 'CASCADE',
        as: 'appointment'
      });
    }
  }
  Recommendation.init(
    {
      recommendation_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      appointment_id: {
        type: DataTypes.UUID
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
