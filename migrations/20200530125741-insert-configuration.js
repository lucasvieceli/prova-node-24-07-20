'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('role',[
      {
        id: 'ddadcce2-a275-11ea-9229-0242ac1b0002',
        name: 'Usuário Comum',
        createdDate: new Date(),
        modifiedDate: new Date(),
      }
    ]);
    await queryInterface.bulkInsert('configuration',[
      {
        id: 'c8593381-a275-11ea-9229-0242ac1b0002',
        name: 'ID perfil usuário comum',
        key: 'ID_USER_ROLE',
        value: 'ddadcce2-a275-11ea-9229-0242ac1b0002',
        configuration_type_id: '5c0bb408-a275-11ea-9229-0242ac1b0002',
        createdDate: new Date(),
        modifiedDate: new Date(),
      }
    ]);

    return true;
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('role', {id: 'ddadcce2-a275-11ea-9229-0242ac1b0002'});
    await queryInterface.bulkDelete('configuration', {id: 'c8593381-a275-11ea-9229-0242ac1b0002'});

    return true;
  }
};
