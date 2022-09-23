const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.email().required().messages({
    'string.empty': '"email" is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': '"email" is required',
  }),
});

module.exports = {
  loginSchema, 
};