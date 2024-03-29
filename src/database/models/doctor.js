'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Doctor extends Model {
    static associate(models) {
      this.belongsTo(models.Role, {
        foreignKey: {
          name: 'role_id',
          allowNull: true
        },
        onDelete: 'SET DEFAULT',
        as: 'role'
      });

      this.hasMany(models.Appointment, {
        foreignKey: 'doctor_id',
        onDelete: 'CASCADE',
        as: 'appointments'
      });
    }
  }
  Doctor.init(
    {
      doctor_id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: true
      },
      role_id: {
        allowNull: true,
        type: DataTypes.INTEGER,
        defaultValue: 2,
        onDelete: 'SET DEFAULT',
        onUpdate: 'CASCADE',
        references: {
          model: 'Roles',
          key: 'role_id',
          as: 'role'
        }
      },
      first_name: {
        type: DataTypes.STRING
      },
      last_name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        },
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      },
      isVerified: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: true
      },
      picture: {
        type: DataTypes.STRING,
        defaultValue:
          'https://s.pngkit.com/png/small/128-1280585_user-icon-fa-fa-user-circle.png',
        allowNull: true
      },
      phone_number: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      id_number: {
        type: DataTypes.BIGINT,
        allowNull: true
      },
      gender: {
        type: DataTypes.ENUM('male', 'female'),
        allowNull: true
      },
      birth_date: {
        allowNull: true,
        type: DataTypes.DATE
      },
      marital_status: {
        type: DataTypes.STRING,
        allowNull: true
      },
      experience_years: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      speciality: {
        type: DataTypes.STRING,
        allowNull: true
      },
      cost_per_appointment: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      salary: {
        type: DataTypes.STRING,
        allowNull: true
      },
      department: {
        type: DataTypes.STRING,
        allowNull: true
      },
      education: {
        type: DataTypes.STRING,
        allowNull: true
      },
      about: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      sequelize,
      modelName: 'Doctor'
    }
  );
  return Doctor;
};
