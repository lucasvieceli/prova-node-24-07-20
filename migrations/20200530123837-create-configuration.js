'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
        'configuration',
        {
          id: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            primaryKey: true,
            field: 'id',
          },
          name: {
            type: Sequelize.DataTypes.STRING(100),
            allowNull: false,
            field: 'name',
          },
          key: {
            type: Sequelize.DataTypes.STRING(150),
            allowNull: false,
            field: 'key',
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
          description: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: true,
            field: 'description',
          },
          value: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: true,
            field: 'value',
          },
          configurationTypeId: {
            type: Sequelize.DataTypes.STRING(36),
            allowNull: false,
            field: 'configuration_type_id',
            references: {
              model: 'configuration_type',
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
    await queryInterface.dropTable('configuration');
    return true;
  }
};
