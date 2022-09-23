const express = require('express');

const routers = express.Router();

routers.post('/', 'controller.função');

module.exports = routers;