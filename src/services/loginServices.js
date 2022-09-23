const { User } = require('../models');
const { validatesUserExistence } = require('../validation/validations');

const getAllUser = () => User.findAll({});

const findUserByemail = (email) => User.findAll({
  where: { email },
});

const validadeLogin = async (body) => {
  const userByEmail = await findUserByemail(body.email);

  const existenceValidate = validatesUserExistence(body.password, userByEmail);
  if (existenceValidate) return existenceValidate;
};

module.exports = {
  getAllUser,
  validadeLogin,
};