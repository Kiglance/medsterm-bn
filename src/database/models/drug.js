'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
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
  Drug.init(
    {
      drug_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      appointment_id: {
        type: DataTypes.UUID
      },
      drug_name: {
        type: DataTypes.STRING
      },
      dosage: {
        type: DataTypes.STRING
      },
      frequency_per_week: {
        type: DataTypes.STRING
      },
      frequency_per_day: {
        type: DataTypes.STRING
      },
      duration: {
        type: DataTypes.STRING
      },
      start_date: {
        type: DataTypes.DATE
      },
      end_date: {
        type: DataTypes.DATE
      },
      explanation: {
        type: DataTypes.TEXT
      }
    },
    {
      sequelize,
      modelName: 'Drug'
    }
  );
  return Drug;
};
