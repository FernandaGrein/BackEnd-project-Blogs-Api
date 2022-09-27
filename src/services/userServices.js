const { User, sequelize } = require('../models');
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

const getUserById = async (id) => {
  try {
    const user = await User.findOne({
      where: { id },
      attributes: { exclude: 'password' },
    });
    if (!user) {
      return { type: 404, message: 'User does not exist' };  
    }
    return { type: null, message: user };  
  } catch (error) {
    return { type: 500, message: error.message };
  }
};

const deleteUser = async (userEmail) => {
  const user = await findUserByemail(userEmail);
  const { id } = user.dataValues;

  const result = await sequelize.transaction(async (t) => {
    const deleteResult = await User.destroy({ where: { id } }, 
      { transaction: t }); 

    if (deleteResult > 0) return { type: null };
    return { type: 404, message: 'Post does not exist' };
  });
  return result;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser,
};