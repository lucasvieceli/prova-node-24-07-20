'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('user', 'token', {
      type: Sequelize.DataTypes.STRING(60),
      allowNull: true,
      field: 'token',
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('user', 'token')
  }
};
