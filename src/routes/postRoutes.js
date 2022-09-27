const express = require('express');
const { validateBlogPostSchema } = require('../middlewares/validateSchemas');
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', tokenValidation, validateBlogPostSchema, postController.createPost);

module.exports = routers;