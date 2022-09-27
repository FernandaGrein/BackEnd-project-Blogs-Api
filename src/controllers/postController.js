const postServices = require('../services/postServices');

const createPost = async (req, res) => {
  const userEmail = req.user;
  
  const { title, content, categoryIds } = req.body;

  const newPost = await postServices.createPost(userEmail, title, content, categoryIds);

  if (newPost.type) {
    return res.status(newPost.type).json({ message: newPost.message });
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

const getAllposts = async (req, res) => {
  const allPosts = await postServices.getAllPosts();
  return res.status(200).json(allPosts);
};

const getPostById = async (req, res) => {
  const { id } = req.params;

  const post = await postServices.getPostBydId(id);
  if (post === null) { 
    return res.status(404).json({ message: 'Post does not exist' });
   }
  return res.status(200).json(post);
};

const editPost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const userEmail = req.user;

  const newPost = await postServices.editPost(title, content, userEmail, id);

  if (newPost.type) {
    return res.status(newPost.type).json({ message: newPost.message });
  }
  return res.status(200).json(newPost.message);
};

module.exports = {
  createPost,
  getAllposts,
  getPostById,
  editPost,
};