module.exports = (sequelize, DataTypes) => {
  const userSchema = sequelize.define('User', {
    id: {
      allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: { type: DataTypes.STRING,  allowNull: true},
  }, 
  {
    timestamps: false, 
    underscored: true, 
    tableName: 'users'
  });

  userSchema.associate = (models) => {
    userSchema.hasMany(models.BlogPost, {
      as: 'blogPosts',
      foreignKey: 'userId'
    })
  }
  return userSchema;
}