const express = require('express');
const { validateLoginSchema } = require('../middlewares/validateSchemas');

const routers = express.Router();

routers.post('/', validateLoginSchema, 'controller.função');

module.exports = routers;