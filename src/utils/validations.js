const validatesUserExistence = (password, userByEmail) => {
  if (!userByEmail) {
    return { type: 400, message: 'Invalid fields' };
  }
  if (userByEmail.password !== password) {
    return { type: 400, message: 'Invalid fields' };
  }
};

const validateCategoriesIds = async (allIds, bodyIds) => {
  const result = bodyIds.map((bodyId) => {
    const findId = allIds.find((item) => item === bodyId);
    if (findId === undefined) return { type: 400, message: '"categoryIds" not found' };
    return null; 
  });
  return result;
};

module.exports = { 
  validatesUserExistence,
  validateCategoriesIds,
};