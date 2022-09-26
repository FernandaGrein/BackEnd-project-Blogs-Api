const categoriesServices = require('../services/categoriesServices');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoriesServices.createCategory(name);

  if (newCategory.type) {
    return res.status(newCategory.type).json({ message: newCategory.message });
  }
  return res.status(201).json(newCategory.message);
};

module.exports = {
    createCategory,
};