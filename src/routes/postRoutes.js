const express = require('express');
const { validateBlogPostSchema, validateUpdateSchema } = require('../middlewares/validateSchemas');
const postController = require('../controllers/postController');

const routers = express.Router();

routers.post('/', validateBlogPostSchema, postController.createPost);
routers.get('/', postController.getAllposts);
routers.get('/:id', postController.getPostById);
routers.put('/:id', validateUpdateSchema, postController.editPost);
routers.delete('/:id', postController.deletePost);

module.exports = routers;