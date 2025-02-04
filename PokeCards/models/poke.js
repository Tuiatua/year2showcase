'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Poke extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Poke.init({
    name: DataTypes.STRING,
    colorone: DataTypes.STRING,
    colortwo: DataTypes.STRING,
    hp: DataTypes.INTEGER,
    element: DataTypes.STRING,
    picture: DataTypes.STRING,
    elementcostone: DataTypes.INTEGER,
    elementcosttwo: DataTypes.INTEGER,
    movenameone: DataTypes.STRING,
    movenametwo: DataTypes.STRING,
    dmgone: DataTypes.INTEGER,
    dmgtwo: DataTypes.INTEGER,
    elementw: DataTypes.STRING,
    elementr: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Poke',
    tableName: 'pokes',
    timestamps: false
  });
  return Poke;
};