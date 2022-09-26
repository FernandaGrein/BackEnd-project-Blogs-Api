const schemas = require('./schemas');

const validateLoginSchema = (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;

  const validate = schemas.loginSchema.validate({ email, password });

  if (validate.error) {
    return res.status(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

const validateUserSchema = (req, res, next) => {
  const { displayName, email, password } = req.body;

  const validation = schemas.userSchema.validate({ displayName, email, password });
  
  if (validation.error) {
    return res.status(400).json({ message: validation.error.details[0].message });
  }
  next();
};

const validateCategorySchema = (req, res, next) => {
  const { name } = req.body;

  const validate = schemas.categorySchema.validate({ name });
  if (validate.error) {
    return res.status(400).json({ message: validate.error.details[0].message });
  }
  next();
};

module.exports = { 
  validateLoginSchema,
  validateUserSchema,
  validateCategorySchema,
};