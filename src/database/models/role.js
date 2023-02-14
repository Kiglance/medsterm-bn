'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    static associate(models) {
      this.hasMany(models.Doctor, {
        foreignKey: 'role_id',
        onDelete: 'SET DEFAULT',
        as: 'doctors'
      });
      this.hasMany(models.Client, {
        foreignKey: 'role_id',
        onDelete: 'SET DEFAULT',
        as: 'clients'
      });
    }
  }
  Role.init(
    {
      role: {
        type: DataTypes.ENUM('admin', 'doctor', 'client')
      }
    },
    {
      sequelize,
      modelName: 'Role'
    }
  );
  return Role;
};
