'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('people', 'email', {
      type: Sequelize.DataTypes.STRING(150),
      allowNull: true,
      field: 'email',
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('people', 'email')
  }
};
