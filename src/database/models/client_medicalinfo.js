'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client_MedicalInfo extends Model {
    static associate(models) {}
  }
  Client_MedicalInfo.init(
    {
      user_id: {
        type: DataTypes.UUID
      },
      info_id: {
        type: DataTypes.UUID
      }
    },
    {
      sequelize,
      modelName: 'Client_MedicalInfo'
    }
  );
  return Client_MedicalInfo;
};
