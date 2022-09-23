const jwt = require('jsonwebtoken');

const jwtConfig = {
    algorithm: 'HS256',
};

const SECRET = process.env.TOKEN_SECRET;

const generateToken = (payload) => {
    jwt.sing(payload, SECRET, jwtConfig);
};

module.exports = {
  generateToken,
};