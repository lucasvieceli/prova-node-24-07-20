'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'role_resource',
        {
          id: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
            field: 'id',
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
          roleId: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            field: 'role_id',
            references: {
              model: 'role',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
          },
          resourceId: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            field: 'resource_id',
            references: {
              model: 'resource',
              key: 'id'
            },
            onUpdate: 'CASCADE',
            onDelete: 'CASCADE',
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
    await queryInterface.dropTable('role_resource');
    return true;
  }
};
