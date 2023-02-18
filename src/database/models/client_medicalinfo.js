'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client_MedicalInfo extends Model {
    static associate(models) {}
  }
  Client_MedicalInfo.init(
    {
      _id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      client_id: {
        type: DataTypes.UUID
      },
      info_id: {
        type: DataTypes.UUID
      },
      description: {
        type: DataTypes.TEXT
      }
    },
    {
      sequelize,
      modelName: 'Client_MedicalInfo'
    }
  );
  return Client_MedicalInfo;
};
