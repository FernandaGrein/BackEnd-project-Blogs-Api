const { User } = require('../models');
const { generateToken } = require('../utils/JWT'); 

const createUser = async ({ displayName, email, password, image }) => {
    console.log(displayName, email, password, image, 'SERVICES');
  try {
    await User.create({ displayName, email, password, image });
    const token = generateToken(email);
    return { type: null, message: token };
  } catch (error) {
    return { type: 500, message: error.message };
  }
};

module.exports = {
    createUser,
};