const jwt = require('jsonwebtoken');

const jwtConfig = {
  algorithm: 'HS256',
};

const TOKEN_SECRET = process.env.JWT_SECRET;

const generateToken = (payload) => jwt.sign(payload, TOKEN_SECRET, jwtConfig);

module.exports = {
  generateToken,
};
