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

const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userServices.getUserById(id);

  if (user.type) return res.status(user.type).json({ message: user.message });

  return res.status(200).json(user.message);
};

const deleteUser = async (req, res) => {
  const userEmail = req.user;

  const removeUser = await userServices.deleteUser(userEmail);

  if (removeUser.type) {
    return res.status(removeUser.type).json({ message: removeUser.message });
  }
  return res.status(204).end();
};

module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUser,
};