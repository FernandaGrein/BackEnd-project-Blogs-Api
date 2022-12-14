const { Category } = require('../models');

const createCategory = async (name) => {
  try {
   const newid = await Category.create({ name });

   return { type: null, message: newid.dataValues };
  } catch (error) {
    return { type: 500, message: error.message };
  }
};

const getAllCategories = async () => {
  try {
    const categories = await Category.findAll({});
    return { type: null, message: categories };  
  } catch (error) {
    return { type: 500, message: error.message };   
  }
};

module.exports = {
    createCategory,
    getAllCategories,
};