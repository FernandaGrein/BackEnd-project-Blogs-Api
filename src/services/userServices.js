const { User } = require('../models');
const { generateToken } = require('../utils/JWT'); 

const findUserByemail = (email) => User.findOne({
    where: { email },
});

const createUser = async ({ displayName, email, password, image }) => {
  const searchEmail = await findUserByemail(email);
  if (searchEmail) return { type: 409, message: 'User already registered' };

  try {
    await User.create({ displayName, email, password, image });
    const token = generateToken(email);
    return { type: null, message: token };
  } catch (error) {
    return { type: 500, message: error.message };
  }
};

const getUsers = async () => {
  try {
    const user = await User.findAll({
      attributes: { exclude: 'password' },
    });
    return { type: null, message: user };  
  } catch (error) {
      return { type: 500, message: error.message };
  }
};

module.exports = {
  createUser,
  getUsers,
};