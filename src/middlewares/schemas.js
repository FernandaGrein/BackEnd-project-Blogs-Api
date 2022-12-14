const Joi = require('joi');

const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': '"email" is required',
  }),
  password: Joi.string().required().messages({
    'string.empty': '"password" is required',
  }),
});

const userSchema = Joi.object({
  displayName: Joi.string().min(8).required().messages({
    'string.min': '"displayName" length must be at least 8 characters long',
  }),
  email: Joi.string().email().required().messages({
    'string.email': '"email" must be a valid email',
  }),
  password: Joi.string().required().min(6).messages({
    'string.min': '"password" length must be at least 6 characters long',
  }),
});

const categorySchema = Joi.object({
  name: Joi.string().required().messages({
    'any.required': '"name" is required',
  }),
});

const blogPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).required(),
});

const updatePostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
});

module.exports = {
  loginSchema, 
  userSchema,
  categorySchema,
  blogPostSchema,
  updatePostSchema,
};