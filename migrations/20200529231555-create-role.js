'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'role',
        {
          id: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
            field: 'id',
          },
          name: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: true,
            field: 'name',
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

    return true;
  },

  down: async(queryInterface, Sequelize) => {
    await queryInterface.dropTable('role');
    return true;
  }
};
