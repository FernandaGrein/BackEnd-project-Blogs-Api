'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const PostCategories = queryInterface.createTable('posts_categories', { 
      post_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'blog_posts',
          Key: 'id',
        },
        onUpdate: 'CASCADE',
        onDelet: 'CASCADE',
        primaryKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'categories',
          Key: 'id', 
        },
        onUpdate: 'CASCADE',
        onDelet: 'CASCADE',
        primaryKey: true,
      }
    });
    return PostCategories;
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
