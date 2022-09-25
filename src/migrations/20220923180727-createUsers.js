'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const UserTable = queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, 
      },
      display_name: Sequelize.STRING,
      email: {
        type: Sequelize.STRING, 
        unique: true,
      },
      password: Sequelize.STRING,
      image: {type: Sequelize.STRING, allowNull: true}
    });

    return UserTable
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
