const schemas = require('./schemas');

const validateLoginSchema = (email, password) => {
  const validate = schemas.loginSchema.validate({ email, password });

  if (validate.error) {
    return { type: 400, message: 'Some required fields are missing' };
  }
  return null;
};

const validatesUserExistence = (email, password, userByEmail) => {
  if (userByEmail.leng                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  )

};

module.exports = {                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
  validateLoginSchema,
  validatesUserExistence,
};