const { BlogPost, PostCategory } = require('../models');

const createPost = async (userId, title, content, categoryIds) => {
  try {
    const newPost = BlogPost.create({ title, content, userId, categoryIds }, 
    { include: [{ model: PostCategory, as: 'categoryIds' }] }); // categories
   
    console.log(newPost, 'NEWPOST NO SERVICE');
    return { type: null, message: newPost };
  } catch (error) {
    return { type: 500, message: error.message };
  }
};

module.exports = {
  createPost,
};