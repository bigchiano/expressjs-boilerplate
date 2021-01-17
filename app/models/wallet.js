'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  
  wallet.init({
    userId: DataTypes.STRING,
    balance: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'wallet',
  });

  return wallet;
};