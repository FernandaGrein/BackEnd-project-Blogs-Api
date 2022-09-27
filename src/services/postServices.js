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

const getPostBydId = async (id) => BlogPost.findOne({
  where: { id },
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

const editPost = async (title, content, userEmail, id) => {
  const user = await findUserByemail(userEmail);
  const userId = user.dataValues.id;

  const originalPost = await getPostBydId(id);
  const postUserId = originalPost.user.id;
  if (originalPost === null) return { type: 404, message: 'Post does not exist' };
  if (userId !== postUserId) return { type: 401, message: 'Unauthorized user' };

  const result = await sequelize.transaction(async (t) => {
    const [updatePost] = await BlogPost.update({
      title, content },
      { where: { id } }, 
      { transaction: t });
    return updatePost;
  });
  if (result > 0) {
    const newPost = await getPostBydId(id);
    return { type: null, message: newPost };
  }
  return { type: 404, message: 'Post does not exist' };
};

module.exports = {
  createPost,
  findUserByemail,
  getAllPosts,
  getPostBydId,
  editPost,
};