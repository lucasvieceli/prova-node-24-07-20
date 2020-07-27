'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('configuration_type',[
      {
        id: '5c0bb408-a275-11ea-9229-0242ac1b0002',
        name: 'system',
        createdDate: new Date(),
        modifiedDate: new Date(),
      }
    ]);

    return true;
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('configuration_type', {id: '5c0bb408-a275-11ea-9229-0242ac1b0002'});

    return true;
  }
};
