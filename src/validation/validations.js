const validatesUserExistence = (password, userByEmail) => {
  if (userByEmail.length === 0) {
    return { type: 400, message: 'Invalid fields' };
  }
  if (userByEmail.password !== password) {
    return { type: 400, message: 'Invalid fields' };
  }
};

module.exports = { 
  validatesUserExistence,
};