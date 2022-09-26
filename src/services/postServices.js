const { BlogPost, User } = require('../models'); // PostCategory

const findUserByemail = (email) => User.findOne({
    where: { email },
    attributes: { exclude: 'password' },
});

const createPost = async (userEmail, title, content, categoryIds) => { 
  try {
    const user = await findUserByemail(userEmail);
    const userId = user.dataValues.id;

    const { dataValues } = await BlogPost.create({ title, content, userId, categoryIds });
   
    return { type: null, message: dataValues };
  } catch (error) {
    return { type: 500, message: error.message };
  }
};

module.exports = {
  createPost,
  findUserByemail,
};