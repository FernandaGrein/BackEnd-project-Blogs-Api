const validatesUserExistence = (password, userByEmail) => {
  if (!userByEmail) {
    return { type: 400, message: 'Invalid fields' };
  }
  if (userByEmail.password !== password) {
    return { type: 400, message: 'Invalid fields' };
  }
};

module.exports = { 
  validatesUserExistence,
};