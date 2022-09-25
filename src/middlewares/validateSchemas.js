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

  console.log('VALIDAÇÃO ', validation.error.details[0].message);
  
  if (validation.error) {
    return res.status(400).json({ message: validation.error.details[0].message });
  }
  next();
};

module.exports = { 
  validateLoginSchema,
  validateUserSchema,
};