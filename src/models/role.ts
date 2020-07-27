
export default function(sequelize, DataTypes: any) {
    const role = sequelize.define(
        'role',
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
            tableName: 'role',
            updatedAt: 'modifiedDate',
            deletedAt: 'deletedDate',
            createdAt: 'createdDate',
            timestamps: true,
            paranoid: true,
        },
    );

    role.associate = models => {
        // models.role.belongsToMany(models.resource, {
        //     as: 'resources',
        //     through: 'role_resource',
        //     foreignKey: 'role_id',
        // });
    };

    return role;
}


