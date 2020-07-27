
export default function(sequelize, DataTypes: any) {
    const roleResource = sequelize.define(
        'roleResource',
        {
            id: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
                field: 'id',
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
            roleId: {
                type: DataTypes.STRING(36),
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
                type: DataTypes.STRING(36),
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
            tableName: 'role_reource',
            updatedAt: 'modifiedDate',
            deletedAt: 'deletedDate',
            createdAt: 'createdDate',
            timestamps: true,
            paranoid: true,
        },
    );

    roleResource.associate = models => {

    };

    return roleResource;
}


