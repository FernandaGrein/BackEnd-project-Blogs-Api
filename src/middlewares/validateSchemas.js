const schemas = require('./schemas');

const validateLoginSchema = (req, res, next) => {
  const { email } = req.body;
  const { password } = req.body;
  const validate = schemas.loginSchema.validate({ email, password });

  if (validate.error) {
    return res.body(400).json({ message: 'Some required fields are missing' });
  }
  next();
};

module.exports = { 
  validateLoginSchema,
};