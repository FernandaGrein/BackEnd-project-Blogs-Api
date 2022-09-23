const express = require('express');
const { validateLoginSchema } = require('../middlewares/validateSchemas');
const loginController = require('../controllers/loginController');

const routers = express.Router();

routers.post('/', validateLoginSchema, loginController.loginUser);

module.exports = routers;