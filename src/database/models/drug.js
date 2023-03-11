'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drug extends Model {
    static associate(models) {}
  }
  Drug.init(
    {
      drug_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      drug_name: {
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: 'Drug'
    }
  );
  return Drug;
};
