
export default function(sequelize, DataTypes: any) {
    const resource = sequelize.define(
        'recource',
        {
            id: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
                field: 'id',
            },
            name: {
                type: DataTypes.STRING(100),
                allowNull: true,
                field: 'name',
            },
            key: {
                type: DataTypes.STRING(50),
                allowNull: true,
                field: 'key',
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
            resourceGroupId: {
                type: DataTypes.STRING(36),
                allowNull: false,
                field: 'resource_group_id',
                references: {
                    model: 'resource_group',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE',
            },
        },
        {
            tableName: 'reource',
            updatedAt: 'modifiedDate',
            deletedAt: 'deletedDate',
            createdAt: 'createdDate',
            timestamps: true,
            paranoid: true,
        },
    );

    resource.associate = models => {
        // console.log(models.resource)
        // models.resource.belongsTo(models.resourceGroup, {
        //     as: 'resourceGroup',
        //     foreignKey: 'resourceGroupId',
        //     targetKey: 'id',
        // });
        // models.resource.belongsToMany(models.role, {
        //     as: 'roles',
        //     through: 'role_resource',
        //     foreignKey: 'resource_id',
        // });
    };

    return resource;
}


