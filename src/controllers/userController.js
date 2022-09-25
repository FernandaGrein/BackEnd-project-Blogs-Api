const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  const userBody = req.body;

  const newUser = await userServices.createUser(userBody);

  if (newUser.type) {
    return res.status(newUser.type).json({ message: newUser.message });
  }
  return res.status(201).json({ token: newUser.message });
};

module.exports = {
    createUser,
};