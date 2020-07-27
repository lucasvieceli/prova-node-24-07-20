
export default function(sequelize, DataTypes: any) {
    const configuration = sequelize.define(
        'configuration',
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
            key: {
                type: DataTypes.STRING(150),
                allowNull: false,
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
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
                field: 'description',
            },
            value: {
                type: DataTypes.TEXT,
                allowNull: true,
                field: 'value',
            },
            configurationTypeId: {
                type: DataTypes.STRING(36),
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
            tableName: 'configuration',
            updatedAt: 'modifiedDate',
            deletedAt: 'deletedDate',
            createdAt: 'createdDate',
            timestamps: true,
            paranoid: true,
        },
    );

    configuration.associate = models => {


    };

    return configuration;
}


