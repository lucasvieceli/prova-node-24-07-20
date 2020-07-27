
export default function(sequelize, DataTypes: any) {
    const email = sequelize.define(
        'email',
        {
            id: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
                field: 'id',
            },
            title: {
                type: DataTypes.STRING(250),
                allowNull: true,
                field: 'title',
            },
            from: {
                type: DataTypes.STRING(300),
                allowNull: true,
                field: 'from',
            },
            to: {
                type: DataTypes.TEXT,
                allowNull: false,
                field: 'to',
            },
            createdDate: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'created_date',
            },
            dateSend: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'date_send',
            },
            modifiedDate: {
                type: DataTypes.DATE,
                allowNull: false,
                field: 'modified_date',
            },
            deletedDate: {
                type: DataTypes.DATE,
                allowNull: true,
                field: 'deleted_date',
            },
            body: {
                type: DataTypes.TEXT,
                allowNull: true,
                field: 'body',
            },
        },
        {
            tableName: 'email',
            updatedAt: 'modifiedDate',
            deletedAt: 'deletedDate',
            createdAt: 'createdDate',
            timestamps: true,
            paranoid: true,
        },
    );

    email.associate = models => {
        // models.role.belongsToMany(models.resource, {
        //     as: 'resources',
        //     through: 'role_resource',
        //     foreignKey: 'role_id',
        // });
    };

    return email;
}


