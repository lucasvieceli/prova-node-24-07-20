'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'email',
        {
          id: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
            field: 'id',
          },
          title: {
            type: Sequelize.DataTypes.STRING(250),
            allowNull: true,
            field: 'title',
          },
          from: {
            type: Sequelize.DataTypes.STRING(300),
            allowNull: true,
            field: 'from',
          },
          to: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false,
            field: 'to',
          },
          createdDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            field: 'created_date',
          },
          dateSend: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
            field: 'date_send',
          },
          modifiedDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: false,
            field: 'modified_date',
          },
          deletedDate: {
            type: Sequelize.DataTypes.DATE,
            allowNull: true,
            field: 'deleted_date',
          },
          body: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: true,
            field: 'body',
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
    await queryInterface.dropTable('email');
    return true;
  }
};
