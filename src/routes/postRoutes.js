const express = require('express');
// const { validateCategorySchema } = require('../middlewares/validateSchemas');
const postController = require('../controllers/postController');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', tokenValidation, postController.createPost);

module.exports = routers;