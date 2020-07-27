
export default function(sequelize, DataTypes: any) {
    const user = sequelize.define(
        'user',
        {
            id: {
                type: DataTypes.STRING(36),
                allowNull: false,
                primaryKey: true,
                field: 'id',
            },
            username: {
                type: DataTypes.STRING(150),
                allowNull: false,
                field: 'username',
            },
            token: {
                type: DataTypes.STRING(60),
                allowNull: true,
                field: 'token',
            },
            password: {
                type: DataTypes.STRING(60),
                allowNull: false,
                field: 'password',
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
            peopleId: {
                type: DataTypes.STRING(36),
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
            tableName: 'user',
            updatedAt: 'modifiedDate',
            deletedAt: 'deletedDate',
            createdAt: 'createdDate',
            timestamps: true,
            paranoid: true,
        },
    );

    user.associate = models => {

        // models.user.belongsTo(models.people, { as: 'people', foreignKey: 'peopleId', targetKey: 'id' })

    };

    return user;
}


