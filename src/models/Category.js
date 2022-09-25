module.exports = (sequelize, DataTypes) => {
  const categorySchema = sequelize.define('Category', {
    id: {
      allowNull: false, autoIncrement: true, primaryKey: true, type: DataTypes.INTEGER
    },
    name: DataTypes.STRING,
  }, 
  {
    timestamps: false, 
    underscored: true, 
    tableName: 'categories'
  });
  //   categorySchema.associate = (models) => {
  //     categorySchema.hasMany(models.post)
  //   }
  return categorySchema;
}