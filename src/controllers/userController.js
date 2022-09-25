const userServices = require('../services/userServices');

const createUser = async (req, res) => {
  const userBody = req.body;

  const newUser = await userServices.createUser(userBody);

  if (newUser.type) {
    return res.status(newUser.type).json({ message: newUser.message });
  }
  return res.status(201).json({ token: newUser.message });
};

const getUsers = async (_req, res) => {
  const getAllUsers = await userServices.getUsers();

  if (getAllUsers.type) return res.status(getAllUsers.type).json({ message: getAllUsers.message });

  return res.status(200).json(getAllUsers.message);
};

module.exports = {
    createUser,
    getUsers,
};