const { BlogPost, User, PostCategory, Category, sequelize } = require('../models');
const { validateCategoriesIds } = require('../utils/validations');

const findUserByemail = (email) => User.findOne({
    where: { email },
    attributes: { exclude: 'password' },
});

const getCategories = () => Category.findAll({
    attributes: { exclude: 'name' },
});

const createPost = async (userEmail, title, content, categoryIds) => {
  const allCategories = await getCategories();
  const idsFromDb = allCategories.map((item) => item.dataValues.id);
  
  const checkIds = await validateCategoriesIds(idsFromDb, categoryIds);
  const validation = checkIds.find((item) => item !== null);
  if (validation) return validation;
   
  const result = await sequelize.transaction(async (t) => {
    const user = await findUserByemail(userEmail);
    const userId = user.dataValues.id;

    const { dataValues } = await BlogPost.create({ title, content, userId }, 
        { transaction: t });
    
    const postList = categoryIds.map((categoryId) => ({ postId: dataValues.id, categoryId }));

    await PostCategory.bulkCreate(postList, { transaction: t });

    return { type: null, message: dataValues };
  });
  return result;
};

const getAllPosts = async () => BlogPost.findAll({
  include: [
    {
      model: User,
      as: 'user',
      attributes: { exclude: ['password'] },  
    },
    {
      model: Category,
      as: 'categories',
      through: { attributes: [] },
    },
  ],
});

module.exports = {
  createPost,
  findUserByemail,
  getAllPosts,
};