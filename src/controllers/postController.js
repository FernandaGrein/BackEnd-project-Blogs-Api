const { date } = require('joi');
const postServices = require('../services/postServices');

const createPost = async (req, res) => {
  const userId = req.user;
  console.log(userId, 'USERID CONTROLLER');
  const { title, content, categoryIds } = req.body;

  const newPost = await postServices.createPost(userId, title, content, categoryIds);

  if (newPost.type) {
    res.status(newPost.type).json(newPost.message);
  }

  return res.status(201).json({
    id: newPost.message,
    title, 
    content, 
    userId, 
    updated: date.now(),
    published: date.now(),
  });
};

module.exports = {
  createPost,
};