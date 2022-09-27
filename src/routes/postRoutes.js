const express = require('express');
const { validateBlogPostSchema, validateUpdateSchema } = require('../middlewares/validateSchemas');
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', tokenValidation, validateBlogPostSchema, postController.createPost);
routers.get('/', tokenValidation, postController.getAllposts);
routers.get('/:id', tokenValidation, postController.getPostById);
routers.put('/:id', tokenValidation, validateUpdateSchema, postController.editPost);

module.exports = routers;