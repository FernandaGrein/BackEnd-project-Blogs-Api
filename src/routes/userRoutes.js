const express = require('express');
const { validateUserSchema } = require('../middlewares/validateSchemas');
const userController = require('../controllers/userController');
const tokenValidation = require('../middlewares/tokenValidation');

const routers = express.Router();

routers.post('/', validateUserSchema, userController.createUser);
routers.get('/', tokenValidation, userController.getUsers);
routers.get('/:id', tokenValidation, userController.getUserById);
routers.delete('/me', tokenValidation, userController.deleteUser);

module.exports = routers;