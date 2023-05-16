const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workout extends Model{}

Workout.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    date:{
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    time:{
      type: DataTypes.TIME,
      allowNull: false,
    },
    distance:{
      type: DataTypes.DECIMAL,
      allowNull: true,
    },
    unit: {
      type: DataTypes.ENUM('km','m'),
      allowNull: true
    },
    calories: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    planned: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    category_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false
      }
    },
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
        unique: false
      }
    }
  },
),
{
  sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workout',
}

module.exports = Workout;