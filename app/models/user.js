const user = (sequelize, DataTypes) =>
  sequelize.define(
    'user',
    {
      // Model attributes are defined here
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    }
  )

module.exports = user
