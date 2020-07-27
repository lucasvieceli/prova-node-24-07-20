
export default function(sequelize, DataTypes: any) {
    const configurationType = sequelize.define(
        'configurationType',
        {
            id: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
                field: 'id',
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: false,
                field: 'name',
            },

            createdDate: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'createdDate',
            },
            modifiedDate: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'modifiedDate',
            },
            deletedDate: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'deletedDate',
            },
        },
        {
            tableName: 'user',
            updatedAt: 'modifiedDate',
            deletedAt: 'deletedDate',
            createdAt: 'createdDate',
            timestamps: true,
            paranoid: true,
        },
    );

    configurationType.associate = models => {

        // models.user.belongsTo(models.people, { as: 'people', foreignKey: 'peopleId', targetKey: 'id' })

    };

    return configurationType;
}


