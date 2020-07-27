
export default function(sequelize, DataTypes: any) {
    const people = sequelize.define(
        'people',
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
            phone: {
                type: DataTypes.STRING(20),
                allowNull: true,
                field: 'phone',
            },
            email: {
                type: DataTypes.STRING(150),
                allowNull: true,
                field: 'email',
            },
            cpf: {
                type: DataTypes.STRING(20),
                allowNull: true,
                field: 'cpf',
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
            tableName: 'people',
            updatedAt: 'modifiedDate',
            deletedAt: 'deletedDate',
            createdAt: 'createdDate',
            timestamps: true,
            paranoid: true,
        },
    );

    people.associate = models => {

    };

    return people;
}


