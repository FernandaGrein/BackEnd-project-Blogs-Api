'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const blogPostTable = queryInterface.createTable('blog_posts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true, 
      },
      title: Sequelize.STRING,
      content: Sequelize.STRING,
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'users',
          Key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelet: 'CASCADE',
      },
      published: Sequelize.DATE,
      updated: Sequelize.DATE,  
    });
    return blogPostTable;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('blog_posts');
  }
};
