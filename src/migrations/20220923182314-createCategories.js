'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const categoriesTable = queryInterface.createTable('categories', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, 
      },
      name: Sequelize.STRING,
    });
    return categoriesTable
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('categories');
  }
};
