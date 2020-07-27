
export default function(sequelize, DataTypes: any) {
    const resourceGroup = sequelize.define(
        'resourceGroup',
        {
            id: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
                field: 'id',
            },
            name: {
                type: DataTypes.STRING(160),
                allowNull: true,
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
            tableName: 'reource_group',
            updatedAt: 'modifiedDate',
            deletedAt: 'deletedDate',
            createdAt: 'createdDate',
            timestamps: true,
            paranoid: true,
        },
    );

    resourceGroup.associate = models => {
        // models.resourceGroup.hasMany(models.resource, { as: 'resources', foreignKey: 'resource_group_id' });
    };

    return resourceGroup;
}


