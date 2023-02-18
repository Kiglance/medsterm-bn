'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Medical_Info extends Model {
    static associate(models) {
      this.belongsToMany(models.Client, {
        foreignKey: 'info_id',
        through: 'Client_MedicalInfo',
        as: 'patients'
      });
    }
  }
  Medical_Info.init(
    {
      info_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      info_name: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      info_description: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Medical_Info'
    }
  );
  return Medical_Info;
};
