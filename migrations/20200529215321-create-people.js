'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
        'people',
        {
          id: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
            field: 'id',
          },
          name: {
            type: Sequelize.DataTypes.STRING(160),
            allowNull: true,
            field: 'name',
          },
          phone: {
            type: Sequelize.DataTypes.STRING(20),
            allowNull: true,
            field: 'phone',
          },
          cpf: {
            type: Sequelize.DataTypes.STRING(20),
            allowNull: true,
            field: 'cpf',
          },
          createdDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            field: 'createdDate',
          },
          modifiedDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            field: 'modifiedDate',
          },
          deletedDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
            field: 'deletedDate',
          },
        },
        {
          engine: 'InnoDB',                     // default: 'InnoDB'
          charset: "utf8",
          collate: "utf8_general_ci",
          timestamps: false,
        }
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('people');
  }
};
