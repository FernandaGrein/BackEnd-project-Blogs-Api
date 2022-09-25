const express = require('express');
const { validateUserSchema } = require('../middlewares/validateSchemas');
const userController = require('../controllers/userController');

const routers = express.Router();

routers.post('/', validateUserSchema, userController.createUser);

module.exports = routers;