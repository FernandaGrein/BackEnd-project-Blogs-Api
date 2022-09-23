module.exports = (sequelize, DataTypes) => {
  const userSchema = sequelize.define('User', {
    id: {
      allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, 
  {
    timestamps: false, 
    underscored: true, 
    tableName: 'users'
  });
  //   userSchema.associate = (models) => {
  //     userSchema.hasMany(models.blogPost)
  //   }
  return userSchema;
}