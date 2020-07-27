'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'user',
        {
          id: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
            field: 'id',
          },
          username: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false,
            field: 'username',
          },
          password: {
            type: Sequelize.DataTypes.STRING(60),
            allowNull: false,
            field: 'password',
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
          peopleId: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            field: 'people_id',
            references: {
              model: 'people',
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
    await queryInterface.dropTable('user');
    return true;
  }
};
