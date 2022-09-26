const postServices = require('../services/postServices');

const createPost = async (req, res) => {
  const userEmail = req.user;
  
  const { title, content, categoryIds } = req.body;

  const newPost = await postServices.createPost(userEmail, title, content, categoryIds);

  if (newPost.type) {
    res.status(newPost.type).json(newPost.message);
  }

  return res.status(201).json({
    id: newPost.message.id,
    title, 
    content, 
    userId: newPost.message.userId, 
    updated: newPost.message.updated, 
    published: newPost.message.published, 
  });
};

module.exports = {
  createPost,
};