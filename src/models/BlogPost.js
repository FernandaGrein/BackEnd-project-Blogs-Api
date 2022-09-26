module.exports = (sequelize, DataTypes) => {
  const blogPostSchema = sequelize.define('BlogPost', {
    id: {
      allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    published: { type: DataTypes.DATE, allowNull: false },
    updated: { type: DataTypes.DATE, allowNull: false }
  }, 
  { 
    createdAt: 'published',
    updatedAt: 'updated',
    timestamps: true, 
    underscored: true, 
    tableName: 'blog_posts'
  });

  blogPostSchema.associate = (models) => {
    blogPostSchema.belongsTo(models.User, {
      as: 'user', 
      foreignKey: 'userId' 
    })
  }
  return blogPostSchema;
}