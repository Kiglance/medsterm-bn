'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slot extends Model {
    static associate(models) {
      // this.belongsTo(models.Work_Day, {
      //   foreignKey: {
      //     name: '_id',
      //     allowNull: true
      //   },
      //   onDelete: 'CASCADE',
      //   as: 'work_day'
      // });
      // this.hasOne(models.Appointment, {
      //   foreignKey: 'slot_id',
      //   onDelete: 'CASCADE',
      //   as: 'appointment'
      // });
    }
  }
  Slot.init(
    {
      slot_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      // _id: {
      //   type: DataTypes.UUID
      // },
      start_hour: {
        type: DataTypes.TIME
      },
      end_hour: {
        type: DataTypes.TIME
      },
      status: {
        type: DataTypes.ENUM('active', 'inactive')
      }
    },
    {
      sequelize,
      modelName: 'Slot'
    }
  );
  return Slot;
};
