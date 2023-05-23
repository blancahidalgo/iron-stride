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
      allowNull: true,
    },
    time:{ //stored in sec, then formatted as a user friendly time by js function
      type: DataTypes.INTEGER,
      allowNull: true,
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
      allowNull: false,
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
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
  {
    sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'workout',
  }
)


module.exports = Workout;