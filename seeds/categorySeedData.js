const { Category } = require('../seeds');

const categoryData = [
  {
    "category_name": "Running",
  },
  {
    "category_name": "Swimming",
  },
  {
    "category_name": "Cycling",
  },
  {
    "category_name": "Yoga",
  },
  {
    "category_name": "Pilates",
  },
  {
    "category_name": "Hiking",
  },
  {
    "category_name": "Skydiving",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;


