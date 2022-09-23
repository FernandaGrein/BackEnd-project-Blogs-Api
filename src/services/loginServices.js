const { User } = require('../models');
const { validatesUserExistence } = require('../utils/validations');
const { generateToken } = require('../utils/JWT');

const getAllUser = () => User.findAll({});

const findUserByemail = (email) => User.findOne({
  where: { email },
});

const validadeLogin = async (body) => {
  const userByEmail = await findUserByemail(body.email);

  const existenceValidate = validatesUserExistence(body.password, userByEmail);
  if (existenceValidate) return existenceValidate;

  const token = generateToken(body.email);
  return { type: null, message: token };
};

module.exports = {
  getAllUser,
  validadeLogin,
};