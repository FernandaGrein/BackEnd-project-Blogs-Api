const categoriesServices = require('../services/categoriesServices');

const createCategory = async (req, res) => {
  const { name } = req.body;

  const newCategory = await categoriesServices.createCategory(name);

  if (newCategory.type) {
    return res.status(newCategory.type).json({ message: newCategory.message });
  }
  return res.status(201).json(newCategory.message);
};

const getAllCategories = async (req, res) => {
  const categories = await categoriesServices.getAllCategories();

  if (categories.type) {
    return res.status(categories.type).json({ message: categories.message });
  }

  return res.status(200).json(categories.message);
};

module.exports = {
    createCategory,
    getAllCategories,
};