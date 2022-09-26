const express = require('express');
const { validateCategorySchema } = require('../middlewares/validateSchemas');
const categoriesController = require('../controllers/categoriesController');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', validateCategorySchema, tokenValidation, categoriesController.createCategory);

module.exports = routers;