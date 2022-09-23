const { User } = require('../models');
const { validateLoginSchema, validatesUserExistence } = require('../validation/validations');

const getAllUser = () => User.findAll({});

const findUserByemail = (email) => User.findAll({
    where: { email },
  });

const validadeLogin = async (body) => {
  const userByEmail = await findUserByemail(body.email);

  const requiredValidate = validateLoginSchema(body.email, body.password);
    if (requiredValidate) return requiredValidate;

  const existenceValidate = validatesUserExistence(body.email, body.password, userByEmail);
    if (existenceValidate) return existenceValidate;
};

module.exports = {
    getAllUser,
    validadeLogin,
};