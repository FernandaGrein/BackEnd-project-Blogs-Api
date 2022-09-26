module.exports = (sequelize, DataTypes) => {
  const postCategorySchema = sequelize.define('PostCategory', {
    postId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, },
    categoryId: { type: DataTypes.INTEGER, foreignKey: true, primaryKey: true, },
  }, 
  {
    timestamps: false,
    tableName: 'posts_categories',
    underscored: true,
  });
  postCategorySchema.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogPosts', 
      through: postCategorySchema,
      foreignKey: 'postId',
      otherKey: 'categoryId',
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'category', 
      through: postCategorySchema,
      foreignKey: 'categoryId',
      otherKey: 'postId',
    });
  }
  return postCategorySchema
}

